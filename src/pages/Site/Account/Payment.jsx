import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Payment = () => {
  const [inputText1, setInputText1] = useState('');
  const [inputText2, setInputText2] = useState('');
  const [inputText3, setInputText3] = useState('');
  const [inputText4, setInputText4] = useState('');
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    axios.get('/api/categories')
      .then(res => setCategories(res.data))
      .catch(error => console.error("Error fetching categories:", error));
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    axios.get(`/api/items?category=${category.id}`)
      .then(res => {
        setItems(res.data.map(item => ({ ...item, checked: false })));
      })
      .catch(error => console.error("Error fetching items:", error));
  };

  const handleCheck = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleGoToNextPage = () => {
    const checkedItems = items.filter((item) => item.checked);
    navigate('/next', { state: { items: checkedItems } });
  };

  const handleDeleteSelected = () => {
    setItems(items.filter((item) => !item.checked));
  };
  return (
    <div>
      <h3>Cards</h3>
      <p style={{
        color: '#717171', fontSize: '1.3rem', marginBottom: '40px'
      }}> manage payment methods</p>

      <div style={{ marginLeft: '30px' }}>
        <h5>Add your payment method</h5>
        <img src="src\assets\img\Account\img\cards + title.svg" alt="" style={{ marginTop: '15px', marginBottom: '20px' }} />
        <div>
          <div style={{ fontSize: '0.8rem', position: 'relative', top: '13px', left: '20px' }}>
            <p>Card number</p></div>
          <input className='pay-input pe-3'
            placeholder='Card number'
            type='number'
            value={inputText1}
            onChange={(e) => setInputText1(e.target.value)}
          />
          <button className='pay-bottom' onClick={() => setInputText1('')}><img src='src\assets\img\Account\icon\close-circle.svg'></img></button>
        </div>
        <div>
          <div style={{ fontSize: '0.8rem', position: 'relative', top: '13px', left: '20px' }}>
            <p>Name on card</p></div>
          <input className='pay-input pe-3'
            placeholder='Name on card'
            type="text"
            value={inputText2}
            onChange={(e) => setInputText2(e.target.value)}
          />
          <button className='pay-bottom' onClick={() => setInputText2('')}><img src='src\assets\img\Account\icon\close-circle.svg'></img>
          </button>
        </div>
        <div >
          <div style={{ fontSize: '0.8rem', position: 'relative', top: '13px', left: '20px' }}>
            <p style={{ float: 'left', marginRight: '135px', }}>Expiration date (MM/YY)</p><p>CVV</p></div>
          <input className='pay-input pe-3 ' style={{ width: '30%' }}
            type='text'
            placeholder='Expiration date (MM/YY)'
            value={inputText3}
            onChange={(e) => setInputText3(e.target.value)}
          />
          <button className='pay-bottom' onClick={() => setInputText3('')}><img src='src\assets\img\Account\icon\close-circle.svg'></img>
          </button>
          <input className='pay-input pe-3 ' style={{ width: '30%', position: 'relative', right: '15px' }}
            type='number'
            placeholder='CVV'
            value={inputText4}
            onChange={(e) => setInputText4(e.target.value)}
          />
          <button className='pay-bottom ' style={{ left: '-53px' }} onClick={() => setInputText4('')}><img src='src\assets\img\Account\icon\close-circle.svg'></img>
          </button>
        </div>

      </div>
      <div>
        <h3 style={{marginTop:'40px'}}> Instalments</h3>
        <p style={{
          color: '#717171', fontSize: '1.3rem', marginBottom: '40px',
        }}> Manage your instalment</p>

        <div className="con-payment">
          <div className="category-list">
            <ul>
              {categories.map((category) => (
                <li
                  key={category.id}
                  className={selectedCategory === category ? 'selected' : ''}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="item-list">
            <table>
              <thead>
                <tr >
                  <th ></th>
                  <th>Description</th>
                  <th>Due Amount</th>
                  <th>Due Date</th>
                  <th>Actual Amount</th>
                  <th>Payment Date</th>
                  <th>status</th>
                  <th>Total</th>

                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => handleCheck(item.id)}
                      />
                    </td>
                    <td>{item.description}</td>
                    <td>{item.dueAmount}</td>
                    <td>{item.dueDate}</td>
                    <td>{item.actualAmount}</td> 
                    <td>{item.paymentDate}</td>
                    <td>{item.status}</td>
                    <td>{item.Total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* دکمه‌ها */}
          <div className="buttons">

            <button onClick={handleDeleteSelected} style={{backgroundColor:'#C91433'}}>Delete</button>
            <button onClick={handleGoToNextPage} style={{backgroundColor:'#0C68F4'}}>Pay</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment