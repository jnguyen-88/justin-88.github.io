// HTML Progress

window.onload = function onLoad() {
    var htmlSemiCircle = new ProgressBar.Circle('#html-progress', {
    // Stroke color.
    // Default: '#555'
    color: '#3a3a3a',

    strokeWidth: 3.0,
    trailColor: '#7a7a7a',
    trailWidth: 1.0,
    svgStyle: {
        display: 'block',

        // Important: make sure that your container has same
        // aspect ratio as the SVG canvas. See SVG canvas sizes above.
        width: '100%'
    },
    text: {
        // Initial value for text.
        // Default: null
        value: '95%',
        className: 'progressbar__label',

        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#666666',
            position: 'absolute',
            left: '50%',
            top: '50%',
            fontSize: '20px',
            padding: 0,
            margin: 0,
            // You can specify styles which will be browser prefixed
            transform: {
                prefix: true,
                value: 'translate(-50%, -50%)'
            }
        },

        autoStyleContainer: true,
        alignToBottom: true
    },

    Default: null,
    // fill: 'transparent',

    duration: 1200,
    easing: 'easeOut',

    from: { color: '#1deadc' },
    to: { color: '#3ca9fc' },
    step: function(state, circle, attachment) {
        circle.path.setAttribute('stroke', state.color);
    },
    warnings: false
})

    htmlSemiCircle.animate(.95);


    // CSS Progress

    var cssSemiCircle = new ProgressBar.Circle('#css-progress', {
    // Stroke color.
    // Default: '#555'
    color: '#3a3a3a',

    strokeWidth: 3.0,
    trailColor: '#7a7a7a',
    trailWidth: 1.0,
    svgStyle: {
        display: 'block',

        // Important: make sure that your container has same
        // aspect ratio as the SVG canvas. See SVG canvas sizes above.
        width: '100%'
    },
    text: {
        // Initial value for text.
        // Default: null
        value: '90%',
        className: 'progressbar__label',

        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#666666',
            position: 'absolute',
            left: '50%',
            top: '50%',
            fontSize: '20px',
            padding: 0,
            margin: 0,
            // You can specify styles which will be browser prefixed
            transform: {
                prefix: true,
                value: 'translate(-50%, -50%)'
            }
        },

        autoStyleContainer: true,
        alignToBottom: true
    },

    Default: null,
    // fill: 'transparent',

    duration: 1200,
    easing: 'easeOut',

    from: { color: '#1deadc' },
    to: { color: '#3ca9fc' },
    step: function(state, circle, attachment) {
        circle.path.setAttribute('stroke', state.color);
    },
    warnings: false
})

    cssSemiCircle.animate(.90);


        // JS Progress

    var jsSemiCircle = new ProgressBar.Circle('#js-progress', {
    // Stroke color.
    // Default: '#555'
    color: '#3a3a3a',

    strokeWidth: 3.0,
    trailColor: '#7a7a7a',
    trailWidth: 1.0,
    svgStyle: {
        display: 'block',

        // Important: make sure that your container has same
        // aspect ratio as the SVG canvas. See SVG canvas sizes above.
        width: '100%'
    },
    text: {
        // Initial value for text.
        // Default: null
        value: '80%',
        className: 'progressbar__label',

        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#666666',
            position: 'absolute',
            left: '50%',
            top: '50%',
            fontSize: '20px',
            padding: 0,
            margin: 0,
            // You can specify styles which will be browser prefixed
            transform: {
                prefix: true,
                value: 'translate(-50%, -50%)'
            }
        },

        autoStyleContainer: true,
        alignToBottom: true
    },

    Default: null,
    // fill: 'transparent',

    duration: 1200,
    easing: 'easeOut',

    from: { color: '#1deadc' },
    to: { color: '#3ca9fc' },
    step: function(state, circle, attachment) {
        circle.path.setAttribute('stroke', state.color);
    },
    warnings: false
})

    jsSemiCircle.animate(.80);



        // Ruby Progress

    var rubySemiCircle = new ProgressBar.Circle('#ruby-progress', {
    // Stroke color.
    // Default: '#555'
    color: '#3a3a3a',

    strokeWidth: 3.0,
    trailColor: '#7a7a7a',
    trailWidth: 1.0,
    svgStyle: {
        display: 'block',

        // Important: make sure that your container has same
        // aspect ratio as the SVG canvas. See SVG canvas sizes above.
        width: '100%'
    },
    text: {
        // Initial value for text.
        // Default: null
        value: '30%',
        className: 'progressbar__label',

        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#666666',
            position: 'absolute',
            left: '50%',
            top: '50%',
            fontSize: '20px',
            padding: 0,
            margin: 0,
            // You can specify styles which will be browser prefixed
            transform: {
                prefix: true,
                value: 'translate(-50%, -50%)'
            }
        },

        autoStyleContainer: true,
        alignToBottom: true
    },

    Default: null,
    // fill: 'transparent',

    duration: 1200,
    easing: 'easeOut',

    from: { color: '#1deadc' },
    to: { color: '#3ca9fc' },
    step: function(state, circle, attachment) {
        circle.path.setAttribute('stroke', state.color);
    },
    warnings: false
})

    rubySemiCircle.animate(.30);
};


// Contact popup
const contactBtn = document.querySelector("#contact-pop");

contactBtn.addEventListener('click', function(){
    console.log('hello')
})







