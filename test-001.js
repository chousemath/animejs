const vh = (v) => {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
};

const vw = (v) => {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (v * w) / 100;
};

const imSize = vh(100);
const tSize = vh(24);
const delay = 7000;
const easingSpring = 'spring(1, 80, 10, 0)';
const endDelayImage = 2000;
const durImage = 1000;

const animeImage = (id, delay) => {
    anime({
        targets: `#im${id}`,
        keyframes: [
            { translateX: -imSize, duration: durImage, delay, endDelay: endDelayImage, easing: easingSpring, },
            { translateX: -3 * imSize, duration: durImage, easing: 'linear', },
        ],
        loop: false
    });

    anime({
        targets: `#t${id}`,
        keyframes: [
            { translateY: -2 * tSize, duration: durImage, delay: delay + 400, endDelay: endDelayImage - 300, easing: easingSpring, },
            { translateY: 3 * tSize, duration: durImage, easing: easingSpring, },
        ],
        loop: false
    });
};

anime({
    targets: '#logo',
    keyframes: [
        { opacity: ['0', '1'], easing: 'easeInOutQuad', duration: 1000, delay: 500, },
        { opacity: ['1', '0'], easing: 'easeInOutQuad', duration: 2000, delay: 15000, },
    ],
    loop: false
});
animeImage('001', 3000);
animeImage('002', 6000);
animeImage('003', 9000);
animeImage('004', 12000);

