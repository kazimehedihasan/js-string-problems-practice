function maxInArray(numbers){
    let largest = numbers[0];
    // console.log('array inside the array', numbers)
for(let i = 0; i < numbers.length; i++){

    const index = i;
    const element = numbers[index];
    console.log(element);
    if(element > largest){
        largest = element;
    }
}
return largest;
}


const heights = [167, 190, 120, 165, 137, 778];
const tallest = maxInArray(heights);
console.log('tallest person is', tallest);