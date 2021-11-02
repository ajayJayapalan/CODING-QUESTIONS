/*  1. Find the Sum of first N natural Numbers */

// using loop.
(function(n){
    let sum = 0;
    for(let i = 1; i<=n ; i++){
        sum+=i;
    }
    console.log("sum =>",sum)
})(5);

// using (n*(n+1))/2 equation.
((n)=>{
    let sum = (n*(n+1))/2;
    console.log("sum =>",sum)
})(5);

//-------------------------------------------

/* 2. Sum of range of numbers */

// using loop
(function(l,h){
    let sum = 0;
    for(let i = l; i<=h ; i++){
        sum+=i;
    }
    console.log("sum =>",sum)
})(4,8);

// using equation
((l,h)=>{
    l--;
    let sum = (h*(h+1))/2 - (l*(l+1))/2 ;
    console.log("sum =>",sum)
})(4,8);
