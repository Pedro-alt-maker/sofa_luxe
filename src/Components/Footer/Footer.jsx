import './Footer.css'
const Footer =()=>{
    return(
        <footer className="Footer">
            <div className="boxFooter">
                <div className="cardFooter">
                    <div className="cardesFooter">
                        <div className="logo">
                            Luxe
                        </div>
                        <p>Precisa de ajuda com algo?</p>
                        <div className="redesSociais">
                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                     <div className="cardesFooter">
                       
                        <ul>
                            <li><a href="#Home">Home</a></li>
                            <li><a href="#Shop">Loja</a></li>
                            <li><a href="#Card">Produto</a></li>
                            <li><a href="#Collection">Coleção</a></li>
                        </ul>
                     </div>
                      <div className="cardesFooter">
                        <div className="dev">
                            <h4>Design</h4>
                            <a href="https://www.linkedin.com/in/chioma-amadi-507803214/"target='_blank' ><i className='fa-solid fa-paint-brush'></i>  @Chioma Amadi</a>
                        </div>
                         <div className="dev">
                            <h4>Code</h4>
                            <a href="https://www.linkedin.com/in/jeremias-pedro-088a27337/" target='_blank' ><i className='fa-solid fa-code'></i> @Jeremias Pedro</a>
                        </div>
                        
                      </div>
                      
                </div>
             
            </div>
               <div className="line"></div>
                <p className='copy'> <i className='fa-solid fa-copyright'></i> {new Date().getFullYear()} Todos os direitos reservados</p>
        </footer>
    )
}
export default Footer