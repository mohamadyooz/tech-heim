import  React,{useState} from 'react'
const FAQ = () => {
  const [color, setColor] = useState('قرمز');

  const renderText = () => {
    switch (color) {
      case 'قرمز':
        return <p style={{ color: 'red' }}>رنگ قرمز است!</p>;
      case 'آبی':
        return <p style={{ color: 'blue' }}>رنگ آبی است!</p>;
      case 'سبز':
        return <p style={{ color: 'green' }}>رنگ سبز است!</p>;
      default:
        return <p>رنگ نامشخص است.</p>;
    }
  };

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div>
      <button onClick={() => changeColor('قرمز')}>قرمز</button>
      <button onClick={() => changeColor('آبی')}>آبی</button>
      <button onClick={() => changeColor('سبز')}>سبز</button>
      {renderText()}
    </div>
  );

}

export default FAQ