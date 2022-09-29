


import {
    Line
  } from 'vue-chartjs'
  
  export default {
    extends: Line,
    data () {
      return {
        options: {
          responsive: true,
          maintainAspectRatio: false,

          chartData: {
            labels: [ 'January', 'February', 'March'],
            datasets: [
              {
                label: 'Data One',
                backgroundColor: '#f87979',
                data: [40, 20, 12]
              }
            ]
          }

        }
      }
    },

    
    // mounted () {
    //   this.meas({
    //     labels: this.meas.map(entry => entry.unixtime),
    //     datasets: [{
    //       label: 'Results',
    //       data: this.meas.map(entry => entry.pft3)
    //     }]
    //   }, this.options)

      
    // }
  }