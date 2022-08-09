<script context="module">


export async function load({fetch}){
  const res = await fetch("https://financialmodelingprep.com/api/v3/stock/list?apikey=aec036f3dad3a18562564d8b5efa9e19")

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

</script>

<slot/>

<table class="table">

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
           <a href="/stocks">
            <tr class=" is-link ">
              <td>{stock.symbol}</td>
              <td>{stock.name}</td>
              <td>{stock.price}</td>
              <td>{stock.exchangeShortName}</td>
            </tr></a>
            {/each}
    </tbody>
    
</table>


<!-- <div class="market-data">

</div>

<div class="news">


</div> -->


