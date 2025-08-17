import BtnDark from "../Button/BtnDark"
import Banner4 from '../assets/banner4.png'
import './Shoop.css'
import Titulo from "../Titulo/Titulo"
const Shoop = ()=>{
    return(
        <section className="shoop" id="Collection">
            <Titulo sectionTitulo = 'Descontos' />
            <div className="boxshoop">
                <div className="shoopDescription">
                    <h2 className="ShooTitulo">Ganhe 30% de Desconto em Aqualquer Móvel</h2>
                    <p className="ShoopDescription">
                        Aproveite as melhores ofertas em todos os móveis e preços. Participe desta oferta por tempo limitado e ganhe 340,56.
                    </p>
                <div className="shoopBtn">
                    <BtnDark text = 'Compre Agora' />
                </div>
                </div>
                <div className="shoopBanner">
                    <img src={Banner4} alt="" />
                </div>
            </div>
        </section>
    )
}
export default Shoop