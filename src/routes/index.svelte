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
let inputValue = " "
console.log(inputValue)

export let stocks
console.log(stocks)

async function updateStocks(){
    console.log(inputValue)
}



</script>
<slot/>
<nav>

</nav>

<select class="select" name="" id="">
    {#each stocks as stock}
   <option value="">
   <h1>{stock.name}</h1>
    {stock.price}
   </option>
    {/each}
</select>


<style>
    .select{
        display:flex
    }
</style>