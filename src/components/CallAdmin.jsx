import React, { useState } from 'react';

function CallAdmin() {
  const [showImage, setShowImage] = useState(true);
  const heartImage = 'src/assets/img/icon/online-chat-after.svg';
  const coffeeImage = 'src/assets/img/icon/online-chat-normal.svg';

  const handleClick = () => {
    setShowImage(!showImage);
  };

  return (
    <button onClick={handleClick}
    style={{
      backgroundColor:'inherit',
      border:'none',
      paddingBottom:'0'
    }}>
      <img 
      src={showImage ? coffeeImage : heartImage} 
      alt="My Image" 
      style={{
        backgroundColor:'inherit',
        width:'45px'
      }}/>
    </button>
  );
}

export default CallAdmin;