// انتظر حدوث الحدث "input" على مربع البحث
document.getElementById("searchInput").addEventListener("input", function () {
    // الحصول على قيمة مربع البحث
    var searchTerm = this.value.toLowerCase();
    
    // الحصول على قائمة الأفلام
    var movieList = document.getElementsByClassName("movie-item");

    // عرض أو إخفاء الأفلام بناءً على البحث
    for (var i = 0; i < movieList.length; i++) {
        var movieName = movieList[i].innerText.toLowerCase();
        if (movieName.includes(searchTerm)) {
            movieList[i].style.display = "block"; // إظهار العنصر
        } else {
            movieList[i].style.display = "none"; // إخفاء العنصر
        }
    }
});




// القائمة المكونة من الأخبار
var newsList = [
  "خبر 1: هذا هو الخبر الأول",
  "خبر 2: هذا هو الخبر الثاني",
  "خبر 3: هذا هو الخبر الثالث",
  // يمكنك إضافة المزيد من الأخبار هنا
];

// متغير لتتبع الخبر الحالي
var currentNewsIndex = 0;

// عرض الخبر الأول عند بدء التحميل
showCurrentNews();

// انتظر حدوث الحدث "input" على مربع البحث
document.getElementById("searchInput").addEventListener("input", function () {
    // الحصول على قيمة مربع البحث
    var searchTerm = this.value.toLowerCase();

    // الحصول على العناصر الخاصة بالأخبار
    var newsBox = document.getElementById("newsBox");

    // عرض أو إخفاء الأخبار بناءً على البحث
    if (newsList[currentNewsIndex].toLowerCase().includes(searchTerm)) {
        newsBox.style.display = "block"; // إظهار العنصر
    } else {
        newsBox.style.display = "none"; // إخفاء العنصر
    }
});

// عرض الخبر الحالي
function showCurrentNews() {
    var newsBox = document.getElementById("newsBox");
    newsBox.innerText = newsList[currentNewsIndex];
}

// التبديل بين الأخبار
document.getElementById("nextNewsButton").addEventListener("click", function () {
    // زيادة الفهرس لعرض الخبر التالي
    currentNewsIndex = (currentNewsIndex + 1) % newsList.length;
    showCurrentNews();
});












// انشئ عنصر div لعرض الإعلان
var adDiv = document.createElement('div');
adDiv.id = 'advertisement'; // يمكنك تغيير هذا إلى الهوية أو الفئة التي تريدها

// قم بتخصيص نص الإعلان والمحتوى
adDiv.innerHTML = '<p>هذا هو الإعلان الخاص بنا!</p>';

// أضف العنصر إلى العنصر الذي تم إنشاؤه بواسطة السكريبت الأصلي
var container = document.getElementById('container-b648da115a008d9509a7fac590057c1b');
container.appendChild(adDiv);



<script async="async" data-cfasync="false" src="//pl21174538.toprevenuegate.com/b648da115a008d9509a7fac590057c1b/invoke.js"></script>
<div id="container-b648da115a008d9509a7fac590057c1b"></div>
