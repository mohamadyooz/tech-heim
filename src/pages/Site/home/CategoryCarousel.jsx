import React from 'react';
import CategoryCard from './CategoryCard'; // وارد کردن کامپوننت CategoryCard


function CategoryCarousel({ categories }) {
    return (
      // اعمال کلاس CSS به کانتینر اصلی
      <div className="category-carousel-container" style={{padding:'0'}}>
        {categories.map((category, index) => (
          // اعمال کلاس CSS به هر آیتم
          <div key={index} className="category-carousel-item">
            <CategoryCard title={category.title} imageUrl={category.imageUrl} />
          </div>
        ))}
      </div>
    );
  }

export default CategoryCarousel;