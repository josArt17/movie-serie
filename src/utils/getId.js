export default function getId(param){
    const params = new URLSearchParams(window.location.search);
    const data = params.get(param);
    return data;
}