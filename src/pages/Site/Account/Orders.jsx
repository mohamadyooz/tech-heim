import React, { useState, useEffect, Children } from 'react';
import axios from 'axios';


const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [orderCounts, setOrderCounts] = useState({
    current: 0,
    delivered: 0,
    canceled: 0,
    returned: 0,
  });
  const [activeTab, setActiveTab] = useState('current'); 

  useEffect(() => {
    axios.get('/api/orders')
      .then(res => {
        setOrders(res.data);
        const counts = {
          current: res.data.filter(order => order.status === 'current').length,
          delivered: res.data.filter(order => order.status === 'delivered').length,
          canceled: res.data.filter(order => order.status === 'canceled').length,
          returned: res.data.filter(order => order.status === 'returned').length,
        };
        setOrderCounts(counts);
      })
      .catch(error => console.error("Error fetching orders:", error));
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div><h3>Order History</h3>
      <p style={{
        color: '#717171', fontSize: '1.3rem', marginBottom: '40px'
      }}>Track, return or purchase items</p>
       <div className="order-list-container">
      <div className="tabs">
        <ul>
          <li
            className={activeTab === 'current' ? 'active' : ''}
            onClick={() => handleTabClick('current')}
          >
            Current ({orderCounts.current})
          </li>
          <li
            className={activeTab === 'delivered' ? 'active' : ''}
            onClick={() => handleTabClick('delivered')}
          >
            Delivered ({orderCounts.delivered})
          </li>
          <li
            className={activeTab === 'canceled' ? 'active' : ''}
            onClick={() => handleTabClick('canceled')}
          >
            Canceled ({orderCounts.canceled})
          </li>
          <li
            className={activeTab === 'returned' ? 'active' : ''}
            onClick={() => handleTabClick('returned')}
          >
            
            Returned ({orderCounts.returned})
          </li>
        </ul>
      </div>

      <div className="order-list">
        <table>
          <thead>
            <tr>
              <th>Order Code</th>
              <th>Placed On</th>
              <th>Total</th>
              <th>Sent To</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {orders
              .filter(order => order.status === activeTab) 
              .map(order => (
                <tr key={order.id}>
                  <td>{order.code}</td>
                  <td>{order.placedOn}</td>
                  <td>{order.total}</td>
                  <td>{order.sentTo}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Orders