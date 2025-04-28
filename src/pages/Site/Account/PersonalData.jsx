import { useState } from "react";

const PersonalData = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [postal, setPostal] = useState('');
  
  return (
    <form className="row">
      <h4>Identification</h4>
      <p style={{color:'#717171',fontSize:'1.2rem',marginBottom:'40px'
      }}>Verify your identity</p>
      <article className="col-6 float-left">
      
      <div className="mb-2 form ">
        <label className="label-person">Full name</label>
        <img src="src\assets\img\Account\icon\user.svg" alt="" className="iconform"/>
        <input style={{ backgroundColor: '#F6F6F6',boxShadow:'none' }}
          className="form-control  ps-5"
          type='text'
          placeholder={name || "Enter your Full name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
     
      <div className="mb-2 form ">
        <label className="label-person">Phone number</label>
        <img src="src\assets\img\Account\icon\call.svg" alt="" className="iconform"/>
        <input style={{ backgroundColor: '#F6F6F6',boxShadow:'none' }}
          className="form-control ps-5"
          type='tel'
          placeholder={phone || "Enter your Phone number"}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
     
      <div className="mb-2 form ">
        <label className="label-person">Address</label>
        <img src="src\assets\img\Account\icon\home-2.svg" alt="" className="iconform"/>
        <input style={{ backgroundColor: '#F6F6F6' ,boxShadow:'none'}}
          className="form-control ps-5"
          type='text'
          placeholder={address || "Enter your Address"}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      </article>
      <article className="float-left col-6">
      <div className="mb-2 form  ">
        <label className="label-person">E-mail Address</label>
        <img src="src\assets\img\Account\icon\direct.svg" alt="" className="iconform"/>
        <input style={{ backgroundColor: '#F6F6F6',boxShadow:'none' }}
          type='email'
          className="form-control pe-5"
          placeholder={email || "Enter your email address"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-2 form ">
        <label className="label-person">Password</label>
        <img src="src\assets\img\Account\icon\key.svg" alt="" className="iconform"/>
        <input style={{ backgroundColor: '#F6F6F6',boxShadow:'none' }}
          type="password"
          className="form-control  pe-5"
          placeholder={password || "Enter your password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-2 form ">
        <label className="label-person">Postal code</label>
        <img src="src\assets\img\Account\icon\signpost.svg" alt="" className="iconform"/>
        <input style={{ backgroundColor: '#F6F6F6',boxShadow:'none' }}
          type='number'
          className="form-control pe-5"
          placeholder={postal || "Enter your postal code"}
          value={postal}
          onChange={(e) => setPostal(e.target.value)}
        />
      </div>
      </article>
    </form>
  );
}

export default PersonalData;