<script context="module">
    export async function load({fetch}){
        const res = await fetch("https://api.coingecko.com/api/v3/coins/list")
        
        const cryptos = await res.json()
        
        if (res.ok){
            return {
                props:{
                    cryptos
                }
            }
            
        }
        return {
            status: res.status,
            error: new Error('Could not fetch crypto')
        }
    }

</script>



<script>
export let cryptos
</script>

<h1>Crypto to the moon
</h1>
<select name="" id="">
{#each cryptos as crypto }
<option>{crypto.name}</option>
{/each}
</select>
<style>
    h1{
        color: blue;

    }

</style>