import { PDFViewer } from '@react-pdf/renderer'
import Invoice from './components/Invoice'
import invoiceData from './data/invoice_data'
import './App.css'

export default function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <PDFViewer
        style={{
          position: 'absolute',
          border: 0,
          height: '100%',
          width: '100%'
        }}
      >
        <Invoice invoice={invoiceData} />
      </PDFViewer>
    </div>
  )
}
