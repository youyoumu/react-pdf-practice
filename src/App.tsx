import { PDFViewer } from '@react-pdf/renderer'
import Invoice from './components/Invoice'
import invoiceData from './data/invoice_data'
import './App.css'
import { useState, useEffect } from 'react'

export default function App() {
  const [{ width, height }, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight - 5 })
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <PDFViewer width={width} height={height} className="app">
        <Invoice invoice={invoiceData} />
      </PDFViewer>
    </div>
  )
}
