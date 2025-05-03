import React, { useState, useEffect } from 'react';
import CategoryCard from './CategoryCard';
import NewProductCard from './NewProductCard';
import HeroSection from './HeroSection'; // وارد کردن HeroSection
import ProductCarousel from "../../../components/ProductCarousel";
import "/src/assets/css/Home.css";
import ErrorMessage from './ErrorMessage';
import ArticleList from './ArticleList';
function Home() {
  const NewProducts = 'http://localhost:3001/products';
  const [newProducts, setNewProducts] = useState([]);
  const [loadingNewProducts, setLoadingNewProducts] = useState(true);
  const [errorNewProducts, setErrorNewProducts] = useState(null);
  const BestProduct = 'http://localhost:3002/products';
  const [bestProduct, setBestProduct] = useState([]);
  const [loadingBestProduct, setLoadingBestProduct] = useState(true);
  const [errorBestProduct, setErrorBestProduct] = useState(null);

  useEffect(() => {
    const fetchNewProducts = async () => {
      try {
        const response = await fetch(NewProducts); // جایگزین کنید
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

    const fetchBestProducts = async () => {
      try {
        const response = await fetch(BestProduct); // جایگزین کنید
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBestProduct(data);
        setLoadingBestProduct(false);
      } catch (error) {
        setErrorBestProduct(error);
        setLoadingBestProduct(false);
      }
    };

    fetchBestProducts();
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
      <section className="row (3) mb-4">
        <article className="col-12 ">
          <ProductCarousel />
        </article>
      </section>
      <section className="row (4) mb-4">
        <div className='head-row'>
          <h3 className="float-end" style={{ width: '250px' }}>
            New Products
          </h3>
          <button className="float-start View-all">
            View all <b>&gt;</b>
          </button>
        </div>
        <div className="row mx-auto "> {/* اضافه کردن یک div با کلاس row برای مدیریت ردیف‌ها */}
          {loadingNewProducts && <div>در حال بارگذاری محصولات جدید...</div>}
          {errorNewProducts && (<><ErrorMessage /><p>"خطا در دریافت محصولات جدید رخ داده است." </p></>)}
          {!loadingNewProducts && !errorNewProducts && newProducts.slice(0, 4).map((product) => (
            <NewProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <section className='row '>
        <article className='col-12 col-lg-7 ' style={{ margin: '0px', padding: '0px' }}><img src="src\assets\img\home\row-5-1.svg" alt="" />
          <button className='button-image'>Register Now</button>
        </article>
        <article className='col-12 col-lg-4 ms-lg-5' style={{ margin: '0px', padding: '0px' }}><img src="src\assets\img\home\row-5-2.svg" alt="" />
          <button className='button-image' style={{ right: '220px', bottom: '80px' }}>Buy Now</button>
        </article>
      </section>
      <section className='row   '>
        <div className='head-row'>
          <h3 className="float-end" style={{ width: '250px' }}>
            Best Sellers
          </h3>
          <button className="float-start View-all">
            View all <b>&gt;</b>
          </button>
        </div>
        <div className="row mx-auto" style={{ width: '100%' }}> {/* اضافه کردن یک div با کلاس row برای مدیریت ردیف‌ها */}
          {loadingBestProduct && <div>در حال بارگذاری محصولات جدید...</div>}
          {errorBestProduct && (<><ErrorMessage /><p>"خطا در دریافت محصولات جدید رخ داده است." </p></>)}
          {!loadingBestProduct && !errorBestProduct && bestProduct.slice(0, 4).map((product) => (
            <NewProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <section className="row mt-3">
        <div className='head-row'>
          <h3 className="float-end" style={{ width: '250px' }}>
            Top Brands
          </h3>
          <button className="float-start View-all">
            View all <b>&gt;</b>
          </button>
        </div>
        <div className='row mb-4'>
          {/* برای اپل */}
          <article className='berand-img col-lg-1'>
            {/* هر تصویر را در یک تگ <a> قرار دهید */}
            <a href="/brands/apple"> {/* مسیر صفحه مقصد را اینجا مشخص کنید */}
              <img src="src\assets\img\home\Vector-apple.svg" alt="برند اپل" />
            </a>
          </article>

          {/* برای سونی */}
          <article className='berand-img col-lg-2'>
            <a href="/brands/sony">
              <img src="src\assets\img\home\Vector-sony.svg" alt="برند سونی" />
            </a>
          </article>

          {/* برای سامسونگ */}
          <article className='berand-img col-lg-3'>
            <a href="/brands/samsung">
              <img src="src\assets\img\home\Vector-samsung.svg" alt="برند سامسونگ" />
            </a>
          </article>

          {/* برای کانن */}
          <article className='berand-img col-lg-2'>
            <a href="/brands/canon">
              <img src="src\assets\img\home\vactor-canon.svg" alt="برند کانن" />
            </a>
          </article>

          {/* برای هواوی */}
          <article className='berand-img col-lg-2'>
            <a href="/brands/huawei">
              <img src="src\assets\img\home\vactor-huawei.svg" alt="برند هواوی" />
            </a>
          </article>

          {/* برای لنوو */}
          <article className='berand-img col-lg-2'>
            <a href="/brands/lenovo">
              <img src="src\assets\img\home\vactor-lenovo.svg" alt="برند لنوو" />
            </a>
          </article>
        </div>
        <article className='col-12'>
          <a href="/brands/lenovo">
            <img src="src\assets\img\home\banner.svg" alt="برند لنوو" style={{ width: '100%' }} />
            <button style={{
              boxShadow: 'none',
              border: 'none',
              backgroundColor: '#FF6951',
              position: 'absolute',
              padding: '7px 25px',
              borderRadius: '5px',
              left: '27%',
              marginTop: '300px'
            }}>View</button>
          </a>
        </article>
      </section>
      <section className='row mt-5'>
        <div className='head-row'>
          <h3 className="float-end" style={{ width: '250px' }}>
            Our Blogs
          </h3>
          <button className="float-start View-all">
            View all <b>&gt;</b>
          </button>
        </div>
      </section>

      {/* بخش مقالات (Blogs) */}
      {/* این بخش حالا کامپوننت ArticleList را رندر می کند */}
      <section className="row blogs-section mt-5"> {/* کلاس blogs-section اضافه شد */}
        {/* کامپوننت ArticleList که خودش داده ها را دریافت و نمایش می دهد */}
        <ArticleList /> {/* <--- کامپوننت ArticleList در اینجا رندر می شود */}
      </section>
    </div>
  );
}


export default Home