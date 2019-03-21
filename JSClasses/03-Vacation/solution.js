class Vacation{

    constructor(organizer,destination,budget){
       this.organizer=organizer;
       this.destination=destination;
       this.budget=budget;
       this.kids ={};
    }

    registerChild(name,grade,budget){
     
      if(budget<this.budget){
          return `${name}'s money is not enough to go on vacation to ${this.destination}.'`
      }
      else {
          if(!this.kids.hasOwnProperty(grade)){
              this.kids[grade]= [`${name}-${budget}`];
              return this.kids[grade];
          }
          else {
              let isHere = this.kids[grade].find(x=>x.includes(name));

              if(isHere==true){
                  return `${name} is already in the list for this ${this.destination} vacation.`
              }
              else {
                  this.kids[grade].push(`${name}-${budget}`);
                 return this.kids[grade];  
              }
          }
      }
    }

    removeChild(name, grade){
      if(!this.kids.hasOwnProperty(grade)){
        return  `We couldn't find ${name} in ${grade} grade.`

      }
      else {
          let Exist = this.kids[grade].find(x=>x.includes(name));

          if(Exist){
              //let index = IndexOf(this.kids[grade].find(x=>x.includes(name)));
              this.kids[grade] = this.kids[grade].filter(x=>!x.includes(name))
              return this.kids[grade] 
          }
          else {
             return `We couldn't find ${name} in ${grade} grade.`
          }
      }
    }

    get numberOfChildren(){
        let count =0;
       for (const value of Object.values(this.kids)) {
           count+= value.length;
       }
       return count
    }
    toString(){
        if(Object.keys(this.kids).length==0){
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`; 
        }
       let sortedGrades=  Object.entries(this.kids).sort((a,b)=>a[0] -b[0]);
        let result = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`
        for (let grade of sortedGrades) {
            result += `Grade: ${grade[0]}\n`;
            let kidNumber = 1;
            for (let kid of grade[1]) {
                result += `${kidNumber}. ${kid}\n`;
                kidNumber++;
            }
        }
        return result;
    }
}

let child = new Vacation("Ivan","Sofia",100);
console.log(child.registerChild("gosho",5,200));
console.log(child.registerChild("ivan",5,200));
console.log(child.registerChild("as",5,200));


console.log(child.numberOfChildren);
console.log(child.toString());

