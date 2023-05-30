function animateInit() {
    var deferred = new Promise(function(resolve, reject) {
        var animateElements = document.querySelectorAll(".animate-init");
        var numElements = animateElements.length;
        var index = 0;
        animateElements.forEach(function(element, i) {
            index++;
            setTimeout(function() {
                element.style.opacity = 1;
                element.style.top = 0;
                if (numElements === index) {
                    resolve();
                }
            }, i * 200);
        });
    });
    return deferred;
}

function animateLocationIcon() {
    var locationIcon = document.querySelector(".location-icon");
    var index = document.querySelectorAll(".animate-init").length;
    setTimeout(function() {
        locationIcon.style.opacity = 1;
        locationIcon.style.top = 0;
        n();
    }, index * 200);
}

function n() {}

document.querySelector("h1").style.opacity = 1;
animateInit().then(animateLocationIcon);