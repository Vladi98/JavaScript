function solve() {
   let button = Array.from(document.getElementsByTagName("button"));
   button[0].addEventListener("click",filter);
   button[1].addEventListener("click",sort);
   button[2].addEventListener("click",rotate);
   button[3].addEventListener("click",get);
       
   let input = document.getElementById("input");
   let output = document.getElementById("output");
   let p = document.querySelector("#output p");
   let result = '';

   function filter() {
   let secondCommand = document.getElementById("filterSecondaryCmd");
   let position = document.getElementById("filterPosition");
      
      if(secondCommand.value==="uppercase"){

         
         let regex = /[A-Z+]/g;
         let letters = input.value.match(regex);

         let resultLetter = letters[+position.value+1-2];      
      
        // result+= resultLetter;
        p.textContent = resultLetter;
         
      }

      else if(secondCommand.value==="lowercase"){
         let regex = /[a-z+]/g;
         let letters = input.value.match(regex);

         
         let resultLetter = letters[+position.value+1-2];       
         result+= resultLetter;
        p.textContent += resultLetter;

         
      }
      else if(secondCommand.value==="nums"){
         let regex = /[0-9+]/g;
         let letters = input.value.match(regex);
         
         let resultLetter = letters[+position.value+1-2];       
         result+= resultLetter;
        p.textContent += resultLetter;

      }
     
   }

   function sort() {
      let sortSecondaryCmd = document.getElementById("sortSecondaryCmd");
      let position = document.getElementById("sortPosition");   

      //console.log(sortSecondaryCmd.value);

      if(sortSecondaryCmd.value==='A') {
         let arr = input.value.split("");
         let sorted = arr.sort();
         let resultLetter = sorted[+position.value+1-2];       
        p.textContent+=resultLetter;
      }

      else if(sortSecondaryCmd.value==='Z') {
         let arr = input.value.split("");
         let sorted = arr.sort((a,b)=>a>b).reverse();
         let resultLetter = sorted[+position.value+1-2];       
        p.textContent+=resultLetter;
        
      }

   }

   function rotate() {
      let rotateSecondaryCmd = document.getElementById("rotateSecondaryCmd").value;
      let position = document.getElementById("rotatePosition").value;   
      let splitedInput = input.value.split('');


      let rotations = rotateSecondaryCmd%splitedInput.length;
      while (rotations>0) {
         let char = splitedInput.pop();
         splitedInput.unshift(char);
         rotations-=1;
      }
     
      let resultLetter = splitedInput[+position+1-2];       
      p.textContent+=resultLetter;
       
   }

   function get() {
      let position = document.getElementById("getPosition");
      let resultLetter = input.value[+position.value+1-2];    
      p.textContent+=resultLetter

   }

 //  console.log(result);
}