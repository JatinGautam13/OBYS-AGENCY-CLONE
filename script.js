function locomotive_animation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}

function loading(){
        var tl =gsap.timeline()
    tl.from(".line h1",{
        y:150,
        stagger: 0.25,
        duration:0.6,
        delay:0.5
    })
    tl.from("#linetime",{
        opacity:0,
        onstart:function () {
                var counter=document.querySelector("#counter");
                grow=0;
                var time=setInterval(function(){
                    if(grow<100){
                        grow++
                        counter.innerHTML=grow
                    }else{
                        counter.innerHTML=grow;
            }
        },33);
      },
    })

    tl.from(".line h2",{
        animationName:"anime",
        opacity:1,
        duration:4,
    })

    tl.to("#loder",{
        opacity:0,
        duration:0.2 ,
        delay:0,
    })

    tl.from("#page1",{
        delay:0.2,
        y:1600,
        duration:0.4,
        opacity:0,
        ease:Power4,
    })
    tl.to("#loder",{
        display:"none"
    })
    tl.from(".hero h1,#hero3 h2,#hero3 h3",{
        y:120,
        stagger:0.2,
        opacity:0,
    })
    tl.from("#page2",{
        opacity:0,
    })
    
};
function cursureanimation(){
    Shery.mouseFollower({
        skew:true,
        ease:"cube-bezier(0.23,1,0.320,1)",
        duration:1,
    });
    Shery.makeMagnet("#nav-part2 h4")
    var vediocontainer=document.querySelector("#vediocontaner")
    var vedio=document.querySelector("#vediocontaner video")
    vediocontainer.addEventListener("mouseenter",function(){
        vediocontainer.addEventListener("mousemove",function(dets){
            gsap.to(".mousefollower",{
                opacity:0
            })
            gsap.to("#vedio-cursure",{
                left:dets.x - 480,
                y:dets.y - 400 
             })
        })
    })
    vediocontainer.addEventListener("mouseleave",function(){
        gsap.to(".mousefollower",{
            opacity:1 
        })
        gsap.to("#vedio-cursure",{
            top: "-4.5vw",
            left: "70%"
        })
    })
    var flag=0
    vediocontainer.addEventListener("click",function(){
        if(flag == 0){
            vedio.play()
            vedio.style.opacity=1
            document.querySelector("#vedio-cursure").innerHTML=`<i class="ri-pause-line"></i>`
            gsap.to("#vedio-cursure",{
                scale:0.5
            })
            flag=1
        }
        else{
            vedio.pause()
            vedio.style.opacity=0
            document.querySelector("#vedio-cursure").innerHTML=`<i class="ri-play-mini-fill"></i>`
            gsap.to("#vedio-cursure",{
                scale:1
            })
            flag=0
        }
    })
};
loading()
cursureanimation()
locomotive_animation()

function Sheryanimaton(){
    Shery.imageEffect(".image-div",{
        style:5,
        config:{"a":{"value":3.21,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272614206201047},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.12,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.41,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.37,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        gooey:true
    })
}
Sheryanimaton()