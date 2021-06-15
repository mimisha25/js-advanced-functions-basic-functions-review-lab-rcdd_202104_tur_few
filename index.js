// Your code here
function saturdayFun(activity="roller-skate"){
   return `This Saturday, I want to ${activity}!`;
 }
 const mondayWork = function (activity = "go to the office"){
   return `This Monday, I will ${activity}.`;
 };
 function wrapAdjective(flair = "*"){
   return function(adjective="special"){
     return `You are ${flair}${adjective}${flair}!`;
   }
 }
 const Calculator ={};
 Calculator["add"] = function(n1, n2){return n1+n2};
 Calculator["subtract"] = function(n1, n2){return n1-n2};
 Calculator["multiply"] = function(n1, n2){return n1*n2};
 Calculator["divide"] = function(n1, n2){return n1/n2};
 function actionApplyer(start, array){
   if(array.length === 0){
     return start;
   }
   for(const fun of array){
     start = fun(start);
   }
   return start;
 }
