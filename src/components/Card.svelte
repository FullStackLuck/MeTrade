<script>
export let data



</script>


<table class="table-fixed w-full text-sm text-left text-gray-500 dark:text-gray-100">
    <thead class="border-4 text-md text-left text-blue-500 uppercase bg-gray-50 dark:bg-green-300 dark:text-gray-100">
      <tr class="text-left">
        <th>Coin</th>
        <th>Symbol</th>
        <th>Price</th>
        <th>Supply</th>
        <th>Popularity</th>
        <th>24 hour change</th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td class="text-gray-200 transition ease-in-out delay-150 bg-black-600 hover:-translate-x-4 hover:scale-130 hover:bg-green-500 duration-200...">{data.name}</td>
        <td class="text-gray-200 transition ease-in-out delay-150 bg-black-600 hover:-translate-y-3 hover:scale-130 hover:bg-green-500 duration-200...">{data.symbol}</td>
        <td class="text-gray-200 transition ease-in-out delay-150 bg-black-600 hover:-translate-y-3 hover:scale-130 hover:bg-green-500 duration-200...">${(Math.round(data.priceUsd * 1000)/1000).toFixed(3)}</td>
        <td class="text-gray-200 transition ease-in-out delay-150 bg-black-600 hover:-translate-y-3 hover:scale-130 hover:bg-green-500 duration-200...">{data.supply * 100}</td>
        <td class="text-gray-200 transition ease-in-out delay-150 bg-black-600 hover:-translate-y-3 hover:scale-130 hover:bg-green-500 duration-200... ">{data.rank}</td>
        <td class="text-gray-200 transition ease-in-out delay-150 bg-black-600 hover:-translate-y-3 hover:scale-130 hover:bg-green-500 duration-200... ">{data.changePercent24Hr}</td>
      </tr>
    </tbody>
  </table>
<style>
</style>