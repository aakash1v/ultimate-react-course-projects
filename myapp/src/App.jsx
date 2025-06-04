import { useEffect, useState } from "react";

export default function App(){

  const [advice, setAdvice] = useState()
  const [number, setNumber] = useState(0)
  const [oldAdvice, setOldAdvice] = useState([])

  async function getAdvice(){
      const res = await fetch('https://api.adviceslip.com/advice')
      const data = await res.json()
      setAdvice(data.slip.advice);

      //storing old advices..
      setOldAdvice([...oldAdvice, data.slip.advice])
      console.log(oldAdvice)
      setNumber((c) => c+1 );
  }

  useEffect(()=>{
    getAdvice()
  }, [])

  return (
    <div>
      <h1>{advice}</h1>
    <button onClick={getAdvice}>Get Advice !</button>
    <Message count={number}/>

    <OldAdvice oldAdvice={oldAdvice}/>
    </div>
  );

}

function Message(props){
  return (
    <p>you have read <strong>{props.count}</strong> pices of advice.</p>

  )
}



function OldAdvice(props){
  return (
    <div>
        <h3>Old advices</h3>
        <ol className="old-advice" >
           {

        props.oldAdvice.map((advice, i)=>(
          <li key={i}>{advice}</li>
        ))
      }

        </ol>

     
    </div>
  )
}