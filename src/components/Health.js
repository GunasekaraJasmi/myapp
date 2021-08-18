import React from 'react'
import image3 from '../images/image3.jpg'
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image5 from '../images/image5.jpg'
import image4 from '../images/image4.jpeg'
import image7 from '../images/image7.jpg'

const Health = () => {
    return (
        <>
           <section className="grid">
               <h3>We provide all the services for your good health!</h3>

               <div className="grid-items">
                   <div>
                      <img src={image3} alt=''/>
                      <h4>Blood Testing</h4>
                      <p>Any patients can have any type of blood test after making
                         an appointment and booking a date and a time.</p> 
                   </div>

                    <div>
                      <img src={image1} alt=''/>
                      <h4>PCR Testing</h4>
                      <p> People can get a pcr test after making an appointment
                      and booking a date and time to find out if they are infected with covid-19.</p> 
                   </div>

                   <div>
                      <img src={image2} alt=''/>
                      <h4>Vaccination</h4>
                      <p>We have all types of covid-19 vaccines. People can get the covid-19 vaccine they want, 
                         after making an appointment and booking a date and a time.</p> 
                   </div>

                   <div>
                      <img src={image5} alt=''/>
                      <h4>Online Pharmacy</h4>
                      <p>After sending us the list of medicines you need, we will deliver all the medicines to your home. 
                         This will save your valuble time.</p> 
                   </div>

                   <div>
                      <img src={image4} alt=''/>
                      <h4>Dental Unit</h4>
                      <p>After booking a date and time with an appointment as per your requirement,
                         you can come to our dentsl unit and get the services you need.</p> 
                   </div>

                   <div>
                      <img src={image7} alt=''/>
                      <h4>Ambulance Service</h4>
                      <p>This is a 24 hours active service. This provides transportation services to 
                         the patients who obtain services from the clinic and it is tailored to the needs of the patients.
                      </p> 
                   </div>

                </div>
           </section> 
        </>
    )
}

export default Health
