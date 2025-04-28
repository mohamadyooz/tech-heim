import React from 'react'
import SwitchSlider from '../../../components/SwitchSlider'
const Notification = () => {
  return (
    <div>
      <h3>Discounts & Voucher</h3>
      <p style={{
        color: '#717171', fontSize: '1.3rem', marginBottom: '40px'
      }}>Add discount code to apply a discount in your purchase</p>
      <div style={{ width: '48%', float: 'left',marginRight:'30px'}}>
        <img src="src\assets\img\Account\icon\direct.svg" alt="" style={{ float: 'left', width: '30px', marginRight: '10px' }} />
        <h5 style={{ float: 'left', paddingTop: '3px' }}>Emails</h5>
        <div style={{ float: 'right' }} ><SwitchSlider /></div><br></br><br></br>
        <p style={{ fontSize: '1.2rem', width: '70%', color: '#717171' }}>We write emails to let you know what's important, like: new order, confirmations </p>
      </div>
      <div style={{ width: '48%', float: 'left',}}>
        <img src="src\assets\img\Account\icon\truck.svg" alt="" style={{ float: 'left', width: '30px', marginRight: '10px' }} />
        <h5 style={{ float: 'left', paddingTop: '3px' }}>Order Delivered</h5>
        <div style={{ float: 'right' }} ><SwitchSlider /></div><br></br><br></br>
        <p style={{ fontSize: '1.2rem', width: '70%', color: '#717171'  }}>You will be noticed once the order is delivered</p>
      </div>
      <br></br>
      <div style={{ width: '48%', float: 'left',marginRight:'30px'}}>
        <img src="src\assets\img\Account\icon\sms.svg" alt="" style={{ float: 'left', width: '30px', marginRight: '10px' }} />
        <h5 style={{ float: 'left', paddingTop: '3px' }}>Push to your Device</h5>
        <div style={{ float: 'right' }} ><SwitchSlider /></div><br></br><br></br>
        <p style={{ fontSize: '1.2rem', width: '70%', color: '#717171'}}>Receive notifications about your order status, promotions and other updates</p>
      </div>
      <div style={{ width: '48%', float: 'left',}}>
        <img src="src\assets\img\Account\icon\story.svg" alt="" style={{ float: 'left', width: '30px', marginRight: '10px' }} />
        <h5 style={{ float: 'left', paddingTop: '3px' }}>Product's availibilty</h5>
        <div style={{ float: 'right' }} ><SwitchSlider /></div><br></br><br></br>
        <p style={{ fontSize: '1.2rem', width: '70%', color: '#717171'}}>You will be noticed when product gets available </p>
      </div>
    </div>

  )
}

export default Notification