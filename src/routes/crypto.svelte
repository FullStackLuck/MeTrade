<script context="module">
    export async function load({fetch}){
        const res = await fetch("https://financialmodelingprep.com/api/v3/quotes/crypto?apikey=aec036f3dad3a18562564d8b5efa9e19")
        
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

{#each cryptos as crypto }
<h1>{crypto.symbol}</h1>

{/each}
<style>

</style>