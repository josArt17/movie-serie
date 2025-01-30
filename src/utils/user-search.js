export function getUserQuery(){
    const inputSearch = document.querySelector("#user-search");
    const buttonSearch = document.querySelector("#button-search");

    buttonSearch.addEventListener('click', function(){
        const userQuery = inputSearch.value.trim();
        if (userQuery === "") {
            window.alert("Introduce a name of a title first");
        } else {
            window.location.href = `/src/assets/full-content.html?query=${userQuery}`;
        }

    });
}