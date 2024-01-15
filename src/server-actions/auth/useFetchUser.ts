import { useState, useEffect } from 'react'

const useFetchUser = (userId: string) => {
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://your-api-url.com/users/${userId}`)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                const data = await response.json()
                setData(data)
                setLoading(false)
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message)
                } else {
                    setError('An error occurred')
                }
                setLoading(false)
            }
        }

        fetchData()
    }, [userId])

    return { data, loading, error }
}

export default useFetchUser