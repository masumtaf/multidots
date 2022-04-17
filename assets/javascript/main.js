
//work section swiper slider
 var swiper = new Swiper(".workSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });


  //team section swiper slider
  var swiper = new Swiper(".teamSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });


//counter 

$('.counter-number').counterUp();

//testimonial section swiper slider
var swiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

   /* ---- particles.js config ---- */

   //testiminial section
  particlesJS("particles-js2", {
    "particles": {
      "number": {
        "value": 30,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#000"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 1,
          "color": "#000"
        },
        "polygon": {
          "nb_sides": 5
        },
        
      },
      "opacity": {
        "value": 0.3,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 20,
          "size_min": 0.1,
          "sync": true
        }
      },
      
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "particle-js",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

    /* ---- particles.js config ---- */
    //contact section

particlesJS("particles-js1", {
    "particles": {
        "number": {
          "value": 20,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": ["#BD10E0","#B8E986","#50E3C2","#FFD300","#E86363"]
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#b6b2b2"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 8.017060304327615,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 12.181158184520,
            "size_min": 0.1,
            "sync": true
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#c8c8c8",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 3,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "bounce",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 0,
            "size": 47.952047952047955,
            "duration": 3.116883116883117,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
  });


  var onHover = document.querySelectorAll(".onhover");
  onHover.forEach(hover => {
    hover.addEventListener("mouseout", function() {
      document.querySelector(".follower").classList.remove("big");
    });
    hover.addEventListener("mouseenter", function() {
      document.querySelector(".follower").classList.add("big");
    });
  });
  
  function moveMagnet(event) {
    var magnetButton = event.currentTarget;
    var bounding = magnetButton.getBoundingClientRect();
    TweenMax.to(magnetButton, 0.5, {
      x:
        ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) *
        strength,
      y:
        ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) *
        strength,
      ease: Power4.easeOut
    });
  }
  
  $(document).on("mousemove mouseenter", function(e) {
    const pointer = $(".pointer");
    const follower = $(".follower");
    TweenMax.to(pointer, 0.8, {
      left: e.clientX,
      top: e.clientY,
      ease: Expo.easeOut
    });
    TweenMax.to(follower, 1.5, {
      left: e.clientX,
      top: e.clientY,
      ease: Expo.easeOut
    });
  });
  
  // Mouse follower Reverted
  $('.reverted').on('mouseenter mouseleave', (e)=> {
    if(e.type == 'mouseenter'){
      $('.follower-wrapper').addClass('revert');
    } else{
      $('.follower-wrapper').removeClass('revert');
    }
  });

  //Scroll back to top

(function($) { "use strict";

$(document).ready(function(){"use strict";
    
    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);	
    var offset = 50;
    var duration = 550;
    jQuery(window).on('scroll', function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });				
    jQuery('.progress-wrap').on('click', function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
    
    
});

})(jQuery); 