import axios from "axios";

export async function ListarDatos(payload) {
	return await axios.get('listar-datos');
}