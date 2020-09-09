gsap.fromTo('.big-text',{x:-290,opacity:0,duration:4},{
    x: 0, opacity :1,duration :2
})

gsap.fromTo('.intro',{x:190,opacity:0,duration:4},{
    x: 0, opacity :1,duration : 2
})
gsap.fromTo('.web-des',{x:190,opacity:0,duration:4},{
    x: 0, opacity :1,duration :4
})
var one = document.getElementById("one")
var two = document.getElementById("two");
var three = document.getElementById("threes");
one.addEventListener("mouseover",function(){
    one.style.transform = "scale(1.2)",
    two.style.filter = "blur(2px)";
    three.style.filter = "blur(2px)"
})
one.addEventListener("mouseleave",function(){
    one.style.transform = "scale(1)";
    two.style.filter = "blur(0px)";
    three.style.filter = "blur(0px)"
})
two.addEventListener("mouseover",function(){
    two.style.transform = "scale(1.2)",
    one.style.filter = "blur(2px)";
    three.style.filter = "blur(2px)"
})
two.addEventListener("mouseleave",function(){
    two.style.transform = "scale(1)";
    one.style.filter = "blur(0px)";
    three.style.filter = "blur(0px)"
})


three.addEventListener("mouseover",function(){
    three.style.transform = "scale(1.2)",
    two.style.filter = "blur(2px)";
    one.style.filter = "blur(2px)"
})
three.addEventListener("mouseleave",function(){
    three.style.transform = "scale(1)";
    two.style.filter = "blur(0px)";
    one.style.filter = "blur(0px)"
})


gsap.to('.layer-1',{y : '-100vh',delay : .5})
gsap.to('.layer-2',{y : '-100vh',delay : .7})
gsap.to('.layer-3',{y : '-100vh',delay : .9})
gsap.to('.overflow',{x : '-100%',delay : 1.9})