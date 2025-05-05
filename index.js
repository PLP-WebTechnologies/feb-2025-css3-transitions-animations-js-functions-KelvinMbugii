function Animate(){
    const transitionBox = document.getElementById('transitionBox');

    const Animated = localStorage.getItem('boxAnimated');

    if(!Animated){
        transitionBox.style.opacity = "0";
        transitionBox.style.transform = "translateY(50px)";

        requestAnimationFrame(() => {
            transitionBox.classList.add('animate');
        })

        
        localStorage.setItem('boxAnimated', 'true');

    }else{
        alert("Animation has been Triggered!")
    }
}

function Reset(){
    const transitionBox = document.getElementById("transitionBox");
    transitionBox.classList.remove("animate");
    localStorage.removeItem("boxAnimated");

    transitionBox.style.opacity = "0";
    transitionBox.style.transform = "translateY(50px)"; 
}