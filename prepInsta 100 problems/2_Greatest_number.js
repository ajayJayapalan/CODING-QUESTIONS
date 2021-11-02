/* Find the greatest of two number */

((num1, num2) => {
  if (num1 === num2) {
    console.log("both are equal");
  } else if (num1 > num2) {
    console.log("" + num1 + " is greater than " + num2);
  } else {
    console.log("" + num2 + " is greater than " + num1);
  }
})(9,8);

/* Find the greatest of three number */

((a,b,c)=>{
    if(a>b ){
        if(a>c){
            console.log(a);
        }else{
            console.log(c);
        }
    }else{
        if(b>c){
            console.log(b)
        }else{
            console.log(c)
        }
    }
})(5,4,2);