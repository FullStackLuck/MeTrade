
<!-- Nav Bar layout -->
<script>
    import {supabase} from "../supabase.js";
    console.log(supabase)
    supabase

</script>

<nav class="navbar is-link">
    <figure class="image is-128x128">
       <a href="/"> <img src="https://i.imgur.com/n63Q1Id.png" alt="logo"></a>
      </figure>
   
        <div class="navbar-brand">
            <a href="/portfolio" class="navbar-item">
                Stock Picker
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
    

</style>