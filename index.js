
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