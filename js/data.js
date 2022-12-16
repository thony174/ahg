
    var data = new Date();
    var dia     = data.getDate();           // 1-31
    var dia_sem = data.getDay();            // 0-6 (zero=domingo)
    var mes     = data.getMonth();       // 0-11 (zero=janeiro)
    var ano2    = data.getYear();           // 2 dígitos
    var ano4    = data.getFullYear();       // 4 dígitos
    var hora    = data.getHours();          // 0-23
    var min     = data.getMinutes();        // 0-59
    var seg     = data.getSeconds();        // 0-59
    var mseg    = data.getMilliseconds();   // 0-999
    var tz      = data.getTimezoneOffset(); // em minutos
    console.log(ano4 + "/" + mes + "/" + dia, "\n", hora + ":" + min + ":" + seg)

   
                
		
                function relogio(){
                    var data=new Date();
                    var hora=data.getHours();
                    var min=data.getMinutes();
                    var seg=data.getSeconds();
                    
                    if(hora < 10){
                        hora="0"+hora;
                    }
                    if(min < 10){
                        min="0"+min;
                    }
                    if(seg < 10){
                        seg="0"+seg;
                    }
                    
                    var horas=hora + ":" + min + ":" + seg;
                    
                
                }
    
                var timer=setInterval(relogio);
    
           //natal 
    if(mes == 11 && dia == 25 && hora >= 6 && hora <= 10){
    var x;
    var r = confirm("é natal!");
    if (r == true){
    document.getElementsByTagName("vis")[0].style.visibility = "visible"; document.getElementById("visid").setAttribute("src","Teas de fudo\\Natal\\Bloqueio\\Natal (5).jpg"    ); document.getElementById("visid").setAttribute("id","visidoff"); document.getElementsByTagName("body")[0].style.overflow = "hidden";
    
    }
    setTimeout(function(){
    alert("feliz natal!")
        ;
    },1000);
    }
           //halowi
    if(mes == 9 && dia == 31 && hora >= 6 && hora <= 20){
        var x;
        var r = confirm("Halloween!!");
        if (r == true){
        document.getElementsByTagName("vis")[0].style.visibility = "visible"; document.getElementById("visid").setAttribute("src","Teas de fudo\\Hallowin.png"    ); document.getElementById("visid").setAttribute("id","visidoff"); document.getElementsByTagName("body")[0].style.overflow = "hidden";
        
        }
        setTimeout(function(){
        alert("Um halloween assustador para você!")
            ;
        },1000);
    }
    