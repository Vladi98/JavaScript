function solve() {
   let buttons= Array.from(document.getElementsByClassName("seat"));
   let summuryButton = document.getElementById("summary").addEventListener("click",summury);
   let h2
   let price =0;
   let fans =0;
   let result =document.getElementById("output");
    for (const btn of buttons) {
        btn.addEventListener("click",clickEvent);
    }

  function clickEvent(e) {

    
    let sector = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.className;
    let button = e.target;
    let seat = String.fromCharCode(65+e.target.parentNode.cellIndex)

    if(button.style.backgroundColor=='') {
        button.style.backgroundColor='rgb(255,0,0)';
        result.textContent+=` Seat ${e.target.textContent} in zone ${sector} sector ${seat} was taken.\n`;
        fans++;

        if(sector=="Levski" || sector == "Litex"){
          if(seat=='A'){
              price+=10;
          }

          else if(seat=='B') {
            price+=7
          }

          else price +=5;
        }

        if(sector=="VIP"){
            if(seat=='A'){
                price+=25;
            }
  
            else if(seat=='B') {
              price+=15;
            }
  
            else price +=10;
        }


    }

    else {
        result.textContent+=` Seat ${e.target.textContent} in zone ${sector} sector ${seat} is unavailable.\n`

    }
    
  }


  function summury() {
      document.getElementsByTagName("span")[0].textContent=`${price} leva, ${fans} fans.`;
  }
}