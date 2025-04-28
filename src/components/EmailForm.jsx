import React, { useState } from 'react';
import axios from 'axios'


const EmailForm = () => {
    const [email, setEmail] = useState(null)
    const handleEmail = (event) => {
      setEmail(event.target.value)
    }
    const handlesubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append('ٍEmail', email)
      try {
        const response = await axios.post('', formData, {
          headers: {
           'Content-Type': 'multipart/form-data'
          }
        })
        alert(response.data.Message)
      }
      catch(err){
        console.log('Error:',err)
        alert('error in data recording')
      }
      finally{
    
      }
    }
  return (
   
                <div className="mb-3"onSubmit={handlesubmit}>
                  <input onChange={handleEmail} required
                    style={{ 
                      backgroundColor: 'inherit',
                      WebkitTextFillColor: 'white',
                      height: '47px',
                      width: '100%',
                      marginTop: '10px'
                    }}
                    type="email"
                    className="form-control newsletter-input"
                    placeholder="E-mail Address"
                  />
                </div>
        
  )
}

export default EmailForm
