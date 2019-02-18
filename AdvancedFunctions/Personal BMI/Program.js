function solve(name,age,weight,height) {
 let bmi = Math.round(weight/((height*height)/10000));
 
 let obj = {};

 function generateStatus(myBmi) {
   if(myBmi<18.5) {
     return 'underweight'
   }

   if(myBmi<25 && myBmi>=18.5){
     return 'normal';
   }

   if(myBmi>=25&&myBmi<30) {
     return 'overweight'
   }
   if(myBmi>=30) {
     return 'obese'
   }
 }

 obj = {
   'name':name,
   'personalInfo':{
     'age':age,
      'weight':weight,
      'height':height
   },
   'BMI':bmi,
   'status':generateStatus(bmi)
 }

 if(obj.status=='obese'){
   obj.recommendation = 'admission required'
 }

 
 return obj;
}