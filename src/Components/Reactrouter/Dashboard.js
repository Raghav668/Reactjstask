import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

export default function Dashboard() {
  const {id} = useParams()
  return (

    <div>Dashboard/{id}</div>
  )
}
