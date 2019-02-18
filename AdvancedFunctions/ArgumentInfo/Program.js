function solve() {
 let obj= {};
 let arr = [];
 let count = 0;
 for (let i = 0; i < arguments.length; i++) {
   
    let arg = arguments[i];
    let type = typeof(arg);
    console.log(`${type}: ${arg}`);

    if(!obj[type]){
    obj[type] =1;
    }

    else {
      obj[type]++;
    }
  
 }

for (const item in obj) {
  arr.push([item, obj[item]]);
}

 for (let i = 0; i < arr.length; i++) {

     console.log(arr[i].join(' = '));
     
   }
   
 
}