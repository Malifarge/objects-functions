
// 01 - Object
const cat ={

name: "Garfield",
age : 3,
isCute :true
}

console.log(cat);
console.log(cat.age);

if (cat.isCute){
    console.log("So cute !");
}

// 02 - Combine

const cat2 ={

    name: "Isidors",
    age : 5,
    isCute :false
    }

    let cats = [ cat,cat2]

  console.log(cats[0].age);
  console.log(cats[1].isCute);  

//   03 - Even

const checkIfEven = (num) =>{
    if (num%2===0){
        console.log("even");
    }else if (num%2===1){
        console.log("odd");
    }else{
        console.log("not a number");
    }
}

checkIfEven(5)
checkIfEven(1359)
checkIfEven("Even")
checkIfEven(3416541*35456)

// 04 - Compare

const compare = (x,y) =>{
    if (x > y){
        console.log(`${x} is bigger`);
    }else if (y > x){
        console.log(`${y} is bigger`);
    }else {
        console.log("both are the same");
    }
}

compare(35**68, 590)
compare(-5, 3)
compare(2*10 , 40/2)

// 05 - Add Up

const addUp = (num) =>{
    let result =0
    for (i=0; i<=num; i++){
        result +=i
    }
    console.log(result);
}

addUp(12)