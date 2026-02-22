import { getInfo, container } from "./main.js";
const select = document.querySelector(".filter");

export async function name(content){
    try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${content}`);
        if (!res.ok) {
            alert("‼️ DAVLAT TOPILMADI ‼️");
            throw new NotFoundException("DAVLAT TOPILMADI");
        }
        const data = await res.json();
        getInfo(data)
    } catch (error) {
        console.log(error);
    }
}

select.addEventListener("change", async function fl(e){
    if(container.innerHTML){
        container.innerHTML = ``;
    }
    const res = await fetch(`https://restcountries.com/v3.1/region/${e.target.value}`);
    const data = await res.json();
    data.forEach((element) => {
        console.log(element.name.common);
        name(element.name.common);
    });
})