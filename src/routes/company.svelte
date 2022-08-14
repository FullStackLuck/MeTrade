<script>
import { onMount } from "svelte";
import { supabase } from "../supabase.js";

let stocks =  []
let newStock = ''

      onMount(async(stock) =>{
                await getAllStocks();
        });
            const getAllStocks = async () =>{
                try {
                  let {data, error } = await supabase.from('stocks').select('*')
                  stocks = data;

        } catch (err){
      console.log(err)
    }

  };
  // Add a new stock entry to list
            const addStocks = async (stock)=>{
                try {
            const { data, error } = await supabase
              .from('stocks')
              .insert([{company: stock.company, symbol: stock.symbol, sector: stock.sector, price: stock.price, exchange: stock.exchange}]);
                await getAllStocks();

        } catch (err){
      console.log(err)
    }
  };
            const readStock= async(stock)=>{
              try {
            let { data,stocks, error } = await supabase
            .from('stocks')
            .select("id",stock.id)
            await getAllStocks();
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
            .eq('id', stock.id);
            await getAllStocks();
    } catch (err){
      console.log(err)
    }
  };
// Delete function
const deleteStock = async (stock) =>{
    try {
      const { data, error } = await supabase
      .from('stocks')
      .delete()
      .eq('id', stock.id);
      await getAllStocks();
    } catch (err){
      console.log(err);
    }
  };
</script>
<button on:click={()=> addStocks(newStock)}>Add New Company to the Stock Market</button>
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
              updateStock(stock)

              }}>
        <input type="float" style="display: block;" value={stock.price}
       >
      <input type="text" style="display: block;" value={stock.exchange}
            on:input={(e)=>{
            stock.exchange = e.currentTarget.value
              updateStock(stock)
    
             
  }}/>
  <button class="button is-link" on:click={()=>deleteStock(stock) }>Remove</button>
  <button  class="button is-link" on:click={()=>updateStock(stock) }>Update</button>
  <button class="button is-link" on:click={()=>readStock(stock) }>View</button>
  </div>
</div>
{/each}

<style>
  .card{
    flex-direction: left ;
    margin-top: 20px;
    background-color: #485fc7;
    width: 200px;
  }

</style>