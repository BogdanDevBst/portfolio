const toggleNav = () => {

    if (document.getElementById('main-nav').classList.contains('shown')) {
        document.getElementById('main-nav').classList.remove('shown');
    } else {
        document.getElementById('main-nav').classList.add('shown');
    }
}

$(document).ready(function(){
    $('.toggle').click(function(){
        $('.sidebar-contact').toggleClass('active')
    })
})