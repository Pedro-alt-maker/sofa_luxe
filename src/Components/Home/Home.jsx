import Gradient from '../assets/gradient.png'
import Banner1 from '../assets/baner1.png'
import Lapada from '../assets/lapada.png'
import BtnWhite from '../Button/BtnWhite'
import './Home.css'
const Home = () =>{
  
    return(
        <section id="Home">
           
            <div className="description">
                <h1 className='titulo'>Móveis que <span className='luz'>aquecem</span> o coração</h1>
                <p className='textoDescription'>Crie um lar que te traga paz e conforto. Descubra peças atemporais criadas com cuidado e propósito.</p>
                <div className="boxbtn">
                    <BtnWhite text='Compre agora' />
                </div>
            </div>
            <div className="bannerHome">
            <img src={Banner1} alt="Sofa" />
            </div>
            <div className="box_gradient"><img src={Gradient} className='gradient' id='gradient1' alt="" /></div>
            
            <img src={Lapada} className='lapada' alt="" />
           
          
            
        </section>
    )
}
export default Home