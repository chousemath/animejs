// the purpose of this function is to calculate vh values from within Javascript
const vh = (v) => {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
};

// the purpose of this function is to calculate vw values from within Javascript
const vw = (v) => {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (v * w) / 100;
};

const imSize = vh(100); // standard image size was set to the entire vertical height of the screen
const tSize = vh(24); // height of the text box
const delay = 7000; // standard amount of delay between showing each product image (in milliseconds)

const easingSpring = 'spring(1, 80, 10, 0)'; // type of easing used for each product image
/* The Anime.js documentation indicates that spring easing consists of the following properties:
 * easing: 'spring(mass, stiffness, damping, velocity)'
 * In order to get a better understanding of this kind of easing, I tried to imagine an actual physical spring.
 * Mass: the amount of matter that your are moving around, I see it as the heft of the image
 * Stiffness: the measure of the resistance offered by an elastic body to deformation
 * Damping: produced by processes that dissipate the energy stored in the oscillation of a spring
 * Velocity: the speed of an object in a particular direction
*/

const endDelayImage = 2000; // default amount of delay (in milliseconds) after a product image has been shown
const durImage = 1000; // default time it takes for an image to be animated into the frame

const animeImage = (id, delay) => {
    // the Anime.js object that controls the animation of a product image into and out of the frame
    anime({
        targets: `#im${id}`,
        keyframes: [
            { translateX: -imSize, duration: durImage, delay, endDelay: endDelayImage, easing: easingSpring, },
            { translateX: -3 * imSize, duration: durImage, easing: 'linear', },
        ],
        loop: false
    });

    // the Anime.js object that controls the animation of a product description into and out of the frame
    anime({
        targets: `#t${id}`,
        keyframes: [
            // the animation of the product description is intentionally offset from the animation of the product image
            // the description animates in a little bit after the product image
            // the description also animates out a little be before the product image
            { translateY: -2 * tSize, duration: durImage, delay: delay + 400, endDelay: endDelayImage - 300, easing: easingSpring, },
            { translateY: 3 * tSize, duration: durImage, easing: easingSpring, },
        ],
        loop: false
    });
};

anime({
    targets: '#logo',
    keyframes: [
        // animate the opacity of the logo to make it visible at the start of the advertisement
        { opacity: ['0', '1'], easing: 'easeInOutQuad', duration: 1000, delay: 500, },
        // and then animate the opacity of the logo to make it invisible when the advertisement is complete
        { opacity: ['1', '0'], easing: 'easeInOutQuad', duration: 2000, delay: 15000, },
    ],
    loop: false
});

// create separate Anime.js objects for each product image/description pair
animeImage('001', 3000);
animeImage('002', 6000);
animeImage('003', 9000);
animeImage('004', 12000);

