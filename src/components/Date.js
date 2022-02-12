import React, { useEffect } from 'react'

const Date = () => {
  function test() {
    console.log('hello')
  }
  useEffect(() => {
    setInterval(test, 5000)
  }, [])

  return <div>Date</div>
}

export default Date
