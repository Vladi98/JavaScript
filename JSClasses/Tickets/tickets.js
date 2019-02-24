function tickets(input, sortBy){

 class Ticket{
    constructor(destination, price, status){
        this.destination = destination;
        this.price = price;
        this.status = status;
    }

 }
   let arrOfTickets =[];
 for (const ticket of input) {
     let splitedTicket = ticket.split('|');    
     let ticketObj = new Ticket(splitedTicket[0],Number(splitedTicket[1]),splitedTicket[2]);
     arrOfTickets.push(ticketObj);
      
}
let sortedTickets = [];
switch (sortBy){

    case "destination":

        sortedTickets = arrOfTickets.sort((a, b) => a.destination.localeCompare(b.destination));

        break;

    case "price":

        sortedTickets = arrOfTickets.sort((a, b) => a.price - b.price);

        break;

    case "status":

        sortedTickets = arrOfTickets.sort((a, b) => a.status.localeCompare(b.status));

        break;

}
return sortedTickets;

}
