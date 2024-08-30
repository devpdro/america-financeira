export const formatURLQueryParams = (params?: object) => {
  if (!params) {
    return ''
  }

  const queryParams = new URLSearchParams()
  Object.entries(params).forEach(([key, value]) => {
    value && queryParams.append(key, value)
  })

  return queryParams.toString() ? `?${queryParams.toString()}` : ''
}
