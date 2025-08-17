import Sala from '../assets/banner3.jpg'
import './Shop.css'
import Titulo from '../Titulo/Titulo'
import BtnDark from '../Button/BtnDark'
const Shop = ()=>{
    return(
        <section id="Shop">
            <Titulo sectionTitulo = 'Nosso Lema' />
            <div className="boxShop">
                <div className="banner2">
                    <img src={Sala} alt="Sala de estar" />
                </div>
                <div className="descriptionShop">
                    <h2 className='shopTitulo'>Levando conforto para cada còmodo</h2>
                    <p className='shopDescription'>
                       Com nosso coleção selecionada de móveis de alta qualidade, transforme sua casa em um sntuário de estilo e relaxamento.
                    </p>
                    <div className="boxbtn">
                        <BtnDark text = 'Mostra mais'  />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Shop