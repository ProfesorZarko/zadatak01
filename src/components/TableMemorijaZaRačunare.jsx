import React from 'react'
import memorijaZaRačunare from './Podaci'
import Counter from './Counter'
import { useState } from 'react';

export default function TableMemorijaZaRačunare() {
  const [istina, setIstina] = useState(false);
  const [prviBroj, setPrviBroj] = useState(0)
  const [price , setPrice] = useState(0);

  setPrviBroj(50)

  const addCounter = () => {
    console.log("kliknuto");
    setIstina(true);
    setPrice(memorijaZaRačunare[0].cena1 * prviBroj)
    }


  
  return (
    <div><h3>memorija za računare od petka</h3>
<table>
  <tr>
    <th>Ime memorije</th>
    <th>garancija 6 meseci</th>
    <th>garancija 12 meseci</th>
    <th>komada</th>
  </tr>
  <tr>
    <td>{memorijaZaRačunare[0].imeMemorije}</td>
    <td onClick={addCounter}>{memorijaZaRačunare[0].cena1} {istina ? <Counter prviBroj={0} /> : "" }</td>
    <td onClick={addCounter}>{memorijaZaRačunare[0].cena2} </td>
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
    <p>Total price is : {price}</p>
    </div>
  )
}
