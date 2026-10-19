import React from 'react'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'

const App = () => {

  const users = [
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      color:'royalblue',
      tag:'Satisfied',
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      color:'lightseagreen',
      tag:'Underserved',
    },
    {
      img:'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      color:'orange',
      tag:'Underbanked',
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1673976275849-986056b83cae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      color:'pink',
      tag:'Average',
    },
    {
      img:'https://images.unsplash.com/photo-1574100004472-e536d3b6bacc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      color:'black',
      tag:'Good',
    }

  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />

    </div>
  )
}

export default App
