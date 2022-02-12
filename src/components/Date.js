import React, { useEffect } from 'react'

const Date = () => {
  function test() {
    console.log('hello')
  }
  useEffect(() => {
    setInterval(test, 1000)
  }, [])
  //   setInterval(test, 1000)
  return <div>Date</div>
}

export default Date
