import "./card.css"

export default function card({onclick, img, name , winState}){

     
     return(
          <>
          <button className="ImgTag" onClick={()=>{!winState&&onclick(name)}}>
               <img src={img}alt="" />
               <div className="name" style={{ fontFamily: 'Harry Potter' }}>{name}</div>
          </button>
          </>
          
     )
}