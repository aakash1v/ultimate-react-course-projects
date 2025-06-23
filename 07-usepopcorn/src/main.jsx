import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import StarRating from './StarRating.jsx'
// import App from './TextExpender.jsx'


// function Test(){
//   const [rating, setRating] = useState(0)
  
//   function handleRating(rating){
//     setRating(rating)
//   }

//   return (
//     <div>
//       <StarRating onRating={handleRating} defalultvalue={3}/>

//       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum eius cum voluptatum.{rating}</p>
//     </div>
//   )
// }


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    {/* <StarRating color="red" size={40} message={["Horrible", "Bad", "Okay", "Good", "Amazing"]}/>
    <StarRating color="blue" size={20}/>

    <Test/> */}
    <App/>

  </StrictMode>,
)
