import axios from 'axios'
import { useEffect, useState } from 'react'

import React from 'react'
import './toilet.css'

import { GrRotateRight } from 'react-icons/gr'

const Toilet = () => {
  useEffect(() => {
    getEstimateTime().then((data) => {
      console.log(data)
      setEs(data)
    })
    getRoom(1).then((data) => {
      if (data.status === 0) {
        setStatus1('Empty Room')
        setTime1()
        setImage1(
          'https://cdn.discordapp.com/attachments/941214299160993822/941954703284113408/toilet-7.png'
        )
      } else if (data.status === 1) {
        setStatus1('There is someone in Room 1.')
        setTime1(data.datetime.slice(11, 19))
        setImage1(
          'https://cdn.discordapp.com/attachments/941214299160993822/941954703003123742/toilet-6.png'
        )
      }
    })
    getRoom(2).then((data) => {
      if (data.status === 0) {
        setStatus2('Empty Room')
        setTime2()
        setImage2(
          'https://cdn.discordapp.com/attachments/941214299160993822/941954703284113408/toilet-7.png'
        )
      } else if (data.status === 1) {
        setStatus2('There is someone in Room 2.')

        setTime2(data.datetime.slice(11, 19))
        setImage2(
          'https://cdn.discordapp.com/attachments/941214299160993822/941954703003123742/toilet-6.png'
        )
      }
    })
    getRoom(3).then((data) => {
      if (data.status === 0) {
        setStatus3('Empty Room')
        setTime3()
        setImage3(
          'https://cdn.discordapp.com/attachments/941214299160993822/941954703284113408/toilet-7.png'
        )
      } else if (data.status === 1) {
        setStatus3('There is someone in Room 3.')
        setTime3(data.datetime.slice(11, 19))
        setImage3(
          'https://cdn.discordapp.com/attachments/941214299160993822/941954703003123742/toilet-6.png'
        )
      }
    })
  }, [])

  const [status1, setStatus1] = useState()
  const [status2, setStatus2] = useState()
  const [status3, setStatus3] = useState()

  const [time1, setTime1] = useState()
  const [time2, setTime2] = useState()
  const [time3, setTime3] = useState()
  const [es, setEs] = useState()
  const [image1, setImage1] = useState()
  const [image2, setImage2] = useState()
  const [image3, setImage3] = useState()

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
        setImage1(
          'https://cdn.discordapp.com/attachments/941214299160993822/941954703284113408/toilet-7.png'
        )
      } else if (data.status === 1) {
        setStatus1('There is someone in Room 1.')
        setTime1(data.datetime.slice(11, 19))
        setImage1(
          'https://cdn.discordapp.com/attachments/941214299160993822/941954703003123742/toilet-6.png'
        )
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
        setImage2(
          'https://cdn.discordapp.com/attachments/941214299160993822/941954703284113408/toilet-7.png'
        )
      } else if (data.status === 1) {
        setStatus2('There is someone in Room 2.')

        setTime2(data.datetime.slice(11, 19))
        setImage2(
          'https://cdn.discordapp.com/attachments/941214299160993822/941954703003123742/toilet-6.png'
        )
      }
    })
    e.preventDefault()
    getEstimateTime().then((data) => {
      console.log(data)
    })
  }

  function onRefresh3(e) {
    getEstimateTime().then((data2) => {
      setEs(data2)
      console.log('e', data2)
    })
    getRoom(3).then((data) => {
      if (data.status === 0) {
        setStatus3('Empty Room')
        setTime3()
        setImage3(
          'https://cdn.discordapp.com/attachments/941214299160993822/941954703284113408/toilet-7.png'
        )
      } else if (data.status === 1) {
        setStatus3('There is someone in Room 3.')
        setTime3(data.datetime.slice(11, 19))
        setImage3(
          'https://cdn.discordapp.com/attachments/941214299160993822/941954703003123742/toilet-6.png'
        )
      }
    })
    e.preventDefault()
  }

  return (
    <div>
      <h1>TOILET</h1>
      <div className="toilet-list">
        <div className="toilet-card">
          <div className="card-header"></div>
          <div className="card-body">
            <img src={image1} alt="img1" />
            <h3 className="toilet-room">ROOM 1</h3>
            {status1 === 'Empty Room' && (
              <p className="empty-room">{status1}</p>
            )}
            {status1 === 'There is someone in Room 1.' && (
              <p className="time-display">{status1}</p>
            )}

            {time1 && 'Begin Time:' + time1}
            {time1 &&
              'Estimate Time:' + time1 + ' + ' + parseInt(es) + ' second'}
            <form onSubmit={onRefresh1}>
              <button>
                <GrRotateRight />
              </button>
            </form>
          </div>
        </div>

        <div className="toilet-card">
          <div className="card-header"></div>
          <div className="card-body">
            <img src={image2} alt="img2" />
            <h3 className="toilet-room">ROOM 2</h3>
            {status2 === 'Empty Room' && (
              <p className="empty-room">{status2}</p>
            )}
            {status2 === 'There is someone in Room 2.' && (
              <p className="time-display">{status2}</p>
            )}
            {time2 && 'Begin Time:' + time2}
            {time2 &&
              'Estimate Time:' + time2 + ' + ' + parseInt(es) + ' second'}
            <form onSubmit={onRefresh2}>
              <button>
                <GrRotateRight />
              </button>
            </form>
          </div>
        </div>
        <div className="toilet-card">
          <div className="card-header"></div>
          <div className="card-body">
            <img src={image3} alt="img3" />
            <h3 className="toilet-room">ROOM 3</h3>
            {status3 === 'Empty Room' && (
              <p className="empty-room">{status3}</p>
            )}
            {status3 === 'There is someone in Room 3.' && (
              <p className="time-display">{status3}</p>
            )}
            {time3 && 'Begin Time:' + time3}
            <br />
            {time3 &&
              'Estimate Time:' + time3 + ' + ' + parseInt(es) + ' second'}
            <form onSubmit={onRefresh3}>
              <button>
                <GrRotateRight />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Toilet
