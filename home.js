let nav = document.getElementsByTagName("nav")[0];
let upOrDown = scrollY;

window.addEventListener("scroll", function () {
    if (scrollY > 0) {
        nav.style.backgroundColor = '#333333'
        if (upOrDown > this.scrollY) {
            nav.style.transform = 'translateY(0)';
            upOrDown = this.scrollY;
        } else {
            nav.style.transform = 'translateY(-60px)';
            upOrDown = this.scrollY;
        }
    } else {
        nav.style.backgroundColor = 'transparent'
        nav.style.top = '0';
        upOrDown = this.scrollY;
    }

});