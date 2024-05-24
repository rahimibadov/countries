

$(document).ready(function(){                //^ Use ready() to make a function available after the document is loaded:  syntax--$(document).ready(function)
    var rahim = function(pais){
      $("#countries").removeClass();
      $("#countries").addClass(pais);
      $("#pictures").removeClass();
      $("#pictures").addClass(pais+"img");
    };
    $("li").click(function(){
      flag = $(this).html();
      //alert(flag);
      $("#pictures img").css("visibility","hidden");
      switch(flag){
        case "Azerbaijan":
          rahim("azerbaycan");
          break;
        case "Turkey":
          rahim("turkiye"); 
          break;
        case "Germany":
          rahim("almaniya");
          break;
        case "Italy":
            rahim("italiya");
            break;
        case "Holland":
          rahim("hollandiya");
          break;
        case "Finland":
          rahim("finlandiya");
          break;
        case "Norway":
          rahim("norvec");
          break;
          case "Sweden":
            rahim("isvec");
            break;
        }
      });
    });


