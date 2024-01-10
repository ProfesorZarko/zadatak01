import React from 'react';
import "../staraGodina/StaraGodina.css"
import BoxGrid from '../staraGodina/BoxGrid';
import SClock from '../staraGodina/SClock';
import SLForm from '../staraGodina/SLForm';

export default function StaraGodina() {
  return (
    <div className='StaraGodina'>
      <header class="header" >
        <BoxGrid />
        <SLForm />
        <SClock />
      </header>
    <div id="container">
        
        <div class="ad">AD</div>
        <main class="main">MAIN CONTENT</main>
        <aside class="aside">ASIDE</aside>
        <footer class="footer">FOOTER</footer>
    </div>
</div>
  )
}
