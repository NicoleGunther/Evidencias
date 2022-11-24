<template>
  <div ref="grafica" class="grafico" />
</template>
<script setup>
import * as echarts from 'echarts';
import { ref } from 'vue'

const grafica = ref();

function graficar(option) {
  if (grafica.value !== null) {
    const echart = echarts.init(grafica.value)
    echart.setOption(option)
  }
}

defineExpose({
  graficar
});
</script>

<style>
.grafico {
  width: 1000px;
  height: 600px;
  text-align: center;
}
</style>
