var students=[]; // Problem 1 and 2
var stringArray = ["Grapes","Apple","Mango"]; // Problem 3
var numberArray = [55,32,68]; //Problem 4
var boolArray = [true,false,true]; //Problem 5
var mixedArray = ["Grapes",true,67]; //Problem 6

var networks = ["Telenor","Ufone","Jazz","Zong","Warid"]; //Problem 7

//Problem 8 starts
var qualification = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
document.write("Qualifications:<br/><br/>");
for(var i=1;i<9;i++)
{
    document.write(i+")"+qualification[i-1]+"<br/>");
} // Problem 8 ends

//Problem 9 starts
var movies = ["Avengers: Age of Ultron","Spectre","Jurassic World","Inside Out"];
document.write("<br/>Top Movies of 2015:<br/><br/>");
for(var i=1;i<5;i++)
{
    document.write(i+")"+movies[i-1]+"<br/>");
}
document.write("Length of the array: "+movies.length);
//Problem 9 ends

//Problem 10 starts
var favCars = ["Audi","Volvo","Ford","Lamborghini"];
var firsstIndex= favCars.indexOf("Audi");
document.write("<br/><br/>Favourite Cars:");
document.write("<br/><br/>First index of the array: "+firsstIndex);
document.write("<br/>Car at first index of the array: "+favCars[firsstIndex]);
document.write("<br/>Last index of the array: "+(favCars.length-1));
document.write("<br/>Car at last index of the array: "+favCars[favCars.length-1]+"<br/>");
//Problem 10 ends

//Problem 11 starts
students.push("Ali");
students.push("Jamal");
students.push("Kamran");
var scores = [320,230,480];
for(var i=0;i<3;i++)
{
    var percentage = (scores[i]*100)/500;
    document.write("<br/>Score of "+students[i]+" is "+scores[i]+".Percentage: "+percentage+"%");
}
//Problem 11 ends

//Problem 12 starts
var color =["Red","Blue","Green"];
document.write("<br/><br/>Colors Array: "+color);

var askColor = prompt("Which color do you want to insert at the beginning of the array?");
color.unshift(askColor);
document.write("<br/><br/>After adding at the beginning...");
document.write("<br/>Colors Array: "+color);

askColor = prompt("Which color do you want to insert at the end of the array?");
color.push(askColor);
document.write("<br/><br/>After adding at the end...");
document.write("<br/>Colors Array: "+color);

color.unshift("White");
color.unshift("Black");

document.write("<br/><br/>After adding two colors at the beginning...");
document.write("<br/>Colors Array: "+color);

color.shift();

document.write("<br/><br/>After deleting first color of array...");
document.write("<br/>Colors Array: "+color);

color.pop();

document.write("<br/><br/>After deleting last color of array...");
document.write("<br/>Colors Array: "+color);

var askIndex= +prompt("At which index do you want to insert a color into array?");
askColor = prompt("Which color you want to insert?");

color[askIndex]=askColor;

document.write("<br/><br/>After adding color to the user desired position in array...");
document.write("<br/>Colors Array: "+color);

askIndex = +prompt("At which index do you want to delete colors(s)?");
var numberOfColors= +prompt("How many number of colors do you want to delete?");

color.splice(askIndex,numberOfColors);

document.write("<br/><br/>After deleting color to the user desired position in array...");
document.write("<br/>Colors Array: "+color);
//Problem 12 ends

//Problem 13 starts
var studentScores = [320,230,480,120];

document.write("<br/><br/>Scores of student: "+studentScores);
studentScores.sort(function(a,b){return a-b});
document.write("<br/>Ordered Scores of student: "+studentScores);
//Problem 13 ends

//Problem 14 starts
var fruits = ["strawberry","apple","orange","banana"]; 

document.write("<br/><br/>Fruits List: "+fruits);
fruits.sort();
document.write("<br/>Ordered Fruits List: "+fruits);
//Problem 14 ends

//Problem 15 starts
var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
document.write("<br/><br/>Cities List: "+cities);
var selectedCities=cities.slice(2,4);
document.write("<br/>Selected Cities List: "+selectedCities);
//Problem 15 ends

//Problem 16 starts
var arr = ["This","is","my","cat"];
 document.write("<br/><br/>Array: "+arr);
 var newArr=arr.join(" ");
 document.write("<br/>String: "+newArr);
//Problem 16 ends

//Problem 17 starts
 var devices =[];
 devices.push("keyboard");
 devices.push("mouse");
 devices.push("printer");
 devices.push("monitor");

document.write("<br/><br/>Devices: "+devices);
var outElement=devices.shift();
document.write("<br/>Out: "+outElement);
outElement=devices.shift();
document.write("<br/>Out: "+outElement);
outElement=devices.shift();
document.write("<br/>Out: "+outElement);
outElement=devices.shift();
document.write("<br/>Out: "+outElement);
//Problem 17 ends

//Problem 18 starts
 devices.push("keyboard");
 devices.push("mouse");
 devices.push("printer");
 devices.push("monitor");

document.write("<br/><br/>Devices: "+devices);
var outElement=devices.pop();
document.write("<br/>Out: "+outElement);
outElement=devices.pop();
document.write("<br/>Out: "+outElement);
outElement=devices.pop();
document.write("<br/>Out: "+outElement);
outElement=devices.pop();
document.write("<br/>Out: "+outElement);
//Problem 18 ends

//Problem 19 starts
var brands = ["Apple","Samsung","Motorolla","Nokia"];
document.write("<br/><br/><select><option value='apple'>"+brands[0]+"</option><option value='samsung'>"+brands[1]+"</option><option value='motorolla'>"+brands[2]+"</option><option value='nokia'>"+brands[3]+"</option></select>"); 
//Problem 19 ends

var multiArray= [[],[],[]]; //Problem 20
var matrixArray= [[0,1,2,3],[1,0,1,2],[2,1,0,1]]; //Problem 21