import { useState } from 'react'
import './App.css'
import FormCrud from './componets/FormCrud'
import FormTable from './componets/FormTable'

const info =[
  {
    id: 1,
    name: "Seiya",
    constellation: "Pegaso"
  },
  {
    id: 2,
    name: "Shun",
    constellation: "Andrómeda"
  },
  {
    id: 3,
    name: "Shyriu",
    constellation: "Dragón"
  },
  {
    id: 4,
    name: "Ikky",
    constellation: "Fénnix"
  },
  {
    id: 5,
    name: "Hyoga",
    constellation: "císne"
  }
]
function App() {
  const [data, setData] = useState(info)

  return (
    <>
      <div>
          <h2>CRUD APP</h2>
          <h3>Caballeros de Zodiaco</h3>
          <FormCrud/>
          <FormTable data ={data}/>
      </div>
        
    </>
  )
}

export default App
