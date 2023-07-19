import React, { Component } from 'react'
import cover from '../assets/cover.jpg'
import "./Main.css"

class Main extends Component {
  render() {
    return (
        <body>
          {/* home section starts */}
          <div className='subhead'>
            <div class="subhead_content">
                <h1>Delicious Bites</h1>
                <p>At Delicious Bites, we believe that great food brings people together, and we're passionate about providing an unforgettable dining experience for our guests. Nestled in the heart of the city, our restaurant is a culinary oasis, where delectable flavors, warm ambiance, and excellent service converge to create the perfect setting for every occasion.</p>
                <button>Reserve a table</button>
            </div>
            <div className='subhead_img'>
              <img src={cover} />
            </div>
          </div>
          {/* home section ends */}
            
            <footer>
              
            </footer>
        </body>
    )
  }
}

export default Main