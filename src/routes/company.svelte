<script>
import { onMount } from "svelte";
// import { addStocks } from "../stores/stocksStore.js";
import { supabase } from "../supabase.js";


let stocks =  []
let newStock = ''

onMount(async(stock) =>{
    let {data, error } = await supabase.from('stocks').select('*')
    stocks = data;

  })
  // Add a new stock entry to list
const addStocks = async (stock)=>{

    try {
      const { data, error } = await supabase
      .from('stocks')
      .insert([{ stock:stock },
  ])

    } catch (err){
      console.log(err)
    }
  };
// Static update of new stock
const updateStock = async (stock)=>{
    try {
      const { data, error } = await supabase
      .from('stocks')
      .update({ company: stock.company, symbol: stock.symbol, sector: stock.sector, price: stock.price, exchange: stock.exchange })
      .eq('id', stock.id)
    } catch (err){
      console.log(err)
    }
  };
// Delete function
const deleteStock = async (stock)=>{
    try {
      const { data, error } = await supabase
      .from('stocks')
      .delete()
      .eq('id', stock.id);
    } catch (err){
      console.log(err);
    }
  };
  
</script>
<div>
<form action="" ></form>
<input  type="text"  bind:value={newStock} placeholder="Company">
<input  type="text"  placeholder="Ticker Symbol">
<select name="Sector"  id="" placeholder="Sector">
  <!-- <input  type="" placeholder="Sector"> -->
  <option value="Information Technology">Information Technology</option>
  <option value="Healthcare">Healthcare</option>
  <option value="Industrial">Industrial</option>
  <option value="Energy">Energy</option>
  <option value="Materials">Materials</option>
  <option value="Utlities">Utlities</option>
  <option value="Financial">Financial</option>
  <option value="Consumer Discrtionary">Consumer Discrtionary</option>
  <option value="Consumer Staples">Consumer Staples</option>
  <option value="Information Technology">Real Estate</option>
  <option value="Information Technology">Communication Services</option>
</select>
  <input  type="number"  placeholder="Price">
  <input type=""  placeholder="Exchange">
  <button on:click={()=> addStocks(newStock)}>Add Stock</button>
</div>

{#each stocks as stock}
<div class="card" style="display: block;">
    <div class="card-content">
        <input type="text" style="display: block;" value={stock.company}
            on:input={(e)=>{
            stock.company = e.currentTarget.value
            updateStock(stock)
  }}>
        <input type="text" style="display: block;" value={stock.symbol}
            on:input={(e)=>{
              stock.symbol = e.currentTarget.value
                updateStock(stock)
  }}>
        <input type="text" style="display: block;" value={stock.sector}
            on:input={(e)=>{
              stock.sector = e.currentTarget.value
              updateStock(stock)}}>
        <input type="text" style="display: block;" value={stock.price}
            on:input={(e)=>{
              stock.price = e.currentTarget.value
                updateStock(stock)
  }}>
      <input type="text" style="display: block;" value={stock.exchange}
            on:input={(e)=>{
            stock.exchange = e.currentTarget.value
              updateStock(stock)
  }}/>
  <button on:click={()=>deleteStock(stock) }>Remove</button>
  </div>
</div>
{/each}






<style>
  .card{
    margin-top: 20px;
  }

</style>