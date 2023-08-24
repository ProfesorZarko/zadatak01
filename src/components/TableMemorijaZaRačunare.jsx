import React from 'react'
import memorijaZaRačunare from './podaci'
import Counter from './Counter'
import { useState } from 'react'

export default function TableMemorijaZaRačunare() {
  const [istina, setIstina] = useState(false);
  const addCounter = () => {
    console.log("kliknuto");
    setIstina(true)
    }
  
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
    <td onClick={addCounter}>{memorijaZaRačunare[0].cena1} {istina ? <Counter /> : "" }</td>
    <td onClick={addCounter}>{memorijaZaRačunare[0].cena2} {istina ? <Counter /> : "" }</td>
    <td></td>
  </tr>
  <tr>
    <td>{memorijaZaRačunare[1].imeMemorije}</td>
    <td onClick={addCounter}>{memorijaZaRačunare[1].cena1} {istina ? <Counter /> : "" }</td>
    <td onClick={addCounter}>{memorijaZaRačunare[1].cena2} {istina ? <Counter /> : "" }</td>
  </tr>
  <tr>
    <td>{memorijaZaRačunare[2].imeMemorije}</td>
    <td onClick={addCounter}>{memorijaZaRačunare[2].cena1} {istina ? <Counter /> : "" }</td>
    <td onClick={addCounter}>{memorijaZaRačunare[2].cena2}{istina ? <Counter /> : "" }</td>
  </tr>
</table>
    </div>
  )
}
