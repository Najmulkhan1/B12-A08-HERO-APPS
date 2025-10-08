import React from 'react'
import { useParams } from 'react-router'
import useApps from '../hooks/useApps'

const AppDetails = () => {

    const {id} = useParams()
    const {apps, loading} = useApps()
    const app = apps.find((a) => String(a.id) === id)

    console.log(app);
    

  return (
    <div>AppDetails</div>
  )
}

export default AppDetails