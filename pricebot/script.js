async function getCryptoPrice() {
    let symbol = document.getElementById("cryptoSymbol")
    let pricedisplay = document.getElementById("pricedisplay")


    if (!symbol) {
        pricedisplay.textContent = "Please enter a cryptocurrency symbol!";
        return;
    }

    try {
        let response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=usd`);
        let data = await response.json()

        if (data[symbol.toLowerCase()]) {
            let price = data[symbol.toLowerCase()].usd
            pricedisplay.textContent = `Current Price of ${symbol}: $${price}`;
        } 
        else {
            pricedisplay.textContent = "Cryptocurrency not found!";
        }
    } catch (error) {
        pricedisplay.textContent = "Error fetching data. Please try again.";
        console.error("Error:", error);
    }
}