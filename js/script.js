$(function () {
   var curent_li;
   $('#portofolio img').click(function () {
      var src = $(this).attr('src');
      curent_li = $(this).parent();
      $('#main').attr('src',src);
      $('#frame').fadeIn();
      $('#overlay').fadeIn();
   });
   $('#overlay').click(function () {
      $(this).fadeOut();
      $('#frame').fadeOut();
   })
   $('#right').click(function() {
      var next_li = curent_li.next();
      console.log(next_li.length);
      if (next_li.length < 1) {
         console.log('masuk ke if');
         var curent_ul = next_li.parent('ul');
         console.log('curent_ul = '+curent_ul.length);
         var first_li = curent_ul.children();
         var first_src = first_li.children('img').attr('src');
         $('#main').attr('src',first_src);
         curent_li = first_li;
      }
      else {
      console.log('masuk ke else');
      var next_src = next_li.children('img').attr('src');
      $('#main').attr('src',next_src);
      curent_li = next_li;
      }
   });
   $('#left').click(function() {
      var prev_li = curent_li.prev();
      var prev_src = prev_li.children('img').attr('src');
      $('#main').attr('src',prev_src);
      curent_li = prev_li;
   });
});
