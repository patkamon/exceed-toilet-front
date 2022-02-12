import axios from 'axios'
import { useState } from 'react'

import React from 'react'
import './toilet.css'

import { GrRotateRight } from 'react-icons/gr'

const Toilet = () => {
  const [status1, setStatus1] = useState()
  const [status2, setStatus2] = useState()
  const [status3, setStatus3] = useState()

  const [time1, setTime1] = useState()
  const [time2, setTime2] = useState()
  const [time3, setTime3] = useState()

  async function getEstimateTime() {
    const res = await axios.get(
      `https://ecourse.cpe.ku.ac.th/exceed01/api/get_time`
    )
    return res.data
  }

  async function getRoom(room_id) {
    const res = await axios.get(
      `https://ecourse.cpe.ku.ac.th/exceed01/api/get_room/${room_id}`
    )
    return res.data
  }

  function onRefresh1(e) {
    getRoom(1).then((data) => {
      if (data.status === 0) {
        setStatus1('Empty Room')
        setTime1()
      } else if (data.status === 1) {
        setStatus1('there is someone in room1')
        setTime1(data.datetime.slice(11, 19))
      }
    })
    e.preventDefault()
    getEstimateTime().then((data) => {
      console.log(data)
    })
  }

  function onRefresh2(e) {
    getRoom(2).then((data) => {
      if (data.status === 0) {
        setStatus2('Empty Room')
        setTime2()
      } else if (data.status === 1) {
        setStatus2('there is someone in room2')

        setTime2(data.datetime.slice(11, 19))
      }
    })
    e.preventDefault()
    getEstimateTime().then((data) => {
      console.log(data)
    })
  }

  function onRefresh3(e) {
    getRoom(3).then((data) => {
      if (data.status === 0) {
        setStatus3('Empty Room')
        setTime3()
      } else if (data.status === 1) {
        setStatus3('there is someone in room3')
        let newData = new Date(data.datetime)
        setTime3(newData.getTime())
        console.log(Date(time3).toString())
      }
    })
    e.preventDefault()
    getEstimateTime().then((data) => {
      console.log(data)
    })
  }

  return (
    <div>
      <form onSubmit={onRefresh1}>
        <button>button1 </button>
      </form>

      <form onSubmit={onRefresh2}>
        <button>button2 </button>
      </form>

      <form onSubmit={onRefresh3}>
        <button>button3 </button>
      </form>

      {/* {status1}
      {status2}
      {status3}
      {time1}
      {time2}
      {time3} */}

      <button>
        <GrRotateRight />
      </button>

      {/* 
      <h1>Toilet</h1>
      <h1>Average estimated time: HH:MM</h1>
      <div class="toilet-card">
          <div class="card-header"></div>
          <div class="card-body">
              <img src="https://cdn.discordapp.com/attachments/941214299160993822/941945726156554290/toilet-5.png" alt="image" />
              <h3 class="toilet-room">Room1</h3>
              <p class="time-display">Begin time: HH.MM</p>
              <p class="estimatetime-display">Estimated end time: HH.MM</p>
          </div>
      </div>
      <div class="toilet-card">
          <div class="card-header"></div>
          <div class="card-body">
              <img src="https://cdn.discordapp.com/attachments/941214299160993822/941945725875539968/toilet-4.png" alt="image" />
              <h3 class="toilet-room">Room2</h3>
              <p class="empty-room">Empty!</p>
              <p class="estimatetime-display">Estimated end time: HH.MM</p>
          </div>
      </div>
      <div class="toilet-card">
          <div class="card-header"></div>
          <div class="card-body">
              <img src="https://cdn.discordapp.com/attachments/941214299160993822/941945726156554290/toilet-5.png" alt="image" />
              <h3 class="toilet-room">Room3</h3>
              <p class="time-display">Begin time: HH.MM</p>
              <p class="estimatetime-display">Estimated end time: HH.MM</p>
          </div>
      </div> */}

      <h1>TOILET</h1>

      {/* <h1>Average estimated time: HH:MM</h1> */}
      <div class="toilet-list">
        <div class="toilet-card">
          <div class="card-header"></div>
          <div class="card-body">
            <img
              src="https://cdn.discordapp.com/attachments/941214299160993822/941954703003123742/toilet-6.png"
              alt="image"
            />
            <h3 class="toilet-room">ROOM 1</h3>
            <p class="time-display">{status1}</p>
            {time1 && 'Begin Time:' + time1}
            {/* <p class="time-display">{time1}</p> */}

            <p class="estimatetime-display">Estimated end time: HH.MM</p>
          </div>
        </div>
        <div class="toilet-card">
          <div class="card-header"></div>
          <div class="card-body">
            <img
              src="https://cdn.discordapp.com/attachments/941214299160993822/941954703284113408/toilet-7.png"
              alt="image"
            />
            <h3 class="toilet-room">ROOM 2</h3>
            <p class="empty-room">{status2}</p>
            {time2 && 'Begin Time:' + time2}
            {/* <p class="time-display">{time2}</p> */}
            <p class="estimatetime-display">Estimated end time: HH.MM</p>
          </div>
        </div>
        <div class="toilet-card">
          <div class="card-header"></div>
          <div class="card-body">
            <img
              src="https://cdn.discordapp.com/attachments/941214299160993822/941954703003123742/toilet-6.png"
              alt="image"
            />
            <h3 class="toilet-room">ROOM 3</h3>
            <p class="time-display">{status3}</p>
            {time3 && 'Begin Time:' + time3}
            <form onSubmit={onRefresh1}>
              <button>button1 </button>
            </form>
            {/* <p class="time-display">{time3}</p> */}
            <p class="estimatetime-display">Estimated end time: HH.MM</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Toilet
