function getNext() {
   let n =document.getElementById("num").value;
   //let n =13;
   let result = document.getElementById("result");
   let str = '';
   result.textContent+=n+' ';
   while (true) {
       if(+n==1) {
           break;
       }

       else if(+n%2==0){
           n = +n/2
           result.textContent+=n+' ';
         
       }

       else if(+n%2!=0) {
           n = 3*Number(n)+1;
          
           result.textContent+=n+' ';
         
       }
   }
   
}