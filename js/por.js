/* WORKS,DESIGN */
$(function () {
    $(".block1").on("click", function () {
        $(this).toggleClass("on-click");
        $(".project1").slideToggle(1000);
    });
}); 
$(function () {
    $(".block2").on("click", function () {
        $(this).toggleClass("on-click");
        $(".project2").slideToggle(1000);
    });
}); 