import React, { use, useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userdata, setUserData] = useState([])

  const getdata = async () =>{
    const response = await axios.get("https://picsum.photos/v2/list?page=4&limit=30")
    setUserData(response.data)
  }

  useEffect(function(){
    getdata()
  },[])

  let printUserData = <h1 className='text-gray-200 text-xs'>'No user Available'</h1>
  if(userdata.length>0){
    printUserData = userdata.map(function(elem, idx){
      return <div key={idx}>
        <a href={elem.url} target='_blank'>
          <div className='h-40 w-44 overflow-hidden bg-white rounded-xl'>
        <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
      </div>
      <h1 className='font-bold text-lg'>{elem.author}</h1>
        </a>
      </div>
    })
  }
  return (
    <div className='bg-black h-screen overflow-auto p-4 text-white'>
      

      <div className='flex flex-wrap gap-4'>
        {printUserData}
      </div>
    </div>
  )
}

export default App