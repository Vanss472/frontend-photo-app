const requestHeader: any = {
  Authorization: process.env.API_KEY,
  'Content-Type': 'application/json',
}

export const fetchData = async (url: string) => {
  const response = await fetch(url, {
    headers: requestHeader,
  })
  const data = await response.json()
  return data
}
