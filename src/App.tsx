import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useQuery } from 'react-query'
import axios from 'axios'

type cryptoItem = {
  id: string
  rank: string
  symbol: string
  name: string
  supply: string
  marketCapUsd: string
  volumeUsd24Hr: string
  priceUsd: string
  changePercent24Hr: string
}
type Currencies = {
  [key: string]: cryptoItem
}
const getcryptoItem = async (): Promise<Currencies> =>
  await (await fetch('https://api.coincap.io/v2/assets')).json()

const INTERVAL_TIME = 10000
//think i can do refetch instead

export function App() {
  const [currency, setCurrency] = useState<Currencies[]>([])
  const { data, isLoading, error } = useQuery<Currencies>(
    'cryptoitem',
    getcryptoItem
  )
  console.log(data)
  //I have data which is great! :)))))))))

  const handleCurrencySelection = (e: any) => {
    setCurrency(e.currentTarget.value)
  }

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Something went wrogn evil laugh </div>
  //Loads when I refresh the page woohoo!
  return (
    <div>
      <h1>Crypto Currency Price Tracker</h1>
    </div>
  )
}
