<script>
import {onMount} from "svelte";
import { supabase } from "../supabase";
import { createEventDispatcher } from 'svelte'

    let nft = [];
    let newNft = " "

export let path
export let size = '10em'

  let uploading = false
  let src
  let files,fileInput

  const dispatch = createEventDispatcher()

//Upload image 2
  async function uploadAvatar() {
    try {
      uploading = true

      if (!files || files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      const file = files[0]
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `${fileName}`
      console.log(file)
      let { error: uploadError } = await supabase.storage
        .from('nft-bucket')
        .upload(filePath, file)

      if (uploadError) throw uploadError

      path = filePath
      dispatch('upload')
    } catch (error) {
      alert(error.message)
    } finally {
      uploading = false
    }
  }

onMount(async ()=> {
    await getAllNft()
});

const addNewNft = async (nft) =>{
    try{  const { data, error } = await supabase
    .from('nft')
    .insert([
        { name:nft.name, series:nft.series, price:nft.price},])
        await getAllNft()
    } catch (err){
        console.log(err)
    }
};



const getAllNft = async () =>{
    try{
        let {data, error} = await supabase.from("nft").select("*")
        nft = data;
        console.table(nft);
    } catch (err) {
        
    }
};
const updateNft = async (nft) =>{
    try{  const { data, error } = await supabase
    .from('nft')
    .update({ name:nft.name, series:nft.series, price:nft.price})
    .eq("id", nft.id)
    await getAllNft()
} catch (err){
    console.log(err)
}
};

const deleteNft = async (nft) =>{    
    try{ const { data, error } = await supabase
    .from('nft')
    .delete()
    .eq('id', nft.id)
    await getAllNft()
} catch (err){
    console.log(err)
}
}
</script>
<main>
    <h1 class="mb-3 text-2xl font-bold text-center text-black-800 md:text-3xl">NFT LAB</h1>
</main>
<nav class="-m-20 -mb-5 mt-3 flex sm:justify-center space-x-3">
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
  <div class="">
    <!-- <input type="text" bind:value={newNft}> -->
    <button on:click={()=> addNewNft(newNft)}>Create NFT</button>
  </div>
{#each nft as crypto}
    <div class="content-center place-items-center grid m-3 max-w-sm text-center w-(40) bg-white rounded-lg border border-blue-200 shadow-md dark:bg-blue-300 dark:border-gray-100">

      <div class="container">
        <!-- {#if avatar}
        <img id="avatar" src={avatar} alt="avatar"/>
    {:else}
        <img id="avatar" src="avatar.png" alt="avatar"/>
      {/if} -->
        <input class="hidden" id="file-to-upload" type="file" accept=".png,.jpeg" bind:this={fileInput} />
        <button class="upload-btn" on:click={ () => fileInput.click() }>Upload</button>  
    </div>
      {#if path}
  <img
    {src}
    alt=""
    class="avatar image"
    style="height: {size}; width: {size};"
  />
  {:else}
  <div class="avatar no-image" style="height: {size}; width: {size};" />
  {/if}

  <div style=" w-20px width: {size};">
    <label class="button primary block" for="single">
      {uploading ? 'Uploading ...' : 'Upload'}
    </label>
    <input
      style="visibility: hidden; position:absolute;"
      type="file"
      id="single"
      accept="images/*"
      bind:files
      on:change="{uploadAvatar}"
      disabled="{uploading}"
    />
  </div>
        <div class="p-5"> <h1>Name</h1>
            <input class="text-center " type="text" placeholder="NFT Name" value={crypto.name} on:input={(e)=>{
                crypto.name = e.currentTarget.value;
                updateNft(crypto)
                
                }}/>
                <h1>Series</h1>
            <input class="text-center" type="text" placeholder="Series" value=#{crypto.series} on:input={(e)=>{
                crypto.series = e.currentTarget.value;
                updateNft(crypto)
                }}/>
            <h1>Price</h1>
            <input class="text-center" type="text" placeholder="Price"value=ETH:{crypto.price} on:input={(e)=>{
                crypto.price = e.currentTarget.value;
                updateNft(crypto)
                
                }}            
                />
        </div>
        <button>Update</button>
        <button on:click={()=> deleteNft(crypto)}>Delete</button>
    </div>
    {/each}

    <style>

    </style>