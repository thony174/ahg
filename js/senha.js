
                
                function pedesenha(){
                    document.getElementById('senhador').removeAttribute("hidden","");
                    
                }
        
                
                
            function admit(){
                var senha=document.getElementById("senha").value;
                    senha=senha.toLowerCase();
             if (senha == 159874632){
               
                   
                    document.getElementById('Hot').removeAttribute("hidden","");
                    document.getElementById('senhador').setAttribute("hidden","");
                    document.getElementById('Hot').removeAttribute("onClick","");
                    document.getElementById('secionhot').removeAttribute("hidden","");
                    document.getElementById("hotoptionhidden").removeAttribute("hidden"," ")
                 }else{
                    alert("errado")
                 }
            
            console.log(senha)
            }
            
            function fechar_senhador(){
                document.getElementById('senhador').setAttribute("hidden","")
                
                
            }
           