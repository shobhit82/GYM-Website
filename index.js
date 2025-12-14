"use strict";
// scrolling for top


const scroller = document.getElementById("progress-scroll");
if (scroller) {
    scroller.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
document.addEventListener("DOMContentLoaded", () => {
    "use strict";
    // Scroll back to top
    const progressPath = document.querySelector('.progress-wrap path');
    if (progressPath) {
        const pathLength = progressPath.getTotalLength();
        progressPath.style.transition = 'none';
        progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
        progressPath.style.strokeDashoffset = `${pathLength}`;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = 'stroke-dashoffset 10ms linear';
        const updateProgress = () => {
            const scroll = window.scrollY || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = `${progress}`;
        };
        window.addEventListener('scroll', updateProgress);
        const offset = 100;
        window.addEventListener('scroll', () => {
            if (window.scrollY > offset) {
                const progressWrap = document.querySelector('.progress-wrap');
                if (progressWrap) {
                    progressWrap.classList.add('active-progress');
                }
            }
            else {
                const progressWrap = document.querySelector('.progress-wrap');
                if (progressWrap) {
                    progressWrap.classList.remove('active-progress');
                }
            }
        });
    }
    $('#mynavbar ul li').click(function () {
        $('#mynavbar ul li').removeClass('active');
        $(this).addClass('active');
        var hrefAttr = $(this).find('a').attr('href');
        $('html,body').animate({
            scrollTop: $(hrefAttr).offset().top - 60
        }, 900);
    });
  
    
});

window.addEventListener('scroll', function() {
  let header = document.querySelector('nav');
  header.classList.toggle('sticky', window.scrollY > 100);
  header.classList.toggle("navbar-dark", this.window.scrollY > 100);
});

// Touch devices commpatibility;
function touchStart() {
  document.body.setAttribute("touch", "");
}


const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});