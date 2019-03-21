class BookCollection{

  constructor(shelfGenre,room,shelfCapacity)
  {
     this.shelfGenre = shelfGenre;
     this.room = room;
     this.shelf =[];
     this.shelfCapacity = shelfCapacity;
  }
  get room(){
      return this._room;
  }

  set room(room){
     if(room !="livingRoom" && room != "bedRoom" && room != "closet"){
          throw `Cannot have book shelf in ${room}`;
          
      }
      this._room = room;
    
  }

  addBook(bookName,bookAuthor,genre){
       
    if(this.shelfCondition>0){
        this.shelf.push([bookName,bookAuthor,genre]);
    }
    else {
        this.shelf.shift();
        this.shelf.push([bookName,bookAuthor,genre]);
    }
    this.shelf.sort((a,b)=>a[1].localeCompare(b[1]));
  
  }
  
  throwAwayBook(bookName){
      this.shelf = this.shelf.filter(x=>x[0]!==bookName)
  }
  showBooks(genre){
      let str =  `Results for search "${genre}":\n`;
      let books = this.shelf.filter(x=>x[2]===genre);
      for (const book of books) {
          str+= `\uD83D\uDCD6 ${book[1]} - "${book[0]}"\n`
      }     
      return str.trim();
 
  }

  get shelfCondition(){
      return this.shelfCapacity-this.shelf.length;
  }

  toString(){
      let str ="";
      if(this.shelf.length<=0){
          return "It's an empty shelf"
      }
      else{
         str+=`"${this.shelfGenre}" shelf in ${this.room} contains:\n`

         for (const book of this.shelf) {
             str+=`\uD83D\uDCD6 "${book[0]}" - ${book[1]}\n`
         }
      }
      return str.trim();
  }
}
let bedRoom = new BookCollection('Mixed', 'beRoom', 5);
bedRoom.addBook("John Adams", "David McCullough", "history");
bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
console.log("Shelf's capacity: " + bedRoom.shelfCondition);
console.log(bedRoom.showBooks("history"));

