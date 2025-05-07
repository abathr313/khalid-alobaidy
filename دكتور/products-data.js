const products = [
    {
      id: 1,
      name: "نظارة طبية كلاسيكية",
      price: 250,
      discount: 15, // خصم 15%
      image: "images/glasses1.jpg",
      description: "نظارة طبية بإطار كلاسيكي أنيق وخفيف الوزن، مثالية للاستخدام اليومي.",
      category: "طبية",
      brand: "Ray-Ban",
      colors: ["أسود", "ذهبي"],
      rating: 4.5,
      reviews: 120,
      stock: 30,
      isNew: false
    },
    {
      id: 2,
      name: "نظارة شمسية رجالية",
      price: 320,
      image: "images/glasses2.jpg",
      description: "نظارة شمسية رجالية بحماية UV عالية، تصميم عصري ومتين.",
      category: "شمسية",
      brand: "Oakley",
      colors: ["أزرق", "فضي"],
      rating: 4.8,
      reviews: 95,
      stock: 15,
      isNew: true
    },
    {
      id: 3,
      name: "نظارة نسائية",
      price: 280,
      discount: 10, // خصم 10%
      image: "images/glasses3.jpg",
      description: "نظارة نسائية أنيقة بخيارات ألوان متعددة تناسب جميع الأذواق.",
      category: "نسائية",
      brand: "Prada",
      colors: ["أحمر", "ذهبي", "فضي"],
      rating: 4.7,
      reviews: 200,
      stock: 0, // غير متوفر
      isNew: false
    }
  ];
  products.forEach(product => {
    if (product.stock === 0) {
      Toastify({
        text: `⚠️ المنتج "${product.name}" غير متوفر حالياً`,
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "#f39c12"
      }).showToast();
    }
  });
  // تفعيل التنبيه تلقائي عند فتح الصفحة إذا كان فيه تاريخ محفوظ
window.addEventListener('DOMContentLoaded', () => {
  const lastDate = localStorage.getItem('lastVisit');
  if (lastDate) {
    document.getElementById('lastVisitDate').value = lastDate;
    checkReviewReminder();
  }
});
