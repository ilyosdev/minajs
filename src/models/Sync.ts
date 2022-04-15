import axios from "axios"

interface HasId {
	id?: number
}
//
export class Sync<T extends HasId> {
	constructor(public rootUrl: string) {}

	async fetch(id: number): Promise<T> {
		return axios.get(`${this.rootUrl}/${id}`)
	}

	async save(id: number, data: T): Promise<T> {
		if (id) {
			return await axios.put(`${this.rootUrl}/${id}`, data)
		} else {
			return await axios.post(`${this.rootUrl}`, data)
		}
	}
}
