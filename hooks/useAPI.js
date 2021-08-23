
import { useEffect, useState } from 'react'
import axios from 'axios'
import consts from '../pages/consts'

export default function useAPI(url) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState([])

  useEffect(() => {
    const options = {
      headers: { appId: consts.APP_ID, apiKey: consts.API_KEY }
     }

    const fetchData = async () => {
      try {
        setLoading(true)

        const res = await axios.get(`https://api-us.cometchat.io/v2.0${url}`, options)
        const data = await res.data
        setData(data.data)
        setLoading(false)
      } catch (error) {
        setError(error)
      }
    }
    fetchData()
  }, []);

  return {data, loading, error}
}