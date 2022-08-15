<script>
export let data

</script>

<table class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
    <thead class="text-md text-blue-500 uppercase bg-gray-50 dark:bg-green-200 dark:text-gray-400">
      <tr>
        <th>Coin</th>
        <th>Symbol</th>
        <th>Price</th>
        <th>Supply</th>
        <th>Popularity</th>
        <th>24 hour change</th>
        <button> +</button>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td class="">{data.name}</td>
        <td class="">{data.symbol}</td>
        <td class="">${data.priceUsd /.000001}</td>
        <td class="">{Math.round(data.supply) /.000001}</td>
        <td class=" ">{data.rank}</td>
        <td class=" ">{data.changePercent24Hr}</td>
      </tr>
    </tbody>
  </table>
<style>
    .card{
        width: 40vw;
        height: 10hv;
        display:flex;
        justify-content: space-between;
        background-color: theme('colors.blue.200');
        border-radius: theme('borderRadius.lg');
        padding: theme('spacing.6');
        box-shadow: theme('boxShadow.xl');
  
    }
</style>