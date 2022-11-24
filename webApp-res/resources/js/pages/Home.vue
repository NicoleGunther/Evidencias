<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="col" style="margin-left: -5ch;">
          <echart ref="grafico" />
        </div>
        <el-divider />
        <div class="card">
          <div class="card-header">Datos consultados</div>
          <div class="card-body">
            <el-table :data="listaDatos" style="width: 100%" height="250">
              <el-table-column prop="unixtime" label="Unixtime" />
              <el-table-column prop="pft3" label="Pft3" />
              <el-table-column prop="thdprom" label="Thdprom" />
            </el-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, toRef } from "vue";
import { storeToRefs } from "pinia";
import { useDatosStore } from "../store/datos";
import echart from '../components/echart.vue'

const { listaDatos, option } = storeToRefs(useDatosStore());
const { Action_listar_datos } = useDatosStore();
const grafico = ref();

onMounted(() => {
  lanzarPeticion()
});

setInterval(lanzarPeticion, 300000);

function lanzarPeticion() {
  Action_listar_datos();
  grafico.value.graficar(option.value);
}
</script>


