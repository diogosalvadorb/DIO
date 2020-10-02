//API KEY
let apikey = {
    key: '39459287-7ad7-4309-8fb7-6f02c1f00bba'
}

//GET Fetch Requisition
fetch(''https:'//pro-api.coinmarketcap.com/v1/cryptocurrency/map?   CMC_PRO_API_KEY=' + 
apikey.key)
    .then((response) => {
        if(!response.ok) throw new Error('Error ao executar a requisição, status' + response.status);
        return response.json();
    })

    .then((api) => {
        console.log(api);
    })

    .catch((error) => {
        console.error(error.message);
    })
