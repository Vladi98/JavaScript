function solve() {
   let number = document.getElementById("num").value;
   let result = document.getElementById("result");
   let str ='';
   for (let i = 0; i <= +number; i++) {
      if(+number%i==0) {
      str += i+' ';
      result.textContent=str.trim();
      }
      
   }
}