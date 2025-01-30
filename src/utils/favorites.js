export function favorites(data){
    const dataString = JSON.stringify(data);

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const exists = favorites.some(item => JSON.stringify(item) === dataString);

    if (exists) {
        favorites = favorites.filter(item => JSON.stringify(item) !== dataString);
    } else {
        favorites.push(data);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
}

export function checkFavorites(data){
    const dataString = JSON.stringify(data);

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const exists = favorites.some(item => JSON.stringify(item) === dataString);

    if (exists) {
        return true;
    }
}
