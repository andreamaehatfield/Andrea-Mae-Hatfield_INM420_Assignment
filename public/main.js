
// 1. Glide js

// Initialize Glide.js carousel
var glide = new Glide(".glide", {
  type: "carousel",
  focusAt: "center",
  perView: 3
});
//console.log(glide); 
glide.mount();



// 2. Bideo.js
document.addEventListener('DOMContentLoaded', function() {
  var video = document.querySelector('#bg-video');
  //console.log(video);

  var Bideo = function() {
    this.init = function(options) {
      // Bideo init code here
      this.videoEl = options.videoEl;
      this.playButton = document.querySelector('#play');
      this.pauseButton = document.querySelector('#pause');
      this.container = options.container;
      this.resize = options.resize;
      this.isMobile = options.isMobile;
      this.autoplay = options.autoplay;
      this.playButton = options.playButton;
      this.pauseButton = options.pauseButton;
      this.src = options.src;

      // initialize the video player here
      this.videoEl.src = this.src[0].src;
      this.videoEl.type = this.src[0].type;
      this.videoEl.load();

      if (this.autoplay) {
        this.videoEl.play();
      }

      // add event listeners here
      this.playButton.addEventListener('click', function() {
        bideo.videoEl.play();
      });

      this.pauseButton.addEventListener('click', function() {
        bideo.videoEl.pause();
      });

      if (this.resize) {
        window.addEventListener('resize', function() {
          // resize code here
        });
      }

      if (this.isMobile) {
        // mobile code here
      }
    };
  };

  var bideo = new Bideo();
  bideo.init({
    videoEl: video,
    container: document.querySelector('#container'),
    resize: true,
    isMobile: window.matchMedia(' (max-width  : 768px)').matches,
    autoplay: true,
    playButton: document.querySelector('#play'),
    pauseButton: document.querySelector('#pause'),
    src: [
      {
        src: 'assets/img/video.mp4',
        type: 'video/mp4',
      },
    ],
    onInit: function() {
      console.log('Bideo initialized');
    },

  })
});


// 3. Granim.js
document.addEventListener('DOMContentLoaded', function() {
  //console.log('DOMContentLoaded event fired');

  // Create a new instance of Granim.js
  var granimInstance = new Granim({
    element: '#footer-gradient', // Target the canvas element with id 'footer-gradient'
    direction: 'left-right',  // Set the direction of the gradient animation
    isPausedWhenNotInView: true, // Pause animation when the element is not in view
    states : {
        "default-state": { // Define the default state of the gradient
            gradients: [
                [
                    { color: '#939581', pos: .2 }, // Start color at position 0.2
                    { color: '#f9f9f9', pos: .8 },  // Middle color at position 0.8
                    { color: '#D6C88F', pos: 1 }  // End color at position 1
                ], [
                    { color: '#40e0d0', pos: 0 }, // Start color at position 0
                    { color: '#ff8c00', pos: .2 }, // Middle color at position 0.2
                    { color: '#939581', pos: .75 } // End color at position 0.75
                ],
            ]
        }
    }
  });
});

