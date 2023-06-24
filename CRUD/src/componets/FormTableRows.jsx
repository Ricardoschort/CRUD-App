import React from 'react'

function FormTableRows({e}) {
  return (
    <tr key={e.id}>
      <td>{e.name}</td>
      <td>{e.constellation}</td>
      <td>
        <button> Editar</button>
        <button> Eliminar</button>
      </td>
    </tr>
  )
}

export default FormTableRows