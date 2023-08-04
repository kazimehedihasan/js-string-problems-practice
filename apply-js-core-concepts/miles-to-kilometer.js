function milesToKilometer(miles){
    const kilometer = miles*1.609;
    return kilometer;
}

const miles = 500;
const tomiles = milesToKilometer(miles);
console.log(tomiles);
