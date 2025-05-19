// ArticleList.js
// این کد بر اساس مفاهیم React 19 (با کامپایلر فعال) برای Client Components نوشته شده است.
// در React 19 با کامپایلر فعال، نیاز کمتری به useMemo و useCallback است.
// useMemo در محاسبه visibleArticles حذف شده است.
import React, { useState, useEffect, useRef } from 'react'; // <--- useMemo حذف شد
import axios from 'axios';
import ArticleCard from './ArticleCard';
import '/src/assets/css/ArticleStyles.css';

const ArticleList = () => { // تعریف کامپوننت تابعی ArticleList

    // --- State ها ---
    const [articles, setArticles] = useState([]); // State برای نگهداری مقالات
    const [loading, setLoading] = useState(true); // State برای وضعیت بارگذاری
    const [error, setError] = useState(null); // State برای وضعیت خطا

    // State برای نگهداری لیست ID مقالات برگزیده با پایداری در LocalStorage
    const [featuredArticleIds, setFeaturedArticleIds] = useState({});

    // --- State و ثابت برای نمایش تعداد مشخصی از مقالات (مانند کاروسل/صفحه بندی) ---
    const visibleCards = 3; // تعداد مقالاتی که همزمان نمایش داده شوند
    // --- useEffect برای بارگذاری وضعیت برگزیده از LocalStorage ---
    // این Effect یک بار در ابتدا اجرا شده و وضعیت ذخیره شده را بارگذاری می کند.
    useEffect(() => {
        try {
            const savedFeatured = localStorage.getItem('featuredArticleIds');
            if (savedFeatured) {
                setFeaturedArticleIds(JSON.parse(savedFeatured));
            }
        } catch (e) {
            console.error("Failed to load featured articles from localStorage", e);
            setFeaturedArticleIds({}); // در صورت خطا، با شیء خالی شروع کن
        }
    }, []); // اجرا فقط یک بار در mount

    // --- useEffect برای ذخیره وضعیت برگزیده در LocalStorage ---
    // این Effect هر بار که State featuredArticleIds تغییر کند، آن را در LocalStorage ذخیره می کند.
    useEffect(() => {
        try {
            localStorage.setItem('featuredArticleIds', JSON.stringify(featuredArticleIds));
        } catch (e) {
            console.error("Failed to save featured articles to localStorage", e);
        }
    }, [featuredArticleIds]); // وابسته به featuredArticleIds

    // --- هوک useEffect برای دریافت داده‌ها از API ---
    // این Effect برای دریافت داده پس از اولین رندر استفاده می شود.
    useEffect(() => {
        setLoading(true); // تنظیم وضعیت بارگذاری به true قبل از شروع درخواست
        setError(null); // پاک کردن خطاهای قبلی

        const fetchArticles = async () => {
            try {
                // آدرس API مقالات شما
                const response = await axios.get('http://localhost:3003/blog');
                if (Array.isArray(response.data)){
                    const sortedData = [...response.data].sort((a,b) => {
                        const dateA = new Date(a.date);
                        const dateB = new Date(b.date);
                        return dateB.getTime()- dateA.getTime();
                    });
                    setArticles(sortedData);
                }else{
                    setError(new Error("Invalid data format from API"));
                    setArticles([])
                }
            } catch (err) {
                setError(err); // ذخیره خطا در State
                setArticles([]);
                
            } finally {
                setLoading(false); // پایان بارگذاری
            }
        };

        fetchArticles(); // فراخوانی تابع دریافت داده

    }, []); // وابستگی ها: [] به معنی اجرا فقط یک بار پس از اولین رندر است.

    // --- محاسبه مقالات قابل مشاهده ---
    // در React 19 با کامپایلر فعال، useMemo برای این محاسبه لازم نیست.
    // کامپایلر این محاسبه را به صورت خودکار و بهینه Memoize می کند.
    const getVisibleArticles = () => {
        if (!articles || articles.length === 0) return [];
        const startIndex = 0;
        const visibleArticleIndices = [];
        for (let i = 0; i < visibleCards; i++) {
            visibleArticleIndices.push((startIndex + i) % articles.length);
        }
        return visibleArticleIndices.map(index => articles[index]);
    };

    // فراخوانی تابع در بدنه کامپوننت. کامپایلر این را بهینه می کند.
    const visibleArticles = getVisibleArticles(); // <--- استفاده از نتیجه محاسبه

    // --- تابع مدیریت وضعیت برگزیده کردن یک مقاله ---
    const handleFeatureToggle = (articleId) => {
        // به روز رسانی State با استفاده از تابع به روز رسانی برای دسترسی به مقدار قبلی
        setFeaturedArticleIds(prevFeatured => ({
            ...prevFeatured, // کپی کردن State قبلی
            [articleId]: !prevFeatured[articleId] // برعکس کردن وضعیت برگزیده بودن مقاله فعلی
        }));
        // ذخیره سازی در LocalStorage توسط Effect جداگانه مدیریت می شود.
    };


    // --- رندر مشروط ---
    // نمایش پیام بارگذاری، خطا یا عدم وجود مقاله بر اساس وضعیت ها.
    if (loading) {
        return <div className="article-list-container">در حال بارگذاری مقالات...</div>;
    }

    if (error) {
        return <div className="article-list-container">خطا در بارگذاری مقالات: {error.message}</div>;
    }

    // اگر لیست مقالات اصلی یا مقالات قابل مشاهده خالی است.
    if (!articles || articles.length === 0) {
        return (
            <div className="article-list-container">
                <h2>آخرین مقالات</h2> {/* عنوان بخش */}
                <p>مقاله‌ای یافت نشد.</p> {/* پیام در صورت عدم وجود مقاله */}
            </div>
        );
    }

    // --- JSX اصلی برای نمایش لیست مقالات ---
    return (
        <div className="article-list-container"> {/* کانتینر اصلی */}
            <div className="articles-grid"> {/* کانتینر برای چیدمان گرید/فلکس کارت‌ها */}
                {/* map کردن آرایه visibleArticles (محاسبه شده و بهینه شده توسط کامپایلر) */}
                {visibleArticles.map((article , index) => (
                    // رندر کردن کامپوننت ArticleCard برای هر مقاله قابل مشاهده
                    <ArticleCard
                        key={article.id} // کلید منحصر به فرد
                        article={article} // ارسال داده های مقاله
                        // ارسال وضعیت برگزیده بودن بر اساس ID مقاله
                        isFeatured={!!featuredArticleIds[article.id]}
                        // ارسال تابع مدیریت برگزیده کردن
                        onFeatureToggle={handleFeatureToggle}
                        displayIndex={index} // <--- ارسال index به عنوان پراپ جدید
                    />
                ))}
            </div>
        </div>
    );
};

export default ArticleList; // Export کامپوننت