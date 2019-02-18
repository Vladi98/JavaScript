(function() {
  let ingrediantes = {}
  ingrediantes['carbohydrate'] = 0,
  ingrediantes['flavour']=0,
  ingrediantes['fat']=0,
  ingrediantes['protein']=0


  
  function restock (ingredient, quantity) {
     
       ingrediantes[ingredient] += +quantity;

       return 'Success';
     
  }

  function prepare(product, quantity) {
     let message ='';

     if(product == 'apple') {

      if(ingrediantes['carbohydrate']<quantity*1 ) {
        message ='Error: not enough carbonohydrate in stock ';
        return message;

      }

      if(ingrediantes['flavour']<quantity*2) {
         message = 'Error: not enough carbonohydrate in stock ';
         return message;

      }

    

      else {
        ingrediantes['flavour']-= quantity*2;
        ingrediantes['carbohydrate']-= quantity*1;
        return 'Success';

      }
      

     }

     if(product=='coke') {

       if(ingrediantes['carbohydrate']<quantity*10) {
         message = 'Error: not enough carbonohydrate in stock ';
         return message;

       }

        if (ingrediantes['flavour'] < quantity*20) {
        message = 'Error: not enough flavour in stock ';
        return message;

       }

       else {
             ingrediantes['flavour']-=20*quantity;
             ingrediantes['carbohydrate']-=10*quantity;
             return 'Success';

            }
            
     }

     if(product=='burger') {

      if(ingrediantes['carbohydrate']<quantity*5) {
        message = 'Error: not enough carbonohydrate in stock ';
        return message;

      }
       if (ingrediantes['fat'] < quantity*7) {
        message = 'Error: not enough fat in stock ';
        return message;
 
       }
       if (ingrediantes['flavour'] < quantity*3) {
       message = 'Error: not enough flavour in stock ';
       return message;

      }

       else {
       ingrediantes['carbohydrate']-=quantity*5;
       ingrediantes['flavour']-=quantity*3;
       ingrediantes['fat'] -=quantity*7;
       return 'Success';
        
        }
        
      }

    if(product=='omelet') {

      if(ingrediantes['protein']<quantity*5){
        message = 'Error: not enough protein in stock ';
        return message;

      }

       if (ingrediantes['flavour'] < quantity*1) {
       message = 'Error: not enough flavour in stock ';
       return message;

      }

       if (ingrediantes['fat'] < quantity*1) {
        message = 'Error: not enough fat in stock ';
        return message;
        
       }

       else {
       ingrediantes['protein'] -= quantity*5;
       ingrediantes['flavour'] -= quantity*1;
       ingrediantes['fat'] -= quantity*1;
       return 'Success';
      }
      
    }

    if(product=='cheverme') {

      if(ingrediantes['protein']<quantity*10){
        message = 'Error: not enough protein in stock ';
        return message;

      }
       if(ingrediantes['carbohydrate']<quantity*10) {
        message = 'Error: not enough carbonohydrate in stock ';
        return message;

      }
      if (ingrediantes['fat'] < quantity*10) {
        message = 'Error: not enough fat in stock ';
        return message;

 
       }

       if (ingrediantes['flavour'] < quantity*10) {
       message = 'Error: not enough flavour in stock ';
       return message;


      }

    
       
     

       else {
        
       ingrediantes['protein'] -= quantity*10;
       ingrediantes['flavour'] -= quantity*10;
       ingrediantes['carbohydrate'] -= quantity*10;
       ingrediantes['fat'] -= quantity*10;

       return 'Success'
        
        }
    }

  }
  
  function report() {
     return `protein=${ingrediantes['protein']} carbohydrate=${ingrediantes['carbohydrate']} fat=${ingrediantes['fat']} flavour=${ingrediantes['flavour']}`
  }
   
  return function (command) {
    let tokens = command.split(' ');

    if(tokens[0] == 'restock') {
      return restock(tokens[1],tokens[2]);

    }

    else if (tokens[0] == 'prepare') {
      return prepare(tokens[1],tokens[2]);
    }

    else if(tokens[0]== 'report') {
      return report();
    }
  }
 
})()
 console.log(manege('prepare cheverme 1'));
 console.log(manege('restock protein 10'));
 console.log(manege('prepare cheverme 1'));
 console.log(manege('restock carbohydrate 10'));
 console.log(manege('prepare cheverme 1'));
 console.log(manege('restock fat 10'));
 console.log(manege('prepare cheverme 1'));
 console.log(manege('restock flavour 10'));
 console.log(manege('prepare cheverme 1'));
 console.log(manege('report'));





