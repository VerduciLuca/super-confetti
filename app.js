console.log('super confetti');

function fire1(){
    console.log('fire 1');
    confetti({
        particleCount: 100,
        spread: 180,
        origin: { y: 0.5 }
    });
}

function fire2(){
    console.log('fire 2');
    var count = 200;
    var defaults = {
        origin: { y: 0.5 }
    };

function fire(particleRatio, opts) {
    confetti(Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio)
    }));
}

fire(0.25, {
    spread: 26,
    startVelocity: 55,
});
fire(0.2, {
    spread: 60,
});
fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
});
fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
});
fire(0.1, {
    spread: 120,
    startVelocity: 45,
});
}

function fire3(){
    console.log('fire 3');
    var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    
    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }
    
    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();
    
        if (timeLeft <= 0) {
        return clearInterval(interval);
        }
    
      var particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
}

function fire4(){
    var end = Date.now() + (15 * 1000);


var colors = ['#bb0000', '#ffffff'];

(function frame() {
    confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
    });
    confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
    });

    if (Date.now() < end) {
    requestAnimationFrame(frame);
    }
}());
}