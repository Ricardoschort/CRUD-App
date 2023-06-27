import React from 'react'

function FormTableRows({e,deleTeData,setIsId}) {
  return (
    <tr key={e.id}>
      <td>{e.name}</td>
      <td>{e.constellation}</td>
      <td>
        <button onClick={()=>setIsId(e)}>Editar</button>
        <button className='clear' onClick={()=>deleTeData(e.id)}>Eliminar</button>
      </td>
    </tr>
  )
}

export default FormTableRows