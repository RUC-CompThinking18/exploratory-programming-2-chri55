function countPositive(arg){
    if (! Array.isArray(arg)){
        throw new Error("TypeError: argument `arg` is not an array.");
        return -1;
    }
    count = 0;
    for (var i = 0; i < arg.length; i++){
        // This statement is a ternary if/else statment. If the number is > 0, we want to add 1 to count
        // and if it is not we add 0 to count.
        count += (arg[i] > 0 ? 1 : 0);
    }
    return count;
}

console.log("There are " + countPositive([1, -1, 0, 2, 3]) + " positive numbers in the list.\n\n"); //should return 3
console.log(countPositive("string")); //should get TypeError...
