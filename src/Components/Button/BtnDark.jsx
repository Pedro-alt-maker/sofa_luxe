import cores from "../Paletas_cores/Cores"
import './BtnDark.css'
const BtnDark =(props) =>{
    return(
        <button className="btndark">
            {props.text}
        </button>
    )
}
export default BtnDark