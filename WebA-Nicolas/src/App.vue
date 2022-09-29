<template>
  <div class="container p-5">
  <h1 class="text-center border-bottom pb-3 mb-3">Vue3 PostgreSQL LocalHost</h1>
  <demo-chart v-if="loaded" :chart-data="meas"> </demo-chart>
  <canvas id="DemoChart" ref="DemoChart" width="400" height="400"></canvas>
  <table class="table table-hover table-bordered mt-5">
     <thead>
       <tr>
         <th scope="col">unixtime</th>
         <th scope="col">pft3</th>
         <th scope="col">thdprom</th>
       </tr>
     </thead>
     <tbody>
      <tr v-for="m in meas" :key="m.unixtime">
         <td>{{m.unixtime}}</td>
         <td>{{m.pft3}}</td>
         <td>{{m.thdprom}}</td>
       </tr>    
     </tbody>
   </table>
   
   </div>

 </template>
 
 <script>
 window.alert(5 + 6);
 //importing bootstrap 5 and axios
 import "bootstrap/dist/css/bootstrap.min.css";
 import axios from 'axios'
 import DemoChart from './components/DemoChart'
 //call connection from file
 //import App from './services/connection'
 
 
 export default {
  name: 'App',
  components: {
    DemoChart
  },

   data(){
   return {
     meas:[],
     loaded: false
     }
   },

   mounted () {
    this.requestData()
  },
  methods: {
    requestData () {
      axios.get('http://150.136.7.153:5000/meas')
        .then(resp => {
          window.alert(resp);
          this.meas = resp.data;
          this.loaded = true
        })
    }
  }
 
  //  mounted () {
     //api caling
  //     axios.get('http://150.136.7.153:5000/meas')
  //      .then((resp) => {
  //        window.alert(resp);
  //        this.meas = resp.data;
  //      })
  //  },
 
 //Calling conection from another file
  /*mounted () {
     this.listar()
   },
   methods: {
     async listar(){
       const {resp} = await App.getConnection();
       console.log(resp);
     }
   },
  */
 }
 </script>