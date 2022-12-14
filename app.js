// function foo(input) {
//     let a =100;
//     if(input) {
//         let b = a+1;
//         var c = a+1;

//     }
//     console.log(c)
//     console.log(b)
// }

// foo(true)


// function resolveAfter2s() {
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve('resolve')
//         },2000)
        
//     })
// }

// async function asyncCall() {
//     console.log('calling')
//     var result = await resolveAfter2s();
//     console.log(result)
// }

// asyncCall();
// console.log(1)

// var array1 = [1,3,4,2,7,9,10,6,8],
//     array2 = [1,3,9,11,5,7,13];

// function getMatch(a, b) {
//     var matches = [];

//     for ( var i = 0; i < a.length; i++ ) {
//         for ( var e = 0; e < b.length; e++ ) {
//             if ( a[i] === b[e] ) matches.push( a[i] );
//         }
//     }
//     return matches;
// }

// console.log(getMatch(array1, array2)); 