/* Find factorial of a number */

// Iteration
((n)=>{
    let fact = 1;
    for(let i = n ; i > 0 ; i--){
        fact*=i
    }
    console.log(fact)
})(5);

// Recursion
const factorial = (n)=>{
    if(n===1){
        return 1;
    }else{
        return n * factorial(n-1)
    }
}

console.log(factorial(5))