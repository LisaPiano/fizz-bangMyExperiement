function fizzBang(num) {
for (let i = 0; i <= num; i++){
    if ((i % 3 === 0) && (i % 5 === 0)){
        console.log(i + " Fizz-Bang!")
    } else if(i % 3 === 0){
    console.log(i + " Fizz!");
    }
    else if(i % 5 === 0){
        console.log(i + " Bang!");
        }   
}
}
fizzBang(100);