$(document).ready(function() {
    $("#banner-slider .owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: true
    })
});

window.addEventListener('scroll', function() {
    var h = document.querySelector('.navbar');
    h.classList.toggle('sticky', window.scrollY > 0);
    var l = document.querySelector('.info');
    l.classList.toggle('slicky', window.scrollY > 0);
});
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (10000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = days + "d  " + hours + "h  " +
        minutes + "m  " + seconds + "s  ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

// schedule
const schedule = document.querySelector('.click')
const schedule1 = document.querySelector('.click1')
const schedule2 = document.querySelector('.click2')
const tr1 = document.querySelector('.triangle-1')
const tr2 = document.querySelector('.triangle-2')
const tr = document.querySelector('.triangle')
const second = document.getElementById('second-day')
const first = document.getElementById('first-day')


schedule.addEventListener("click", function() {
    console.log('bbb');
    tr1.classList.remove("open");
    tr2.classList.remove("open");
    tr.classList.remove('close')
    if (first.style.display = 'none') {
        console.log('hh')
        first.style.display = 'block'
        second.style.display = 'none'
    }
})

// second day click
schedule1.addEventListener("click", function() {
        console.log('bbb');
        tr1.classList.add("open");
        tr2.classList.remove("open");
        tr.classList.add('close')
        if (second.style.display = 'none') {
            console.log('ff')
            second.style.display = 'block'
            first.style.display = 'none'
        }
    })
    // third day click
schedule2.addEventListener("click", function() {
    console.log('hhh');
    tr1.classList.remove('open')
    tr2.classList.add("open");
    tr.classList.add('close')
    if (first.style.display = 'none') {
        console.log('hh1')
        first.style.display = 'block'
        second.style.display = 'none'
    }
})