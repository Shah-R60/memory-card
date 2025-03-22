import "./card.css"
import winImg from "./image/win.png";
export default function Winner({points , setWinner}){
 return(
     <>
     <div className="win" style={{backgroundImage:`url(${winImg})`}}>
          <p className="cong" style={{ fontFamily: 'Courier New, monospace' }}>
          Congratulation , you played well ,  
          </p>
          <p className="point" style={{ fontFamily: 'Harry Potter' }}>{points} points to Gryffindor</p>
          <p className="ask">Want to play more , harry?</p>
          <button onClick={()=>{setWinner(false)}}  style={{backgroundColor:"orange", color:"black"}}>Yes</button>
     </div>
     </>
 )
}