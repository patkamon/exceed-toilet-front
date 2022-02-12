import axios from 'axios';
import { useState } from 'react';


import { GrRotateRight } from 'react-icons/gr';

const Toilet = () => {


    const [status1, setStatus1] = useState()
    const [status2, setStatus2] = useState()
    const [status3, setStatus3] = useState()





    async function getEstimateTime() {
        const res = await axios.get(`https://ecourse.cpe.ku.ac.th/exceed01/api/get_time`)
        return res.data
      }



      async function getRoom(room_id){
        const res = await axios.get(`https://ecourse.cpe.ku.ac.th/exceed01/api/get_room/${room_id}`)
        return res.data
      }

    function onRefresh1(e){

        getRoom(1).then((data) => {
            if(data.status === 0){
                setStatus1('empty')
            }
            else if (data.status === 1){
                setStatus1('there is someone in room1')
            }
          })
        e.preventDefault()
        getEstimateTime().then((data) => {
            console.log(data)
          })

    }

    function onRefresh2(e){

        getRoom(2).then((data) => {
            if(data.status === 0){
                setStatus2('empty')
            }
            else if (data.status === 1){
                setStatus2('there is someone in room2')

            }
          })
        e.preventDefault()
        getEstimateTime().then((data) => {
            console.log(data)
          })

    }

    function onRefresh3(e){

        getRoom(3).then((data) => {
            if(data.status === 0){
                setStatus3('empty')
            }
            else if (data.status === 1){
                setStatus3('there is someone in room3')
            }
          })
        e.preventDefault()
        getEstimateTime().then((data) => {
            console.log(data)
          })

    }








  return (
    <div>Toilet


<h1>Hi</h1>

<form onSubmit={onRefresh1}>
<button >button1 </button> 
</form>

<form onSubmit={onRefresh2}>
<button >button2 </button> 
</form>

<form onSubmit={onRefresh3}>
<button >button3 </button> 
</form>





{status1}
    {status2}
    {status3}






    
    </div>


    
  )
}

export default Toilet