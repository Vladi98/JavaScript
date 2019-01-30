function sortAnArrayBy2Criteria(input) {

   input.sort((a,b)=>sortByLength(a,b)).forEach(element => {
      console.log(element);
   });

   function sortByLength(a,b){
      return a.length-b.length ||sortByName(a,b);
   }

   function sortByName(a,b){
      return a.toLowerCase().localeCompare(b.toLowerCase());
   }
 
}
sortAnArrayBy2Criteria(['alpha', 
'beta', 
'gamma']
);