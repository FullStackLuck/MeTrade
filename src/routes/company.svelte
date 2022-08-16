<script>
import { onMount } from "svelte";
import { supabase } from "../supabase.js";

let stocks =  []
let newStock = ''
let  avatar, fileinput;

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
  const onFileSelected =(e)=>{
  let image = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e => {
                 avatar = e.target.result
            };
          }
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
<nav class="flex sm:justify-center space-x-6">
  <button>
  <a href= "/login"class="text-blue-500">
      Logout
  </a></button>

  <figure class="image is-128x128">
     <a href="/"> <img src="https://i.imgur.com/n63Q1Id.png" alt="logo"></a>
    </figure>
 
      <div class="navbar-brand">
          <a href="/" class="navbar-item">
              Coins
          </a>
        <a href= "/company"class="navbar-item">
              NFT Lab
          </a>
      </div>
</nav>
<button on:click={()=> addStocks(newStock)}>Create a Crypto Coin</button>
{#each stocks as stock}
<div class="grid grid-cols-4 gap-4 transition ease-in-out delay-150 bg-blue-600 hover:-translate-y-3 hover:scale-130 hover:bg-green-500 duration-200..." style="display: inline-block;">
  <div class="card-content">
      <div class="input_text">
        <input class="input" type="text" style="display: block;" placeholder="NFT Name" value={stock.company}
            on:input={(e)=>{
            stock.company = e.currentTarget.value
            updateStock(stock)
  }}>
  <div id="app">
        {#if avatar}
        <img class="avatar" src="{avatar}" alt="d" />
        {:else}
        <img class="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0oOkcCVPOM7rEMITh-VGz8umpnmu0rsLjfw&usqp=CAU"alt="" /> 
        {/if}
				<img class="upload" src="https://static.thenounproject.com/png/625182-200.png" alt="" on:click={()=>{fileinput.click();}} />
        <span class="chan" on:click={()=>{fileinput.click();}}></span>
        <input style="display:none" type="file" accept=".jpg, .jpeg, .png, gif" on:change={(e)=>onFileSelected(e)} bind:this={fileinput} >
</div>
  <div class="content">
        <input type="text" style="display: block;" placeholder="#Series" value={stock.symbol}
            on:input={(e)=>{
              stock.symbol = e.currentTarget.value
                updateStock(stock)
               
  }}>
      <input type="text" style="display: block;" placeholder="ETH Price" value={stock.sector}
            on:input={(e)=>{
              stock.sector = e.currentTarget.value
              updateStock(stock)
              }}>
      <input type="text" style="display: block;"  value={stock.price}
        on:input={(e)=>{
          stock.sector = e.currentTarget.value
          updateStock(stock)
        }}>

      <input type="text" style="display: block;" value={stock.exchange}
            on:input={(e)=>{
            stock.exchange = e.currentTarget.value
              updateStock(stock)    
  }}/>
  </div>
</div>
<button class="" on:click={()=>deleteStock(stock) }>Remove</button>
<button  class="" on:click={()=>updateStock(stock) }>Update</button>
</div>
</div>
{/each}

<style>
  .input{
    display: block;
    width: 180px;
    justify-items: center;
    background-image: url();
  }
  .input_text{
    justify-items: center;
   
  }

  .content{
    margin-top: 190px;
    justify-content: center;
  }
  #app{
	display:flex;
		align-items:center;
		justify-content:center;
		flex-flow:column;
    height: 70px;
}
 
	.upload{
		display:flex;
	height:10px;
		width:10px;
		cursor:pointer;
	}
	.avatar{
    margin-top: 200px;
		display:flex;
		height:200px;
		width:200px;
	}

</style>