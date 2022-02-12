import React, { useEffect, useState } from 'react'

const Date = () => {
  //   const [count, setCount] = useState(0)
  function test() {
    console.log('hello')
  }
  useEffect(() => {
    setInterval(test, 5000)
  }, [])

  return (
    <div>
      Date
      {/* {count} */}
    </div>
  )
}

export default Date
