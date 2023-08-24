import React from 'react'
import memorijaZaRačunare from './Podaci'


export default function TableMemorijaZaRačunare() {
  return (
    <div><h3>memorija za računare</h3>

<table>
  <tr>
    <th>Ime memorije</th>
    <th>garancija 6 meseci</th>
    <th>garancija 12 meseci</th>
    <th>komada</th>
  </tr>
  <tr>
    <td>{memorijaZaRačunare[0].imeMemorije}</td>
    <td>{memorijaZaRačunare[0].cena1}</td>
    <td>{memorijaZaRačunare[0].cena2}</td>
    
  </tr>
  <tr>
    <td>{memorijaZaRačunare[1].imeMemorije}</td>
    <td>{memorijaZaRačunare[1].cena1}</td>
    <td>{memorijaZaRačunare[1].cena2}</td>
  </tr>
  <tr>
    <td>{memorijaZaRačunare[2].imeMemorije}</td>
    <td>{memorijaZaRačunare[2].cena1}</td>
    <td>{memorijaZaRačunare[2].cena2}</td>
  </tr>
</table>

    </div>
  )
}
