function entro(){
  document.querySelectorAll("img").forEach( function(img) {
      
      img.addEventListener("mouseenter", function(event) {
      const el = event.target || event.srcElement;
      const idei = el.id;
      
      document.getElementById(idei).setAttribute("class","furrystyleincrease")
      
    });
    
  });
  }
   
    function saiu(){
      document.querySelectorAll("img").forEach( function(img) {
          
          img.addEventListener("mouseleave", function(event) {
          const el = event.target || event.srcElement;
          const ideu = el.id;
          
          document.getElementById(ideu).setAttribute("class","furrystyle")
          
        });
        
      });
      }
   
function Furry(){
  
    document.querySelectorAll("div#FurriesP > img").forEach( function(img) {
        
        img.addEventListener("click", function(event) {
        const el = event.target || event.srcElement;
        const idef = el.id;
        
    
        document.getElementById("vis").removeAttribute("hidden",""); 
        document.getElementById("visid").setAttribute("src",idef); 
        document.getElementById("visid").setAttribute("id","visidoff"); 
        document.getElementsByTagName("body")[0].style.overflow = "hidden"; 
        document.getElementById("tudone").setAttribute("hidden","");
        document.getElementById("sumario").setAttribute("hidden",""); 
        document.getElementById("sopatiramemo").removeAttribute("style","margin-top:-35%;")
        
      });
      
    });
    }
   
    function TKC(){
        document.querySelectorAll("div#TwoKinds > img").forEach( function(img) {
            
            img.addEventListener("click", function(event) {
            const el = event.target || event.srcElement;
            const idetk = el.id;
            
        
            document.getElementById("vis").removeAttribute("hidden","");
            document.getElementById("visid").setAttribute("src",idetk); 
            document.getElementById("visid").setAttribute("id","visidoff"); 
            document.getElementsByTagName("body")[0].style.overflow = "hidden"; 
            document.getElementById("tudone").setAttribute("hidden","");
            document.getElementById("sumario").setAttribute("hidden","");
            document.getElementById("sopatiramemo").removeAttribute("style","margin-top:-35%;")

            
          });
          
        });
        }


        function DisneyC(){
            document.querySelectorAll("div#Disney > img").forEach( function(img) {
                
                img.addEventListener("click", function(event) {
                const el = event.target || event.srcElement;
                const idedc = el.id;
                
            
                document.getElementById("vis").removeAttribute("hidden",""); 
                document.getElementById("visid").setAttribute("src",idedc); 
                document.getElementById("visid").setAttribute("id","visidoff"); 
                document.getElementsByTagName("body")[0].style.overflow = "hidden"; 
                document.getElementById("tudone").setAttribute("hidden","");
                document.getElementById("sumario").setAttribute("hidden",""); 
                document.getElementById("sopatiramemo").removeAttribute("style","margin-top:-35%;")

                
              });
              
            });
            }
           
            function wr(){
              
              document.querySelectorAll("div#celular > img").forEach( function(img) {
                
                  img.addEventListener("click", function(event) {
                  const el = event.target || event.srcElement;
                  const idewr = el.id;
                  
              
                  document.getElementById("vis").removeAttribute("hidden",""); 
                  document.getElementById("visid").setAttribute("src",idewr); 
                  document.getElementById("visid").setAttribute("id","visidoff"); 
                  document.getElementsByTagName("body")[0].style.overflow = "hidden"; 
                  document.getElementById("tudone").setAttribute("hidden","");
                  document.getElementById("sumario").setAttribute("hidden",""); 
                  document.getElementById("sopatiramemo").removeAttribute("style","margin-top:-35%;")
  
                  
                });
                
              });
              }

              function wrc(){
              
                document.querySelectorAll("div#pc > img").forEach( function(img) {
                  
                    img.addEventListener("click", function(event) {
                    const el = event.target || event.srcElement;
                    const idewrc = el.id;
                    
                
                    document.getElementById("vis").removeAttribute("hidden",""); 
                    document.getElementById("visid").setAttribute("src",idewrc); 
                    document.getElementById("visid").setAttribute("id","visidoff"); 
                    document.getElementsByTagName("body")[0].style.overflow = "hidden"; 
                    document.getElementById("tudone").setAttribute("hidden","");
                    document.getElementById("sumario").setAttribute("hidden",""); 
                    document.getElementById("sopatiramemo").removeAttribute("style","margin-top:-35%;")
    
                    
                  });
                  
                });
                }
               
function HotC(){
    document.querySelectorAll("div#Hot > img").forEach( function(img) {
        
        img.addEventListener("click", function(event) {
        const el = event.target || event.srcElement;
        const ideh = el.id;
        
    
        document.getElementById("vis").removeAttribute("hidden",""); 
        document.getElementById("visid").setAttribute("src",ideh); 
        document.getElementById("visid").setAttribute("id","visidoff");
         document.getElementsByTagName("body")[0].style.overflow = "hidden"; 
         document.getElementById("tudone").setAttribute("hidden","");
         document.getElementById("sumario").setAttribute("hidden",""); 
         document.getElementById("sopatiramemo").removeAttribute("style","margin-top:-35%;")
        
      });
      
    });
    }
   
 
 function ligazoom(){
    document.getElementById("visidoff").setAttribute("id","visid")
    document.getElementById("onoffzoom").setAttribute("onClick","desligazoom()")
    document.getElementById("onoffzoom").style.background = "green"

}

function desligazoom(){
    document.getElementById("visid").setAttribute("id","visidoff")
    document.getElementById("onoffzoom").setAttribute("onClick","ligazoom()")
    document.getElementById("onoffzoom").style.background = "red"
}


function fechaVIS(){
    document.getElementById("onoffzoom").setAttribute("onClick","ligazoom()")
    document.getElementById("onoffzoom").style.background = "red"
    document.getElementById("vis").setAttribute("hidden","")
    document.getElementsByTagName("body")[0].style.overflow = "visible";
    document.getElementById("visidoff").setAttribute("id","visid");
    document.getElementById("AT").setAttribute("onClick","mouseentroAT")
    document.getElementById("BG").setAttribute("onClick","mouseentroBG")
    document.getElementById("CP").setAttribute("onClick","mouseentroCP")
    document.getElementById("FG").setAttribute("onClick","mouseentroFG")
    document.getElementById("LR").setAttribute("onClick","mouseentroLR")
    document.getElementById("PT").setAttribute("onClick","mouseentroPT")
    document.getElementById("HS").setAttribute("onClick","mouseentroHS")
    document.getElementById("tudone").removeAttribute("hidden","");
    document.getElementById("sumario").removeAttribute("hidden","");
    document.getElementById("sopatiramemo").setAttribute("style","background-color:rgba(255, 255, 255, 0.5) ;top:60px ;margin-top:-35%; border-radius:20px ; box-shadow:5px 5px 5px rgba(0, 0, 0, 0.7) ;")
                
}
