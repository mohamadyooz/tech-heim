import { useState } from "react";

const Security = () => { 
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const show = 'src/assets/img/Account/icon/eye.svg';
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div> <h3>Security settings</h3>
    <p style={{
      color: '#717171', fontSize: '1.3rem', marginBottom: '40px'
    }}>Change password and phone number</p>
    <div style={{
      backgroundColor:'#F6F6F6' , width:'40%',padding:'10px',borderRadius:'10px',marginTop:'60px', border:'none',float:'left'
      }}>
      <img src="src\assets\img\Account\icon\key.svg" alt="" />
      <input style={{
        width:'80%',border:'none',backgroundColor:'inherit',paddingLeft:'10px',fontSize:'1.2rem'
      }}
        type={showPassword ? 'text' : 'password'}
        id="password"
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button style={{width:'10%' , border:'none',backgroundColor:'inherit'}} onClick={toggleShowPassword}>
        <img style={{width:'25px'}} src={show} alt= {showPassword ? 'مخفی کردن' : 'نمایش'} />
      </button>
      </div>

      <div style={{
      backgroundColor:'#F6F6F6' , width:'40%',padding:'10px',borderRadius:'10px',marginTop:'60px', border:'none',float:'left', marginLeft:'20px'
      }}>
      <img src="src\assets\img\Account\icon\call.svg" alt="" />
      <input style={{
        width:'90%',border:'none',backgroundColor:'inherit',paddingLeft:'10px',fontSize:'1.2rem'
      }}
        type='tel'
        placeholder='Phone number'
      />
     
  
      </div>
      </div>
  )
}

export default Security