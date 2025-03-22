import { useEffect, useState } from 'react'
import CardComp from "./component/card.jsx";
import './App.css'
import { use } from 'react';
import Winner from './component/winner.jsx';


function App() {
  const [count, setCount] = useState(0)
  const [bestScore, setBestScore] = useState(0);
  const [store,setStore] = useState([])
  const [card, setcard] = useState([])
  const [prev,setprev]  = useState(0)
  const [winState,setWinner] = useState(false);
  // const [ischanged,setischanged] = useState(0);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const resp = await fetch("https://hp-api.onrender.com/api/characters"); // Use working API
        const data = await resp.json();
        console.log("hiii")
        console.log(data)
        setcard(
          data.slice(0, 12).map(character => ({
            name: character.name,
            img: character.image || "https://via.placeholder.com/150" // Fallback image
          }))
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchdata();


    return()=>{
      setcard([])
    }// ✅ Call function once inside useEffect
  }, []);// ✅ Correct dependency array


  useEffect(()=>{

  })

  function handleClick(names){
    // console.log("hiiii")
      if(store.indexOf(names)==-1)
      {
        setCount(count+1);
          setStore(prevInfo=>[
            ...prevInfo,
           names
          ])
      }
      else
      {
        // let maxi = max(count,bestScore);
        setBestScore(Math.max(count,bestScore));
       setprev(count)
       setWinner(true);
        setCount(0);
        setStore([]);
        console.log({names})
      }
  }


  return (
    <div className='main'>
      <div className='information'>
        <p className='intro'>Memory Card Game</p>
        <p className='instruction'>Get points by clicking on an image but don't click on any more than once!</p>
      <p>Count:{count} </p>
      <p>BestScore:{bestScore}</p>
      </div>
      <div className='subclass'>
      {card
    .sort(() => Math.random() - 0.5) // ✅ Shuffle array randomly
    .map((data) => (
      <CardComp winState={winState} onclick={handleClick} key={data.name} name={data.name} img={data.img} />
    ))}
      </div>
     {winState&&<Winner setWinner={setWinner} points={prev}/>} 
    </div>
  )
}

export default App
