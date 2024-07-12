const french = document.querySelector("[data-french]")
const arabic = document.querySelector("[data-arabic]")
const english = document.querySelector("[data-english]")
const history = document.querySelector("[data-history]")
const svt = document.querySelector("[data-science]")
const Physics = document.querySelector("[data-physics]")
const art = document.querySelector("[data-art]")
const info = document.querySelector("[data-info]")
const sport = document.querySelector("[data-sport]")
const islam = document.querySelector("[data-islam]")
const maths = document.querySelector("[data-maths]")
const btn = document.querySelector("[data-btn]")
const note = document.querySelector("[data-note]")

const french_factor = 5
const arabic_factor = 5
const maths_factor = 5
const history_factor = 3
const svt_factor = 3
const phyics_factor = 2
const islam_factor = 2
const sport_factor = 2
const english_factor = 1
const art_factor = 1
const info_factor = 1

function total(array, factors) {
    let total = 0;
    let factor_total = 0
    for (let n = 0; n < factors.length; n++) {
        factor_total += factors[n]
    }
    for (let n = 0; n < array.length; n++) {
        if (is_empty(array[n])) {
            factor_total -= factors[n];
        } else {
            total += parseFloat(array[n].value) * factors[n];
        }
    }
    if (factor_total == 0) {
        return 0;
    }
    return total / factor_total;
}

function is_empty(element) {
    return element.value === "";
}

array = [french, arabic, english, history, svt, Physics, art, info, sport, islam, maths]
factors = [french_factor, arabic_factor, english_factor, history_factor, svt_factor, phyics_factor, art_factor, info_factor, sport_factor, islam_factor, maths_factor]
btn.addEventListener("click", () => {
    note.innerText = total(array, factors).toFixed(2)
})