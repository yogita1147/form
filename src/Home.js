import React from 'react'
import axios from 'axios'

const Home = (e) => {
  const getapi=()=>{
    axios.get('http://192.168.0.93:4000/Hotel').then(res=>{
      console.log(res)
    })

  }
  return (
    <div>
      <button onClick={()=>getapi(e)}>apicheck</button>
    </div>
  )
}

export default Home;