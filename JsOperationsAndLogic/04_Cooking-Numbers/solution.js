function solve() {
    let chopBtn = document.querySelector('#operations button:nth-child(1)').addEventListener('click',chop);
    let diceBtn = document.querySelector('#operations button:nth-child(2)').addEventListener('click',dice);
    let spiceBtn = document.querySelector('#operations button:nth-child(3)').addEventListener('click',spice);
    let bakeBtn = document.querySelector('#operations button:nth-child(4)').addEventListener('click',bake);
    let filletBtn = document.querySelector('#operations button:nth-child(5)').addEventListener('click',fillet);

    let number = document.getElementsByTagName("input")[0];
    let result =document.getElementById("output");
    let num =0;

    function getCurrentNumber() {
        num = +(result.textContent) ||number.value;
        return num;
    }

    function chop() {
         getCurrentNumber();
     
         num =+num/2;
         result.textContent = num;
        
    }
    function dice() {
        
        getCurrentNumber();
        
        num =Math.sqrt(+num);

       result.textContent=num;
   }
    
    function spice() {
        getCurrentNumber();
        
         num+=1;
         result.textContent =num;
        
    }

    function bake() {
        getCurrentNumber();

        num*=3;
        
         result.textContent =num;

    }

    function fillet() {
        getCurrentNumber();

        num=num-num*0.20;
        
         result.textContent =num;

    }
}