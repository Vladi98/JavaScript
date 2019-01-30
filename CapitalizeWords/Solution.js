function capitalizeWords(str) {
  
   str = str.toUpperCase();
   let strArr = str.split(' ');
   let word ='';
   for (let element of strArr) {
      let first = element[0];
      word+=first;
      for (let i = 1; i < element.length; i++) {
         word+= element[i].toLowerCase();
         
      }
      word+=' ';
   }
 
   

  console.log(word);
}