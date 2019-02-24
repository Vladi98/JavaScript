class Kitchen{
    constructor(budget){
       this.budget = budget;
       this.menu = {};
       this.productsInStock ={};
       this.actionsHistory = '';
    }

    loadProducts(products) {
      
      let loadedProducts ='';
      for (const item of products) {
        
        let splitItem = item.split(' ');

        let productName = splitItem[0];
        let productQuantity = splitItem[1];
        let productPrice = splitItem[2];
        let totalProductPrice = productQuantity*productPrice;
        if(this.budget>=totalProductPrice){

            if(!this.productsInStock[productName]){
              this.productsInStock[productName] = +productQuantity;

            }
            else{
              this.productsInStock[productName] = +this.productsInStock[productName] + Number(productQuantity);

            }
            this.actionsHistory += `Successfully loaded ${productQuantity} ${productName}\n`
            this.budget-= totalProductPrice;
        }
        else {
            this.actionsHistory += `There was not enough money to load ${productQuantity} ${productName}\n`

        }

      }
        return this.actionsHistory;
    }

    addToMenu(meal,neededProducts, price){
         let mealsMessage='';
          for (const element of neededProducts) {
              let splitElement = element.split('');
              let productName = splitElement[0];
              let productQuantity = splitElement[1];
          }

         if(!this.menu[meal]) {
            this.menu[meal] = {meal, products: neededProducts, price};
     

             mealsMessage+= `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
         }
         else {
             mealsMessage+= `The ${meal} is already in our menu, try something different.`
         }
         return mealsMessage;

    }

    showTheMenu(){
        let resultMenu='';
        if(Object.keys(this.menu).length==null) {
            return "Our menu is not ready yet, please come later...";
        }
        
        
        let result=Object.values(this.menu).map(x=>(`${x.meal} - $ ${x.price}`));
        return result.join('\n').trim()+'\n';
    }


    makeTheOrder(meal){
      if(!this.menu[meal]) {
          return `There is not ${meal} yet in our menu, do you want to order something else?`
      }

      let neededProducts = this.menu[meals].products;

      for (const product of neededProducts) {
        let [productName, productQuantity] = product.split(/\s+/);
        let quantityNeeded = Number(productQuantity);

        if (!this.productsInStock.hasOwnProperty(productName) || this.productsInStock[productName] < quantityNeeded) {
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        }
    }

    neededProducts.forEach((product) => {
        let [productName, productQuantity] = product.split(/\s+/);
        this.productsInStock[productName] -= Number(productQuantity);
    });

    let price = this.menu[meal].price;
    this.budget += price;
    return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${price}.`

    }
}