let result = document.querySelector(".result")
let btn = document.querySelector(".btn")
let inp = document.querySelector(".inp")

let name = {
    PK: "Pakistan",
    IN: "India",
    AFG: "Afghanistan",
}

btn.addEventListener("click", async function() {
    let api = await fetch(`https://api.nationalize.io/?name=${inp.value}`)
    let data = await api.json()
    let countryData = data.country[0].country_id
    cname = name[countryData]
    result.innerText = countryData;
})
