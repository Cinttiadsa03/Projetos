const convertButton = document.querySelector(".convert-button")
const currencyselect = document.querySelector(".currency-select")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValuetoToConvert = document.querySelector(".currency-value-to-convert") 
    const currencyValueConverted = document.querySelector(".currency-value") 

    console.log(currencyselect.value)
    const dolarToday = 5.2
    const eurotoday = 6.2



    if (currencyselect.value == "dolar") { 
        //se o select estiver selecionado o valor de dolar,entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"

        }).format(inputCurrencyValue/ dolarToday)

    }
    if (currencyselect.value == "euro") {
         //se o select estiver selecionado o valor de euro,entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue/ eurotoday)
    }

    currencyValuetoToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    currencyValueConverted.innerHTML = convertedValue
           

}
function changecurrency() { 
const currencyName = document.getElementById("currency-name")
const currencyImage = document.querySelector(".currency-img")

if(currencyselect.value == "dolar"){
    currencyName.innerHTML = "dolar americano" 
    currencyImage.src ="./assets/dolar.png"
}

if(currencyselect.value== "euro"){
    currencyName.innerHTML= "Euro"  
    currencyImage.src = "./assets/euro.png"


}

convertValues()

}


currencyselect.addEventListener("change", changecurrency)
convertButton.addEventListener("click" , convertValues)