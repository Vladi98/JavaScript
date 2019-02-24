class Rat{

    constructor(name) {
        this.name = name;
        this.arrOfRats =[];
    }
    
    unite(ratObject){
      if(ratObject instanceof Rat)
       this.arrOfRats.push(ratObject)
    }

    getRats() {
      return this.arrOfRats;
    }

    toString() {
         let str = `${this.name}\n`;

         for (let item of this.arrOfRats) {
            str+=`#${item.name}\n`
         }
         return str
    }
}