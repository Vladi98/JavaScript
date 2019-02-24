class Stringer{
    constructor(innerString,innerLength ){
      this.innerString = innerString;
      this.innerLength =innerLength;
    
    }

    increase(Inclength) {
      this.innerLength+=Inclength;
    }

    decrease(Declength){
        this.innerLength-= Declength;
        if(this.innerLength<0) this.innerLength =0;

    } 

    toString() {
         if(this.innerString.length>this.innerLength){
             this.innerString = this.innerString.substr(0,this.innerLength)+'...';
         }
         if(this.innerLength =0){
             this.innerString ='...'
         }
         return this.innerString;
    }

}