const listIcon = document.querySelector('.list_icon');
const links = document.querySelector('.header ul');

// التحكم في عرض القائمة عند النقر على الأيقونة
listIcon.addEventListener('click', () => {
  if (links.style.display === 'flex') {
    links.style.display = 'none';
  } else {
    links.style.display = 'flex';
  }
});

// مراقبة حجم الشاشة وإعادة عرض القائمة في الشاشات الكبيرة
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    links.style.display = 'flex';  // عرض القائمة في الشاشات الكبيرة
  } else {
    links.style.display = 'none';  // إخفاء القائمة في الشاشات الصغيرة
  }
});

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3, // عدد الشرائح المرئية في الشاشات الكبيرة
    spaceBetween: 70,
    loop: true,
    centeredSlides: true, // اجعل الشريحة النشطة في المنتصف
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '#next-slide', // السهم التالي
        prevEl: '#prev-slide', // السهم السابق
    },
    breakpoints: {
        900: {
            slidesPerView: 3, // عرض ثلاث شرائح على الشاشات المتوسطة
        },
        768: {
            slidesPerView: 2, // عرض شريحتين على الشاشات المتوسطة
        },
        500: {
            slidesPerView: 1, // عرض شريحة واحدة على الشاشات الأصغر
        },
        100: {
            slidesPerView: 1, // عرض شريحتين على الشاشات المتوسطة
        },

        
    },
});

  

