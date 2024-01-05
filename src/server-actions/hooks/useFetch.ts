import { useState, useEffect } from 'react'

interface Data {
  _id: string
  username: string
  fullName: string
  email: string
  role: string
  image?: string
  is_online: string
  phoneNumber?: string
  dateOfBirth?: Date
  country?: string
  state?: string
  city?: string
  interests?: string[]
  createdAt: Date
  updatedAt: Date
}

interface ReturnedData {
  data: Data[]
  error?: Error | null
  isPending?: boolean
}

export const useFetch = (url: string) => {
  const [data, setData] = useState<Data | null>(null)
  const [isPending, setIsPending] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    const token = localStorage.getItem('token')

    const fetchData = async () => {
      setIsPending(true)

      try {
        const res = await fetch(url, {

          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          signal: controller.signal
        })
        // console.log(res)
        if (!res.ok) {
          throw new Error(res.statusText)
        }
        const _data = await res.json()
        setData(_data)
        localStorage.setItem('immerUserData', JSON.stringify(_data))
        setIsPending(false)
        setError(null)
      } catch (err: any) {
        if (err.name === 'AbortError') {
          console.log('the fetch was aborted')
        } else {
          setIsPending(false)
          setError('Could not fetch the data')
        }
      }
    }

    fetchData()

    return () => {
      controller.abort()
    }
  }, [url])

  return { data, isPending, error }
}
