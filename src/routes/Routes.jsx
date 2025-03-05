import React from 'react'
import { useRoutes } from 'react-router'
import Layout from '../components/Layout'

function Routes () {
  const routes = useRoutes([
    { path: '/', element: <Layout /> }
  ])

  return routes
}

export default Routes
