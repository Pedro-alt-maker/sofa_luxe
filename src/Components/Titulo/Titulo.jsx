import './Titulo.css'
const Titulo = (props)=>{
    return(
          <div className="boxTitulo">
                <div className="linhatitulo"></div>
                <h2 className='tituloSection'>
                    <div className="boderTitulo">
                        {props.sectionTitulo}
                    </div>
                </h2>
            </div>
    )
}
export default Titulo