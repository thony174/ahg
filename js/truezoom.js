
    
    boxy.addEventListener("mousemove", (e) =>{
        var x = e.clientX - e.target.offsetLeft;
        var y = e.clientY - e.target.offsetTop;
        var nivdz = document.getElementById("nivdz").value
        visid.style.transformOrigin = `${x}px ${y}px`;
        
        visid.style.transform = "scale("+nivdz+")";
        
        })
        
        boxy.addEventListener("mouseleave", () => {
        
        
        visid.style.transform =  "scale(1)";
        })   

        
