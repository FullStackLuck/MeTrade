<script>
export let data



</script>


<table class="table-fixed w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead class="border-4 text-md text-left text-blue-500 uppercase bg-gray-50 dark:bg-green-200 dark:text-gray-400">
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
        <td class="text-gray-800 transition ease-in-out delay-150 bg-black-600 hover:-translate-y-3 hover:scale-130 hover:bg-green-500 duration-200...">{data.name}</td>
        <td class="text-gray-800 transition ease-in-out delay-150 bg-black-600 hover:-translate-y-3 hover:scale-130 hover:bg-green-500 duration-200...">{data.symbol}</td>
        <td class="text-gray-800 transition ease-in-out delay-150 bg-black-600 hover:-translate-y-3 hover:scale-130 hover:bg-green-500 duration-200...">${data.priceUsd*10}</td>
        <td class="text-gray-800 transition ease-in-out delay-150 bg-black-600 hover:-translate-y-3 hover:scale-130 hover:bg-green-500 duration-200...">{Math.round(data.supply)*10}</td>
        <td class="text-gray-800 transition ease-in-out delay-150 bg-black-600 hover:-translate-y-3 hover:scale-130 hover:bg-green-500 duration-200... ">{data.rank}</td>
        <td class="text-gray-800 transition ease-in-out delay-150 bg-black-600 hover:-translate-y-3 hover:scale-130 hover:bg-green-500 duration-200... ">{data.changePercent24Hr}</td>
      </tr>
    </tbody>
  </table>
<style>
</style>