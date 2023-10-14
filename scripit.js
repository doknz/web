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