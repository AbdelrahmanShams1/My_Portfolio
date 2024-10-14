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

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000, // التبديل كل 3 ثواني
      disableOnInteraction: false, // يستمر التبديل حتى بعد التفاعل
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  

