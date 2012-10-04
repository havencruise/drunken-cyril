(function(undefined){var g="#main",h=".item",i=".item.filtered",j=".large",k=".large .item:last",l=".medium",m=".medium .item:last",n=".singleton-element",o=".singleton-element, #injected-iframe",p=".slice",q=".small",r=".small .item:last",s=":text",u="</style>",v='<style id="css">',w="CSS",x="Item",y="Main",z="Slice",A="body",B="column:large",C="column:medium",D="column:small",E="data-id",F="filtered",G="head",H="head #css",I="head style",J="html,body",K="new",L="size:thumbnail",M="templatechange",N;
blogger.templates().compile('<\!-- Expected scope: Any. Attributes {format, type, maxwidth, maxheight} --\>
{template:Adsense}
{block:HasAdsense}
<div class=\'adsense\' data-host=\'{AdsenseHost}\' data-client=\'{AdsenseClient}\' data-format=\'{format}\' data-type=\'{type}\' data-maxwidth=\'{maxwidth}\' data-maxheight=\'{maxheight}\' data-alternateurl=\'http://img2.blogblog.com/img/blogger_ad.html\' data-url=\'{Permalink}\'></div>
{/block:HasAdsense}
{/template:Adsense}
<\!-- Attributes {class, top, bottom, title} --\>
{template:Ribbon}
{block:Ifurl}
<a class="ribbon {class} {block:small}small{/block:small}" title="{title}" href="{url}">
{/block:Ifurl}
{block:IfNoturl}
<abbr class="ribbon {class} {block:small}small{/block:small}" title="{title}">
{/block:IfNoturl}
  <div class="top ribbon-piece">{top}</div>
  <div class="bottom ribbon-piece">{bottom}</div>
  <div class="tail">
    <div class="left ribbon-piece"></div>
    <div class="right ribbon-piece"></div>
  </div>
{block:Ifurl}
</a>
{/block:Ifurl}
{block:IfNoturl}
</abbr>
{/block:IfNoturl}
{/template:Ribbon}

<\!-- Attributes {class, empty, value} --\>
{template:Bubble}
<span class="bubble {block:empty}empty{/block:empty} {class}" title="{title}">
  <span class="bubble-content">{value}</span>
  <span class="bubble-tail"></span>
</span>
{/template:Bubble}

<\!-- Placeholder template for common (hidden) includes across views. --\>
{template:MiscHidden}
{block:browser:chrome}
<div id="chromefix">
<\!-- Fix Chrome 12/13/14 bug with GPU accelerated composition causing
flickering/performance issues. Note: put this last, else text glitches. --\>
</div>
{/block:browser:chrome}
{/template:MiscHidden}

{template:Loading}
<div id="loading">
  <span>{lang:Loading}</span>
</div>
{/template:Loading}

{template:Menu}
<div class="menu">
  <span class="menu-heading">{Title}<span class="indicator"></span></span>
  <ul>
    {block:Items}
    <li class="{Label}"><span class="menu-background"></span><a class="menu-item" href="{URL}" target="_self">{Label}</a></li>
    {/block:Items}
  </ul>
</div>
{/template:Menu}

{template:Message}
<div id="message"><span>{text}</span></div>
{/template:Message}

{template:EmptyMessage}
{block:IfNotPostCount}{Message text="{lang:No posts found}"}{/block:IfNotPostCount}
{/template:EmptyMessage}

{template:Feedback}
{block:IfNotCustomDomain}
<script type="text/javascript">
(function() { // Protect global namespace
  var prefix = (\'https:\' == document.location.protocol) ? \'https://ssl\' : \'http://www\';
  var script = document.createElement(\'script\');
  script.type = \'text/javascript\';
  script.src = prefix + \'.gstatic.com/feedback/api.js\';
  document.body.appendChild(script);
})();
<\/script>
<a href="http://www.google.com/support/forum/p/blogger" class="feedback" tabindex="0" onclick="
try{
  userfeedback.api.startFeedback({
    productId: \'74\'
  });
  return false;
}catch(e){}">{lang:Send feedback}</a>
{/block:IfNotCustomDomain}
{/template:Feedback}
<\!-- Expected scope: Post --\>
{template:Comments}
<div class="comments" data-defer="{defer}">
  <div class="comments-header toggle-switch">
    {Bubble class="comments-count {class}" value="{CommentCount}" title="{CommentCountWithLabel}"}
    <h3>
    {block:CommentCount}{lang:View comments}{/block:CommentCount}
    {block:IfNotCommentCount}{lang:Add a comment}{/block:IfNotCommentCount}
    </h3>
  </div>
  {BloggerComments}
</div>
{/template:Comments}

<\!-- Comments/Notes: interchangeable --\>
{template:Notes}
{Comments}
{/template:Notes}

<\!-- Expected scope: Post --\>
{template:BloggerComments}
<div class="comments-wrapper blogger-comments toggle-container" data-itemid="{PostID}">
  <div class="comments-content"></div>
  <div class="comments-footer">
    <iframe frameborder="0" class="comments-replybox"
        data-src="{BloggerBase}/comment-iframe.g?blogID={BlogID}&amp;postID={PostID}"></iframe>
  </div>
</div>
{/template:BloggerComments}

{template:CommentBubble}
{block:Post.CommentCount}
{Bubble class="comments-count {class}" value="{Post.CommentCount}" title="{Post.CommentCountWithLabel}"}
{/block:Post.CommentCount}
{/template:CommentBubble}
{template:GadgetDock}
{block:Gadgets}
<div id="gadget-dock" class="gadget-notifying"></div>
{/block:Gadgets}
{/template:GadgetDock}

<\!-- Attributes {id} --\>
{template:GadgetDockItem}
<div class="gadget-item" data-gadget-id="{id}">
</div>
{/template:GadgetDockItem}

<\!-- Attributes {title, icon, icon-selected} --\>
{template:GadgetDockItemContents}
  <div class="gadget-icons">
    <img class="gadget-icon" src="{icon}" />
    <img class="gadget-icon-selected" src="{icon-selected}" />
  </div>
  <div class="gadget-container">
    <div class="gadget">
      <span class="gadget-title">{title}</span>
      <div class="gadget-content"></div>
    </div>
  </div>
{/template:GadgetDockItemContents}

{template:GadgetDockResizeDetector}
<iframe class="gadget-resize-detector"></iframe>
{/template:GadgetDockResizeDetector}
<\!-- Expected scope: Blog --\>
{template:Header}
<div id="header-container">
  <div id="header" class="header">
    <div class="header-bar">
      {block:BlogID}{BlogHeader}{/block:BlogID}
      {block:PlusID}{block:IfNotBlogID}{PlusHeader}{/block:IfNotBlogID}{/block:PlusID}
    </div>
    <div class="header-drawer {block:fixed}sticky open{/block:fixed}">
      {block:HasViews}
      <div id="views" class="{block:HasPages}menu{block:HasPages}{block:IfNotPages}tabs{block:IfNotPages}">
        <span class="menu-heading">{CurrentView}<span class="indicator"></span></span>
        <ul>
          {block:Views}
          <li class="{Label}"><span class="menu-background"></span><a class="menu-item {block:Current}current{/block:Current}" href="{URL}" target="_self">{Label}</a></li>
          {/block:Views}
        </ul>
      </div>
      {/block:HasViews}
      {block:HasPages}
      <div id="pages" class="tabs">
        <span class="menu-heading">Pages<span class="indicator"></span></span>
        <ul>
          {block:Pages}
          <li><span class="menu-background"></span><a class="menu-item" href="{URL}">{Label}</a></li>
          {/block:Pages}
        </ul>
      </div>
      {/block:HasPages}
      <div class="blog-admin admin-controls">
        <a class="new-post" href="{BloggerBase}/post-edit.g?blogID={BlogID}&from=pencil" target="_self" title="New post"></a>
        <a class="dashboard" href="http://www.blogger.com/home" target="_self" title="Dashboard"></a>
      </div>
      <a class="feed-link" href="{RSS}" title="{lang:Subscribe via RSS}" target="_blank" type="application/atom+xml"></a>
    </div>
  </div>
</div>
<script>
  (function($) {
    {block:IfNotfixed}
    // Make the header drawer sticky.
    var drawer = $(\'.header-drawer\');
    if (drawer && drawer.length) {
      var offset = drawer.offset().top - (parseInt(drawer.css(\'top\'), 10) || 0);
      $(window).scroll(function(e){
        drawer.toggleClass(\'sticky\', ($(this).scrollTop() >= offset));
      });
    }
    {/block:IfNotfixed}

    // Make the pages switch between tabs and menu as needed
    var pages = $(\'#pages\');
    var tabs = pages.length ? pages : $(\'#views\'); // If no pages, views will be tabs, same resizing applies.
    if (tabs.length) {
      function onResize(e) {
        tabs.removeClass(\'menu\').addClass(\'tabs\');
        var taken = 0;
        tabs.parent().children().each(function() {
          taken += $(this).outerWidth();
        });
        var overflowing = tabs.parent().width() < (taken + 50); // Add a buffer for safety.
        overflowing ? tabs.removeClass(\'tabs\').addClass(\'menu\') : tabs.addClass(\'tabs\');
      }
      $(window).resize(onResize);
      onResize(); // Resize immediately.

      // Mark a page as selected when it is open.
      var rePage = new RegExp(\'.*/p(/[^/]+.html$)\');
      $(blogger.ui()).bind(\'select clearselection\', function(e, item) {
        pages.find(\'.menu-item\').each(function(){
          var current = false;
          if (item) {
            var us = rePage.exec($(this).attr(\'href\'));
            var them = rePage.exec(item.url);
            current = !!(us && them && (us[1] == them[1]));
          }
          $(this).toggleClass(\'current\', current);
        });
      });
    }
  })(jQuery);
<\/script>
{/template:Header}

{template:BlogHeader}
<span class="title" onclick="$(\'html,body\').stop().animate({\'scrollTop\': 0})">
  <a href="/" target="_self"><h1 title={JSTitle}>{Title}</h1></a>
  {block:HasDescription}<h3 title={JSDescription}>{Description}</h3>{/block:HasDescription}
</span>
<input type="text" id="search" autocomplete="off" placeholder="{lang:Search}">
{/template:BlogHeader}

{template:PlusHeader}
<span class="title" onclick="$(\'html,body\').stop().animate({\'scrollTop\': 0})">
  <a href="{AuthorURL}" target="_self"><h1 title={JSTitle}>{Title}</h1></a>
  <div id="follow-author">
    <div class="plus-badge g-plus" data-href="{PlusBase}/b/{PlusID}/" data-size="smallbadge"></div>
  </div>
</span>
{/template:PlusHeader}
{template:Overview}
<div id="overview">
  <div class="overview-backdrop"></div>
</div>
{/template:Overview}

{template:OverviewItem}
<div class="overview-panel">
  <div class="overview-wrap">
    <div class="overview-inner">
      <div class="overview-header">
        <div class="overview-controls-left">
          <a class="kd-button small left previous {block:IfNotPreviousPost}disabled{/block:IfNotPreviousPost}" title="{lang:Newer}" href="{PreviousPost}"><img width="21" height="21" src=\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAYUlEQVQ4y2P4//8/A7Uxw6ihuCWxAFZ2DgMgfgCiqWIo1MAPQPwfZDDFhqIZ+IFil2IzECROtqG4DCTbUHwGUmLoA6iBIJyAHnGDx6U0CVOaxT7N0inNchTV8v5oIU0WBgCihhmGBdyx8gAAAABJRU5ErkJggg==\'/>
          </a>
          <a class="kd-button small right next {block:IfNotNextPost}disabled{/block:IfNotNextPost}" title="{lang:Older}" href="{NextPost}"><img width="21" height="21" src=\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAYUlEQVQ4jWP4//8/A7Ux1Q0cRoaysnMYAPEDEM2ABZBrKMjA/0D8AZvBlLj0Ay6DyTIUBPAZTLah+AymyFBcBlNsKNTgBKihIPxg8LmU6mFK9dinSTqlZY6ibt4nF49wQwEZ7RmGkO+jqQAAAABJRU5ErkJggg==\'/>
          </a>
        </div>
        {Sharing url=\'{Permalink}\' text=\'{Title}\' delay=\'1000\' disable-twitter="true" disable-facebook="true"}
        <div class="overview-controls-right">
          <a class="kd-button small close" title="{lang:Close}" href="/">
            <img width="21" height="21" src=\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAEZ0FNQQAAsY58+1GTAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAK9JREFUeNpjYBgFQxpoAPFqIObBIicBxOuhNFbAjEN8NxA7AbEd1PBfSAbuB2IbIFYB4pWkGHoQiEOAWAvJYCGogSBf3ADiUCD+gk0zI4Eg2A913REgFkEy0BGIX5DqfRB4A8RbkVwsQoyBIMBEIMI+QDGyRV8IxTI+l0qgheEftDD+Raqh6AY6QmM6hBiDcRkKMlAPLQzRw1gNajDRAJQOT+NI4CDXn4fSo2AUoAEAj24p6G8syswAAAAASUVORK5CYII=\'/>
          </a>
        </div>
      </div>
      <div class="overview-content" tabindex="0">
      {Post disable-sharing="false" disable-plusone="true"}
      </div>
    </div>
  </div>
</div>
{/template:OverviewItem}

{template:ViewItem}
<div class="viewitem-panel {block:Placeholder}placeholder{/block:Placeholder}">
  <div class="viewitem-wrap">
    <div class="viewitem-background"></div>
    <div class="viewitem-header"></div>
    <div class="viewitem-inner">
      {block:Placeholder}
      <span class="blogger-gear"></span>
      {/block:Placeholder}
      {block:IfNotPlaceholder}
      <div class="viewitem-content" tabindex="0">
      {block:Post}{Post}{/block:Post}
      {block:Page}{Page}{/block:Page}
      </div>
      {block:IfNotPlaceholder}
    </div>
  </div>
</div>
{/template:ViewItem}
<\!-- Expected scope: Post --\>
{template:Post}
  {block:Blogger}{BloggerPost}{/block:Blogger}
  {block:IfNotBlogger}{GenericPost}{/block:IfNotBlogger}
{/template:Post}

{template:BloggerPost}
<div class="article hentry {TagsAsClasses} {block:HasAdsense}has-ads{/block:HasAdsense}">
  {block:HasAdsense}
  <div class="adsense-aside">
    {Adsense format="wideskyscraper"}
  </div>
  {/block:HasAdsense}
  <div class="article-header">{PostHeader}</div>
  <div class="article-content entry-content">{Body}</div>
  <div class="article-footer">
    {PublishInfo}
    {block:HasTags}
    <div class="labels">
      {lang:Labels}: {block:Tags}<a class="label" href="{TagURL}" target="_self">{Tag}</a> {/block:Tags}
    </div>
    {/block:HasTags}
    {block:IfNotdisable-sharing}
    {Sharing url=\'{Permalink}\' text=\'{Title}\' defer="{defer-sharing}" delay=\'1000\'}
    {/block:IfNotdisable-sharing}
  </div>

  {block:HasComments}
    {Comments defer="true"}
  {/block:HasComments}

  {block:HasAdsense}
  <div class="adsense-footer">
    {Adsense format="leaderboard"}
  </div>
  {/block:HasAdsense}
</div>
{/template:BloggerPost}

{template:PublishInfo}
<div class="publish-info">
  {block:PostAuthorURL}
    {lang:Posted TimeAgo by PostAuthorName 2}
  {block:PostAuthorURL}
  {block:IfNotPostAuthorURL}
    {lang:Posted TimeAgo by PostAuthorName}
  {/block:IfNotPostAuthorURL}
</div>
{/template:PublishInfo}

{template:PostHeader}
{Ribbon class="date" top="{ShortMonth}" bottom="{DayOfMonth}" title="{TimeAgo}" url="{Permalink}"}
<h1 class="title entry-title">
  {block:RelatedURL}
  <a href="{RelatedURL}">{ReblogBadge}{Title}</a>
  {/block:RelatedURL}
  {block:IfNotRelatedURL}
  <a href="{Permalink}" rel="bookmark">{ReblogBadge}{Title}</a>
  {/block:IfNotRelatedURL}
  {PostAdmin}
</h1>
{/template:PostHeader}

<\!-- Expected scope: Page --\>
{template:Page}
<div class="article hentry {TagsAsClasses}">
  <div class="article-header">
    <h1 class="title entry-title">
      <a href="{Permalink}" rel="bookmark">{Title}</a>
      <span class="blog-admin"><a class="edit" href="{BloggerBase}/page-edit.g?blogID={BlogID}&pageID={PageID}&from=pencil" target="_self" title="Edit"></a></span>
    </h1>
  </div>
  <div class="article-content entry-content">{Body}</div>
  <div class="article-footer"></div>
</div>
{/template:Page}

{template:PostAdmin}
{block:Blogger}
<span class="blog-admin"><a class="edit" href="{BloggerBase}/post-edit.g?blogID={BlogID}&postID={PostID}&from=pencil" target="_self" title="Edit"></a></span>
{/block:Blogger}
{/template:PostAdmin}

{template:GenericPost}
<div class="article hentry">
  <div class="article-header">{PostHeader}</div>
  <div class="article-content entry-content">
    {Body}
    {block:Attachments}
      {block:Photo}
        <img src="{PhotoURL-HighRes}" width="{PhotoWidth}" height="{PhotoHeight}" alt="{Caption}" style="display: block;"/>
      {/block:Photo}
      {block:Video}{Content}{/block:Video}
      {block:Article}
      <div>
        <h4>
          <a href="{URL}" title="{Caption}">{Caption}</a>
        </h4>
        {block:HasContent}
          <p>{Content}</p>
        {/block:HasContent}
      </div>
      {/block:Article}
    {/block:Attachments}
  </div>
  <div class="article-footer">
    {PublishInfo}
    {SharePlusOne url="{Permalink}" text="{Title}"}
  </div>
  {block:HasComments}
    {Comments defer="true"}
  {/block:HasComments}
</div>
{/template:GenericPost}

{template:ReblogBadge}
{block:Flickr}
<span class="reblog-badge">
<img src=\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABV0RVh0Q3JlYXRpb24gVGltZQA2LzI0LzA59sFr4wAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAAG9SURBVDiNlZK9ahtBFIXPDOP9wzvKSsRNcHCCA8EpQtwtfgEX9iMImbR5gDxJKhfCpHSrJg9g0ikEEdwoEagTSLt4QLE8O/dOCuEVKgLe2x7Ouee7M2I8Hre99wNmztFgpJTfhRBnylo7yLIsz7IMQognmb33KMsyL8tyoKy1eRzHqKqqSQHEcYzZbJYr5xyEEGDmRgFCCDjnoKqqAhE1Mj9OVVXrgKbbtwKcc2Bm3Pz8g96XIcxfB50oXH06xsn71wCA6c0vTHpfweYBUod4ddXFy5N3cM5BPgb0Lscw4QHQfgMTHuDi8jeYGcyMoneNQ5PiLZ7j0KQoLq7BzJsbMDNM8AIQsq535+Mabd/EkNg88f6dAjNvI2idwtxvbtGKZR2Q6BQwD7UmWmHdQBIRmBn97h50ugvsJNDpLvrdvRoh6J8j0gkiKEQ6wU7/HMwMIoKy1oKIcPRshdvPLUi53myMAVEEAFgeJdC3H7e0iAjW2g1CEARYrVZ1zSAIaoT/ac45KCLCfD5Hu91u9AeKolgjeO+Hk8nkmIjQ6XSeZF4sFphOp/DeD5VS6nS5XH4bjUYfmjRQSv0Iw/D0HxnKDX6sx/D3AAAAAElFTkSuQmCC\'/>
</span>
{/block:Flickr}
{block:Plus}
<span class="reblog-badge">
<img src=\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAB1klEQVQoU2O4621JEmK442Vxw9P8Jm501skQiM45GQLVAFUy3PKwu1M/6ePxk9/e/f0PBx+uvKr0vuZuBkSnHQyAwmccDYHsq25mDK8uvfm+qeSGh8nlwMCnex4B5X4dar7uZnIZhk466AMFTznqA0UuuZow/P9//qGf0SUXo4tA5BH77iVQ9vPrEssT9npwBBSCs4EaDtx2NTjnBEW3lt0HSn9dFHnK0xLIwARADU8eJeidttc7ZQdC51p2gayYGXzEWhuOgCIwtg7D/7//v63POmGjcwyMLsy48P/XpbvBUC5Q5JCVFlADkASyj9poM3z9BuR+eruo6Gyw69nKCZ/e3HtWbXvQShOO9llqAFXstdA4YKkJRAwnguNuzlvyYtfez++A4t9f1NvtNVPfg4R2mapBEESQ4bC5+g4T1R0mwU/e/P/3/8OjAhMwFydiOGCiutVQeYuh7tmNL/7//P//x90HpU5gEeyI4Xzb1Ef7DzzbuOzBmmWPTz74BwrI9y+7QrfoK25ERRvAXIave3sOuamv05VfD0Jah7q3fv8F0nM3WQcsgkAQNQwnTORXacsio82Fa38AA25xOJo4hMuwT1durbbMGhQU+fDr/zddjqiCUDUAmzuTnmNga6gAAAAASUVORK5CYII=\'/>
</span>
{/block:Plus}
{block:YouTube}
<span class="reblog-badge">
<img src=\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdElEQVQ4EcVTPUsDQRB9u7eJF0KEBATBIBoRUdQmhfgDrMRG1NIfYSHWIkRREPEDBX+HCUSbKKm0EhTBKrUkRcLlvNxmnY0h7JGYJoUDc8y+efNmZu+OKaUwiPFBinUtKyYRYfXoLVOYofMCeVgn+tgr5TwovC2Va9vsKR7NELDXp6Bf6pBLplZ8kjNdhkOYurhGKJUK4CZHx7qWewrjDephurRtJDa2sHhfQHx9M5AzebpWCyTIYXq9CbiuC49zTJ6eY+LkDP6QHeC0+QnhAVb3kgqO43Tg2OoaklLic3eng7UDSzR6fAeqGRSolEooXF0i2YOrJ5CkFphC0QXpFbS957J4zBxg1qOVGGthxkMK2qVMwIgBQvlNONUqHo6P8JW9w7zg1IG17sDkUVxmN8ORZwrSZkKPVPR8TAsLo7yrq0l9Eb5SeRIPCGjGcvh3K/2+/zSFvPiuuvtWzB4j0lyb2CVmCHxQXGudGXIVqmX//jf+AF6oryUyXsGzAAAAAElFTkSuQmCC\'/>
</span>
{/block:YouTube}
{/template:ReblogBadge}
<\!-- Expected scope: Any. Attributes {defer} --\>
<\!-- TODO: revisit the disable logic --\>
{template:Sharing}
<div class="share-controls {block:defer}defer{/block:defer} {block:delay}delay{/block:delay}" data-defer="{defer}" data-delay="{delay}">
{block:IfNotdisable-plusone}{SharePlusOne}{/block:IfNotdisable-plusone}
{block:IfNotdisable-twitter}{ShareTwitter}{/block:IfNotdisable-twitter}
{block:IfNotdisable-facebook}{ShareFacebook}{/block:IfNotdisable-facebook}
</div>
{/template:Sharing}

{template:ShareTwitter}
<span data-href="http://twitter.com/share" class="share-twitter twitter-share-button {block:defer}defer{/block:defer}" data-url="{url}" data-text={JSPlaintexttext} data-count="{count}"></span>
{/template:ShareTwitter}

{template:ShareFacebook}
<span class="share-facebook {block:defer}defer{/block:defer}" data-url="{url}" data-text="{text}" data-count="{count}"></span>
{/template:ShareFacebook}

{template:SharePlusOne}
<span class=\'share-plusone g-plusone {block:defer}defer{/block:defer}\' data-href="{url}" data-size=\'medium\' data-annotation=\'{annotation}\' data-text={JSPlaintexttext}></span>
{/template:SharePlusOne}
{template:Welcome}
<style>
  {LoadingCSS}

  body {
    background-color: #eee;
  }
  div {
    height: 100px;
    left: 50%;
    margin-left: -50px;
    margin-top: -50px;
    text-align: center;
    top: 50%;
    width: 100px;
    position: fixed;
  }

  .blogger-gear {
    margin: 2px auto;
  }

  {text:Custom CSS}
</style>
<div>
  <span class="blogger-gear"></span>
</div>
{/template:Welcome}

{template:ErrorMessage}
<style>
  {CoreCSS}

  #main {
    background-color: #eee;
    color: #e4e4e4;
    font-size: 18px;
    height: 100%;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%;
  }

  #main .fourOhFour {
    color: #e0e0e0;
  }

  #message {
    background-color: white;
    {css-box-shadow value="inset 0px 0px 10px rgba(0, 0, 0, 0.6)"}
    color: #cb4534;
    font-size: 20px;
    left: 50%;
    margin-left: -200px;
    margin-top: -50px;
    overflow: hidden;
    padding: 15px;
    text-align: center;
    text-shadow: 0px 1px 3px #999;
    top: 50%;
    width: 400px;
    position: absolute;
    {css-transform value="rotateZ(3deg)"}
    {css-crossbrowser property="transform-style" value="preserve-3d"}
  }

  a, a:hover, a:visited {
    color: #4d90fe;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
</style>
<div id="main">
  <div id="message">
    <span>{Value}</span>
    <a href="{BlogURL}" target="_self" title="{lang:Home}">{lang:Home}</a>
  </div>
</div>
{MiscHidden}
<script>
  // Let\'s make the 404 look more interesting.
  var fragment = document.createDocumentFragment();
  var parts = \'110010100\'; // 404 in binary.
  var length = parts.length;
  var position = 0;
  var current = [];
  for (var i = 0; i < 55555; i++) { // Make it long enough to fill the screen.
    if (position == length) {
      if (Math.random() > 0.6) { // Only add explicit 404 occasionally.
        current.push(\' \');
        fragment.appendChild(document.createTextNode(current.join(\'\')));
        current = [\' \'];
        var fourOhFour = document.createElement(\'span\');
        fourOhFour.innerText = \'404\';
        fourOhFour.className = \'fourOhFour\';
        fragment.appendChild(fourOhFour);
      }
      position = 0;
    } else {
      if (Math.random() > 0.6) { // Randomly add spaces to make uneven.
        current.push(parts[position++]);
      } else {
        current.push(\' \');
      }
    }
  }
  document.getElementById(\'main\').appendChild(fragment);
<\/script>
{/template:ErrorMessage}');blogger.templates().compile('{template:BasicCSS}
{CoreCSS}
{ButtonCSS}
{RibbonCSS}
{BubbleCSS}
{LoadingCSS}
{MessageCSS}
{FeedbackCSS}
{/template:BasicCSS}

{template:CoreCSS}

/* Begin: reset styles */

body,div,ul,ol,li,input,textarea,p,abbr {
  margin:0;
  outline: none;
  padding:0;
}
ol,ul {
  list-style:none;
}
h1,h2,h3,h4,h5,h6 {
  font-size: 100%;
  font-weight: normal;
  margin: 0;
  padding: 0;
}
img {
  border: none;
}

/* End: reset */

#chromefix {
  -webkit-transform: perspective(1); /* Chrome 12/13/14 flicker fix. */
}

body {
  background-color: {color:Background};
  {block:image:Background}
  background-image: url({image:Background});
  background-position: left top;
  background-repeat: no-repeat;
  {/block:image:Background}
  {block:text:BodyBackgroundCSS}
  background: {text:BodyBackgroundCSS}; /* Override everything. */
  background-color: {color:Background};
  {/block:text:BodyBackgroundCSS}
}

body, input, textarea {
  font-family: {font:Text};
  font-size: 14px;
}

a,
a:focus {
  color: {color:Link};
  font-family: {font:Link};
  outline: none;
  text-decoration: none;
  {css-transition value="color .3s"}
}

a:visited {
  color: {color:Link Visited};
}

a:hover {
  color: {color:Link Hover};
  text-decoration: underline;
}

abbr.published {
  outline: none;
  text-decoration: none;
  border: none;
}

.title {
  color: {color:Post Title};
  font-family: {font:Post Title};
  font-size: 14px;
}

.title a {
  color: {color:Post Title};
  font-family: {font:Post Title};
}

/* Way to prevent any css animations during dom manip. */
.instant, .instant * {
  {css-transition value="none !important"}
  {css-crossbrowser property="animation-iteration-count" value="0 !important"}
}

.adsense {
  margin: 0 auto;
  text-align: center;
}

/* Admin restricted links - obviously verified on server, but for easy templates. */

.blog-admin,
.item-control {
  display: none;
}

#injected-iframe {
  z-index: 9999;
}

{/template:CoreCSS}

{template:RibbonCSS}

.ribbon {
  color: #eee;
  cursor: default;
  display: inline-block;
  text-align: center;
  width: 35px;
}
a.ribbon {
  color: #eee;
  cursor: pointer;
  text-decoration: none;
}

.ribbon .ribbon-piece {
  background-color: {color:Ribbon};
  {css-box-shadow value="0 0 5px rgba(0, 0, 0, 0.2)"}
  {css-transition value="background-color 0.5s ease-in"}
}

/* On hover color change. */
a.ribbon:hover .ribbon-piece {
  background-color: {color:Ribbon Hover};
  color: #eee;
}

.ribbon .top {
  border-bottom: solid 1px rgba(255, 255, 255, 0.6);
  {css-border-radius value="1px 1px 0px 0px"}
  font-size: 11px;
  padding: 4px 0;
  position: relative;
  text-transform: uppercase;
}

.ribbon .bottom {
  font-size: 17px;
  padding: 5px 0;
}

.ribbon .tail {
  height: 10px;
  overflow: hidden;
  position: relative;
}

.ribbon .tail .left,
.ribbon .tail .right {
  height: 10px;
  position: absolute;
  top: -10px;
  width: 50px;
}

.ribbon .tail .left{
  left: -9px;
  {css-transform value="rotate(-25deg)"}
}

.ribbon .tail .right{
  right: -9px;
  {css-transform value="rotate(25deg)"}
}

/* Do this with a transform? */
.ribbon.small {
  width: 25px;
}
.ribbon.small .top {
  font-size: 9px;
  padding: 2px 0;
}
.ribbon.small .bottom {
  font-size: 12px;
  padding: 3px 0;
}
.ribbon.small .tail {
  height: 6px;
}
.ribbon.small .tail .left,
.ribbon.small .tail .right {
  height: 6px;
  top: -7px;
  width: 40px;
}
.ribbon.small .tail .left {
  left: -6px;
}
.ribbon.small .tail .right {
  right: -6px;
}

{/template:RibbonCSS}

{template:BubbleCSS}

.bubble {
  background-color: {color:Bubble};
  background-position: center center;
  border-radius: 3px;
  border: solid 1px {color:Bubble};
  color: white;
  cursor: default;
  display: inline-block;
  font-size: 12px;
  padding: 2px 0;
  position: relative;
  text-align: center;
  {css-transition-property value="background-color, border-color"}
  {css-transition-duration value="0.5s"}
  {css-transition-timing-function value="ease-in"}
  width: 26px;
}

.bubble.light {
  background-color: {color:Bubble lighten="45%"};
  border-color: {color:Bubble lighten="45%"};
}

.bubble.empty {
  color: {color:Bubble};
  border: solid 1px {color:Bubble lighten="20%"};
  {css-box-shadow value="none"}
  background-color: white;
}

.bubble .bubble-tail,
.bubble.empty .bubble-tail:after {
  border-color: {color:Bubble} transparent transparent transparent;
  border-style:solid;
  border-width: 5px;
  bottom: -10px;
  content: \'\';
  height: 0;
  left: 50%;
  margin-left: -5px;
  position: absolute;
  {css-transition value="border-color 0.5s ease-in"}
  width: 0;
}

.bubble.light .bubble-tail {
  border-color: {color:Bubble lighten="45%"} transparent transparent transparent;
}

.bubble.empty .bubble-tail {
  border-color: {color:Bubble lighten="20%"} transparent transparent transparent;
}

.bubble.empty .bubble-tail:after {
  left: 0;
  top: -6px;
  border-color: white transparent transparent transparent;
}

/* On hover color change.
.bubble:hover {
  background-color: #d14836;
  border-color: #d14836;
}

.bubble.empty:hover {
  /*background-color: white;
  border-color: #d14836;
  color: #d14836;
}

.bubble:hover .bubble-tail {
  border-color: #d14836 transparent transparent transparent !important;
}
*/

{/template:BubbleCSS}

{template:SharingCSS}

.share-controls {
  text-align: center;
  white-space: nowrap;
}

.share-controls span,
.share-controls iframe {
  height: 20px !important;
}

.share-controls .share-plusone,
.share-controls .share-twitter,
.share-controls .share-facebook {
  /* PlusOne tries to reset a lot of settings, don\'t let it. */
  background-repeat: no-repeat !important;
  background-position: left center !important;
  display: inline-block;
  margin: 0;
}

/* To avoid the \'jitter\' of buttons loading, set a background image
   of the button in its place. Once loaded, the button covers. */
.share-controls .share-plusone {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAUCAYAAADskT9PAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB+klEQVRIDb1USy8DURT+bmmsEAuMeEVT1MJCWiy8Fiz7E9gQz4SlHyARO39ALFg1FiLaROIfFLERVNJ4JExr5ZUg0Znr3t5Mpx0zerWNk8zcxznnO98599xLKKW47x6kcJCeyZCDRmx7+od+1UfdFc763hhx/Rbc2bNEmmMfdZUIqmAYEg6HqdfrLRigGMd4PI5yDuDxeIrBKdg3Q0DX9YJBinVMV6CUBFb2U7h4oAjNu6W4SRN4/QAuExSNNUBTDfkBfv9EsbyjIXpN0dVAIJuUNIFzltX4ho7FUYKlMfPyvH4Cq2Edu6fmU9LHWupPBDRN+5GRdcNoE/5wZdsfnoEFB3rbgDdWpVgS8NXn2lixstd5K7B2QBBLEPBMufBg0Wsx35rU0VDN9hZYUAUYWxeV6VR0VgFhk++fl8BlogwntyaM+gzwjwsvc6BVzF/e+b4g0FH3RwLZJRVw5n9zQhzPyZ0LU9tuzA1rmB9JpQ2yT+5CFcEDrXrOEZlI9rO8FTDcjJLyHrBrsKObsrRpRz3PXrL+zEOagFJFMTP4BX+LZhvgKimupr85Zas3ErGO8gQqgekBcRx2CV49CgLttfYErYGNtTQBw8Fp3Jt9y6jsCGaUlknJCFhwpZdpAqqqQlHYRf5HSSbZi8WE8K6ORCLmO/qPJILBIPkG4bfcdvdDHFEAAAAASUVORK5CYII=) !important;
  height: 20px;
  /* Don\'t touch anything other than min-width, causes havoc with +1 */
  min-width: 90px;
  {css-transition value="min-width 0.3s"}
}
.share-controls .share-plusone.defer {
  min-width: 34px;
}
.share-controls .share-plusone.delay {
  min-width: 90px;
}

.share-controls .share-twitter {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAUCAYAAAAp46XeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFSklEQVRYCd1Ye0yTVxT/9UFbCm15qKU8JhQQURFQfMBUog6VxMSJJo5tZsvcPzPGZJkxzmzLEmOWbZIlji1LZtxkbPMRzHyyKI4hWubkvWEtIC8RmEApKrUP2u6e28JaqMuMcYmc5Pb7zrn3PH73nHO/r5/A5XKhqt3oajNaMFVIGyZDZlyYQKBrG3TJpFKkRwZNFWyo6xmBxWqFkDI2lYBRhggP4RJOmXT5ASImmcXu9DP17Is4uMeBUXLdgC7jMDYsnA3tNOXjqP7vazk4u9Pl4/jkdT1yUhKgkAX4yPMOXYC+bwhJIRK8tjwN3nqkc7yyzmc9MevSEvD6qsWT5E8qaO4bRqBEiJgwxSNN8Z5zOJ3wHjcHHiBjXxF2H7sEXUs3n/v8ajNa7TKIFWEwDIxg99EyH515MZFYlpKItFgNatvuIE49jfMLtDN91nn7eZL7D4+W4svSqkfaJsR+D5S9uYsQGhGNMy0D2Pb9r3jv53qc67oPoSwYwiAlhMEh+KWlB0NmK9oHzXzn4mco8PbaxXhrjTtLr6xI43xtWycKzur4GrPNgY0fF6Gpq5/zV27cwo5Dp/l98eVGrN/3NZ8/VWOA1eGupurmbrz82Q987tOfKri8/M9b0N/uQ1mDHlsPHkePaYTbmPjDwZEh72G2O/DF5qUI08RAHKrGuc4H6LMI2FYIIRAFQEQAA4Px/P5i1Le2j+sOW0dxz+Y+nB5abSBeqVDgxJUavubiH624eacfP15t4PxRXRMkIgEITOH5CryzcRV2rs3EniNnoTN04dbd+9haeAy56bPw0db1KK014OCZy0iKjkCEMhBadTjeWJGOELlsPIYxHATUb+ZoYqZCgsWxaoiU4TxjBIwTAQyQInS6GkuTtRhm2fg3ot4dNttQ39GLi3UGZCTE8B03M/C/GTqQt2QOvi27hqykWKjkgVApg5Aep0GJrgEndbWIn65kpR7F+zsnNR7H2MaEK+QIVamgjZiBlWmJEIn8w+BSh4P1HBvdgw/4le6lYjEOrIxDUricZ2wcAOtPovx5kTj86krkZ6WM65Ce1cEy7CHiiVbPT8SZ32/gUmMLDr65gcsKTlVCzLK2KEnL+ebuPhRX1PBBQeekJ2HUMYqBEQu+Ka/m8hGbC/nZGdyf0xMHlTr5mTjIqM+jQMXSu4sdItroUMxRa9AwaMXdId93TpfDjsCHJuSnzgcZnkhOx2TZpoxkbD98GrOjpvNNeyE1GSVVDdiUmcqDWjY3AeV1TXh/yxqEyqU4WdmARfHRiFIEoaiiHttWL8VCbQTKGpshE0u5SyGroM5+I0xmCy/LiXEQzzNnZb1LQ86O1v2bstFpdODdC0040WLEkGeHaLHLbkWi3IVDL6bzIMf0vK+0QSq5BKpgBbdJc0vmaLmMSpD4LZlzyRzo0CF+R24mZrE+ytpTiOSdBfiOleRD1rsp8VHYm5eNzQeKELf9E+wqOs/1SOel5QtQ3Xobqz/4Cr0m87gvmqNBJCiuvuPKilWyI1UIkdBdRnKpBHr2OCjrMKHZkzmlVIzlEVKsm6WBeZStYyXzKIoLD0bPsAXW0X/WqIMksLkE/ISlkg+RCmGysjL2rNEo5XAymzb7KEJYT7WbWMUwnjIpE4tgZH0bqZKN26UYFZ66+8syOR5dxz03uCXPhUyKUxQghJS1j3ezEijHU35VI7/+fNDGUwL+K13rMvn2nLciOXA/wdzZ9J57mvf+gJG/xwE2Fh9PrOfRNCabMlf+Z9XMTjhNkO975LOMsHfEDrlIBMHYZwZ9S9uzjMcn9uRELf/M8DdRh83rstvalwAAAABJRU5ErkJggg==) !important;
  height: 20px;
  width: 110px;
  {css-transition value="width 0.3s"}
}
.share-controls .share-twitter.defer {
  width: 57px;
}
.share-controls .share-twitter.delay {
  width: 110px;
}

.share-controls .share-facebook {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAUCAYAAAAk/dWZAAAACXBIWXMAAAsTAAALEwEAmpwYAAADQElEQVRIDd1XXUhTYRh+tjPb5mwNpzV0aSiWZESihMQI7M6bEn8ujKKCQMIuDKurpMQLQxQWNEUIIoT0wkIrC4MMNCOiZUWU1tD5/5fzd87jNtf3HV2d6c5+jKD1wtn3/n/Pe973nJ1P5HK5YB6ZdVnmWThXXQgVYsQiRCql2BOrEon6h2dcizYHolUySBhxqNQAh3MVU7PLiJBLIKYdCLUC6J2mN5zipvjFdIRCqQP8UaG4Ofx8JZ+/XPkM3wd+8FWCfFJ8FKquZgna/7ZB8CEItAAKMBhfj4Kcc2h/+gmjrIc2aEGwCF+ZMlLj8Op+IXdR3iuxwyguqkejyROhtacTJ4o6MUeD2Fncav2ISafXDAErJQF78hyrrmRhdHIB30wTmJkWHjkbibE7PBEq4g6i8pITCpqPYaCBjJd5a+yWOkG3ogVcu/0CvYNLQe3MWvpQ83gAnv2hKZbwUN+A4oY+OIjETvWhrKSedK0ep/TvMO1jl6CK2KmOwNmcNC6dSr2d46kuGHIs2mA20R65iYGcsaO95gHuDcWjtCABEligv9EFWXYWWgy5yJn/ivLnE+6ATWtQ45QQF4nzeelckkP7doFePf1TmJxe3JRYULFhRzmsaKxtwvuh3aitPgI1CXSMD+M1WTVGI/S9DMwEf//YcqApBf04w5vuQehO1nEP9IfeCVwsa/YdwFkZPz4SyLZJgWULTON2xGjC4KTzREinS8Fh0miHLhkydfSa0stvUOPkJd6nSk6sC4tWOFg7rEssrGTlBp4XZSPDk12YjVKdE9XlTegYX4VUq0Um8TGaV5CYrEVKcgyiFMJQNzSXl52wqftjPRU8aUf4tl/27i8jPMtvlhbRdrcVbW6Vai/unCMC74VEfWysGOkF2ShZaSaFPIGy4jgulGbgZnkXcl92cdGazEzU5WndmTxWn0V4ePIE+uXrl6RaVBhOe3VrqV5XEx+9IX9dCMPRM/nkWheVSbhuSCQdJN1jwqCQbqET9FPiUYcRsaoojMyu/Re4+Y36Y2kHvIL9c6UYinDyvPgh0dvPY66EGKUft3/X3Dc6DzE9XNBv81AkipviF9PTET1chFoh7kMRxS/6H46nPwG0xCqstPx1sgAAAABJRU5ErkJggg==) !important;;
  height: 20px;
  width: 90px;
  {css-transition value="width 0.3s"}
}
.share-controls .share-facebook.defer {
  width: 51px;
}
.share-controls .share-facebook.delay {
  width: 90px;
}

{/template:SharingCSS}

{template:LoadingCSS}

body.loading #loading {
  opacity: 0.75;
  margin-bottom: 0;
}

#loading {
  background-color: #000;
  border-radius: 6px 6px 0px 0px;
  border: solid 1px #666;
  border-bottom: none;
  bottom: 0;
  box-shadow: 0 0 4px #333;
  color: white;
  font-size: 18px;
  left: 50%;
  margin-bottom: -50px;
  margin-left: -60px;
  opacity: 0;
  padding: 5px 0px;
  position: fixed;
  text-align: center;
  {css-transition value="opacity 0.5s, margin-bottom 0.5s"}
  {css-transition-delay value="279ms"}
  width: 120px;
  z-index: 999;
}

#loading span {
  background-repeat: no-repeat;
  background-position: right center;
  background-image: url(data:image/gif;base64,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);
  display: inline-block;
  height: 30px;
  line-height: 30px;
  padding-right: 30px;
}

#loading span:after {
  content: \'...\';
}

.blogger-gear {
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(data:image/gif;base64,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);
  display: inline-block;
  height: 95px;
  width: 95px;
}

{/template:LoadingCSS}

{template:ButtonCSS}
.kd-button {
  background-color: #f5f5f5;
  background-image: -webkit-gradient(linear,left top,left bottom,from(#f5f5f5),to(#f1f1f1));
  background-image: -webkit-linear-gradient(top,#f5f5f5,#f1f1f1);
  background-image: -moz-linear-gradient(top,#f5f5f5,#f1f1f1);
  background-image: -ms-linear-gradient(top,#f5f5f5,#f1f1f1);
  background-image: -o-linear-gradient(top,#f5f5f5,#f1f1f1);
  background-image: linear-gradient(top,#f5f5f5,#f1f1f1);
  border: 1px solid #DCDCDC;
  border: 1px solid rgba(0,0,0,0.1);
  {css-border-radius value="2px"}
  {css-box-sizing value="content-box"}
  color: #222;
  cursor:default;
  display: inline-block;
  font-size: 11px;
  font-weight: bold;
  height: 27px;
  line-height: 27px;
  min-width: 54px;
  padding: 0 8px;
  text-align: center;
  {css-transition value="all 0.218s"}
  {css-user-select value="none"}
}
.kd-button:hover {
  background-color: #f8f8f8;
  background-image: -webkit-gradient(linear,left top,left bottom,from(#f8f8f8),to(#f1f1f1));
  background-image: -webkit-linear-gradient(top,#f8f8f8,#f1f1f1);
  background-image: -moz-linear-gradient(top,#f8f8f8,#f1f1f1);
  background-image: -ms-linear-gradient(top,#f8f8f8,#f1f1f1);
  background-image: -o-linear-gradient(top,#f8f8f8,#f1f1f1);
  background-image: linear-gradient(top,#f8f8f8,#f1f1f1);
  border: 1px solid #C6C6C6;
  {css-box-shadow value="0px 1px 1px rgba(0,0,0,0.1)"}
  color: #222;
  {css-transition value="all 0.0s"}
}
.kd-button:active {
  background-color: #f6f6f6;
  background-image: -webkit-gradient(linear,left top,left bottom,from(#f6f6f6),to(#f1f1f1));
  background-image: -webkit-linear-gradient(top,#f6f6f6,#f1f1f1);
  background-image: -moz-linear-gradient(top,#f6f6f6,#f1f1f1);
  background-image: -ms-linear-gradient(top,#f6f6f6,#f1f1f1);
  background-image: -o-linear-gradient(top,#f6f6f6,#f1f1f1);
  background-image: linear-gradient(top,#f6f6f6,#f1f1f1);
  border: 1px solid #C6C6C6;
  {css-box-shadow value="inset 0px 1px 2px rgba(0,0,0,0.1)"}
  color: #333;
}

.kd-button:focus, .kd-button.right:focus, .kd-button.left:focus{
  border: 1px solid #4d90fe;
  outline: none;
  z-index: 4 !important;
}

.kd-button.left {
  {css-border-radius value="2px 0 0 2px"}
  border-right-color: transparent;
  margin-right: 0;
}
.kd-button.left:hover {
  border-right: 1px solid #c6c6c6;
}
.kd-button.right {
  {css-border-radius value="0 2px 2px 0"}
  margin-left:-5px;
}

.kd-button.right:hover {
  border-left: 1px solid #c6c6c6;
}
.kd-button img {
  display: inline-block;
  margin: -3px 0 0;
  *margin:4px 0 0; /*IE7*/
  opacity: 0.55;
  vertical-align: middle;
}

.kd-button.selected img {
  opacity: 0.9;
}
.kd-button:hover img {
  opacity: 0.72;
}
.kd-button:active img {
  opacity: 1.0;
}
/*disabled buttons*/
.kd-button.disabled,
.kd-button.disabled:hover,
.kd-button.disabled:active {
  background: #FFF;
  border: 1px solid #f3f3f3;
  border: 1px solid rgba(0,0,0,0.05);
  color: #b8b8b8;
  cursor: default;
  pointer-events: none;
}
.kd-button.disabled:active{
  {css-box-shadow value="inset 0px 1px 2px rgba(0,0,0,0.1)"}
}
.kd-button.disabled img {
  opacity: 0.5;
}
.kd-button.small {
  min-width: 36px;
  padding: 0;
  width: 36px;
}
{/template:ButtonCSS}

{template:MessageCSS}
#message {
  position: fixed;
  text-align: center;
  top: 40%;
  width: 100%;
}
#message span {
  background-color: white;
  border-radius: 6px;
  color: #333;
  box-shadow: 0 0 4px #666;
  display: inline-block;
  font-family: arial;
  font-size: 16px;
  padding: 15px;
  white-space: no-wrap;
}
{/template:MessageCSS}

{template:FeedbackCSS}
.feedback {
  background-color: whiteSmoke;
  background-image: -webkit-linear-gradient(top,#f5f5f5,#f1f1f1);
  background-image: -moz-linear-gradient(top,#f5f5f5,#f1f1f1);
  background-image: -ms-linear-gradient(top,#f5f5f5,#f1f1f1);
  background-image: -o-linear-gradient(top,#f5f5f5,#f1f1f1);
  background-image: linear-gradient(top,#f5f5f5,#f1f1f1);
  border: 1px solid gainsboro;
  border: 1px solid rgba(0, 0, 0, 0.1);
  {css-border-radius value="2px"}
  bottom: -1px;
  {css-box-shadow value="0 0 6px #808080"}
  color: #444;
  cursor: default;
  display: inline-block;
  font-size: 11px;
  font-weight: bold;
  height: 27px;
  line-height: 27px;
  margin-right: 0px;
  min-width: 54px;
  outline: 0;
  padding: 0 8px;
  position: fixed;
  right: -1px;
  text-align: center;
  text-decoration: none;
  z-index: 10001;
}
.feedback:hover, .feedback:active, .feedback:visited, .feedback:focus {
  color: #444;
  text-decoration: none;
}
.feedback:active, .feedback:focus {
  border-color: #4d90fe;
}
{/template:FeedbackCSS}
{template:CommentCSS}

.comments {
  clear: both;
  margin-top: 10px;
}

.comments .comments-header,
.comments .comments-footer {
  text-align: center;
}

.comments .comments-header .comments-count {
  top: -2px;
}

.comments .comments-header h3 {
  display: inline-block;
  padding: 5px;
}

.comments .toggle-switch:hover h3 {
  cursor: pointer;
  text-decoration: underline;
}

/* Added by blogger for ghosted/removed comments .*/
.comments .deleted-comment {
  font-style: italic;
  opacity: 0.5;
}

/* While loading, hide the comment count, and then show an indicator. */
.comments.loading .comments-header .comments-count .bubble-content {
  visibility: hidden;
}

.comments.loading .comments-header .comments-count {
  background-image: url(data:image/gif;base64,R0lGODlhEAAQAPQAAGZmZv///2lpadzc3K+vr/r6+ufn5319fZmZmfDw8Le3t8DAwHV1daOjo4eHh9LS0srKygAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH+GkNyZWF0ZWQgd2l0aCBhamF4bG9hZC5pbmZvACH5BAAKAAAAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAEAAQAAAFUCAgjmRpnqUwFGwhKoRgqq2YFMaRGjWA8AbZiIBbjQQ8AmmFUJEQhQGJhaKOrCksgEla+KIkYvC6SJKQOISoNSYdeIk1ayA8ExTyeR3F749CACH5BAAKAAEALAAAAAAQABAAAAVoICCKR9KMaCoaxeCoqEAkRX3AwMHWxQIIjJSAZWgUEgzBwCBAEQpMwIDwY1FHgwJCtOW2UDWYIDyqNVVkUbYr6CK+o2eUMKgWrqKhj0FrEM8jQQALPFA3MAc8CQSAMA5ZBjgqDQmHIyEAIfkEAAoAAgAsAAAAABAAEAAABWAgII4j85Ao2hRIKgrEUBQJLaSHMe8zgQo6Q8sxS7RIhILhBkgumCTZsXkACBC+0cwF2GoLLoFXREDcDlkAojBICRaFLDCOQtQKjmsQSubtDFU/NXcDBHwkaw1cKQ8MiyEAIfkEAAoAAwAsAAAAABAAEAAABVIgII5kaZ6AIJQCMRTFQKiDQx4GrBfGa4uCnAEhQuRgPwCBtwK+kCNFgjh6QlFYgGO7baJ2CxIioSDpwqNggWCGDVVGphly3BkOpXDrKfNm/4AhACH5BAAKAAQALAAAAAAQABAAAAVgICCOZGmeqEAMRTEQwskYbV0Yx7kYSIzQhtgoBxCKBDQCIOcoLBimRiFhSABYU5gIgW01pLUBYkRItAYAqrlhYiwKjiWAcDMWY8QjsCf4DewiBzQ2N1AmKlgvgCiMjSQhACH5BAAKAAUALAAAAAAQABAAAAVfICCOZGmeqEgUxUAIpkA0AMKyxkEiSZEIsJqhYAg+boUFSTAkiBiNHks3sg1ILAfBiS10gyqCg0UaFBCkwy3RYKiIYMAC+RAxiQgYsJdAjw5DN2gILzEEZgVcKYuMJiEAOwAAAAAAAAAAAA==);
  background-position: center center;
  background-repeat: no-repeat;
  {css-transition value="none"}
}

.blogger-comments .comments-content {
  background-color: whitesmoke;
  font-size: 13px;
  margin-bottom: 16px;
  {css-border-radius value="10px"}
  {css-transition value="all 0.5s ease-in"}
}

.blogger-comments .comments-content .comment-actions {
  color: #999;
}
.comments .comment .comment-actions a {
  padding-top: 5px;
  padding-right: 5px;
}
.comments .comment .comment-actions a:hover {
  text-decoration: underline;
}
.blogger-comments .comments-content .secondary-link {
  color: #69c;
}
.blogger-comments .comments-content .comment-thread {
  list-style-type: none;
  padding: 0;
  text-align: left;
}
.blogger-comments .comments-content .inline-thread {
  padding: 0.5em;
}
.blogger-comments .comments-content .comment-thread {
  margin: 8px;
}
.blogger-comments .comments-content .comment-thread:empty {
  display: none;
}
.blogger-comments .comments-content .comment-replies {
  background-color: #ebebeb;
  margin-top: 1em;
  margin-left: 36px;
  {css-border-radius value="10px"}
}
.blogger-comments .comments-content .comment {
  border-bottom: 1px solid #e3e3e3;
  margin-bottom: 16px;
  padding-bottom: 8px;
}
.blogger-comments .comments-content .comment:first-child {
  padding-top: 16px;
}
.blogger-comments .comments-content .comment:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}
.blogger-comments .comments-content .comment-body {
  position: relative;
}
.blogger-comments .comments-content .user {
  font-style: normal;
  font-weight: bold;
}
.blogger-comments .comments-content .datetime {
  margin-left: 6px;
}
.blogger-comments .comments-content .comment-header,
.blogger-comments .comments-content .comment-content {
  margin: 0 0 8px;
}
.blogger-comments .comments-content .comment-content {
  text-align: justify;
}
.blogger-comments .comments-content .owner-actions {
  position: absolute;
  right: 0;
  top: 0;
}

.blogger-comments .comments-replybox {
  border: none;
  height: 250px;
  width: 100%;
}

.blogger-comments .comment-replybox-single {
  margin-top: 5px;
  margin-left: 48px;
}
.blogger-comments .comment-replybox-thread {
  margin-top: 5px;
}

.blogger-comments .comments-content .user,
.blogger-comments .comments-content .user a {
  color: {color:Text};
}

.blogger-comments .icon.blog-author {
  width: 18px;
  height: 18px;
  display: inline-block;
  background-repeat: no-repeat;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB9sLFwMeCjjhcOMAAAD+SURBVDjLtZSvTgNBEIe/WRRnm3U8RC1neQdsm1zSBIU9VVF1FkUguQQsD9ITmD7ECZIJSE4OZo9stoVjC/zc7ky+zH9hXwVwDpTAWWLrgS3QAe8AZgaAJI5zYAmc8r0G4AHYHQKVwII8PZrZFsBFkeRCABYiMh9BRUhnSkPTNCtVXYXURi1FpBDgArj8QU1eVXUzfnjv7yP7kwu1mYrkWlU33vs1QNu2qU8pwN0UpKoqokjWwCztrMuBhEhmh8bD5UDqur75asbcX0BGUB9/HAMB+r32hznJgXy2v0sGLBcyAJ1EK3LFcbo1s91JeLwAbwGYu7TP/3ZGfnXYPgAVNngtqatUNgAAAABJRU5ErkJggg==);
  margin: 0 0 -4px 6px;
}

.blogger-comments .comments-content .loadmore a {
  background: #fafafa;
  border-top: 1px solid #e3e3e3;
  display: block;
  padding: 10px 16px;
  text-align: center;
}

.blogger-comments .thread-toggle {
  cursor: pointer;
  display: inline-block;
  color: {color:Link};
}

.blogger-comments .continue {
  cursor: pointer;
}

.blogger-comments .continue a {
  color: #888;
  display: block;
  padding: 0.5em;
  background: white;
  border: 1px solid #CCC;
  {css-box-shadow value="inset 1px 1px 3px #888"}
}

.blogger-comments .comments-content .loadmore:hover a {
  background: #f1f1f1;
  border-top: 1px solid #fff;
}

.blogger-comments .comments-content .loadmore {
  cursor: pointer;
  max-height: 3em;
}

.blogger-comments .comments-content .loadmore.loaded {
  max-height: 0px;
  opacity: 0;
  overflow: hidden;
  {css-transition value="all 0.5s ease-in"}
}

.blogger-comments .thread-chrome.thread-collapsed {
  display: none;
}

.blogger-comments .thread-toggle {
  display: inline-block;
}

.blogger-comments .thread-toggle .thread-arrow {
  display: inline-block;
  height: 6px;
  width: 7px;
  overflow: visible;
  margin: 0.3em;
  padding-right: 4px;
}

.blogger-comments .thread-expanded .thread-arrow {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAG0lEQVR42mNgwAfKy8v/48I4FeA0AacVDFQBAP9wJkE/KhUMAAAAAElFTkSuQmCC") no-repeat scroll 0 0 transparent;
}

.blogger-comments .thread-collapsed .thread-arrow {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAJUlEQVR42mNgAILy8vL/DLgASBKnApgkVgXIkhgKiNKJ005s4gDLbCZBiSxfygAAAABJRU5ErkJggg==") no-repeat scroll 0 0 transparent;
}

.blogger-comments .avatar-image-container {
  float: left;
  width: 36px;
  max-height: 36px;
  overflow: hidden;
}

.blogger-comments .avatar-image-container img {
  width: 36px;
}

.blogger-comments .comment-block {
  margin-left: 48px;
  position: relative;
}

/* Responsive styles. */
@media screen and (max-device-width: 480px) {
  .blogger-comments .comments-content .comment-replies {
    margin-left: 0;
  }
}

{/template:CommentCSS}
{template:CommonCSS}
{BasicCSS}
{HeaderCSS}
{OverviewCSS}
{ViewItemCSS}
{PostCSS}
{CommentCSS}
{SharingCSS}
{GadgetDockCSS}
{/template:CommonCSS}

{template:CSS}
{CommonCSS}
{ViewCSS}
{CustomCSS}
{text:Custom CSS}
{/template:CSS}
{template:GadgetDockCSS}
{block:Gadgets}
#gadget-dock {
  background-color: #333;
  width: 50px;
  {css-box-shadow value="0 1px 3px rgba(0, 0, 0, 0.3)"};
  {css-border-radius value="2px 0 0 2px"};
  {css-transition value="right 0.15s ease-in-out"};
  position: fixed;
  right: -40px;
  top: 124px;
  z-index: 3000;
}

#gadget-dock:hover, #gadget-dock.gadget-notifying, #gadget-dock.gadget-opening {
  right: 0;
}

/* expand the hover area */
#gadget-dock:after {
  content: \'\';
  display: block;
  width: 90px;
  height: 110%;
  position: absolute;
  top: -5%;
  left: -40px;
  z-index: -100;
}

#gadget-dock.gadget-opening:after {
  display: none;
}

.gadget-item {
  position: relative;
  z-index: 1;
}

.gadget-selected {
  z-index: 0;
}

.gadget-icons {
  cursor: pointer;
  width: 50px;
  height: 50px;
  line-height: 50px;
  background-color: #333;
  border-top: 1px solid #585858;
  text-align: center;
  z-index: 0;
}

.gadget-item:empty {
  display: none;
}

.gadget-selected .gadget-icons {
  background-color: white;
  border-color: #ccc;
}

.gadget-item:first-child .gadget-icons {
  border-top: 1px solid transparent;
  {css-border-radius value="2px 0 0 0"}
}

.gadget-selected.gadget-item:first-child .gadget-icons {
  border-color: #ccc;
  {css-border-radius value="0"}
}

.gadget-item:last-child .gadget-icons {
  {css-border-radius value="0 0 0 2px"}
}

.gadget-selected.gadget-item:last-child .gadget-icons {
  {css-border-radius value="0"}
}

.gadget-icon, .gadget-icon-selected {
  display: inline-block;
  max-width: 30px;
  max-height: 30px;
  vertical-align: middle;
}

.gadget-icon-selected {
  display: none;
}

.gadget-selected .gadget-icon {
  display: none;
}

.gadget-selected .gadget-icon-selected {
  display: inline-block;
}

.gadget-container {
  background-color: white;
  {css-transition value="right 0.15s ease-in-out, opacity 0.15s ease-in-out"};
  {css-box-shadow value="0 1px 3px rgba(0, 0, 0, 0.3)"};
  line-height: 1.4em;
  position: absolute;
  top: 0;
  right: -100px;
  text-align: left;
  visibility: hidden;
  z-index: -1;
  opacity: 0;
  margin-left: 100%;
  overflow: hidden;
  word-wrap: break-word;
  max-width: 700px;
}

.gadget-container:hover,
.gadget-item:hover .gadget-container,
.gadget-selected .gadget-container {
  visibility: visible;
  right: 49px;
  opacity: 1;
}

.gadget-selected .gadget-container {
  border: 1px solid #ccc;
  {css-border-radius value="2px 0 0 2px"};
  cursor: auto;
  z-index: -100;
}

.gadget-selected.gadget-dock-overflow-bottom .gadget-container {
  position: fixed;
  bottom: 27px;
  top: auto;
}

.gadget-selected.gadget-dock-overflow-client-area .gadget-container {
  position: fixed;
  top: 0;
  bottom: 24px;
}

/* HACK: Because IE8 ignores max-width when "overflow-y: scroll" is set */
/* the scroll-bar is shown by the child element of .gadget-container.   */
.gadget {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  /* IE scroll-bar */
  scrollbar-arrow-color: white;
  scrollbar-track-color: white;
  scrollbar-face-color: #999;
  scrollbar-highlight-color: #999;
  scrollbar-shadow-color: #999;
  scrollbar-3dlight-color: white;
  scrollbar-darkshadow-color: white;
}
.gadget-selected.gadget-dock-overflow-client-area .gadget {
  overflow-y: scroll;
}

.gadget::-webkit-scrollbar {
  width: 14px;
}

.gadget::-webkit-scrollbar:hover {
  background-color: #f3f3f3;
}

.gadget::-webkit-scrollbar-thumb {
  border-width: 0 0 0 4px;
  border-color: #999;
  border-style: solid;
}

.gadget::-webkit-scrollbar-thumb:hover {
  border-width: 0 0 0 12px;
}

.gadget::-webkit-scrollbar-button {
  width: 14px;
  height: 16px;
}

.gadget::-webkit-scrollbar-corner {
  background-color: transparent;
}


.gadget-content {
  display: none;
  overflow: hidden;
  position: relative;
}

.gadget-selected .gadget-content {
  display: block;
}

.gadget-title {
  display: block;
  background-color: #333;
  color: white;
  display: block;
  font-size: 14px;
  padding: 1px 16px 0 16px;
  height: 50px;
  line-height: 50px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  position: relative;
}

.gadget-title:hover {
  text-decoration: underline;
}

.gadget-selected .gadget-title {
  background-color: transparent;
  color: black;
  font-size: 16px;
  height: 40px;
}

.gadget-selected .gadget-title:hover {
  text-decoration: none;
}

.gadget-content {
  background-color: white;
}

.gadget-resize-detector {
  background-color: transparent;
  border-style: none;
  margin: 0;
  padding: 0;
  outline: 0;
  width: 0;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
}

{/block:Gadgets}
{/template:GadgetDockCSS}
{template:HeaderCSS}

#header-container {
  height: 105px;
}

#header .header-bar {
  {block:IfNotimage:Header} /* No custom image, put slight gradient. */
  background-image: -moz-linear-gradient(
      center top,
      rgba(255, 255, 255, 0.1),
      rgba(100, 100, 100, 0.05)
  );
  background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(255, 255, 255, 0.3)),
      to(rgba(255, 255, 255, 0.05))
  );
  {/block:IfNotimage:Header}
  {block:image:Header}
  background-image: url({image:Header});
  background-position: left top;
  background-repeat: no-repeat;
  {/block:image:Header}
  {block:text:HeaderBackgroundCSS}
  background: {text:HeaderBackgroundCSS}; /* Override everything. */
  {/block:text:HeaderBackgroundCSS}
  background-attachment: scroll; /* Chrome, really? */
  background-color: {color:Header Background};
  {css-box-shadow value="0 0 5px 0px rgba(0, 0, 0, 0.3)"}
  height: 65px;
  {block:IfNotMobile}
  position: fixed;
  {/block:IfNotMobile}
  width: 100%;
  z-index: 1001;
}

#header .header-bar .title {
  display: block;
  height: 65px;
  line-height: 65px;
  margin-left: 20px;
  margin-right: 235px;
  overflow: hidden;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
}

#header .header-bar .title h1,
#header .header-bar .title h3 {
  display: inline;
  height: 65px;
  {block:IfNotimage:Header}
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.3);
  {/block:IfNotimage:Header}
  white-space: nowrap;
}

#header .header-bar .title h1 {
  color: {color:Blog Title};
  font-family: {font:Blog Title};
  font-size: 28px;
}

#header .header-bar .title h3 {
  color: {color:Blog Description};
  font-family: {font:Blog Description};
  font-size: 20px;
  margin-left: 5px;
}

#header input#search {
  background-color: #fafafa;
  {css-border-radius value="3px"}
  border: none;
  {css-box-shadow value="inset 1px 1px 2px #bbb"}
  font-size: 15px;
  height: 30px;
  margin: 0;
  padding: 0px 7px;
  right: 10px;
  text-align: left;
  text-transform: lowercase;
  top: 18px;
  {css-transition value="background-color 0.3s ease-in-out"};
  width: 200px;
  position: absolute;
}

#header input#search:focus {
  background-color: white;
}

#header .header-drawer {
  /* the drawer scrolls with the page initially, then gets fixed (.sticky) */
  background-color: {color:Primary};
  {css-box-shadow value="0 0 8px rgba(0, 0, 0, 0.5)"};
  font-family: {font:Menu};
  height: 35px;
  margin-top: 31px; /* use margin to match back to un-scrolled */
  position: absolute;
  top: 34px; /* top here must match top when sticky */
  width: 100%;
  z-index: 1000;
}

{block:IfNotMobile}
#header .header-drawer.sticky {
  margin-top: 0px;
  position: fixed;
  top: 34px; /* now stuck, just peeking out from the top */
  {css-transition value="top 0.2s linear"}
  {css-transition-delay value="0.3s"} /* don\'t surprise on quick hover */
}

#header:hover .header-drawer,
#header .header-drawer.open {
  margin-top: 0px;
  position: fixed;
  top: 65px; /* animate back down to full unscrolled height */
}
{/block:IfNotMobile}

/* Views and Pages */

#header #views {
  float: left;
  position: relative;
  z-index: 999;
}

#header .menu .menu-item,
#header .menu .menu-heading {
  border-radius: 4px;
  {css-box-sizing value="border-box"}
  color: {color:Menu Text};
  cursor: pointer;
  display: inline-block;
  font-family: {font:Menu};
  font-size: 15px;
  font-weight: 100;
  line-height: 30px;
  height: 30px;
  padding-left: 15px;
  padding-right: 15px;
  text-shadow: -1px -1px rgba(0, 0, 0, 0.1); /* subtle inset */
  {css-transition value="background-color 0.2s ease-in-out, color 0.2s ease-in-out"}
  {css-user-select value="none"};
  width: 100%;
}

#header a.menu-item {
  font-family: {font:Menu};
}

#views .menu-item {
  text-transform: capitalize;
}

#header .menu .menu-heading {
  {css-box-sizing value="border-box"}
  height: 35px;
  line-height: 35px;
  margin-right: 15px;
  position: relative;
  width: auto;
}

#header .indicator {
  /* instead of using a .heading::after actually put this in as elements
     which will allow us to animate it rotating! */
  border-color: {color:Menu Text} transparent transparent transparent;
  border-style: solid;
  border-width: 5px;
  height: 0px;
  margin: 0;
  margin-top: -1px;
  overflow: visible;
  padding: 0;
  position: absolute;
  right: 0;
  top: 50%;
  {css-transition value="all .3s linear"}
  {css-crossbrowser property="transform-origin" value="center 2px"}
}

#header .menu:hover .indicator {
  {css-transform value="rotate(180deg)"}
}

#header .menu ul {
  {css-box-shadow value="2px 2px 4px rgba(0, 0, 0, 0.2)"}
  max-height: 0px;
  overflow: hidden;
  padding: 0;
  {css-transition value="all 0.3s linear"}
  visibility: hidden;
  width: 100%;

}

#header .menu:hover ul {
  max-height: 500px;
  opacity: 1;
  {css-transition value="all 0.6s linear"} /* show slower than hide */
  visibility: visible;
}

#header .menu li {
  display: list-item;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}

#header .menu li a {
  opacity: 0.99; /* Chrome12+ has different subpixel anti-aliasing rules, this looks worse, but prevents flicker. */
}

#header .menu .menu-background {
  background-color: {color:Primary};
  height: 100%;
  left: 0;
  opacity: 0.75;
  position: absolute;
  top: 0;
  {css-transition value="opacity 0.3s ease-in"}
  width: 100%;
  z-index: -1; /* Negative isn\'t great... but otherwise the a needs to be positioned. */
}

#header .menu li:hover .menu-background {
  opacity: 0.95;
}

#header .menu li {
  {css-box-sizing value="border-box"}
}

#header .tabs li {
  display: inline;
  height: 35px;
  line-height: 35px;
  margin-left: 10px;
}

#header .tags li .menu-background {
  display: none;
}

#header .tabs li .menu-item {
  color: {color:Menu Text alpha="0.6"};
  {css-transition value="color 286ms ease-in"}
}

#header .tabs li .menu-item:hover,
#header .menu li .menu-item:hover,
#header .tabs li .menu-item.current {
  color: {color:Menu Text} !important;
}

#header .tabs .menu-heading {
  display: none;
}

#header #pages {
  float: left;
  margin-left: 0px;
  position: relative;
}

#header #pages:before {
  border-left: solid 1px {color:Menu Text};
  content: \'\';
  height: 20px;
  left: 0px;
  opacity: 0.5;
  position: absolute;
  top: 8px;
  z-index: 1000;
}

#header #pages.tabs ul {
  margin-left: 0px;
  overflow: hidden;
  white-space: nowrap;
}

#header .feed-link {
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAArrAAAK6wGCiw1aAAABYElEQVQ4EaWUsS4FQRSG96IQeopbSZTU1Gr0HoDWA1B6ATW96ETvAUR51Vd1C3qJyvq+3f1vJuwVN/7knzNzZs6/55yZ7KCu66WqqrbhEA7gPKg5PIGjiGyy+CgUFAw9HHxm0lnPGFspZCYRMchNA7RZ/2aNHS50AZgGBou5rRl9x33neMOO4SN86HwzzYBmH7CbMjwYoTJI0SuoaC8iZIlp5Bbzdajdhasw8CPXWZS2FLKhUpFXaJYr8BAewSBiqaKxZY+yYQniBRp0C0fwDJqdwq6f4PQ2LWkWNtg4hRdQ0XMYHGcS2ydkgH2wwcJemY1iN1Cswb1m1g19Qs/sWdIJzLUrZqD+dyh2WtOOEbLWPlziTGY+E0XyBCx9ilIo13/Hrl/O2rlIoI0WlieacxFqXf3juHAb7NP4Ad/RPl6vXkyvk7m+P6/NyP/JMhQR1C8XZ9ic0xo7MSMf5b9/bF/iiGTeWGM/zQAAAABJRU5ErkJggg==);
  background-size: 18px 18px;
  display: block;
  height: 35px;
  position: absolute;
  right: 10px;
  top: 0;
  width: 18px;
}

#header .admin-controls {
  height: 35px;
  position: absolute;
  right: 36px;
  top: 0px;
}

#header .admin-controls .dashboard {
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAANCAYAAAB2HjRBAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNXG14zYAAAAVdEVYdENyZWF0aW9uIFRpbWUAMTEvNy8xMZe/cygAAADVSURBVCiRpZG9agJBFEbPxB/E1mCTV4iFldW+hZWIRdqAr2EtIX2a9Ja24jPoE1gKWqmIyUnhqqvuqpDTzB34Dtz5BjJQG+pMbak1deeeroqaKUbqNA7P1b66vSurzUQwjaP8dCG2gW+gkPUcYHcYjrL6BnwBxRsiwCuQP0gFtXdjzTQGahX1Q/1RNw+KK/VXHQY1ApZABHzeWRngHRgBlXwIYRyvX0l2ByyADZADnuMTYApMzgoDyol5DXRCCC9AHZin5c6+KkHg1Hopvl+RJT/Ev+Q/DML6Kx8BC7sAAAAASUVORK5CYII=);
  /*background-size: 18px 18px;*/
  display: block;
  height: 35px;
  opacity: 0.8;
  position: absolute;
  right: 0px;
  top: 0;
  width: 18px;
}

#header .admin-controls .new-post {
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNXG14zYAAAAVdEVYdENyZWF0aW9uIFRpbWUAMTEvNy8xMZe/cygAAADaSURBVCiRhdIxS0JRGMbx/z1a0KdwcyxttcXRLxBIEFgOfp0W5yAn56DNxUm3oiXItUmEgmwo/Dd4g+7p3HzW8/w45305sCNqW31QB2pQd4K6euc2C7WjVv8Dh+rcYl7Us0oJaAA3QDM6CsBTCjTVR/9mqXbV/RgclYA39TTvFMBxvqU4a/X8V68w9HMCfKiX0WtA3VOv8tImAheJmUGtqSO1pQ5z8K72SjZLAE6AT2ANtIAV0FevUwggU2fAAXALLIGJeh9CSP4XlSowBqbAAnjNsuyr7IaffAOehB+C7e2WDgAAAABJRU5ErkJggg==);
  /*background-size: 18px 18px;*/
  display: block;
  height: 35px;
  opacity: 0.8;
  position: absolute;
  right: 24px;
  top: 0;
  width: 18px;
}

#header .admin-controls .dashboard:hover,
#header .admin-controls .new-post:hover {
  opacity: 1;
}

#header #follow-author {
  height: 65px;
  right: 0px;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 300px;
}

{/template:HeaderCSS}
/* Templates that effectively give us CSS mixins */

/* expected params: [property, value]*/
{template:css-mixin}
{property}: {value};
{/template:css-mixin}

/* Cross-browser mixin. Expected params: [property, value] */
{template:css-crossbrowser whitespace="collapse-breaks"}
{css-mixin property=\'-moz-{property}\' value=\'{value}\'}
{css-mixin property=\'-ms-{property}\' value=\'{value}\'}
{css-mixin property=\'-o-{property}\' value=\'{value}\'}
{css-mixin property=\'-webkit-{property}\' value=\'{value}\'}
{css-mixin property=\'{property}\' value=\'{value}\'}
{/template:css-crossbrowser}

{template:css-box-sizing whitespace="trim"}
{css-crossbrowser property=\'box-sizing\' value=\'{value}\'}
{/template:css-box-sizing}

{template:css-box-shadow whitespace="trim"}
{css-crossbrowser property=\'box-shadow\' value=\'{value}\'}
{/template:css-box-shadow}

{template:css-border-radius whitespace="trim"}
{css-crossbrowser property=\'border-radius\' value=\'{value}\'}
{/template:css-border-radius}

{template:css-border-image whitespace="trim"}
{css-mixin property=\'-moz-border-image\' value=\'{value}\'}
{css-mixin property=\'-ms-border-image\' value=\'{value}\'}
{css-mixin property=\'-o-border-image\' value=\'{value}\'}
/* If border-image is declared below -webkit-border-image */
/* Webkit doesn\'t render correctly.                       */
{css-mixin property=\'border-image\' value=\'{value}\'}
{css-mixin property=\'-webkit-border-image\' value=\'{value}\'}
{/template:css-border-image}

/* Cross-browser transition. Expected params: [value | property,duration,timing] */
{template:css-transition whitespace="collapse-breaks"}
{block:value}
{css-crossbrowser property=\'transition\' value=\'{value}\'}
{/block:value}
{block:IfNotvalue}
{css-crossbrowser property=\'transition\' value=\'{property} {duration} {timing}\'}
{/block:IfNotvalue}
{/template:css-transition}

{template:css-transition-property whitespace="trim"}
{css-crossbrowser property=\'transition-property\' value=\'{value}\'}
{/template:css-transition-property}

{template:css-transition-delay whitespace="trim"}
{css-crossbrowser property=\'transition-delay\' value=\'{value}\'}
{/template:css-transition-delay}

{template:css-transition-duration whitespace="trim"}
{css-crossbrowser property=\'transition-duration\' value=\'{value}\'}
{/template:css-transition-duration}

{template:css-transition-timing-function whitespace="trim"}
{css-crossbrowser property=\'transition-timing-function\' value=\'{value}\'}
{/template:css-transition-timing-function}

{template:css-transform whitespace="trim"}
{css-crossbrowser property=\'transform\' value=\'{value}\'}
{/template:css-transform}

{template:css-user-select whitespace="trim"}
{css-crossbrowser property=\'user-select\' value=\'{value}\'}
{/template:css-user-select}
{template:OverviewCSS}

body.overview-open {
  overflow: hidden;
}

/* overview background. */
#overview .overview-backdrop {
  background-color: black;
  bottom: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 0;
  {css-transition value="all 1004ms ease-in"}
  z-index: 9990;
}

#overview.open .overview-backdrop {
  opacity: 0.7;
}

#overview.closing .overview-backdrop {
  opacity: 0;
  {css-transition value="opacity 0.5s"}
}

.overview-panel {
  bottom: 0;
  {css-box-sizing value="border-box"}
  left: 20px;
  pointer-events: none;
  position: fixed;
  right: 20px;
  top: 50px;
  {css-transition value="all 1009ms ease-in-out"}
  z-index: 9999; /* Way up in the air. */
}

#overview.closing .overview-panel {
  opacity: 0;
  {css-transition value="opacity 0.5s"}
}

/* Bounding box of our overview item. */
.overview-panel .overview-wrap {
  background-color: transparent;
  {css-border-radius value="6px 6px 0px 0px"}
  {block:browser:msie}
  /* IE9 and IE10 don\'t support border-image */
  {css-box-shadow value="0px 0px 20px 0px rgba(0, 0, 0, .6)"}
  {css-box-sizing value="border-box"}
  {/block:browser:msie}
  {block:IfNotbrowser:msie}
  {css-border-image value="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAABTUlEQVRIx+2W3WrDMAyF47hJWzrY+z/mYKNtnNhLxlE5PZNhN3NuahB24qDP+nMUOn8EmW1dVony7UJ7NorMvxTXQKa87/42Mh3CBasFJhEQftdVTq17JhlgfvdkUQBkgx2wLhX3eoOtCQDOgGaDsrIeoIFcGARYHPdmiWGh9baXAM4GNDFYJKW9424PWBxQR2416BNwBJBdG5xYDgJMTuyKuHL7ZjIgxy2SmIs1iUYBTk6SzPRs8hNPBg4OLALQk7VnAV7JkowDLA40MXCgzIxk8QAZqS4vAvyiupugOFGGLpSxKZBydekBIAMfsX4T4CeU3Qk0CdAsntXCSO5l4DafVnmvxPBjlRuBbE4CTIHqji01i44AnRC7c6Xor5Ab5C4WPy6AF/BfgM2TZteyaFL4u1xtTS/v5r+n5j/g5i3GLk1U8zZxl0a4Sav/DRDkGFoKi/1vAAAAAElFTkSuQmCC) 12 / 12px repeat"}
  {css-box-sizing value="content-box"}
  background-clip: padding-box;
  top: -12px;
  {/block:IfNotbrowser:msie}
  height: 100%;
  left: 0;
  margin: 0 auto;
  max-width: 1000px;
  overflow: hidden;
  padding: 0px 1px; /* The controls the inset of the overview-inner. */
  pointer-events: auto;
  position: relative;
  {css-transition value="left 0.5s linear"}
  z-index: 9999;
}

.overview-panel.left .overview-wrap {
  left: -110%;
}

.overview-panel.right .overview-wrap {
  left: 110%;
}

/* This is the box that things can be draw in. */
.overview-panel .overview-inner {
  background-color: #fafafa;
  {css-border-radius value="6px 6px 0px 0px"}
  bottom: 0px;
  {css-box-sizing value="border-box"}
  height: 100%;
  position: relative;
  width: 100%;
}

.overview-panel .article {
  /* Defend against Chrome 12+ antialiasing bug. */
  background-color: #fafafa;
}

/* Header section for the overview-inner. */
.overview-panel .overview-header {
  {css-border-radius value="6px 6px 0px 0px"}
  {css-box-shadow value="0px 3px 3px rgba(200, 200, 200, .4)"}
  {css-box-sizing value="border-box"}
  height: 50px;
  padding: 10px;
  position: absolute;
  top: 0px;
  {css-transition value="box-shadow 0.2s linear"}
  z-index: 5;
  width: 100%;
}

.overview-header .share-controls {
  float: left;
  margin-left: 10px;
  margin-top: 4px;
}

.overview-header .overview-controls-left {
  float: left;
}

.overview-header .overview-controls-right {
  float: right;
}

/* overview container where we put the real stuff. */
.overview-panel .overview-content {
  bottom: 0px;
  {css-box-sizing value="border-box"}
  overflow-y: scroll; /* Always show: comments may cause it to bounce. */
  padding: 10px;
  position: absolute;
  top: 50px;
  {css-transition value="all 1s linear"}
  width: 100%;
  z-index: 1;
}

.overview-panel.start .overview-header {
  {css-box-shadow value="none"}
  min-width: 200px; /* Stop any buttons wrapping. */
}

/* Custom webkit scrollbars */

.overview-panel .overview-content::-webkit-scrollbar {
  background: transparent;
  height: 10px;
  width: 10px;
}

/* the start/end of bar  */
.overview-panel .overview-content::-webkit-scrollbar-button:start:decrement,
.overview-panel .overview-content::-webkit-scrollbar-button:end:increment {
  display: block;
  height: 10px;
  width: 10px;
}

/* the track background */
.overview-panel.overview-content::-webkit-scrollbar-track-piece {
  background-color: #eee;
}

/* the scrollbar itself */
.overview-panel .overview-content::-webkit-scrollbar-thumb{
  background-color: #666;
  height: 50px;
  width: 50px;
}

.overview-panel.start .overview-content:not(:hover)::-webkit-scrollbar-thumb {
  background-color: #eee;
}

.overview-panel .overview-content::-webkit-scrollbar-thumb:hover {
  background-color: #333;
  height: 50px;
  width: 50px;
}

{/template:OverviewCSS}

{template:ViewItemCSS}

body.viewitem-open {
  overflow: hidden;
}

/* Ensure header drawer is visible. */
body.viewitem-open #header .header-drawer {
  margin-top: 0px;
  position: fixed;
  top: 65px; /* animate back down to full unscrolled height */
}

/* While open, don\'t highlight the view menu. */
body.viewitem-open #header #views .menu-heading {
  color: {color:Menu Text alpha="0.6"} !important;
}

body.viewitem-open #header #views .menu-heading .indicator {
  border-color: {color:Menu Text alpha="0.6"} transparent transparent transparent !important;
}

.viewitem-panel {
  bottom: 0;
  border-top: solid 1px {color:Primary};
  {css-box-sizing value="border-box"}
  left: 0;
  margin-top: 0;
  position: fixed;
  right: 0;
  top: 100px;
  {css-transition value="margin-top 1s ease-in-out, bottom 1s ease-in-out"}
  z-index: 999; /* Way up in the air. */
}

.viewitem-panel.new,
.viewitem-panel.closing {
  margin-top: -100%;
  bottom: 100%;
}

/* Bounding box of our overview item. */
.viewitem-panel .viewitem-wrap {
  background-color: white;
  {css-box-sizing value="border-box"}
  height: 100%;
  left: 0;
  margin: 0;
  overflow: hidden;
  position: relative;
  z-index: 9999;
}

/* Header section for the overview-inner. */
.viewitem-panel .viewitem-header {
  {css-box-sizing value="border-box"}
  height: 50px;
  padding: 10px;
  position: absolute;
  top: 0px;
  z-index: 5;
  width: 100%;
}

/* This is the box that things can be draw in. */
.viewitem-panel .viewitem-inner {
  bottom: 0px;
  {css-box-sizing value="border-box"}
  height: 100%;
  overflow-y: scroll;
  padding: 30px 0px;
  position: absolute;
  top: 0;
  width: 100%;
}

/* This allows us to be cute with continuous backgrounds */
.viewitem-panel .viewitem-background {
  background-color: {color:Background};
  {block:image:Background}
  background-image: url({image:Background});
  background-position: left top;
  background-repeat: no-repeat;
  {/block:image:Background}
  {block:text:BodyBackgroundCSS}
  background: {text:BodyBackgroundCSS}; /* Override everything. */
  background-color: {color:Background};
  {/block:text:BodyBackgroundCSS}
  background-attachment: scroll; /* Chrome, really? */
  bottom: 0;
  left: 0;
  position: absolute;
  top: -100px; /* This should be the height of the header. */
  width: 100%;
}

/* overview container where we put the real stuff. */
.viewitem-panel .viewitem-content {
  background-color: white;
  background-clip: padding-box;
  /* TODO(kiyono): re-enable box-shadow when the performance of box-shadow */
  /* gets better.                                                          */
  {block:browser:msie}
  /* IE9 and IE10 don\'t support border-image */
  {css-box-shadow value="0px 0px 2px 1px #ccc"}
  {/block:browser:msie}
  {block:IfNotbrowser:msie}
  {css-border-image value="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAANUlEQVQIW2NkYGBgQ8JAJsMvEGYEEjxQzA0SBYKvQPwFJCEExIJAfBcqoQyk3+OVwGkUVssBP4wMT0ZBZV0AAAAASUVORK5CYII=) 2 / 2px repeat"}
  border-width: 2px;
  {/block:IfNotbrowser:msie}
  padding: 20px 70px;
  left: 8px; /* Align it with classic in center - why is ther an offset? */
  max-width: 750px;
  margin: 0px auto;
  position: relative;
}

.viewitem-panel .article {
  background-color: white; /* Chrome12+ anti-aliasing bug. */
}

.viewitem-panel button.close {
  margin-right: 10px;
}

.viewitem-panel .blogger-gear {
  position: absolute;
  left: 50%;
  margin-left: -47px;
  margin-top: -47px;
  top: 50%;
}

{/template:ViewItemCSS}
{template:PostCSS}

/* Styles here should be minimized to limit amount of explicit casing. */

.article {
  font-size: 14px;
  margin: 0 auto;
  max-width: 750px;
  position: relative;
}

/* Post Header */

.article .article-header {
  display: table;
  text-align: center;
  width: 100%;
}

.article .article-header .title {
  font-size: 20px;
  font-family: {font:Post Title};
  width: 100%;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  padding-right: 40px; /* Compensate for ribbon, to stay centered. */
}

.article .title .edit {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAA+UlEQVR42s3U2QmDQBAG4JRgKZbio4qieIAniniiYgkpwRIsISVYQkqwhMlMiHkIhITNhGRgYNeHz/1xncPhn0pV1dkwjNW2bYkNRAzCMIQ4jj+HdzBJEmiaBtq2hSzLxOFHcBgGGMcRuq4Tg5+Be9/gmQ2kxmdrnucSG9j3/TxNEy/IGvl3oKIokqZpC+sJdV1fHceBNE2vl5oDlC3LInBjAakw9tF13TPeNRljbwh8BlKZpnnGAXGkdRRFclEUd1gIpOj0cQijPa6VIAhOdV2LgXt03/cBoy8Ib57n0QvWsixz4XFG0XEuQlVVC8a23/6HX6A80DfrAlIMSJorw8fYAAAAAElFTkSuQmCC);
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
  display: inline-block;
  height: 21px;
  opacity: 0.8;
  position: relative;
  top: 3px;
  width: 21px;
}

.article .title .edit:hover {
  opacity: 1;
}

.article .article-header .date {
  float: left;
  left: 0px;
  margin: 0px 5px 5px 0px;
  position: relative;
  top: 5px;
}

/* Post Content */

.article .article-content {
  clear: both;
  color: {color:Text};
  line-height: 1.4;
  margin-top: 10px;
  margin: 10px auto 5px auto;
  text-align: justify;
}

/* This shouldn\'t really be added at all... it is from feeds. */
.article .article-content .blogger-post-footer {
  display: none;
}

/* Global resets for ul, li, p. Undo what we did. */
.article-content ol {
  list-style-type: decimal;
  margin: 0.5em 0;
  padding-left: 2em;
}
.article-content ul {
  list-style-type: disc;
  margin: 0.5em 0;
  padding-left: 2em;
}

.article-content p {
  margin: 1em 0;
}

.article .article-content a {
  display: inline;
}

.article .article-content img {
  {css-box-sizing value="border-box"}
  display: inline-block;
  height: auto;
  margin: 10px auto; /* Attempt to horizontally center. */
  /* For Sally-Anne. Keep images to the width of the post. */
  /* It\'s needed to avoid IE because of b/5420328 */
  {block:IfNotbrowser:msie}
  max-width: 100%;
  {/block:IfNotbrowser:msie}
}

.article .article-content img:not(.deferred) {
  padding: 8px;
  background-color: white;
  /* TODO(kiyono): re-enable box-shadow when the performance of box-shadow */
  /* gets better.                                                          */
  {block:browser:msie}
  /* IE9 and IE10 don\'t support border-image */
  border: 1px solid #ccc;
  {css-box-shadow value="0 0 15px rgba(0, 0, 0, 0.2)"}
  {/block:browser:msie}
  {block:IfNotbrowser:msie}
  {css-border-image value="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAA6klEQVQ4T7WUCw6CMBBExc85TLyC9z+CVzDxHCrIkH1murQxASTZTEPLYwa27Xbtq4splJVDDNCCkBdrMoN+AQtwXuwwjTPc3Wk8c+vA/PA+gA4GIu1T9Aneiqf7AlKsAySYKjscckReAvBgUM0Behuw+AzEqSmRTwEF+AxnOPTPMDmkAHhUjY9jyakuOXuZU48+vYBoDiWmVHUJGHIPMLGL+A7EGSCp3J3HugXtOuojXApEfZ3+FZj/7OLIm/+UVussbhtv5k0aG0jWVVuvBl11ONC0mx5fNag7Z352wvhOqp3YLXALWOzMD+SOhCHnBj97AAAAAElFTkSuQmCC) 9 / 9px repeat"}
  border-width: 9px;
  {/block:IfNotbrowser:msie}
}

/* Center all images/videos in posts. */
.article .article-content iframe,
.article .article-content embed {
  display: block;
  margin: 10px auto; /* Attempt to horizontally center. */
}

/* Post Footer */

.article .article-footer {
  clear: both;
  text-align: center;
}

.article .article-footer .publish-info,
.article .article-footer .labels {
  color: {color:Text lighten="30%"};
  font-family: {font:Text};
  padding: 5px 0;
}

.article .article-footer .publish-info .author a,
.article .article-footer .publish-info .time {
  color: {color:Text};
}

.article .article-footer .label:not(:last-child):after {
  content: \',\';
}

.article .article-footer .share-controls {
  display: inline-block;
  margin: 10px 5px;
  text-align: center;
}

/* AdSense */

.article.has-ads {
  padding-right: 200px;
  min-height: 650px; /* To accomodate skyscraper */
}

.article .adsense-aside {
  padding: 15px 5px 0 15px;
  position: absolute;
  right: 5px;
  text-align: center;
  top: 5px;
}

.article .adsense-footer .adsense {
  margin-top: 10px;
  padding: 10px 0;
}

{/template:PostCSS}');blogger.templates().template("CustomCSS","");blogger.templates().template("ViewCSS","");var O=$.inherit(blogger.core.view);O.prototype.d=function(){var a=$(H);a.length||this.bind(this.ui,M,$.proxy(this.d,this));a.remove();$(G).append(v+this.template(w)+u)};blogger.templates().compile('/* Copyright 2011 Google Inc. All Rights Reserved. */
{template:ViewCSS}

body {
  overflow-y: scroll; /* inevitable... skip the jitter */
  overflow-x: hidden;
}

#main {
  margin: 15px;
  padding: 10px;
  position: relative;
}

.slice {
  clear: both;
  margin: 0 auto;
  width: 900px;
}

.column {
  float: left;
}

.large {
  margin-bottom: 50px; /* Give room for small to expand */
  width: 330px;
  z-index: 3;
}

.medium {
  margin-bottom: 50px; /* Give room for small to expand */
  width: 300px;
  z-index: 2;
}

.small {
  width: 250px;
  z-index: 1;
}

.slice .date.ribbon {
  left: -30px;
  position: absolute;
  top: -6px;
}

.item {
  background-color: {color:Background}; /* Defend against chrome translate/gpu bug */
  border: solid 1px transparent;
  cursor: pointer;
  margin: 1px 1px 1px 0; /* Want them to jut up on column borders. */
  padding: 5px 15px;
  position: relative;
  {css-transition value="all ease-in-out 0.5s"}
}

.item:hover {
  background-color: white;
  {css-box-shadow value="0 0 3px rgba(0, 0, 0, 0.3)"}
}

.item.filtered {
  background-color: #f9edbe;
  border: solid 1px #f0c36d;
  {css-box-shadow value="0 2px 4px rgba(0, 0, 0, 0.2)"}
}

.item:hover {
  z-index: 200;
}

.item p {
  color: #666;
  font-size: 12px;
  line-height: 1.2;
  margin-top: 2px;
  margin: 0 0 2px 0;
  {css-transition value="ease-in-out 0.2s"}
  {css-transition-property value="color, opacity, left, top, height, width"}
}

.item .title {
  display: block;
  overflow: hidden;
  padding: 4px 0px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.item .summary {
  overflow: hidden;
  text-overflow: ellipsis;
}

.large .title {
  font-size: 24px;
}

.medium .title {
  font-size: 18px;
}

.small .title {
  font-size: 14px;
  padding: 2px 0px;
}

.large .item {
  padding: 15px;
}

.small > .item p {
  max-height: 0;
  overflow: hidden;
  {css-transition value="max-height 507ms ease-in-out"}
}

.small > .item:hover p {
  max-height: 75px;
}

.item .thumbnail {
  background-repeat: no-repeat;
  background-position: top center;
  display: block;
  margin: 0 auto;
  max-width: 100%;
}

.item .comments-count {
  opacity: 0;
  position: absolute;
  right: -7px;
  top: 0px;
  {css-transition-property value="opacity, top"}
  {css-transition-duration value="0.5s"}
  {css-transition-timing-function value="ease-out"}
  /*visibility: hidden;*/
  z-index: 999;
}

.item:hover .comments-count {
  opacity: 1;
  top: -10px;
  visibility: visible;
}

{/template:ViewCSS}
<\!-- Expected scope: Blog --\>
{template:Main}
{Header}
{EmptyMessage}
<div id="main" class="hfeed" tabindex="0">
</div>
{GadgetDock}
{Loading}
{MiscHidden}
{Feedback}
{/template:Main}

<\!-- Expected scope: Any --\>
{template:Slice}
<div class="slice">
  <div class="column large"></div>
  <div class="column medium"></div>
  <div class="column small"></div>
</div>
{/template:Slice}

<\!-- Expected scope: Post --\>
{template:Item}
<div class="item hentry {TagsAsClasses}">
  {block:column:large}
  {Ribbon class="date" top="{ShortMonth}" bottom="{DayOfMonth}" title="{TimeAgo}" url="{Post.Permalink}"}
  {block:PhotoURL}
  <a class="thumbnail" style="background-image: url({PhotoURL size=\'{size:thumbnail}\' square=\'true\'}); width: {size:thumbnail}px; height: {size:thumbnail}px;" href="{PhotoURL}"></a>
  {/block:PhotoURL}
  {/block:column:large}
  {block:Title}
  <h3 class="title entry-title">
    {ReblogBadge}
    {block:Post.RelatedURL}
    <a href="{Post.RelatedURL}">{Title}</a>
    {/block:Post.RelatedURL}
    {block:IfNotPost.RelatedURL}
    <a href="{Post.Permalink}" rel="bookmark">{Title}</a>
    {/block:IfNotPost.RelatedURL}
  </h3>
  {/block:Title}
  {block:IfNotTitle}
  <h3 class="title entry-title">
    {ReblogBadge}
    <span>{Month} {DayOfMonth}{DayOfMonthSuffix}, {Year}</span>
  </h3>
  {/block:IfNotTitle}
  <p class="summary entry-summary">{Summary}</p>
  {CommentBubble}
</div>
{/template:Item}');function P(){this.base()}$.inherit(P,O);blogger.ui().register(P);N=P.prototype;N.defaults={name:"timeslide",imgSize:300,pageSize:10,columnOffset:50};N.scope=function(a){a.scope(L,this.settings.imgSize);var c=Q(this);c&&(c.is(j)?a.scope(B,!0):c.is(l)?a.scope(C,!0):c.is(q)&&a.scope(D,!0))};N.onPreInit=function(){this.ui.addModule(new blogger.modules.Overview)};N.onInitComplete=function(){$(I).not(n).remove();this.d();$(A).children().not(o).remove();$(A).append(this.template(y));this.ui.select()};
N.onRender=function(a){if(a){var c=this,b=R(this);$.each(a,function(a,e){var f=Q(c,b);f.is(j)&&f.children().length&&(b=R(c,!0),f=Q(c,b));var t=$(c.template(x,e)).not(s).attr(E,e.id);f.append(t);t.addClass(K)})}};function R(a,c){var b=$(p).last();if(!b.length||c)b=$(a.template(z)).appendTo(g);return b}
function Q(a,c){var b=c||$(p).last();if(0!=b.length){var d=b.find(k),e=b.find(m),f=b.find(r),d=d.size()?d.height()+d.position().top:0,e=e.size()?e.height()+e.position().top:0,f=f.size()?f.height()+f.position().top:0;return!d||d<=e+a.settings.columnOffset&&f+a.settings.columnOffset>=e?b.find(j):e+a.settings.columnOffset<d?b.find(l):b.find(q)}}
N.onFilter=function(a,c){var b=$.map(a,function(a){return a.id});$(h).each(function(){$(this).toggleClass(F,0<=$.inArray($(this).attr(E),b))});if(this.c!=c){var d=$(i).first();if(d.length&&(d=d.offset())){var d=d.top,e=$(p).first().offset(),d=d-(e?e.top:0);$(J).stop().animate({scrollTop:d},500)}this.c=c}};N.onClearFilter=function(){$(h).removeClass(F);delete this.c};})();

