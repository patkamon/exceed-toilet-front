import React from 'react'
import './toilet.css';

import { GrRotateRight } from 'react-icons/gr';

const Toilet = () => {






  return (
    <div>




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

<div class="topnav">
  <a class="active" href="#home">Check your toilet !</a>
  {/* <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a> */}
</div>

  <h1>TOILET</h1>

  <button class="button small"><GrRotateRight /></button> 
  {/* <h1>Average estimated time: HH:MM</h1> */}
  <div class="toilet-list">
      
      <div class="toilet-card">
          <div class="card-header"></div>
          <div class="card-body">
              <img src="https://cdn.discordapp.com/attachments/761848868034969640/941982932090892289/toilet-12.png" alt="image" />
              {/* <div classname={'time-display' $ {}}></div> */}
              <h3 class="toilet-room">ROOM 1</h3>
              <p class="time-display">DO NOT DISTURB</p>
              <p class="time-display">Begin time: HH.MM</p>
              <p class="estimatetime-display">Estimated end time: HH.MM</p>
          </div>
      </div>
      <div class="toilet-card">
          <div class="card-header"></div>
          <div class="card-body">
              <img src="https://cdn.discordapp.com/attachments/761848868034969640/941982592213860352/toilet-11.png" alt="image" />
  
              <h3 class="toilet-room">ROOM 2</h3>
              <p class="empty-room">EMPTY ROOM</p>
              <p class="estimatetime-display">Estimated end time: HH.MM</p>
          </div>
      </div>
      <div class="toilet-card">
          <div class="card-header"></div>
          <div class="card-body">
              <img src="https://cdn.discordapp.com/attachments/761848868034969640/941982932090892289/toilet-12.png" alt="image" />
              <h3 class="toilet-room">ROOM 3</h3>
              <p class="time-display">DO NOT DISTURB</p>
              <p class="time-display">Begin time: HH.MM</p>
              <p class="estimatetime-display">Estimated end time: HH.MM</p>
          </div>
      </div>
  </div>
  



    </div>


    
  )
}

export default Toilet