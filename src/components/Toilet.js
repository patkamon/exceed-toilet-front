import axios from 'axios'
import React, { useEffect } from 'react'
import { BiRefresh } from 'react-icons/bi'
const Toilet = () => {
  async function getDataFromRoom(no) {
    const res = await axios.get(
      `https://ecourse.cpe.ku.ac.th/exceed01/api/get_room/${no}`
    )
    console.log('hello')
    return res.data
  }
  //   function refresh() {
  //     window.location.reload()
  //     getDataFromRoom(1)
  //   }
  useEffect(() => {
    // setInterval(refresh, 10000)
    // getDataFromRoom(1).then((data) => {
    //   console.log(data.status)
    // })
    setInterval(getDataFromRoom(1), 3000)
  }, [])
  //   let num = 0
  //   function checkStatus(status){
  //       if(status === 0) // empty

  //   }
  return (
    <div>
      Toilet
      <form>
        <div>
          <input className="search-bar" placeholder="Search.." />
        </div>
        <button onClick={() => window.location.reload(false)}>
          <BiRefresh />
        </button>
      </form>
    </div>
  )
}

export default Toilet
