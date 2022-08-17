
<!-- Nav Bar layout -->
<script>
    import "../app.css";
    import {supabase} from "../supabase.js";
    import {user} from "../user_store";
    import login from "./login.svelte";
    console.log(supabase)
    supabase

    const logOut = async()=>{

        let { error } = await supabase.auth.signOut();
        $user = false;
        goto("/login")
        
    }
    
</script>

<!-- <nav class="flex sm:justify-center space-x-6">
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
</nav> -->
<!-- Authentication Component (Might need to move to a single page)-->

<!-- Nav component -->
<footer>
    Data taken from CoinApi
</footer>

<slot></slot>

<style>
  
</style>