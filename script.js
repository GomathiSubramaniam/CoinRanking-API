var apikey = 'coinranking1df5108bdc7685a943866f9b7e545b86fee29665dfd00ca6'

async function api(){
    let res = await fetch(`https://api.coinranking.com/v2/coins`,{
        method : "GET",
        headers: {
            'Content-Type' : 'application/json',
            'x-access-token': `${apikey}`,
            'Access-Control-Allow-Origin' : '*'
          },
    })
    
    let result = await res.json()
    
    console.log(result.data.coins);

    let coinsData = result.data.coins
          
    if(coinsData.length > 0){
        var cryptoCoins = ""
    }
        coinsData.forEach((coins) => {
        cryptoCoins += "<tr>"
        cryptoCoins += `<td> ${coins.uuid} </td>`;
        cryptoCoins += `<td> ${coins.btcPrice} </td>`;
        cryptoCoins += `<td> ${coins.rank} </td>`;
        cryptoCoins += `<td> ${coins.tier} </td>`;
        cryptoCoins += `<td> ${coins.name} </td>`;
        cryptoCoins += `<td> ${Math.round(coins.price)} </td>`;
        cryptoCoins += `<td> ${coins.symbol} </td>`;"</tr>"; 
        
    })
    
   document.getElementById('data').innerHTML = cryptoCoins
    
    }
    
     

api();