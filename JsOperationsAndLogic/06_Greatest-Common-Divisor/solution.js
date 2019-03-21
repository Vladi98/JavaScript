function greatestCD() {
    let a = +(document.getElementById("num1").value);
    
    let b = +(document.getElementById("num2").value);
    
   let result = document.getElementById("result");
   result.innerHTML =  gcd(a,b);

   function gcd(a,b) {
       if(!b) {
           return a;
       }
       return gcd(b,a%b);
   }
}