// // console.log("JavaScript Connected!");
// <<<<<map>>...

// const nums = [1,2,3,4];

// const doubled = nums.map(function(n){
//     return n*2
// }
// );
// console.log(doubled);
// console.logs(nums);

// const users = [
//     {
//         name:"Ali" , age : 20
//     },
//     {
//         name:"Usman" , age:26
//     }
// ]

// const names = users.map(function(u){
//     return u.name
// });

// console.log(users);

// const arr = ["a" , "b" , "c"];
// const labeled = arr.map(function(v,i){
//     return i + ":" + v;
// });

// console.log(labeled);

// const nums =[1,2,3];

// const result = nums.map(function(n){
//     return n +1
// }).map(function(n){
//     return n *3
// })

// console.log(result);




//filters

// const nums = [1,4,7,10];

// const big = nums.filter(function(n){
//     return n > 5;
// });

// console.log(big);

// const users = [
//     {name:"Meer" , active:true},
//     {name:"Usman" , active:false},
// ];

// const active = users.filter(function(u){
//     return u.active ;


// });
// console.log(active);











// <<<Reduce

// const arr = [1,2,3,4,5];

// const sum = arr.reduce(function(acc,val){
//     return acc + val;
// },0);

// console.log(sum);



// const nums = [2,3,4];

// const prod = nums.reduce(function(acc , n){
//     return acc * n;
// },1);

// // console.log(prod);

// const nested = [[1,2],[3,4],[5]];

// const flat = nested.reduce(function(acc , arr){
//     return acc.concat (arr)
// },[]);

// console.log(flat);


// const res = [];

// [1,2,3].forEach(function(n){
//     res.push(n*2);
// });

// console.log(res);


// const arr = ["a" ,"b"];

// arr.forEach(function (v,i){
//     console.log(i , v);
// })




// const items = ["x" , "v"];

// let html = '';

// items.forEach(function(i){
//     html += '<div>' + i + "</div>";
// });

// console.log(html);






// <<<<<,,find

// const arr = [1,3,5,8,9];

// const  firstEven = arr.find(function(n){
//     return n % 2 === 0 ;
// });

// console.log(firstEven);


// const users = [
//     {id:1},
//     {id:2},
//     {id:3}
// ];


// const u = users.find(function(x){
//     return  x.id === 2
// });

// console.log(u);





// console.log([1,3,5].some(function(n){
//     return n % 2 === 0}));

// console.log([1,4,5].some(function(n){
//     return n % 2 === 0}));




