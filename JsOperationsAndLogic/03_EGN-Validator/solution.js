function validate() {
    document.getElementsByTagName("button")[0].addEventListener("click",event);

    function event() {
       let year = document.getElementById("year").value;
       let month = document.getElementById("month");
       let date = document.getElementById("date").value;
       let region = document.getElementById("region").value;
       let gender = document.getElementById("male").checked ? 2:1;       
       let egn ="";
       let monthValue ="";
       let weightPosition = [2, 4, 8, 5, 10, 9, 7, 3, 6];


       
       if(validateYear(year) && validateRegion(region)){
       
        egn= year[year.length-2]+year[year.length-1];

        switch (month.value){
            case "January": monthValue = "01"; break;
            case "February": monthValue = "02"; break;
            case "March": monthValue = "03"; break;
            case "April": monthValue = "04"; break;
            case "May": monthValue = "05"; break;
            case "June": monthValue = "06"; break;
            case "July": monthValue = "07"; break;
            case "August": monthValue = "08"; break;
            case "September": monthValue = "09"; break;
            case "October": monthValue = "10"; break;
            case "November": monthValue = "11"; break;
            case "December": monthValue = "12"; break;
  
         }
              
           egn+=monthValue;

           if(date.length==1) {
            egn+="0";
           }
           egn+=date;
           egn+=region[region.length-3] + region[region.length-2];
           egn+=gender
           let reminder = validateEgn(weightPosition,egn);
           egn+=reminder.toString();

           let result = document.getElementById("egn");
           result.textContent = "Your EGN is: " +egn;

           document.getElementById("year").value=""          
           document.getElementById("month").value = "";
           document.getElementById("date").value="";
           document.getElementById("region").value="";  
           document.getElementById("male").checked=false;     
           document.getElementById("female").checked=false;     
           
        }

         
            
        
    }

    function validateYear(year) {
        if(year>=1900 && year<=2100){
            return true;
        }
        return false;
    }

    function validateRegion(region) {
        if(region>=43 && region<=999) {
            return true;
        }
        return false;
    }

    function validateEgn(input, egn) {
        let sum =0;
        let reminder =0;
          for (let i = 0; i < 9; i++) {
              if(+egn[i]!=0) {
              sum += +egn[i]*Number(input[i]);
            }
              
          }
          reminder = sum%11;
          if(reminder===10) {
              reminder=0;
          }
          return reminder;
    }

   
}