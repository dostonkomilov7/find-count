const start = document.querySelector(".start");
const input = document.querySelector(".input");
const button = document.querySelector(".find_btn");
const userList = document.querySelector(".info");
const flagImg = document.querySelector(".flag");
const countryName = document.querySelector(".name");
const continent = document.querySelector(".cont");
const population = document.querySelector(".pop");
const language = document.querySelector(".lang");
const currency = document.querySelector(".curr");

button.addEventListener("submit", fn);
async function fn() {
    start.textContent = "";
    let input_content = input.value.trim().toLowerCase();
    let link = `https://restcountries.com/v3.1/name/${input_content}`;
    try {
        const res = await fetch(link);
        
        
        if (!res.ok) {
            input.textContent = "";
            start.textContent = "ENTER COUNTRY";
            alert("‼️ DAVLAT TOPILMADI ‼️");
            
            throw new NotFoundException("DAVLAT TOPILMADI");
        }
        const data = await res.json();
        getInfo(data);
    } catch (error) {
        console.log(error);
    }
}
function getInfo(data) {
    const element = data[0];
    let slicedPopulation = new String(element.population);
    slicedPopulation = slicedPopulation.slice(0, 3);
    let rightLang = Object.values(element.languages);
    let rightCurr = Object.values(element.currencies).map((curren) => (curren.name));
    flagImg.src = element.flags.png;
    countryName.textContent = `${element.name.common}`;
    continent.textContent = `${element.continents}`;
    population.textContent = `👫 ${slicedPopulation.slice(0, 2)}.${slicedPopulation.slice(2)} people`;
    language.textContent = `🗣️ ${rightLang.join(", ")}`;
    currency.textContent = `💰 ${rightCurr.join(", ")}`;

}
class NotFoundException extends Error {
    constructor(message) {
        super(message);
        this.name = "NOT FOUND EXCEPTION ERROR";
    }
}