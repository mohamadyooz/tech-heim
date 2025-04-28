import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate()

  const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const handleLogin = () => {
    login({ name: 'admin', role: 'admin' })
    navigate("/Admin/AddCategory")
  }
  const handleFormSwitch = (isLogin) => {
    setShowLogin(isLogin);
  };

  return (
    <div className='text-center mx-auto p-5' style={{
      width: '600px',
      backgroundColor: '#ffffff'
    }}>
      <a href='' onClick={() => navigate('/ ')} style={{backgroundColor:'inherit', border:'none',float:'left'}}><img style={{width:'40px'}} src="src\assets\img\login\icon\arrow-left.svg" alt="" />
      </a><br/>
      <p className='mb-5' style={{color:'#0951BE',fontSize:'3rem',fontWeight:'500'}}>Tech Heim</p>
      <ul className="nav nav-pills nav-justified mb-4 " id="ex1" role="tablist" >
        <li className="nav-item " role="presentation">
          <a
            className={`nav-link ${activeTab === 'login' ? 'active' : ''}`}
            style={{
              width: '100%',
              marginLeft: '-10px'
            }}
            id="tab-login"
            href="#pills-login"
            role="tab"
            onClick={() => handleTabChange('login')}
            aria-controls="pills-login"
            aria-selected={activeTab === 'login'}
          >
            Login
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link  ${activeTab === 'register' ? 'active' : ''}`}
            style={{
              width: '100%',
              marginLeft: '10px',
              
            }}
            id="tab-register"
            href="#pills-register"
            role="tab"
            onClick={() => handleTabChange('register')}
            aria-controls="pills-register"
            aria-selected={activeTab === 'register'}
          >
            Create Account
          </a>
        </li>
      </ul>
      <h2 className='mb-3'>Log in to Tech Heim</h2>
      <div className="tab-content ">
        <div
          className={`tab-pane fade ${activeTab === 'login' ? 'show active' : ''}`}
          id="pills-login"
          role="tabpanel"
          aria-labelledby="tab-login"
        >
          <form>
            <div data-mdb-input-init className="form-outline  ">
              <input type="text" className="form-control ps-5 py-3" style={{ boxShadow: 'none' , fontSize:'1.1rem', borderRadius:'8px' ,  border:'1px solid'}} placeholder="E-mail" />
              <i style={{
                position: 'relative',
                bottom: '43px',
                right: '230px',
                
              }}><img style={{width:'28px'}} src="src\assets\img\login\icon\sms.svg" alt="" /></i>
            </div>

            <div data-mdb-input-init className="form-outline">
              <input type="email" className="form-control ps-5 py-3" placeholder="Password" style={{ boxShadow: 'none', fontSize:'1.1rem', borderRadius:'8px' ,  border:'1px solid'}} />
              <i style={{
                position: 'relative',
                bottom: '43px',
                right: '230px',
                }}><img style={{width:'28px'}}src='src\assets\img\login\icon\key.svg'></img></i>
            </div>
            <a className='float-start ms-4 text-decoration-none' href=""> Forgot Password ?</a><br />

                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" name="remember" style={{
                      border: '1px solid ',
                      position: 'relative',
                      right: '290px'
                    }} /><p style={{
                      position: 'relative',
                      right: '120px'
                    }}> Keep me logged in </p>
                  </label>
                </div>

            <button onClick={() => navigate('/Account')} className='bg-primary container' style={{
              height:'50px',
              border:'none',
              borderRadius:'8px',
              color:'#ffffff',
            }}>Log in</button>

{/*log in admin  */}      

            <button onClick={handleLogin} className='bg-success container mt-3' style={{
              height:'50px',
              border:'none',
              borderRadius:'8px',
              color:'#ffffff',
            }}>Log in admin</button>
            
            <p className='my-4 '>_____________________________ Or Log In with _____________________________</p>
            <button style={{
              border:'1px #0C68F4 solid ', 
              backgroundColor:'inherit',
              color:'#0C68F4',
              height:'50px',
              width:'47%',
              borderRadius:'8px',
              marginRight:'25px'
            }}><img src="src\assets\img\login\icon\google.svg" alt="" />Google</button>
            <button style={{
              border:'1px #0C68F4 solid ', 
              backgroundColor:'inherit',
              color:'#0C68F4',
              height:'50px',
              width:'47%',
              borderRadius:'8px'
            }}><img src="src\assets\img\login\icon\_Facebook.svg" alt="" /> Facebook</button>
            <p className='mt-4'>Don’t have an account ? <a className='text-decoration-none ' href="">sign up</a></p>
          </form>
        </div>

{/*create account*/}

        <div
          className={`tab-pane fade ${activeTab === 'register' ? 'show active' : ''}`}
          id="pills-register"
          role="tabpanel"
          aria-labelledby="tab-register"
        >

          <form>
            <div data-mdb-input-init className="form-outline  ">
              <input type="text" className="form-control ps-5 py-3" style={{ boxShadow: 'none' , fontSize:'1.1rem', borderRadius:'8px' ,  border:'1px solid'}} placeholder="Full Name" />
              <i style={{
                position: 'relative',
                bottom: '43px',
                right: '230px',
                
              }}><img style={{width:'28px'}} src="src\assets\img\login\icon\user.svg" alt="" /></i>
            </div>
            <div data-mdb-input-init className="form-outline  ">
              <input type="text" className="form-control ps-5 py-3" style={{ boxShadow: 'none' , fontSize:'1.1rem', borderRadius:'8px' ,  border:'1px solid'}} placeholder="E-mail" />
              <i style={{
                position: 'relative',
                bottom: '43px',
                right: '230px',
                
              }}><img style={{width:'28px'}} src="src\assets\img\login\icon\sms.svg" alt="" /></i>
            </div>

            <div data-mdb-input-init className="form-outline">
              <input type="email" className="form-control ps-5 py-3" placeholder="Password" style={{ boxShadow: 'none', fontSize:'1.1rem', borderRadius:'8px' ,  border:'1px solid'}} />
              <i style={{
                position: 'relative',
                bottom: '43px',
                right: '230px',
                }}><img style={{width:'28px'}}src='src\assets\img\login\icon\key.svg'></img></i>
            </div>
                <div className="form-check">
                  <label className="form-check-label float-end me-3 mb-3">
                  <input className="form-check-input" type="checkbox" name="remember" style={{
                border: '1px solid ',
                position: 'relative',
                right: '270px'
              }} /><p className=''> I agree to all<a href=""> Terms & Conditions</a>
              </p>
                  </label>
                </div> 
               
            <button className='bg-primary container' style={{
              height:'50px',
              border:'none',
              borderRadius:'8px',
              color:'#ffffff',
            }}>Create Account</button>

{/* or sign*/}

            <p className='my-4 '>____________________________ Or Sign Up with ____________________________</p>
            <button style={{
              border:'1px #0C68F4 solid ', 
              backgroundColor:'inherit',
              color:'#0C68F4',
              height:'50px',
              width:'47%',
              borderRadius:'8px',
              marginRight:'25px'
            }}><img src="src\assets\img\login\icon\google.svg" alt="" />Google</button>
            <button style={{
              border:'1px #0C68F4 solid ', 
              backgroundColor:'inherit',
              color:'#0C68F4',
              height:'50px',
              width:'47%',
              borderRadius:'8px'
            }}><img src="src\assets\img\login\icon\_Facebook.svg" alt="" /> Facebook</button>
            <p className='mt-4'>Already have an account ? <a className='text-decoration-none ' href="">sign in</a></p>
          </form>
        </div>
      </div>
    </div>

  );
};


export default Login