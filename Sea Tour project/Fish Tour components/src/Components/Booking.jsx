import React from 'react'
import { Link } from 'react-router-dom'
import './Booking.css'
const Booking = () => {
  
  return (

    <>  

      <section className='bookingform'/>

        <img src='MainImg-4.jpg'  className='section1img' ></img>
        {/* form page */}
        <div className="form-container">
        <h2>Book Your Tour Package</h2>
        <form action="submit.php" method="post">
            <label for="name">Full Name:</label>
            <input type="text" id="name" name="name" required/>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required/>

            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required/>

            {/* <label for="destination">Select Destination:</label>
            <select id="destination" name="destination" required>
                <option value="">-- Choose a Destination --</option>
                <option value="paris">Paris, France</option>
                <option value="bali">Bali, Indonesia</option>
                <option value="rome">Rome, Italy</option>
                <option value="maldives">Maldives</option>
            </select> */}

            <label for="date">Travel Date:</label>
            <input type="date" id="date" name="date" required/>

            <label for="guests">Number of Guests:</label>
            <input type="number" id="guests" name="guests" min="1" required/>

            <label for="message">Special Requests:</label>
            <textarea id="message" name="message" rows="4" placeholder="Any special requests..."></textarea>

            <button type="submit">Book Now</button>
           <button type="submit" className='cancelButton'><Link to="/">Cancel</Link></button>
               </form>
               </div>
 
          
        
      
    </>

  )
}

export default Booking