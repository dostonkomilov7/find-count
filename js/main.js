import {name} from "./filter.js";
export const container = document.querySelector(".container");
const input = document.querySelector(".input");
const dark_btn = document.querySelector(".dark");
const light_btn = document.querySelector(".light");

dark_btn.addEventListener("click", () => {
    light_btn.style.display = "block";
    dark_btn.style.display = "none";
})
light_btn.addEventListener("click", () => {
    light_btn.style.display = "none";
    dark_btn.style.display = "block";
})

input.addEventListener("keydown", async function fn(e) {
    if (e.key === "Enter" && input.value && input.value !== " "){
        if(container.innerHTML){
            container.innerHTML = ``;
        let input_content = input.value.trim().toLowerCase();
        let data = name(input_content);
        input.value = "";
    }
    }
})

export function getInfo(data) {
    const element = data[0];
    let formedPopulation = element.population.toLocaleString();
    container.innerHTML += `
        <div class="box">
            <img src="${element.flags.png}" alt="" class="flag">
            <div class="info">
                <h3 class="name">${element.name.official}</h3>
                <p class="pop"><b>Population:</b>${formedPopulation}</p>
                <p class="cont"><b>Region:</b>${element.region}</p>
                <p class="capital"><b>Capital:</b>${element.capital}</p>
            </div>
        </div>`

    container.addEventListener("click", () => {
        const back = document.querySelector(".exit")
        back.addEventListener("click", () => {
        })
    });
}
class NotFoundException extends Error {
    constructor(message) {
        super(message);
        this.name = "NOT FOUND EXCEPTION ERROR";
    }
}