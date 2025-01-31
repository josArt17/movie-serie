import { getGenderMovie, getGenderSerie } from "./genders";
import { likeTitle } from "./like";

export async function renderContent(data, parent){
    const response = data.results.slice(0, 3);
    const urlImage = "https://image.tmdb.org/t/p/original";
   

    const htmlArray = await Promise.all(response.map(async (item) => {
      const genreNames = await Promise.all(item.genre_ids.map(id => getGenderMovie(id)));
      
      return `<a href="/details/details.html?id=${item.id}&query=${item.title}" class="result-container">
            <div class="resultPosterContainer"><img src="${urlImage}${item.backdrop_path}" alt="${item.title}"></div>
            <div class="resultDataContainer">
              <div class="infoContainer">
                <div class="infoText">
                  <h4>${item.title}</h4>
                  <span>${genreNames.join('-')}</span>
                </div>
              </div>
              <div class="interestContainer">
                <div>
                  <p>${item.popularity}</p>
                  <span>Fans number</span>
                </div>
                <div>
                  <p>${item.vote_count}</p>
                  <span>Number of votes</span>
                </div>
                <div>
                  <p>${item.vote_average}</p>
                  <span>Vote average</span>
                </div>
              </div>
            </div>
          </a>`
    }));

    parent.innerHTML = htmlArray.join('');
}

export async function renderContentSerie(data, parent){
  const response = data.results.slice(0, 3);
  const urlImage = "https://image.tmdb.org/t/p/original";

  const htmlArray = await Promise.all(response.map(async (item) => {
    const genreNames = await Promise.all(item.genre_ids.map(id => getGenderSerie(id)));
    
    return `<a href="/details/details.html?id=${item.id}&query=${item.name}" class="result-container">
          <div class="resultPosterContainer"><img src="${urlImage}${item.backdrop_path}" alt="${item.name}"></div>
          <div class="resultDataContainer">
            <div class="infoContainer">
              <div class="infoText">
                <h4>${item.name}</h4>
                <span>${genreNames.join('-')}</span>
              </div>
            </div>
            <div class="interestContainer">
              <div>
                <p>${item.popularity}</p>
                <span>Fans number</span>
              </div>
              <div>
                <p>${item.vote_count}</p>
                <span>Number of votes</span>
              </div>
              <div>
                <p>${item.vote_average}</p>
                <span>Vote average</span>
              </div>
            </div>
          </div>
        </a>`
  }));

  parent.innerHTML = htmlArray.join('');
}

export async function renderDeatils(data, id){
  const filterdResults = data.results.filter(item => item.id === parseInt(id));
  const urlImage = "https://image.tmdb.org/t/p/original";
  const parent = document.querySelector("#results");

  const htmlArray = await Promise.all(filterdResults.map(async (item) => {
    const genreNames = await Promise.all(item.genre_ids.map(id => getGenderSerie(id)));

    document.body.style.backgroundImage = `url(${urlImage}${item.backdrop_path})`;
    document.body.style.backgroundSize = "cover";
  
    if (item.name === undefined || item.name === null) {
      item.name = item.title;
    }
    return `
      <div class="container-name">
        <h1>${item.name}</h1>
      </div>
      <div class="container-gender">
        <p>${genreNames.join('-')}</p>
      </div>
      <div class="container-overview">
        <p>${item.overview}</p>
      </div>
      <div class="container-data-popularity">
        <div>
          <span>${item.popularity}</span>
          <p>Fans number</p>
        </div>
        <div>
          <span>${item.vote_count}</span>
          <p>Number of votes</p>
        </div>
        <div>
          <span>${item.vote_average}</span>
          <p>Vote average</p>
        </div>
      </div>
      <div class="container-button-like">
        <button id="buttonLike"><i class="fa-regular fa-heart"></i></button>
      </div>
    `;
  }));

  parent.innerHTML = htmlArray.join('');
  likeTitle(filterdResults);
}


export async function renderContentFavorites(data, parent) {
  const response = Array.isArray(data) ? data.slice(0, 3) : [];
  const urlImage = "https://image.tmdb.org/t/p/original";

  if (response.length === 0) {
    parent.innerHTML = "<p>Add some favorites titles first</p>";
    return;
  }

  const htmlArray = await Promise.all(response.map(async (itemArray) => {
    const item = itemArray[0];
    if (!item) return '';

    const genreIds = Array.isArray(item.genre_ids) ? item.genre_ids : [];
    const genreNames = await Promise.all(genreIds.map(id => getGenderMovie(id)));
    if (item.title === undefined || item.title === null) {
      item.title = item.name;
    }

    return `
      <a href="/details/details.html?id=${item.id}&query=${encodeURIComponent(item.title)}" class="result-container">
        <div class="resultPosterContainer">
          <img src="${urlImage}${item.backdrop_path}" alt="${item.title}">
        </div>
        <div class="resultDataContainer">
          <div class="infoContainer">
            <div class="infoText">
              <h4>${item.title}</h4>
              <span>${genreNames.join(' - ')}</span>
            </div>
          </div>
          <div class="interestContainer">
            <div>
              <p>${item.popularity}</p>
              <span>Fans number</span>
            </div>
            <div>
              <p>${item.vote_count}</p>
              <span>Number of votes</span>
            </div>
            <div>
              <p>${item.vote_average}</p>
              <span>Vote average</span>
            </div>
          </div>
        </div>
      </a>
    `;
  }));

  parent.innerHTML = htmlArray.join('');
}

export async function renderFullFavorites(data, parent) {
  const response = data;
  const urlImage = "https://image.tmdb.org/t/p/original";

  if (response.length === 0) {
    parent.innerHTML = "<p>Add some favorites titles first</p>";
    return;
  }

  const htmlArray = await Promise.all(response.map(async (itemArray) => {
    const item = itemArray[0];
    if (!item) return '';

    const genreIds = Array.isArray(item.genre_ids) ? item.genre_ids : [];
    const genreNames = await Promise.all(genreIds.map(id => getGenderMovie(id)));
    if (item.title === undefined || item.title === null) {
      item.title = item.name;
    }

    return `
      <a href="/details/details.html?id=${item.id}&query=${encodeURIComponent(item.title)}" class="result-container">
        <div class="resultPosterContainer">
          <img src="${urlImage}${item.backdrop_path}" alt="${item.title}">
        </div>
        <div class="resultDataContainer">
          <div class="infoContainer">
            <div class="infoText">
              <h4>${item.title}</h4>
              <span>${genreNames.join(' - ')}</span>
            </div>
          </div>
          <div class="interestContainer">
            <div>
              <p>${item.popularity}</p>
              <span>Fans number</span>
            </div>
            <div>
              <p>${item.vote_count}</p>
              <span>Number of votes</span>
            </div>
            <div>
              <p>${item.vote_average}</p>
              <span>Vote average</span>
            </div>
          </div>
        </div>
      </a>
    `;
  }));

  parent.innerHTML = htmlArray.join('');
}

export async function renderFullContent(data, parent) {
  const urlImage = "https://image.tmdb.org/t/p/original";

  if (!Array.isArray(data?.results)) {
    console.error(data);
    return;
  }

 
  const filteredResults = data.results.filter(item => item.media_type !== 'person' && item.backdrop_path !==null && item.poster_path !==null);

  if (filteredResults.length === 0) {
    parent.innerHTML = "<p>No data found</p>";
    return;
  }


  const htmlArray = await Promise.all(filteredResults.map(async (item) => {
  
    const genreIds = Array.isArray(item?.genre_ids) ? item.genre_ids : [];
    const genreNames = await Promise.all(genreIds.map(id => getGenderMovie(id)));


    const title = item.title || item.name || "Not available title";
    const background = item.backdrop_path || item.poster_path;

    return `
      <a href="/details/details.html?id=${item.id}&query=${title}" class="result-container">
        <div class="resultPosterContainer">
          <img src="${urlImage}${background}" alt="${title}">
        </div>
        <div class="resultDataContainer">
          <div class="infoContainer">
            <div class="infoText">
              <h4>${title}</h4>
              <span>${genreNames.join(' - ')}</span>
            </div>
          </div>
          <div class="interestContainer">
            <div>
              <p>${item.popularity}</p>
              <span>Fans number</span>
            </div>
            <div>
              <p>${item.vote_count}</p>
              <span>Number of votes</span>
            </div>
            <div>
              <p>${item.vote_average}</p>
              <span>Vote average</span>
            </div>
          </div>
        </div>
      </a>
    `;
  }));

  parent.innerHTML = htmlArray.join('');
}
