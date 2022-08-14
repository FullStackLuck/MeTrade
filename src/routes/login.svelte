<script>
import {goto} from "$app/navigation"
import {supabase} from "../supabase.js";
import {user} from "../user_store";



let email =""


    const signup = async ()=>{
        let { user: userDetails, error } = await supabase.auth.signUp({
            email: email,
            password: 'lFBostYZdhMEFmiBnNQe',
        });
        $user = userDetails
        goto('/')
    }

    const login = async () => {
        let { user:userDetails, error } = await supabase.auth.signIn({
            email: email,
            password: 'lFBostYZdhMEFmiBnNQe'
        })
        $user = userDetails
        goto('/')
    }

</script>

<label class="login" for="">
    Email:
    <input bind:value={email} type="email" placeholder="email">
    <button on:click = {signup}>Sign Up</button>
    <button on:click = {login}>Login</button>
</label>


<style>
    .login{
        margin-top: 160px;
        color: blue;
        display: block;
        position: relative;
        text-align: center;

    }



</style>