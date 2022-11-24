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
					unixtime.push(parseFloat(element.unixtime))
					pft3.push(parseFloat(element.pft3))
					thdprom.push(parseFloat(element.thdprom))
					cantidadDatos.push(index + 1)
				})

				this.option = {
					title: {
					  text: 'Grafica linear'
					},
					tooltip: {
					  trigger: 'axis'
					},
					legend: {
					  data: ['Unixtime', 'Pft3', 'Thdprom']
					},
					grid: {
					  left: '3%',
					  right: '4%',
					  bottom: '3%',
					  containLabel: true
					},
					toolbox: {
					  feature: {
						saveAsImage: {}
					  }
					},
					xAxis: {
					  type: 'category',
					  boundaryGap: false,
					  data: cantidadDatos
					},
					yAxis: {
					  type: 'value'
					},
					series: [
						{
							name: 'Unixtime',
							type: 'line',
							stack: 'Total',
							data: unixtime
						},
						{
							name: 'Pft3',
							type: 'line',
							stack: 'Total',
							data: pft3
						},
						{
							name: 'Thdprom',
							type: 'line',
							stack: 'Total',
							data: thdprom
						}
					]
				};

			}
		},
	},
});