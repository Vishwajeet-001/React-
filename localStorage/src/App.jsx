import React from 'react'

const App = () => {
  
  localStorage.setItem('user', 'Vishwajeet')
  localStorage.setItem('age','18')

  const user = localStorage.getItem('user')
  
  const age = localStorage.getItem('age')
  console.log(user,age)
  localStorage.removeItem('age','18')
  localStorage.removeItem('user','Vishwajeet')
  
  return (
    <div>App</div>
  )
}

export default App