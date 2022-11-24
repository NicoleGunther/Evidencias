import { defineStore } from 'pinia';
import { ListarDatos } from '../services/get-listar-datos';

export const useDatosStore = defineStore({
	id: 'datos',
	state: () => ({
		listaDatos: [],
		option: {},
	}),
	actions: {
		async Action_listar_datos() {
			const consulta = await ListarDatos();
			let unixtime = [];
			let pft3 = [];
			let thdprom = [];
			let cantidadDatos = [];
			if (consulta?.data.data) {
				this.listaDatos = consulta.data.data;
				this.listaDatos.forEach((element,index) => {
					unixtime.push(element.unixtime)
					pft3.push(element.pft3)
					thdprom.push(element.thdprom)
					cantidadDatos.push(index + 1)
				})

				this.option = {
					visualMap: [
						{
						  show: false,
						  type: 'continuous',
						  seriesIndex: 0,
						  min: 0,
						  max: 400
						},
						{
						  show: false,
						  type: 'continuous',
						  seriesIndex: 1,
						  dimension: 0,
						  min: 0,
						  max: 400
						}
					  ],
					  title: [
						{
						  left: 'center',
						  text: 'Medidas pft3'
						},
						{
						  top: '55%',
						  left: 'center',
						  text: 'Medidas thdprom'
						}
					  ],
					  tooltip: {
						trigger: 'axis'
					  },
					  xAxis: [
						{
							type: 'category',
					   		boundaryGap: false,
							data: unixtime
						},
						{
							type: 'category',
					   		boundaryGap: false,
							data: unixtime,
							gridIndex: 1
						}
					  ],
					  yAxis: [
						{
							type: 'value',
					   		boundaryGap: false,
							data: pft3
						},
						{
							type: 'value',
					   		boundaryGap: false,
							data: thdprom,
							gridIndex: 1
						}
					  ],
					  grid: [
						{
						  bottom: '60%'
						},
						{
						  top: '60%'
						}
					  ],
                      toolbox: {
                        feature: {
                          saveAsImage: {}
                        }
                      },
					  series: [
						{
						  type: 'line',
						  showSymbol: false,
						  name: 'Pft3',
						  stack: 'Total',
						  data: pft3
						},
						{
						  type: 'line',
						  showSymbol: false,
						  name: 'Thdprom',
						  stack: 'Total',
						  data: thdprom,
                          xAxisIndex: 1,
                          yAxisIndex: 1

						}
					  ]
					};

			}
		},
	},
});
