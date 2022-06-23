
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

// 06 - Time

const format = (num) =>{
    let hour = Math.floor(num/3600)
    let minute = Math.floor((num-(hour*3600))/60)
    let seconde = num - ((hour*3600) + (minute*60))
    console.log(`${hour} : ${minute} : ${seconde}`);
}

format(3700)

// 07 - Password generation

const generatePassword = (num) =>{
    let password = []
    let letter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    if (num < 6 || num > 15){
        console.log("error");
    }else{
        for (i=0; i<num;i++){
            const random = Math.floor(Math.random()*letter.length)
            password[i]=letter[random]
        }
        console.log(password.join(""));
    }
}

generatePassword(5)
generatePassword(18)
generatePassword(12)
generatePassword(6)
generatePassword(8)

// 08 - Let’s play

const lauchDice = (numberOfDice) =>{
    let result = 0
    for (i=1; i<=numberOfDice;i++){
        const random = Math.floor(Math.random()*6)+1
        result += random
    }
    console.log(result);
}

lauchDice(30)