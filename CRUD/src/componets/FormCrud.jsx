import React from 'react'
import { useState } from 'react'

const initialForm = {
  name: "" ,
  constellation: "",
  id:null
}

function FormCrud() {
  const [form, setForm] = useState(initialForm)

  const handleChange =(e)=>{

  }
  const handleClear =(e)=>{
    
  }
  const handleSubmit=(e)=>{

  }
  return (
    <div className='containerForm'>
        <h4>Agregar</h4>
        <form onSubmit={handleSubmit}>
          <input type='text' name='name' value={form.name} placeholder='nombre' onChange={handleChange} />
          <input type='text' name='constellation' value={form.constellation} placeholder='Constelacion'onChange={handleChange} />
          <input type="submit" name='send' value="Enviar" />
          <input type="reset" name='reset' value="Limpiar" onReset={handleClear}/>
        </form>
    </div>
    
   
 
  )
}

export default FormCrud