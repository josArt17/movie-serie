import { renderContentFavorites, renderFullFavorites } from "../../utils/render";

export default class Favorites {
    constructor(key){
        this.key = key;
    }

    async userFavorites(parent){
        try {
            const localStorageData = localStorage.getItem(this.key);
            if (localStorageData) {
                const data = JSON.parse(localStorageData);
                renderContentFavorites(data, parent);
            } else {
                console.log("Nothing on favorites")
            }
        } catch (error) {
            
        }
    }

    async fullFavorites(parent){
        try {
            const localStorageData = localStorage.getItem(this.key);
            if (localStorageData) {
                const data = JSON.parse(localStorageData);
                renderFullFavorites(data, parent);
            } else {
                console.log("Nothing on favorites")
            }
        } catch (error) {
            
        }
    }
}