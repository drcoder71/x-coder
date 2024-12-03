import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'

const SeoOptimizer = () => {
    return (
        <Helmet>
            <title>LwC</title>
        </Helmet>
    )
}

const HomePage = () => {
    useEffect(() => {
        SeoOptimizer()
    }, [])
  return (
    <div>HomePage</div>
  )
}

export default HomePage