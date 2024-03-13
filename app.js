document.write("this is assignmnent of array ", "<br>")
//This is literal array
var literalArray = [];
//This is object array
var objectArray = [];
var arr1 = ["ahmed" , "hammad" , "hamza" , "abdulhadi"];
var arr2 = [1 , 2 , 3 , 4 , 5 , 6 , 7 ];
var arr3 = [true , false];
var mixedArray = [1 ,"ahmed" , 2 , "hammad" , 3 , true];
var education = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];
for (let i = 0; i < education.length; i++) {
   document.write(i," ) "  ,education[i] , "<br>");
    
}

var studentsName = ["ahmed" , "hammad" , "hamza"];
var score = [290 , 400 , 390];
var totalMarks = [500];
for (let i = 0; i < score.length; i++) {
   document.write("Score of " , studentsName[i] , " is " , score[i] , " Percentage: " , score[i]/totalMarks[0]*100 , " % ", "<br>");
    
}


var colorName = ["red" , "green" , "blue" , "yellow"];
document.write("These are color names " , colorName , "<br>");
var addColor1 = prompt("Enter a color you want to add");
colorName.unshift(addColor1);
document.write("This is updated color serial: " + colorName , "<br>");
var addColor2 = prompt("Enter a color you want to add in the last of array");
colorName.push(addColor2);
document.write("This is updated color serial: " , colorName , "<br>");
colorName.unshift("Silver" , "Golden");
document.write("These are newly updated color names: " , colorName , "<br>");
colorName.shift();
document.write("These are newly updated color names: " , colorName , "<br>");
colorName.pop();
document.write("These are newly updated color names: " , colorName , "<br>");
var userPermission = prompt("tell me the color.");
var userPermission1 = prompt("Tell me the desired position index");
colorName.splice(userPermission1 , 0 , userPermission);
document.write("These are newly updated color names: " + colorName , "<br>");
var userPermission2 = prompt("Enter a index number at ehich you want to delete the color: ");
var userPermission3 = prompt("Enter how many color do you want to delete");
colorName.splice(userPermission2 , userPermission3);
document.write("These are newly updated color names: " + colorName , "<br>");





