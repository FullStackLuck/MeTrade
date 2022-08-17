<script>
import {goto} from "$app/navigation"
import {supabase} from "../supabase.js";
import {user} from "../user_store";



let email =" "


    const signup = async ()=>{
        let { user: userDetails, error } = await supabase.auth.signUp({
            email: email,
            password: 'lFBostYZdhMEFmiBnNQe',
        });
        $user = userDetails
        alert("Check your email for the Login Link")
    }

    const login = async () => {
        let { user:userDetails, error } = await supabase.auth.signIn({
            email: email,
            password: 'lFBostYZdhMEFmiBnNQe'
        })
        $user = userDetails
        if (user){
            goto('/')
        }
        else{
            alert("You're not a user, sign up.")
        }
    }

</script>
<div class="bg-blue shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
    <div class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
        Email
      </label>
      <input bind:value={email} class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username">
    </div>
    <div class="flex items-left">
      <button on:click = {signup} class="bg-blue hover:bg-blue-dark text-black font-bold px-4 rounded" type="button">
        Sign Up
      </button>
      <!-- <button on:click = {login} class="bg-blue hover:bg-blue-dark text-black font-bold py-2 px-4 rounded" type="button">
        Sign In
      </button> -->
    </div>
</div>


<style>
    .login{
        margin-top: 160px;
        color: blue;
        display: block;
        position: relative;
        text-align: center;

    }
</style>