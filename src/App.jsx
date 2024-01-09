import { useState } from 'react'
import './App.css'
import BasicMenu from './components/dashboard'
import DenseAppBar from './components/sidebar'
import { mockTransactions } from "./components/mockData";


function App() {
  const [Transactions, setTransactions] = useState(mockTransactions)



  return (
    <>
    <DenseAppBar/>
    <BasicMenu/>

  {}









    </>
  )
}

export default App
