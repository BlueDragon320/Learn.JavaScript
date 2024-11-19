// function callback(n){
//     return n * n
// }
// function cube(n){
//     return n * n * n
// }

// function sumofsquares (a, b) {
//     const val1 = callback(a)
//     const val2 = callback(b)
//     return val1 + val2;
// }

// function sumofcubes (a, b){
//  const val1 = cube(a);
//  const val2 = cube(b);
//  return val1 + val2;
// }

// const ans2 = sumofcubes(2,2);
// console.log(ans2)

// const ans = sumofsquares(2,2)
// console.log(ans)


function square(n){
    return n * n
}
function cube(n){
    return n * n * n
}

function sumofsomething(a, b, callback){
    console.log(callback);
    const val1 = callback(a)
    const val2 = callback(b)
    return val1 + val2;
}

const ans = sumofsomething(2, 2 , square)
console.log(ans)