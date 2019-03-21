function validate() {
    document.querySelector("#exercise fieldset div button").addEventListener("click",event);
    
 
     function event(){
       let input =document.querySelector("#exercise fieldset div input").value;
       let weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];
       let sum =0;
       let reminder =0;
       let lastDigit = input[input.length-1];
       let response = document.getElementById("response");

       for (let i = 0; i < 9; i++) {
          
          sum+=+input[i] * weights[i];
       }
       reminder= sum % 11;

       if(reminder==10) {
         reminder=0;
       }
      
       if(lastDigit==reminder) {
         response.textContent = "This number is Valid!";
       }

       else {
         response.textContent = "This number is NOT Valid!";
       }
       
     }
 }