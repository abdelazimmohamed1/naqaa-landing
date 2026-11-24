// سكربت بسيط: لما المستخدم يأكد الحجز، نخفي الفورم ونظهر رسالة شكر باسمه
// ملحوظة: لو المشروع مسموح فيه HTML و CSS بس، امسح وسم <script> من index.html
// والفورم هيفضل شغال بالتحقق العادي (required و pattern) لكن بدون رسالة الشكر.

document.getElementById('f').addEventListener('submit', function (e) {
  e.preventDefault(); // نمنع إعادة تحميل الصفحة

  // بناخد أول اسم من الاسم الكامل
  var firstName = document.getElementById('n').value.trim().split(' ')[0];

  // نجهز رسالة الشكر بالاسم والخدمة المختارة
  var message = 'شكرًا يا ' + firstName + '، هنتصل بيك خلال ساعة لتأكيد ميعاد ' +
                document.getElementById('s').value + '.';
  document.getElementById('msg').textContent = message;

  // نخفي الفورم ونظهر رسالة النجاح
  this.style.display = 'none';
  document.getElementById('ok').classList.add('show');
});
