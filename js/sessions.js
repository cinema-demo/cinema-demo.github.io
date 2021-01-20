$(document).ready(function () {
    updateContainer();
    $(window).resize(function() {
        updateContainer();
    });
    
});
function updateContainer() {

    let h2 = $(".img-film").height();
    let h1 = $(".col_h").height(h2-3);
}
