
            document.addEventListener("keydown", function(event) {
                if (event.key === "Escape") {
                fechaVIS()    
                }
            });
            
            function submitcolor(){
                var colors = document.getElementById("colorid").value;
                colors=colors.toLowerCase();
                var colors1 = document.getElementById("colorid1").value;
                colors1=colors1.toLowerCase();
                if(`${colors1}`== "outro"){
                    document.getElementById("colorid").style.visibility = "visible"
                    document.getElementsByTagName("body")[0].style.backgroundColor = `${colors}`
                    
                        }else{
                            document.getElementsByTagName("body")[0].style.backgroundColor = `${colors1}`
                            
                        }
                        if(`${colors1}`!= "outro"){
                            document.getElementById("colorid").style.visibility = "hidden"
                            document.getElementsByTagName("body")[0].style.backgroundColor = `${colors1}`
                                }
                                
                }
                function insconde(){
                document.getElementById("mostraoudesmostra").setAttribute("onClick","desisconde()")
                document.getElementById("mostraoudesmostra").style.backgroundColor = "green"
                document.getElementById("mostraoudesmostra").textContent = "Show interface"
                document.getElementById("tudone").setAttribute("hidden","");
                document.getElementById("sumario").setAttribute("hidden","");
                document.getElementById("sopatiramemo").removeAttribute("style","background-color:rgba(255, 255, 255, 0.5) ;top:60px ;margin-top:-35%; border-radius:20px ; box-shadow:5px 5px 5px rgba(0, 0, 0, 0.7) ;")
            }
                function desisconde(){
                document.getElementById("mostraoudesmostra").setAttribute("onClick","insconde()")
                document.getElementById("mostraoudesmostra").style.backgroundColor = "red"
                document.getElementById("mostraoudesmostra").textContent = "Hide interface"
                document.getElementById("tudone").removeAttribute("hidden","");
                document.getElementById("sumario").removeAttribute("hidden","");
                document.getElementById("sopatiramemo").setAttribute("style","background-color:rgba(255, 255, 255, 0.5) ;top:60px ;margin-top:-35%; border-radius:20px ; box-shadow:5px 5px 5px rgba(0, 0, 0, 0.7) ;")
            }
            