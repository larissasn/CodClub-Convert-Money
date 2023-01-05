const button = document.getElementById('button-converter')
const select = document.getElementById('currency-select')

const dolar = 5.45
const euro = 5.76
const bitcoin = 91608.00

const convertValue = () => {

    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais)

    if (select.value === "US$ Dólar americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar)
    }

    if (select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / euro)
    }

    if (select.value === "Bitcoin") {
        currencyValueText.innerHTML = new Intl.NumberFormat('btc',
            { style: 'currency', currency: 'BTC' }
        ).format(inputReais / bitcoin)
    }
}


const changeCurrency = () => {

    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/img/euro.png"
    }
    if (select.value === 'US$ Dólar americano') {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/img/estados-unidos.png"
    }
    if (select.value === 'Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/img/bitcoin.png"
    }
    convertValue()
}

button.addEventListener('click', convertValue)
select.addEventListener('change', changeCurrency)