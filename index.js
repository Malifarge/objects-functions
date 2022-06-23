
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