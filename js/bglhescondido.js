
        var clicks = 0;
        function butao(){
            clicks = clicks + 1;
            counter.innerHTML = clicks;
            if(clicks == 200){
            alert("não tem mais nada pra fazer?")
        }
        }
        function liberaescondscond(){
            document.getElementById("escondscond").style.visibility = "visible"
            document.getElementById("butaoescondscond").style.visibility = "hidden"
        }
        
        