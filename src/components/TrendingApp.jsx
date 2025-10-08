import React from 'react'
import useApps from '../hooks/useApps'
import AppCard from './AppCard'

const TrendingApp = () => {

    const {apps} = useApps()
    const sliceApp = apps.slice(0,8)
    console.log(sliceApp);


    
    

  return (
    <div className='w-11/12 mx-auto mb-10'>

        <div className='text-center my-8 space-y-2'>
            <h1 className='text-3xl font-semibold'>Trending Apps</h1>
            <p className='text-gray-500 text-sm'>Explore All Trending Apps on the Market developed by us</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            {sliceApp.map(app => <AppCard key={app.id} app={app}></AppCard>)}
        </div>

    </div>
  )
}

export default TrendingApp