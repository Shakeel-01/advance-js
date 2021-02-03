function sum(first, second){
    let result = first + second ;
    if (result>9){
        var mood = 'happy';
        mood= 'funky';
    }
    console.log(mood);
    return result;
}
var total = sum(5, 5);
console.log(total);