<script>
import {user} from "../user_store"


        const logOut = async()=>{

            let { error } = await supabase.auth.signOut();
            $user = false;
            goto("/login")

}


</script>
<h3>Welcome {$user?.email ? $user.email : ""}</h3>
{#if $user.email}
<button><p class="switch" on:click={logOut} >Logout</p></button>
{/if}
<slot/>
<style></style>