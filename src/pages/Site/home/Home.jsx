import React, { useState, useEffect } from 'react';
import CategoryCard from './CategoryCard';
import NewProductCard from './NewProductCard';
import HeroSection from './HeroSection'; // وارد کردن HeroSection
import ProductCarousel from "../../../components/ProductCarousel";
import "/src/assets/css/Home.css";
import ErrorMessage from './ErrorMessage';
function Home() {
  const [newProducts, setNewProducts] = useState([]);
  const [loadingNewProducts, setLoadingNewProducts] = useState(true);
  const [errorNewProducts, setErrorNewProducts] = useState(null);
  useEffect(() => {
    const fetchNewProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/products'); // جایگزین کنید
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setNewProducts(data);
        setLoadingNewProducts(false);
      } catch (error) {
        setErrorNewProducts(error);
        setLoadingNewProducts(false);
      }
    };

    fetchNewProducts();
  }, []);

  return (
    <div className="container ">
      <HeroSection />
      <section className="row (2) mb-5">
        <CategoryCard title="Accessories" imageUrl="src\assets\img\home\row-1.svg" />
        <CategoryCard title="Camera" imageUrl="src\assets\img\home\row-1.svg" />
        <CategoryCard title="Laptop" imageUrl="src\assets\img\home\row-1.svg" />
        <CategoryCard title="Smart Phone" imageUrl="src\assets\img\home\row-1.svg" />
        <CategoryCard title="Gaming" imageUrl="src\assets\img\home\row-1.svg" />
        <CategoryCard title="Smart Watch" imageUrl="src\assets\img\home\row-1.svg" />
      </section>
      <section className="row (3) ">
        <article className="col-12 ">
          <ProductCarousel />
        </article>
      </section>

      <section className="row (4)">
        <div
          style={{
            paddingBottom: '10px',
            borderBottom: '2px solid #B4B4B4',
            marginBottom: '30px',
            marginTop:'40px'
          }}
        >
          <h3 className="float-end" style={{ width: '250px' }}>
            New Products
          </h3>
          <button
            className="float-start"
            style={{
              backgroundColor: 'inherit',
              border: 'none',
              width: '100px',
              marginTop: '5px',
            }}
          >
            View all <img src="src\assets\img\home\icon\arrow-circle-right.svg" alt="" />
          </button>
        </div>
        <div className="row mx-auto"> {/* اضافه کردن یک div با کلاس row برای مدیریت ردیف‌ها */}
          {loadingNewProducts && <div>در حال بارگذاری محصولات جدید...</div>}
          {errorNewProducts && (<><ErrorMessage/><p>"خطا در دریافت محصولات جدید رخ داده است." </p></> )}
          {!loadingNewProducts && !errorNewProducts &&  newProducts.slice(0, 4).map((product) => (
            <NewProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}


export default Home