import { favorites, checkFavorites } from "./favorites";

export function likeTitle(data){
    const button = document.querySelector("#buttonLike");
    let liked = checkFavorites(data);
    if (liked === true) {
        button.innerHTML = `<i class="fa-solid fa-heart"></i>`;
        button.classList.add('liked');
    }

    button.addEventListener('click', function(){
        if (button.innerHTML.includes("fa-regular")) {
            button.innerHTML = `<i class="fa-solid fa-heart"></i>`;
        } else {
            button.innerHTML = `<i class="fa-regular fa-heart"></i>`;
        }

        button.classList.toggle('liked');
        favorites(data);
    });

}