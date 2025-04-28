import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "/src/assets/css/Account.css";
import PersonalData from './PersonalData';
import ContactUs from './ContactUs';
import Discounts from './Discounts';
import Notification from './Notification';
import Orders from './Orders';
import Payment from './Payment';
import Security from './Security';
import WishList from './WishList';

function DefaultContent() {
  return <h2 style={{  color: 'black' }}>Welcome user to <h1 style={{  color: '#0C68F4' }}>Tech Heim</h1>
</h2>;
}

const Account = () => {
  const [ActiveComponent, setActiveComponent] = useState(<DefaultContent />);
  const navigate = useNavigate();

  const handleNavLinkClick = (Component) => {
    setActiveComponent(Component ? <Component /> : <DefaultContent />);
  };

  return (
    <div className="container pt-5">
      <div className="desktop-only list rounded-4">
        <h5 style={{ paddingTop: '10px' }}>
          <img src="src\assets\img\Account\img\profile-circle.svg" alt="" style={{ marginRight: '20px' }} />
          Jimmy smith
        </h5>

        <ul className="quick-links-head">
          <li className="nav-item ">
            <img src="src\assets\img\Account\icon\user-edit.svg" alt="" className="img-icon" />
            <a className="nav-link " href="#" onClick={() => handleNavLinkClick(PersonalData)} style={{
              fontSize:'1.2rem '
            }}>
              Personal Data
            </a>
          </li>

          <li className="nav-item">
            <img src="src\assets\img\Account\icon\dollar-circle.svg" alt="" className="img-icon" />
            <a className="nav-link log" href="#" onClick={() => handleNavLinkClick(Payment)}style={{
              fontSize:'1.2rem '
            }}>
              Payment & Instalments
            </a>
          </li>

          <li className="nav-item">
            <img src="src\assets\img\Account\icon\bag.svg" alt="" className="img-icon" />
            <a className="nav-link" href="#" onClick={() => handleNavLinkClick(Orders)}style={{
              fontSize:'1.2rem '
            }}>
              Orders
            </a>
          </li>

          <li className="nav-item">
            <img src="src\assets\img\Account\icon\heart.svg" alt="" className="img-icon" />
            <a className="nav-link" href="#" onClick={() => handleNavLinkClick(WishList)}style={{
              fontSize:'1.2rem '
            }}>
              Wish list
            </a>
          </li>

          <li className="nav-item">
            <img src="src\assets\img\Account\icon\gift.svg" alt="" className="img-icon" />
            <a className="nav-link" href="#" onClick={() => handleNavLinkClick(Discounts)}style={{
              fontSize:'1.2rem '
            }}>
              Discounts
            </a>
          </li>

          <li className="nav-item">
            <img src="src\assets\img\Account\icon\security-safe.svg" alt="" className="img-icon" />
            <a className="nav-link" href="#" onClick={() => handleNavLinkClick(Security)}style={{
              fontSize:'1.2rem '
            }}>
              Security & access
            </a>
          </li>

          <li className="nav-item">
            <img src="src\assets\img\Account\icon\notification.svg" alt="" className="img-icon" />
            <a className="nav-link" href="#" onClick={() => handleNavLinkClick(Notification)}style={{
              fontSize:'1.2rem '
            }}>
              Notification
            </a>
          </li>

          <li className="nav-item">
            <img src="src\assets\img\Account\icon\24-support.svg" alt="" className="img-icon" />
            <a className="nav-link" href="#" onClick={() => handleNavLinkClick(ContactUs)}style={{
              fontSize:'1.2rem '
            }}>
              Contact us
            </a>
          </li>

          <li className="nav-item">
            <img src="src\assets\img\Account\icon\logout.svg" alt="" className="img-icon" />
            <a className="nav-link" href="#" style={{color:'#C91433',fontSize:'1.2rem '}} onClick={() => navigate('/ ')}>
              Log out
            </a>
          </li>
        </ul>
      </div>

      <div className="content-area" style={{width:'70%', minHeight:'700px', marginLeft:'30%',paddingLeft:'30px', paddingTop:'30px'}}>
        {ActiveComponent}
      </div>
      
    </div>
  );
};

export default Account;