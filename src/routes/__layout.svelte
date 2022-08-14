
<!-- Nav Bar layout -->
<script>
    import {supabase} from "../supabase.js";
    import {user} from "../user_store.js";
    import login from "./login.svelte";
    console.log(supabase)
    supabase

    const logOut = async()=>{

        let { error } = await supabase.auth.signOut();
        $user = false;
        goto("/login")
        
    }
    
</script>

<nav class="navbar is-link">
    <button>
    <a href= "/login"class="navbar-item">
        Logout
    </a></button>


    <figure class="image is-128x128">
       <a href="/"> <img src="https://i.imgur.com/n63Q1Id.png" alt="logo"></a>
      </figure>
   
        <div class="navbar-brand">
            <a href="/" class="navbar-item">
                Complete View
            </a>
            <a href="/watchlist" class="navbar-item">
                Watch List
            </a>
          <a href= "/company"class="navbar-item">
                Create A Company
            </a>
            <a href= "/crypto"class="navbar-item">
                Crypto
            </a>
            
        </div>
</nav>
<!-- Authentication Component (Might need to move to a single page)-->

<!-- Nav component -->


<slot></slot>

<style>
    body{
        background-color: black;
    }

</style>