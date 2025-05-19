// ArticleCard.js
import React, { useState, useEffect, useRef } from 'react';
// فرض می‌کنیم شما یک فایل استایل برای این کامپوننت دارید یا از ArticleStyles.css استفاده می‌کنید

const ArticleCard = ({ article, isFeatured, onFeatureToggle, displayIndex }) => {
    // State و Ref برای مدیریت برش متن عنوان
    const [truncatedTitle, setTruncatedTitle] = useState(article.title);
    const titleRef = useRef(null);
    // تعداد تقریبی کاراکترها که در دو خط جای می گیرند (این عدد را تنظیم کنید)
    // این عدد باید بر اساس عرض کارت و اندازه فونت تنظیم شود.
    const estimatedTitleCharsPerTwoLines = 60; // تخمین تقریبی

    // useEffect برای اجرای منطق برش متن عنوان
    useEffect(() => {
        const truncateTitle = () => {
            const titleElement = titleRef.current;
            if (!titleElement || !article.title) {
                setTruncatedTitle(article.title); // اگر عنصر یا عنوان وجود ندارد، نام کامل را نمایش بده
                return;
            }

            // منطق ساده برش بر اساس تعداد کاراکتر
            if (article.title.length > estimatedTitleCharsPerTwoLines) {
                const shortened = article.title.substring(0, estimatedTitleCharsPerTwoLines) + '...';
                setTruncatedTitle(shortened);
            } else {
                setTruncatedTitle(article.title);
            }
        };

        truncateTitle();

        // در یک سناریوی واقعی، برای مدیریت تغییر اندازه پنجره باید اینجا منطق اضافه شود
        // و همچنین برای برش دقیق‌تر، باید ارتفاع واقعی عنصر چک شود.

    }, [article.title, estimatedTitleCharsPerTwoLines]); // وابستگی ها

    // مدیریت کلیک روی دکمه "افزودن به برگزیده"
    const handleButtonClick = (e) => {
        e.stopPropagation(); // جلوگیری از انتشار رویداد به عناصر والد (اگر کارت خودش لینک باشد)
        onFeatureToggle(article.id); // فراخوانی تابعی که از والد آمده است
    };

    // --- منطق اضافه شده برای تعیین کلاس استایل بر اساس displayIndex ---

    const getCardStyleClass = () => {
        // نام کلاس پایه که برای همه کارت ها مشترک است
        const baseClass = "article-card";

        // بر اساس displayIndex یک کلاس اضافی برای استایل متفاوت اضافه می کنیم
        // مثال: برای شاخص 0 کلاس 'article-card-style-1'، برای شاخص 1 کلاس 'article-card-style-2' و برای شاخص 2 کلاس 'article-card-style-3'

        switch (displayIndex) {
            case 0:
                return `${baseClass} article-card-pos-0`;
            case 1:
                return `${baseClass} article-card-pos-1`;
            case 2:
                return `${baseClass} article-card-pos-2`;
            default:
                return baseClass; // اگر visibleCards بیشتر از 3 بود یا شاخص نامعتبر بود، از کلاس پایه استفاده کن
        }

        // یا اگر فقط دو استایل (350 و 150) دارید و میخواهید نوبتی باشند:
        // return `${baseClass} ${
        //    displayIndex % 2 === 0 ? 'article-card-height-350' : 'article-card-height-150'
        // }`;
    };
    const cardClassName = getCardStyleClass();

    return (
        <div className={cardClassName}
        // می توانید کلیک روی خود کارت را هم مدیریت کنید اگر لینک نیست
        // onClick={() => onFeatureToggle(article.id)}
        >
            {/* لینک کردن کل کارت به صفحه مقاله (اختیاری) */}
            {/* <a href={`/articles/${article.id}`} className="article-link-wrapper"> */}

            {/* بخش تصویر */}
            <div className="article-image-container">
                <img src={article.imageUrl} alt={article.title} className="article-image" />
            </div>

            {/* بخش محتوای متنی */}
            <div className="article-content">
                {/* عنوان مقاله با برش متن */}
                {/* فرض می کنیم عنوان در تگ h3 یا h4 است */}
                <h4 className="article-title" ref={titleRef}>
                    {truncatedTitle}
                </h4>

                {/* خلاصه یا قسمتی از متن مقاله (اگر API این را فراهم کند) */}
                {/* اگر فقط عنوان دارید، این بخش را حذف کنید یا از API بخواهید excerpt را هم بدهد */}
                {article.excerpt && (
                    <p className="article-excerpt">
                        {article.excerpt} {/* نمایش خلاصه متن */}
                    </p>
                )}


                {/* بخش متادیتای مقاله (تاریخ، زمان مطالعه) */}
                <div className="article-metadata">
                    {article.date && (
                        <span className="article-date">
                            {/* آیکون تقویم (می توانید از فونت آیکون یا SVG استفاده کنید) */}
                            <span>📅</span> {article.date}
                        </span>
                    )}
                    {article.readTime && (
                        <span className="article-read-time">
                            {/* آیکون ساعت یا کتاب (می توانید از فونت آیکون یا SVG استفاده کنید) */}
                            <span>📖</span> {article.readTime} min read
                        </span>
                    )}
                </div>

                {/* دکمه/آیکون افزودن به برگزیده */}
                <button
                    className={`feature-button ${isFeatured ? 'featured' : ''}`}
                    onClick={handleButtonClick}
                    aria-label={isFeatured ? "Remove from featured" : "Add to featured"} // برای دسترسی پذیری
                >
                    {/* آیکون ستاره یا بوکمارک (می توانید از فونت آیکون یا SVG استفاده کنید) */}
                    {isFeatured ? '⭐' : '☆'} {/* نمایش آیکون پر شده یا خالی */}
                </button>

            </div> {/* پایان article-content */}
            {/* </a> */} {/* پایان article-link-wrapper */}
        </div> // پایان article-card
    );
};

export default ArticleCard;