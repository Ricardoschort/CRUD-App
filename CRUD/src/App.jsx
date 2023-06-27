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
  const [data, setData] = useState(info);
  const [isId, setIsId] = useState(null)

  const createData = (dataNew)=>{
    dataNew.id = Date.now()
    setData([...data,dataNew])

  }

  const upDateData = (dataNew)=>{
    let newData = data.map( e => e.id === dataNew.id ? dataNew : e);
    setData(newData)
  
  }
  const deleTeData = (id)=>{
    let isDelete = window.confirm("Quieres Eliminar a este guerrero de Athena");

    if(isDelete){
      let newData = data.filter(e => e.id !== id)
      setData(newData)
    }else{
      return
    }
  }

  return (
    <>
      <div>
          <h2>CRUD APP</h2>
          <h3>Caballeros de Zodiaco</h3>
          <article>
          <FormCrud
            createData ={createData}
            upDateData ={upDateData}
            isId = {isId}
            setIsId ={setIsId}
          />
          <FormTable 
            data ={data}
            setIsId ={setIsId}
            deleTeData ={deleTeData}
          />
          </article>
     
      </div>
        
    </>
  )
}

export default App
