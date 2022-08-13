
<script context="module">


    export async function load({fetch}){
      const res = await fetch("https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=100&apikey=aec036f3dad3a18562564d8b5efa9e19")

       const screener = await res.json()
    
       if (res.ok){
        return {
            props:{
                screener
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
export let screener
</script>

<!-- LAYOUT -->
<slot/>

{#each screener as stock}
<div class="card">
<p>{stock.symbol}</p>
<p>{stock.companyName}</p>
</div>
{/each}



<!-- CSS -->
<style>

</style>