import './Sobre.css'
import Titulo from '../Titulo/Titulo'
const Sobre = ()=>{
    return(
        <section className="sobre">
            <Titulo sectionTitulo = ' Por Que Nós?' />
               <div className="cardesIcon">
                 <div className="cardIcon">
                    <i className='fa-solid fa-check'></i>
                    <h5>Preço Direto da Empresa </h5>
                 </div>

                 <div className="cardIcon">
                    <i className='fa-solid fa-headset'></i>
                    <h5>Atendimento ao cliente</h5>

                 </div>
                 <div className="cardIcon">
                    <i className='fa-solid fa-truck'></i>
                    <h5>Entrega Rápida</h5>
                 </div>

                 <div className="cardIcon">
                    <i className='fa-solid fa-shield-alt'></i>
                    <h5>Satisfação Garantida</h5>
                 </div>
               </div>
                
            <div className="box_subscrib">
                <h2>NewLester</h2>
                <p>Assine a nossa newsletter para ficar atualizado sobre promoções e eventos.</p>
                <div className="inputsubscrib">
                    <input id='input'type="text" placeholder='Inseri e-mail' />
                    <button className='btnrrowRight'>
                        <i className='fa-solid fa-arrow-right'></i>
                    </button>
                </div>
            </div>
        </section>
    )
}
export default Sobre