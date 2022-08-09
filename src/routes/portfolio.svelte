<!-- JavaScript -->
<!-- Portfolio Page will show the date for all the stocks available -->
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
    let inputValue = ''
</script>

<!-- LAYOUT -->
<slot/>

<div class="control" >
    <input 
    class="input is-focused"
    bind:value={inputValue}
    type="text" 
    name="stocks"
    placeholder="Search Stocks" 
    id=""
    >
</div>
<div 
type="submit"
on:click={updateStocks}
class="">
</div>



<!-- CSS -->
<style>

</style>