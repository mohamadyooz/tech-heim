import React, { useState } from 'react';
const Discounts = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const show = 'src/assets/img/Account/icon/eye.svg';
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
    <h3>Discounts & Voucher</h3>
    <p style={{
      color: '#717171', fontSize: '1.3rem', marginBottom: '40px'
    }}>Add discount code to apply a discount in your purchase</p>
    <div style={{
      backgroundColor:'#F6F6F6' , width:'35%',padding:'10px',borderRadius:'10px',marginTop:'60px', border:'none'
      }}>
      <input style={{
        width:'85%',border:'none',backgroundColor:'inherit',paddingLeft:'20px',fontSize:'1.2rem'
      }}
        type={showPassword ? 'text' : 'password'}
        id="password"
        placeholder='lable'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button style={{width:'15%' , border:'none',backgroundColor:'inherit'}} onClick={toggleShowPassword}>
        <img style={{width:'25px'}} src={show} alt= {showPassword ? 'مخفی کردن' : 'نمایش'} />
      </button>
      </div>
    </div>
  )
}

export default Discounts