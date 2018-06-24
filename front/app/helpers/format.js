export const formatFiltersToQueryParams = filters => {
  let queryParams = ''
  Object.keys(filters).map(key => {
    const node = filters[key]
    if(node.length > 0) {
      let param = ''
      if(Array.isArray(node) && node.length > 0) {
        param = node.length === 1 ? `${key}=${node[0]}` : node.map(item => `${key}[]=${item}`).join('&')
      } else {
        param = `${key}=${node}`
      }
      queryParams = !queryParams ? param : `${queryParams}&${param}`
    }
  })
  return queryParams
}
