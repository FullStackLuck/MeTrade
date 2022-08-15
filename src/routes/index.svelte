
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


<center>
<h1 class="text-3xl font-bold underline">
        To the Moon!
      </h1>
<input bind:value="{searchValue}" placeholder="Seach Coins" class="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"/>
<button on:click= {searchCryptoData}>Coins</button>
{#each cryptoData as crypto }
<Card data={crypto}/>
{/each}
</center>

