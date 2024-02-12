let bpi = {
    url: "https://api.coindesk.com/v1/bpi/currentprice.json",
    getData: function(){
        fetch(this.url)
        .then((response)=>response.json())
        .then((data)=>this.displayData(data));
    },
    displayData: (data) => {
        const dollar = {symbol:symbol, rate:rate} = data.bpi.USD;
        const pound = {symbol:symbol, rate:rate} = data.bpi.GBP;
        const euro = {symbol:symbol, rate:rate} = data.bpi.EUR;

        document.getElementById("usd").innerHTML = "Bitcoin Price in Dollars: "+dollar.symbol+dollar.rate;
        document.getElementById("gbp").innerHTML = "Bitcoin Price in Pound: "+pound.symbol+pound.rate;
        document.getElementById("eur").innerHTML = "Bitcoin Price in Euro: "+euro.symbol+euro.rate;

        
    }
}

const result = () => bpi.getData();

setInterval(result, 1000);