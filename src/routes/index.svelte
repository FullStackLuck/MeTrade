<script context="module">
    export async function load({fetch}){
        const res = await fetch("https://financialmodelingprep.com/api/v3/search?query=AA&limit=10&exchange=NASDAQ&apikey=aec036f3dad3a18562564d8b5efa9e19")
        
        const stocks = await res.json()
        
        if (res.ok){
            return {
                props:{
                    stocks
                }
            }
            
        }
        return {
            status: res.status,
            error: new Error('Could not fetch stock')
        }
    }



</script>



<script>

export let stocks

let searchTerm = ''


</script>
<slot/>

<input type="text" placeholder="Search Stock" bind:value={searchTerm}/>
<table class="table">
    <section></section>
    <div>
    <thead>
        <tr>
            <th>Symbol</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Trading On</th>
        </tr>
    </thead>
    <tbody>
        <tbody>
            {#each stocks as stock}
            <a href={stock.symbol}>
                <tr class=" is-link ">
                    <td>{stock.symbol}</td>
                    <td>{stock.name}</td>
                    <td>{stock.currency}</td>
                    <td>{stock.exchangeShortName}</td>
                </tr></a>
                {/each}
            </tbody>
        </table>
   

<div>
        <h1>Gainers</h1>
        <p>{stocks.name}</p>


</div>

    <div>
<h1>Losers</h1>
        </div>
