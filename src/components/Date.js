import React, { useEffect, useState } from 'react'

const Date = () => {
<<<<<<< HEAD
  //   const [count, setCount] = useState(0)
=======


  const [time, setTime] = useState(0);



>>>>>>> origin/pat
  function test() {
    console.log('hello')
    setTime(time+1)
    
  }
  useEffect(() => {
<<<<<<< HEAD
    setInterval(test, 5000)
  }, [])

  return (
    <div>
      Date
      {/* {count} */}
    </div>
  )
=======
    setTime(0)
    setInterval(test, 30000);

  }, [])
  //   setInterval(test, 1000)
  return <div>Date
    {time}
  </div>
>>>>>>> origin/pat
}

export default Date
