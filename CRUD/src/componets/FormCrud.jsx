import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const initialForm = {
  name: "" ,
  constellation: "",
  id:null
}

function FormCrud({createData,upDateData,isId,setIsId}) {
  const [form, setForm] = useState(initialForm)

  useEffect(() => {
    if(isId){
      setForm(isId)
    }else{
      setForm(initialForm)
    }
  }, [isId])
  

  const handleChange =(e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
  })

  }
  const handleClear =(e)=>{
    setForm(initialForm)
    setIsId(null)
    
  }

  const handleSubmit=(e)=>{
    e.preventDefault()

    if(!form.name || !form.constellation){
      alert("Datos incompletos, Requieres Llenar todos los datos a la velocidad de la luz.")
      return
    }

    if(form.id === null){
      createData(form)
    }else{
      upDateData(form)
    }

    handleClear()
  }

  return (
    <div className='containerForm'>
        <h4>{isId ? "Editando" : "Agregar"}</h4>
        <form onSubmit={handleSubmit}>
          <input type='text' name='name' value={form.name} placeholder='nombre' onChange={handleChange} />
          <input type='text' name='constellation' value={form.constellation} placeholder='Constelacion'onChange={handleChange} />
          <input className='button' type="submit" name='send' value="Enviar" />
          <input className='button clear' type="reset" name='reset' value="Limpiar" onClick={handleClear}/>
        </form>
    </div>
    
   
 
  )
}

export default FormCrud