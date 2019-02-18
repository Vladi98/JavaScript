function GCD(a,b) {

    if(a==0) {
        return b;
    }

    else {
        return GCD(b%a,a);
    }
}

console.log(GCD(84,49));