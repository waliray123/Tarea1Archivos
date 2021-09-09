$(document).ready(
    function(){
        var entrada = "";  
        var valor1= ""; 
        var decimal = false;
        var resultado = "";     
        $("button").click(function () {
            entrada = $(this).attr("value");
            if(isNaN(entrada)==false){
                valor1 += entrada;
                $("#result p").html(valor1);
            }else{
                switch(entrada){
                    case "÷":
                        $("#comprobacion p").html("Se dividira");
                        break;
                    case "*":
                        $("#comprobacion p").html("Se multiplicara");
                        break;
                    case "+":
                        $("#comprobacion p").html("Se sumara");
                        break;
                    case "-":
                        $("#comprobacion p").html("Se restara");
                        break;
                    case "^":
                        $("#comprobacion p").html("Se elevara");
                        break;
                    case "=":
                        $("#comprobacion p").html("Se obtendra el resultado");
                        break;
                    case ".":
                        if(decimal){
                            $("#comprobacion p").html("No se puede insertar otro punto decimal");
                        }else{
                            valor1 += "."
                            $("#result p").html(valor1);
                            decimal = true;
                        }                        
                        break;
                    case "DEL":
                        realizarDel();
                        break;
                    case "AC":
                        realizarAc();
                        break;
                }
            }
        });
        function realizarDel(){      
            if(valor1.length > 1){
                valor1 = valor1.substr(0,valor1.length-1);
                $("#result p").html(valor1);
            }else if(valor1.length == 1){
                valor1 = ""
                $("#result p").html("0");
            }       
            
        }
        function realizarAc(){
            valor1 = ""
            $("#result p").html("0");
        }
    }    
);

