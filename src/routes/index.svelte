
<script>
import {onMount} from "svelte"
import Card from "../components/Card.svelte";
import getCryptoData from "../api"



let cryptoData = [];
let searchValue = "";

async function searchCryptoData(){
    const res = await getCryptoData(searchValue);
    console.log(res)
    cryptoData = res.data;
}


 onMount(async ()=> {
    const res = await getCryptoData()
    console.log(res)
    cryptoData = res.data;

 });
</script>
<nav class="-m-20 mt-3 pb- -70 flex sm:justify-center space-x-6">
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
          <a href= "/nft"class="navbar-item">
                NFT Lab
            </a>
        </div>
</nav>

<center class=" p-20 pb-20">
<h1 class="text-3xl font-bold underline">
        To the Moon!
      </h1>
      <div>
        <img class="h-20 "src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/rocket.png" alt="">
      </div>
<input bind:value="{searchValue}" placeholder="Seach Coins" class="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"/>
<button on:click= {searchCryptoData}>Coins</button>
{#each cryptoData as crypto }
<Card data={crypto}/>
{/each}
</center>

