import Sofa12 from '../assets/sofa12.png'
import Sofa13 from '../assets/sofa13.png'
import Sofa14 from '../assets/sofa14.png'
import Sofa8 from '../assets/sofa8.png'
import Sofa9 from '../assets/sofa9.png'
import Sofa11 from '../assets/sofa11.png'
import BtnDark from '../Button/BtnDark'
import Titulo from '../Titulo/Titulo'
import './Card.css'
const Card = ()=>{
    return(
        <section id='Card'>
            <Titulo sectionTitulo = 'Mais Vendidos' /> 
            <div className="cards">
                <div className="card">
                    <div className="cardImage">
                        <img src={Sofa12} alt="" />
                    </div>
                    <div className="cardPrice">
                        <h3 className="cardTituloprice">Wish Bone Chair</h3>
                        <span className="Price">$90</span>
                    </div>
                    <div className="cardDescription">

                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                                <div className="card">
                    <div className="cardImage">
                        <img src={Sofa8} alt="" />
                    </div>
                    <div className="cardPrice">
                        <h3 className="cardTituloprice">Wish Bone Chair</h3>
                        <span className="Price">$90</span>
                    </div>
                    <div className="cardDescription">

                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>


                <div className="card">
                    <div className="cardImage">
                        <img src={Sofa9} alt="" />
                    </div>
                    <div className="cardPrice">
                        <h3 className="cardTituloprice">Wish Bone Chair</h3>
                        <span className="Price">$90</span>
                    </div>
                    <div className="cardDescription">

                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>


                <div className="card">
                    <div className="cardImage">
                        <img src={Sofa11} alt="" />
                    </div>
                    <div className="cardPrice">
                        <h3 className="cardTituloprice">Wish Bone Chair</h3>
                        <span className="Price">$90</span>
                    </div>
                    <div className="cardDescription">

                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>


                <div className="card">
                    <div className="cardImage">
                        <img src={Sofa13} alt="" />
                    </div>
                    <div className="cardPrice">
                        <h3 className="cardTituloprice">Wish Bone Chair</h3>
                        <span className="Price">$90</span>
                    </div>
                    <div className="cardDescription">

                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="cardImage">
                        <img src={Sofa14} alt="" />
                    </div>
                    <div className="cardPrice">
                        <h3 className="cardTituloprice">Wish Bone Chair</h3>
                        <span className="Price">$90</span>
                    </div>
                    <div className="cardDescription">

                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

            </div>
            <div className="sectionBtn">
                <BtnDark text = 'Ver produtos' />
            </div>
        </section>
    )
}
export default Card 