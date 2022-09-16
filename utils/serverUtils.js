export const executeGraphQuery = async (queryString) => {
  return await fetch(`https://api.thegraph.com/subgraphs/name/mesa-protocol/mesa-subgraph` ,{
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: queryString
    })
  })

}
