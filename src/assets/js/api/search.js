import { renderDeatils, renderFullContent } from "../../utils/render";
const searchUrl = import.meta.env.VITE_URL_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

export default class Search {
    constructor(query, id){
        this.query = query;
        this.id = id;
    }

    async getData() {
        try {
            const url = new URL(`${searchUrl}?query=${this.query}&api_key=${apiKey}`);
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            const data = await response.json();
            await renderDeatils(data, this.id);
        } catch (error) {
            
        }
    }

    async getFullData(parent){
        try {
            const url = new URL(`${searchUrl}?query=${this.query}&api_key=${apiKey}`);
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            const data = await response.json();
            await renderFullContent(data, parent);
        } catch (error) {
            console.log(error);
        }
    }
}