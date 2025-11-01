// console.log("JavaScript Connected");



// let std = {
//     name : "Faraz",
//     age : 36,
//     rollNumber : 1232
// }

//object properties

// let deal3 = {
//     name: "Premium",
//     data: 5000
// }

// deal3.cost = 79.95;

//console.log(deal3);
// 
// deal3.cost = 100;

//console.log(deal3);

// deal3.name = "Ultimate";

// console.log(deal3);

// deal3.features = ["Guarantee" , "FreeShiping"];
// deal3.memebersOnly = false ;

// console.log(deal3);

// let dael4 = {};
// dael4.name = "Super recharge";
// dael4.market = undefined;

// delete dael4.market

// let propertyExist = "market" in dael4;


// console.log(propertyExist);

// console.log(dael4);


// let plan1 = {
//     name:"Basic",
//     price: 3.99,
//     space:100,
//     transfer:1000,
//     pages:10,
//     discountMonths : [6 , 7]
// };

// function calcAnnual(){
//     let bestPrice = plan1.price;
//     let currDate = new Date();
//     var thisMonth = currDate.getMonth();
//     for(let i = 0 ; i , plan1.discountMonths.length; i++){
//         if(plan1.discountMonths[i] === thisMonth){
//             bestPrice = plan1.price*8;
//             break;
//         }

//     }
//     return bestPrice *12;
// }
// let annualPrice = calcAnnual();

// console.log(annualPrice);


// let plan1 = {
//     name:"basic",
//     price:3.99,
//     space:100,
//     transfer:1000,
//     pages:10,
//     discountMonths: [6 , 7],
//     calcAnnual: function(percentIfDisc){
//         let bestPrice = plan1.price;
//         let currDate = new Date();
//         let thisMonth = currDate.getMonth();
//         for(let i = 0; i , plan1.discountMonths.length; i++){
//             if(plan1.discountMonths[i] === thisMonth){
//                 bestPrice = plan1.price * percentIfDisc;
//                 break;
//             }
//         }
//     return bestPrice * 12;
//     }

// }

// let obj = plan1.calcAnnual(.8);

// console.log(obj);

// let plan1 = {
//     name: "Basic",
//     price: 3.99,
//     space:100,
//     pages:10,
//     discountMonths: [6 , 7],
//     calcAnnual : function(percentIfDisc){
//         let bestPrice = this.price;
//         let currDate = new Date();
//         let thisMonth = currDate.getMonth();
//         for(let i = 0; i , this.discountMonths.length; i++){
//             if(this.discountMonths[i] === thisMonth){
//                 bestPrice = this.price * percentIfDisc;
//                 break;
//             }
//         }
//         return bestPrice *12;
//     }
// };

// let annual = plan1.calcAnnual(.8);
// console.log(annual)

//constructor

// function Plan(name,price,space,transfer,pages){
//     this.name = name;
//     this.price = price;
//     this.space = space;
//     this.transfer = transfer;
//     this.pages = pages;

// };
// let plan1 = new Plan("Basic" , 3.99 , 100 , 1000 , 10);
// let plan2 = new Plan("Premium" , 5.99 , 500 , 5000 ,50);
// let plan3 = new Plan("Ultimate" , 9.99 , 2000 , 20000 , 500);

// console.log(plan1);
// console.log(plan2);
// console.log(plan3);

// console.log(plan1.name);
// console.log(plan2.price);
// console.log(plan3.pages);


function StudentData(name,address,rollNum,email){
    this.name = name;
    this.address = address;
    this.rollNum = rollNum;
    this.email = email;
};

let std1 = new StudentData("Mustafa" , "Baldia" , 1 , "mustafa@gmail.com");

let std2 = new StudentData("ali" , "NewYork" , 2 , "ali@gmail.com");

let std3 = new StudentData("faraz" , "america" , 3 , "faraz@gmail.com");

console.log(std1);

console.log(std2);
