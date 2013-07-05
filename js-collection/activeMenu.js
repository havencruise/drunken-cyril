/* activeMenu - actively toggles highlight on a menu item based on id
 * Usage:
 *    Headers: <h3 id="your-heading">Your heading</h3>
 *    Menu items :
 *    <ul>
 *      <li> <a href="#your-heading">Your menu item</a> </li>
 *    </ul>
 */
$(function(){
  var prev;
  var n = 0;

  var headings = $('h3').map(function(i, el){
    return {
      top: $(el).offset().top,
      id: el.id
    }
  });

  function closest() {
    var h;
    var top = $(window).scrollTop();
    var i = headings.length;
    while (i--) {
      h = headings[i];
      if (top >= h.top) return h;
    }
  }

  $(document).scroll(function(){
    var h = closest();
    if (!h) return;

    if (prev) {
      prev.removeClass('active');
      prev.parent().parent().removeClass('active');
    }

    var a = $('a[href="#' + h.id + '"]');
    a.addClass('active');
    a.parent().parent().addClass('active');

    prev = a;
  });
});