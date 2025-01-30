import { renderContent, renderFullContent } from "../../utils/render";

export default class Movie {
    constructor(apiKey){
        this.apiKey = apiKey;
    }

    async nowPlaying(endPoint, parent){
        try {
            const url = new URL(`${endPoint}?api_key=${this.apiKey}`);
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            renderContent(await response.json(), parent);
        } catch (error) {
            
        }
    }

    async fullContent(endPoint, parent){
        try {
                const url = new URL(`${endPoint}?api_key=${this.apiKey}`);
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }
                renderFullContent(await response.json(), parent);
            } catch (error) {
                
        }
    }
}