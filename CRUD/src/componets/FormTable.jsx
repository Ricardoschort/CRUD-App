import React from 'react'
import FormTableRows from './FormTableRows'

function FormTable({data,deleTeData,setIsId}) {

  return (
    <table>
        <thead>
           <tr>
            <th>Nombre</th>
            <th>Constelaciones</th>
            <th>Acciones</th>
           </tr>
        </thead>
        <tbody>
          {data.length === 0 ? 
          <tr>
            <td colSpan="3">NO HAY DATOS</td>
          </tr>:
          data.map((e) =>
            <FormTableRows
            key={e.id} 
            e ={e}
            setIsId ={setIsId}
            deleTeData ={deleTeData}
            /> 
          )
        }

        </tbody>
    </table>
  )
}

export default FormTable