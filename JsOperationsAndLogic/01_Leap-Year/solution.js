function leapYear() {
    document.getElementsByTagName("button")[0].addEventListener("click",checkYear);

    function checkYear(){

       let year= document.getElementsByTagName("input")[0];
       let yearType =document.getElementsByTagName("h2")[0];
       
       leapOrNot(year.value);
       year.value='';

    }

   function leapOrNot(year) {
     
        if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
            document.getElementsByTagName("h2")[0].innerHTML ="Leap Year";
        }
 
        else {
            document.getElementsByTagName("h2")[0].innerHTML ="Not Leap Year";
        }
        document.querySelector("#year div").textContent = year;
        

   }

}