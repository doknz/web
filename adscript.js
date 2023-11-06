// انشئ عنصر div لعرض الإعلان
var adDiv = document.createElement('div');
adDiv.id = 'advertisement'; // يمكنك تغيير هذا إلى الهوية أو الفئة التي تريدها

// قم بتخصيص نص الإعلان والمحتوى
adDiv.innerHTML = '<p>هذا هو الإعلان الخاص بنا!</p>';

// أضف العنصر إلى صفحة الويب
document.body.appendChild(adDiv);
