function cakeWinner (cake){
    let batashi = 84;
    let glumulu = 97;
    let chinku = 99;
    const winner = Math.max(batashi, glumulu, batashi);
    return winner;
}
const cake = cakeWinner();
console.log(cake);
