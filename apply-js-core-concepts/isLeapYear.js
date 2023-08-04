function isLeapYear (year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
        // console.log('your year is leap year', year);
    }
    else{
        return false;
        // console.log('your year is not a leap year', year);
    }
}
const isMyYearLeapYear = isLeapYear(1933);
console.log('my year', isMyYearLeapYear);
const isHerYearLeapYear = isLeapYear(1960);
console.log('her year', isHerYearLeapYear);