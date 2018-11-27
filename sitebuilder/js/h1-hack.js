

/* h1 hacks */

/* content page */
<script>
jQuery( document ).ready(function($) {
    var h1_text = $(".id7-page-title > h1").text().trim();
    $(".scs-content-main-block > h2").eq(0).replaceWith("<h1>" + h1_text +  "</h1>");
});
</script>


/* topic page */

<script>
jQuery( document ).ready(function($) {
    var h1_text = $(".id7-page-title > h1").text().trim();
    $("h2.topic-title").replaceWith("<h1>" + h1_text +  "</h1>");
});
</script>




/* home page */

<script>
jQuery( document ).ready(function($) {
    $('link[href*="site.css"]').attr('href', 'https://warwick-scs.netlify.com/static-files/css/site.css');
});
</script>
