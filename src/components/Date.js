import React, { useEffect, useState } from 'react'

const Date = () => {


  const [time, setTime] = useState(0);



  function test() {
    console.log('hello')
    setTime(time+1)
    
  }
  useEffect(() => {
    setTime(0)
    setInterval(test, 30000);

  }, [])
  //   setInterval(test, 1000)
  return <div>Date
    {time}
  </div>
}

export default Date
