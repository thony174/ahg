
         function abre(){
            document.getElementById("vis").removeAttribute("hidden","");  
            document.getElementById("visid").setAttribute("id","visidoff");
            document.getElementsByTagName("body")[0].style.overflow = "hidden"; 
            document.getElementById("tudone").setAttribute("hidden","");
            document.getElementById("sumario").setAttribute("hidden",""); 
            document.getElementById("sopatiramemo").removeAttribute("style","margin-top:-35%;")
			
           }
           
         
        function pesquisar(){
            
           
            var FL = document.querySelectorAll("div#FurriesP > img").length; 
            var TKL = document.querySelectorAll("div#TwoKinds > img").length; 
            var DL = document.querySelectorAll("div#Disney > img").length; 
            var HL = document.querySelectorAll("div#Hot > img").length; 
            
            console.log(`${FL} Furries, ${TKL} TwoKinds, ${DL} Disney, ${HL} Hot`)
            
            
         
            var numero1 = [];function numero1_aleatorio () {numero1.push(Math.floor(Math.random() * FL + 1)); console.log(numero1)}numero1_aleatorio();
		    var numero2 = [];function numero2_aleatorio () {numero2.push(Math.floor(Math.random() * TKL + 1)); 	console.log(numero2)}numero2_aleatorio();
            var numero4 = [];function numero4_aleatorio () {numero4.push(Math.floor(Math.random() * DL + 1)); 	console.log(numero4)}numero4_aleatorio();
            var numero6 = [];function numero6_aleatorio () {numero6.push(Math.floor(Math.random() * HL + 1)); 	console.log(numero6)}numero6_aleatorio();
       
			var options = document.getElementById('searchbar1').value //select
            
            var options2 = document.getElementById('searchbar3').value //random
            
			var input = document.getElementById('searchbar').value //number

            document.getElementById("text").setAttribute("href","")
			document.getElementById("text").textContent = " "
        
            document.getElementById("text").textContent = "Ir"
			document.getElementById("text1").textContent = "abrir"

            if(options == 1){
				document.getElementById("text").setAttribute("href","#Furries\\Furry "+`${input}`+".png")
                document.getElementById("visid").setAttribute("src","Furries\\Furry "+`${input}`+".png"); 
                if(options2 == 1){
                    document.getElementById("text").setAttribute("href","#Furries\\Furry "+`${numero1}`+".png")
                    document.getElementById("visid").setAttribute("src","Furries\\Furry "+`${numero1}`+".png"); 
                }
                
            
			    }
            if(options == 2){
				document.getElementById("text").setAttribute("href","#TwoKinds\\TwoKinds "+`${input}`+".png")
                document.getElementById("visid").setAttribute("src","TwoKinds\\TwoKinds "+`${input}`+".png"); 
			    if(options2 == 1){
                    document.getElementById("text").setAttribute("href","#TwoKinds\\TwoKinds "+`${numero2}`+".png")
                    document.getElementById("visid").setAttribute("src","TwoKinds\\TwoKinds "+`${numero2}`+".png"); 
                }
                }
                if(options == 4){
                    document.getElementById("text").setAttribute("href","#Disney\\Disney "+`${input}`+".png")
                    document.getElementById("visid").setAttribute("src","Disney\\Disney "+`${input}`+".png"); 
                    if(options2 == 1){
                        document.getElementById("text").setAttribute("href","#Disney\\Disney "+`${numero4}`+".png")
                        document.getElementById("visid").setAttribute("src","Disney\\Disney "+`${numero4}`+".png"); 
                    }
                    }
            if(options == 0){
				document.getElementById("text").setAttribute("href","#hot\\HFurry "+`${input}`+".png")
                document.getElementById("visid").setAttribute("src","hot\\HFurry "+`${input}`+".png"); 
			    if(options2 == 1){
                    document.getElementById("text").setAttribute("href","#hot\\HFurry "+`${numero6}`+".png")
                    document.getElementById("visid").setAttribute("src","hot\\HFurry "+`${numero6}`+".png"); 
                }
                }

                

		}
        function cscW(){document.getElementById("searchbar1").style.backgroundColor = "white"}
        function cscF(){document.getElementById("searchbar1").style.backgroundColor = "#ff0057"}
        function cscC(){document.getElementById("searchbar1").style.backgroundColor = "cyan"}
        function cscD(){document.getElementById("searchbar1").style.backgroundColor = "darkblue"}
        function cscR(){document.getElementById("searchbar1").style.backgroundColor = "red"}
	
        function cscw(){document.getElementById("searchbar3").style.backgroundColor = "white"}
        function cscr(){document.getElementById("searchbar3").style.backgroundColor = "red"}
