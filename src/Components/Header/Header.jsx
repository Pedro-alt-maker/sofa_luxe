import { useRef } from 'react'

import './Header.css'
const Header = ()=>{
   const BtnMenu = () => {
    navbarMobile.current.classList.toggle("active");
    navbarMobile.current.style.transition = ".5s";
         const lines = document.querySelectorAll(".line");

    lines.forEach((line) => {
      line.classList.toggle("activar");
    });
  };

  const navbarMobile = useRef();
    return(
        <header>
            <div className="logo">
                <span>
                    Luxe
                </span>
            </div>
           
            <nav>
                 
                <ul className="navbar">
                    <li>
                        <a href="#Home" className="item">Home</a>
                    </li>

                    <li>
                        <a href="#Shop" className="item">Loja</a>
                    </li>

                    <li>
                        <a href="#Card" className="item">Produtos</a>
                    </li>

                    <li>
                        <a href="#Collection" className="item">Coleções</a>
                    </li>
                </ul>
                 

                    <ul className="navbarMobile" ref={navbarMobile}>
                    <li>
                        <a href="#Home" className="item">Home</a>
                    </li>

                    <li>
                        <a href="#Shop" className="item">Loja</a>
                    </li>

                    <li>
                        <a href="#Card" className="item">Produtos</a>
                    </li>

                    <li>
                        <a href="#Collection" className="item">Coleções</a>
                    </li>
                </ul>
                 
            </nav>
            <div className="btnHeader">

                <button id="search" className='btn'>
                    <i className='fa-solid fa-search' ></i>
                </button>
                <button id="price" className='btn'>
                    <i className='fa-solid fa-shopping-bag' ></i>
                </button>
               <button className="menu" onClick={BtnMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
            </div>
            
        </header>
    )
}
export default Header