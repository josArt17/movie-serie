const apiKey = import.meta.env.VITE_API_KEY;

export async function getGenderMovie(data){
    try {
        const url = new URL(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`);
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const {genres} = await response.json();

        const genre = genres.find(genre => genre.id === data);
        return genre ? genre.name : "Unknow";
        

    } catch (error) {
        console.log(error);
    }
}

export async function getGenderSerie(data){
    try {
        const url = new URL(`https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}`);
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const {genres} = await response.json();

        const genre = genres.find(genre => genre.id === data);
        return genre ? genre.name : "Unknow";
        

    } catch (error) {
        console.log(error);
    }
}