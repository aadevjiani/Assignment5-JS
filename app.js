// ***** Student Name : Ali Abbas Devjiani *****
// *** Assignment Chapter 1 to 20

// Chapter 1 : Alerts
// Chapter # 1 - Task # 1
// alert("Welcome to Sol@ce - Brings Comfort to Life")
// Chapter # 1 - Task # 2
// alert("Error! Please enter a valid password.")
// Chapter # 1 - Task # 3
// alert("Welcome to JS Land...\nHappy Coding!")
// Chapter # 1 - Task # 4
// alert("Welcome to JS Land...")
// alert("Happy Coding!\nPrevent this page from creating additional dialogs.")
// Chapter # 1 - Task # 5
// console.log("Hello... I can run JS through my web browser's console")

// Chapter 2 : Variables for Strings
// Chapter # 2 - Task # 1
// var username
// Chapter # 2 - Task # 2
// var myName = "Ali Abbas Devjiani"
// Chapter # 2 - Task # 3
// var message = "Hello World"
// alert(message)
// Chapter # 2 - Task # 4
// var name = "Jhone Doe"
// var age = "15 years old"
// var qualification = "Certified Mobile Appliction Development"
// alert(name)
// alert(age)
// alert(qualification)
// Chapter # 2 - Task # 5
// var food = " PIZZA \n PIZZ \n PIZ \n PI \n P"
// alert(food)
// Chapter # 2 - Task # 6
// var email ="devjiani@gmail.com"
// alert("My email address is " + email)
// Chapter # 2 - Task # 7
// var book = "A smarter way to learn JavaScript"
// alert("I am trying to learn from the Book " + book)
// Chapter # 2 - Task # 8
// document.write("Yah! I can write HTML conent through JavaScript")
// Chapter # 2 - Task # 9
// alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")

// Chapter 3 : Variables for Numbers
// Chapter # 3 - Task # 1
// var age = 15
// alert("I am " + age + " years old")
// Chapter # 3 - Task # 2
// for(var count = 0; count <= 14; count++)
// alert("You have visited this site " + count + " times")
// Chapter # 3 - Task # 3
// var birthYear = 1978
// document.write ("My birth year is " + birthYear + "<br\>" + "Data type of my declared variable is number" )
// Chapter # 3 - Task # 4
// var visitor = "John Doe"
// var productTitle = "T-Shirt"
// var quantity = 5
// document.write("<b>" + visitor + "</b>" + " ordered " + "<b>" + quantity + "</b>" +" " + "<b>" + productTitle + "</b>"  +"(s) " + "on XYZ Clothing store")

// Chapter 4 : Variable Names : Legal & ILLegal
// Chapter # 4 - Task # 1
// var one, two, three
// Chapter # 4 - Task # 2
// var firstName, lastName, fullName, rank1st, s_No
// var 1st_Name, 5, %age, +add, 001
// Chapter # 4 - Task # 3
// document.write(" <h2> Rules for naming JS variables </h2> <br/><br/> <p> Variable names can only contain numbers, $ and _. For example $my_1stVariable <br/> Variable must begin with a letter, $ or _. For example :  $name,_name or name. <br/> Variable names are case sensitive. <br/> Variable names should not be JS keywords. <br/></p>")

// Chapter 5 : Math Expressions
// Chapter # 5 - Task # 1
// var firstNumber = 3
// var secondNumber = 5
// var sum = firstNumber + secondNumber
// document.write("Sum of " + firstNumber + " and " + secondNumber + " is " + sum)
// Chapter # 5 - Task # 2
// var firstNumber = 3
// var secondNumber = 5
// var diff = firstNumber - secondNumber
// document.write("Difference of " + firstNumber + " and " + secondNumber + " is " + diff)

// var firstNumber = 3
// var secondNumber = 5
// var product = firstNumber * secondNumber
// document.write("Multiplication of " + firstNumber + " and " + secondNumber + " is " + product)

// var firstNumber = 3
// var secondNumber = 5
// var division = firstNumber / secondNumber
// document.write("Division of " + firstNumber + " and " + secondNumber + " is " + division)


// var firstNumber = 3
// var secondNumber = 5
// var modulus = firstNumber % secondNumber
// document.write("Modulus of " + firstNumber + " and " + secondNumber + " is " + modulus)

// Chapter # 5 - Task # 3
// var number
// document.write("Value after Variable declaration is : " + number)
// document.write("<br/><br/>")
// number = 5
// document.write("Initial Value : " + number)
// document.write("<br/><br/>")
// number = ++number
// document.write("Value after increment is : " + number)
// document.write("<br/><br/>")
// number = number +7
// document.write("Value after addition is : " + number)
// document.write("<br/><br/>")
// number = --number
// document.write("Value after decrement is : " + number)
// document.write("<br/><br/>")
// number = number % 3
// document.write("The remainder is : " + number)
// Chapter # 5 - Task # 4
// var ticket = 600
// var quantity = 5
// var cost = ticket * quantity
// document.write("Total cost to buy " + quantity + " tickets to a movie is " + cost + "PKR")
// Chapter # 5 - Task # 5
// var table = prompt("Enter the number to generate table : ")
// document.write("<h2> Table of : " + table + "</h2>")
// for (i=1; i<=10; i++)
// document.write(table + " * " + i + " = " + table*i + "<br/>")
// Chapter # 5 - Task # 6
// var tempC = 25
// var tempF = 70
// var tempCtoF = ((tempC*9/5)+32)
// var tempFtoC = ((tempF-32)*5/9)
// document.write(tempC + " <sup>o</sup> C " + "is " + tempCtoF + " <sup>o</sup> F")
// document.write("<br/><br/>")
// document.write(tempF + " <sup>o</sup> F " + "is " + tempFtoC + " <sup>o</sup> C")
// Chapter # 5 - Task # 7
// var priceOfItem1 = 650
// var priceOfItem2 = 100
// var qtyOfItem1 = 3
// var qtyOfItem2 = 7
// var shippingCharges = 100
// var totalCost = ((priceOfItem1*qtyOfItem1)+(priceOfItem2*qtyOfItem2)+shippingCharges)
// document.write("<h2>Shopping Cart</h2>")
// document.write("Pricce of Item 1 is " + priceOfItem1 + "<br/>")
// document.write("Quantity of Item 1 is " + qtyOfItem1 + "<br/>")
// document.write("Pricce of Item 2 is " + priceOfItem2 + "<br/>")
// document.write("Quantity of Item 2 is " + qtyOfItem2 + "<br/>")
// document.write("Shipping Charges " + shippingCharges + "<br/")
// document.write("<br/><br/>")
// document.write("Total Cost of your Order is " + totalCost)
// Chapter # 5 - Task # 8
// var marksInSub1 = 350
// var marksInSub2 = 454
// var totalMarksObt = marksInSub1 + marksInSub2
// var totalMarks = 980
// var per = ((totalMarksObt/totalMarks)*100)
// document.write("<h2>Marks Sheet</h2>")
// document.write("<br/><br/>")
// document.write("Total Marks : " + totalMarks + "<br/>")
// document.write("Marks Obtained : " + totalMarksObt + "<br/>")
// document.write("Percentage : " + per + "%")
// Chapter # 5 - Task # 9
// var USD = 10
// var SR = 25
// var PKR = (USD*104.80) + (SR*28)
// document.write("<h2>Currency in PKR</h2>")
// document.write("<br/><br/>")
// document.write("Total Currency in PKR : " + PKR)
// Chapter # 5 - Task # 10
// var initNum = 5
// result = (initNum + 5) * 10 / 2 
// console.log(result)
// Chapter # 5 - Task # 11
// var currentYear = 2016
// var yearOfBirth = 1992
// var age = currentYear - yearOfBirth
// document.write("<h2>Age Calculator</h2>")
// document.write("<br/><br/>")
// document.write("Current Year : " + currentYear + "<br/>")
// document.write("Birth Year : " + yearOfBirth + "<br/>")
// document.write("Your Age is : " + age)
// Chapter # 5 - Task # 12
// var radius = 20
// var circum = 2*3.142*radius
// var area = 3.142*radius*2
// document.write("<h2>The Geometrizer</h2>")
// document.write("<br/><br/>")
// document.write("Radius of a Circle : " + radius + "<br/>")
// document.write("The circumference is : " + circum + "<br/>")
// document.write("The area is : " + area)
// Chapter # 5 - Task # 13
// var favSnack = "Chocolate Chip"
// var currAge = 15
// var maxAge = 65
// var qtySnackPerDay = 3
// var reqd = ((maxAge-currAge)*365*qtySnackPerDay)
// document.write("<h2>The Lifetime Supply Calculator</h2>")
// document.write("<br/><br/>")
// document.write("Favourite Snack : " + favSnack + "<br/>")
// document.write("Current age : " + currAge + "<br/>")
// document.write("Estimated Maximum Age :" + maxAge + "<br/>")
// document.write("Amount of Snacks per Day : " + qtySnackPerDay + "<br/>")
// document.write("You will need " + reqd +" " + favSnack + " to last you untill the ripe old age of " + maxAge)

// Chapter 6-9 : Math Expressions
// Chapter # 6-9 - Task # 1
// var a = 10
// document.write("Result : <br/>" )
// document.write("The value of a is : " + a + "<br/>")
// document.write("====================================== <br/><br/>")
// document.write("The value of ++a is : " + ++a + "<br/>")
// document.write("Now the value of a is : " + a + "<br/><br/>")
// document.write("The value of a++ is : " + a++ + "<br/>")
// document.write("Now the value of a is : " + a + "<br/><br/>")
// document.write("The value of --a is : " + --a + "<br/>")
// document.write("Now the value of a is : " + a + "<br/><br/>")
// document.write("The value of a-- is : " + a-- + "<br/>")
// document.write("Now the value of a is : " + a + "<br/><br/>")
// Chapter # 6-9 - Task # 2
// var a = 2
// var b = 1
// var result = --a - --b + ++b +b--
// document.write("a is " + a + "<br/>")
// document.write("b is " + b + "<br/>")
// document.write("result is " + result)
// Chapter # 6-9 - Task # 3
// var name = prompt("Enter your Name : ")
// document.write("Mr/Ms <b>" + name + "</b> Welcome to the Java World")
// Chapter # 6-9 - Task # 4
// BLANK
// Chapter # 6-9 - Task # 5
// var table = prompt("Enter the Number of Table to generate : ","5")
//     for(i=1; i<=10; i++)
//     document.write(table + " * " + i + " = " + table*i + "<br/>")
// Chapter # 6-9 - Task # 6
// var sub1 = "English"
// var sub2 = "Maths"
// var sub3 = "Urdu"
// var totalMarks = 100
// var marksObtSub1 = +prompt("Enter Marks Obtained in " + sub1 )
// var marksObtSub2 = +prompt("Enter Marks Obtained in " + sub2 )
// var marksObtSub3 = +prompt("Enter Marks Obtained in " + sub3 )
// var totalMarksObt = (marksObtSub1 + marksObtSub2 + marksObtSub3)
// var perSub1 = (marksObtSub1/totalMarks*100)
// var perSub2 = (marksObtSub2/totalMarks*100)
// var perSub3 = (marksObtSub3/totalMarks*100)
// var totalPer = (totalMarksObt/(totalMarks*3)*100)
// document.write(
//     "<table>"+
//     "<tr><th>Subject</th><th> Total Marks</th><th> Obtained Marks </th> <th> Percentage </th> </tr>"+
//     "<tr><td>"+sub1+"</td><td><center>"+totalMarks+"</center></td><td><center>"+marksObtSub1+"</center></td><td><center>"+perSub1+"%"+"</center></td></tr>"+
//     "<tr><td>"+sub2+"</td><td><center>"+totalMarks+"</center></td><td><center>"+marksObtSub2+"</center></td><td><center>"+perSub2+"%"+"</center></td></tr>"+
//     "<tr><td>"+sub3+"</td><td><center>"+totalMarks+"</center></td><td><center>"+marksObtSub3+"</center></td><td><center>"+perSub3+"%"+"</center></td></tr>"+
//     "<tr><td></td><td><center><b>"+totalMarks*3+"</b></center></td><td><center><b>"+totalMarksObt+"</b></center></td><td><center><b>"+totalPer+"%"+"</b></center></td></b></tr>"+
//     "</table>"
// )

// Chapter 9-11 : User Input & Conditional Statement
// Chapter # 9-11 - Task # 1

// var city = prompt("Enter the name of City : ")
// if (city === "Karachi"){
//     alert("Welcome to city of Lights")
// } 

// Chapter # 9-11 - Task # 2
// var gender = prompt("Enter the Gender : ")
// if (gender === "MALE" | gender === "male" | gender === "Male"){
//     alert("Good Morning Sir")
// }
// if (gender === "FEMALE" | gender === "female" | gender === "Female"){
//     alert("Good Mroning Ma'am")
// }

// Chapter # 9-11 - Task # 3
// var color = prompt("Enter the Color of Traffic Signal : ")
// if (color === "Red"){
//     alert("Must Stop")
// }
// if (color === "Yellow"){
//     alert("Ready to move")
// }
// if (color === "Green"){
//     alert("Move now")
// }

// Chapter # 9-11 - Task # 4
// var fuel = +prompt("Enter the remaining Fuel in Car (in litres) : ")
// if (fuel < 0.25){
//     alert("Please refill the fuel in your car")
// }

// Chapter # 9-11 - Task # 5
//(a)
// var a=4;
// if(++a === 5){
//     alert("given condition for variable a is true")
// }
// Output : alert appear

//(b)
// var b=82;
// if(b++ === 83){
//     alert("given condition for variable b is true")
// }
// Output : alert do not appear

//(c)
// var c=12;
// if(c++ === 13){
//     alert("condition 1 is true");
// }
// if(c===13){
//     alert("condition 2 is true");
// }
// if(++c<14){
//     alert("condition 3 is true");
// }
// if(c===14){
//     alert("condition 4 is true");
// }
// Output : condition 2 and condition 4 are correct

//(d)
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if(totalCost === laborCost + materialCost){
//     alert("The cost equals");
// }
// Output : aleart appear

//(e)
// if(ture){
//     alert("True");
// }
// if(false){
//     alert("False");
// }
// Output : no alert appear

//(f)
// if("car"<"cat"){
//     alert("car is smaller than cat");
// }
// Output : nothing happen


// Chapter # 9-11 - Task # 6
// var marksObtSub1 = +prompt("Enter the marks Obtained in Subject 1 : ")
// var marksObtSub2 = +prompt("Enter the marks Obtained in Subject 2 : ")
// var marksObtSub3 = +prompt("Enter the marks Obtained in Subject 3 : ")
// var totalMarksObt = (marksObtSub1 + marksObtSub2 + marksObtSub3)
// var totalMarks = 300
// var per = (totalMarksObt/totalMarks*100)
// var grade = ""
// var remarks = ""

// if (per >= 80){
//     grade = ("A-One");
//     remarks = ("Excellent");
// }
// if (per >= 70 & per < 80){
//     grade = ("A");
//     remarks = ("Good");
// }
// if (per >= 60 & per < 70){
//     grade = ("B");
//     remarks = ("You need to improve");
// }
// if (per < 60){
//     grade = ("Fail");
//     remarks = ("Sorry");
// }

// document.write ("<h2>Marks Sheet</h2>")
// document.write ("<br/><br/>")
// document.write ("Total marks : " + totalMarks + "<br/>")
// document.write ("Marks Obtained : " + totalMarksObt + "<br/>")
// document.write ("Percentage : " + per + "%" + "<br/>")
// document.write ("Grade : " + grade + "<br/>")
// document.write ("Remarks : " + remarks + "<br/>")

// Chapter # 9-11 - Task # 7
// var secret = 5
// var guess = +prompt("Guess the Secret Number : ")
// if (guess === secret){
//     alert("Bingo! Correct Answer")
    
// }

// else if (guess === secret+1){
//     alert("Close enough to the correct answer")
    
// }

// else{
//     alert("Try Again ! Better luck next time")
    
// }

// Chapter # 9-11 - Task # 8
// var userInput = +prompt("Enter the number to check whether is divisible by 3 or not : ")
// var result=userInput%3
// if (result===0){
//     alert("Your entered number "+ userInput + " is divisible by 3")
// }
// else {
//     alert("Your entered number "+ userInput + " is not divisible by 3")
// }

// Chapter # 9-11 - Task # 9
// var userInput = +prompt("Enter the number to check whether even or odd : ")
// var result=userInput%2
// if (result === 0){
//     alert("The Number you entered is an Even Number")
// }
// else {
//     alert("The Number you entered is an Odd Number")
// }

// Chapter # 9-11 - Task # 10
// var temp = +prompt("Enter the Temperature : ")
// if(temp > 40){
//     alert("It is too hot outside")
// }
// if(temp > 30 & temp < 40){
//     alert("The Weather today is Normal")
// }
// if(temp > 20 & temp < 30){
//     alert("Today's weather is cool")
// }
// if(temp >10 & temp < 20){
//     alert("OMG ! Today's weather is so Cool")
// }
// else{
//     alert("Enter the temperature value above 10")
// }

// Chapter # 9-11 - Task # 11
// var firstNumber = +prompt("Enter the First Number : ")
// var secondNumber = +prompt("Enter the Second Number : ")
// var operator = prompt("Enter the Operator from : + , - , * , / , %  : ")
// if (operator === "+"){
//     alert("The sum of " + firstNumber + " & " + secondNumber + " is : " + (firstNumber+secondNumber))
// }
// else if (operator === "-"){
//     alert("The difference of " + firstNumber + " & " + secondNumber + " is : " + (firstNumber-secondNumber))
// }
// else if (operator === "*"){
//     alert("The product of " + firstNumber + " & " + secondNumber + " is : " + (firstNumber*secondNumber))
// }
// else if (operator === "/"){
//     alert("The division of " + firstNumber + " & " + secondNumber + " is : " + (firstNumber/secondNumber))
// }
// else if (operator === "%"){
//     alert("The modulus of " + firstNumber + " & " + secondNumber + " is : " + (firstNumber%secondNumber))
// }
// else{
//     alert("Invalid Operator ! Try Again")
// }

// If Else & Else If Statement, Testing Set of Conditions
// Chapter # 12-13 - Task # 1
// var userInput = prompt("Enter a Character : A-Z or a-z or 0-9")
// var ascii = userInput.charCodeAt(0)
// if (ascii >=65 && ascii <=90){
//     alert("The character you entered " + userInput + " is an Upper Case letter")
//     document.write("The character you entered <b>" + userInput + "</b> is an Upper Case letter")
// }
//     else if (ascii >=97 && ascii <=122){
//     alert("The character you entered " + userInput + " is a Lower Case letter")
//     document.write("The character you entered <b>" + userInput + "</b> is a Lower Case letter")
// }
//     else if (ascii >=48 && ascii <=57){
//     alert("The character you entered " + userInput + " is a Number")
//     document.write("The character you entered <b>" + userInput + "</b> is a Number")
// }
// else{
//     alert("Please try again ! Something Wrong has entered")
// }

// Chapter # 12-13 - Task # 2
// var userInputNo1 = +prompt("Enter the First Number : ")
// var userInputNo2 = +prompt("Enter the Second Number : ")
// if (userInputNo1 > userInputNo2){
//     alert("The greater number from the two is " + userInputNo1)
// }{
// else if (userInputNo2 > userInputNo1){
//     alert("The greater number from the two is " + userInputNo2)
// }
// else if (userInputNo1 = userInputNo2){
//     alert("The Numbers you entered are equal")
// }
// else{
//     alert("Kindly input Number and Try Again")
// }

// Chapter # 12-13 - Task # 3
// var userInput = +prompt("Enter the Number : ")
// if (userInput > 0){
//     alert("The number you entered " + userInput + " is a positive number")
// }
// else if (userInput < 0){
//     alert("The number you entered " + userInput + " is a negative number")
// }
// else if (userInput == 0){
//     alert("You have entered " + userInput + " is a neutral number")
// }
// else{
//     alert("Kindly input Number and Try Again")
// }

// Chapter # 12-13 - Task # 4
// var userInput = prompt("Enter the Character : A-Z : ")
// if (userInput === "A" || userInput === "E" || userInput === "I" || userInput === "O" || userInput === "U" || userInput === "a" || userInput === "e" || userInput === "i" || userInput === "o" || userInput === "u"){
//     alert("TRUE :: The entered character " + userInput + " is a vowel")
// }
// else{
//     alert("FALSE :: The entered character " + userInput + " is not a vowel")
// }

// Chapter # 12-13 - Task # 5
// var passWord="password"
// for (i=0; i<=1; i++){
//     var userPassWord = prompt("Please enter your Password : ")
//     if (userPassWord === passWord){
//         alert("Correct! The password you entered matches the original password")
//         break
//     }
//     else{
//         alert("Incorrect Password")
//     }    
// }

// Chapter # 12-13 - Task # 6
// var greeting;
// var hour = 13;
// if (hour < 18){
//     greeting = "Good day";
// }
// else{
//     greeting = "Good evening";
// }
// alert(greeting)

// Chapter # 12-13 - Task # 7
// var time = prompt("Enter the time in 24-Hour Format : 0000-2359 ")
// if (time >=0000 && time < 1200){
//     alert("Good Morning")
// }
// else if (time >= 1200 && time <1700){
//     alert("Good Afternoon")
// }
// else if (time >= 1700 && time <2100){
//     alert("Good Evening")
// }
// else if (time >= 2100 && time <=2359){
//     alert("Good Night")
// }
// else{
//     alert("Invalid Input ! Try again")
// }

// Arrays
// Chapter # 14-16 - Task # 1
// var litStudentName = [];

// Chapter # 14-16 - Task # 2
// var objStudentName = [];

// Chapter # 14-16 - Task # 3
// var stringArray = ["Summer","Winter","Autumn","Spring"]

// Chapter # 14-16 - Task # 4
// var numberArray = [2,4,6,8,10]

// Chapter # 14-16 - Task # 5
// var booleanArray = ["true","false"]

// Chapter # 14-16 - Task # 6
// var mixArray = ["ali","saylani","25","true"]

// Chapter # 14-16 - Task # 7
// var eduQual = ["SSC","HSC","BSC","BS","BCOM","MS","M. Phil.","PhD"]
// document.write("<h1> Qualification </h1>")
// for (i=0; i<=7; i++){
//     document.write(i+1+") "+eduQual[i]+"<br/>")
// }

// Chapter # 14-16 - Task # 8
// var student = ["Michael","John","Tony"];
// var marksObt = [320,230,480];
// var totalMarks = 500;

// for (var i=0; i<=2; i++){
// document.write("Score of " + student[i] + " is " + marksObt[i] + ". Percentage : " + ((marksObt[i]/totalMarks)*100) + "% <br/>")
// }

// Chapter # 14-16 - Task # 9
// var colors = ["Yellow","Green","Blue","White","Black"]
// document.write("<h2>List of Colors</h2>")
// document.write(colors + "</br> </br>" )

// var firstColor = prompt("Enter the color name to be added at start : ")
// var lastColor = prompt("Enter the color name to be added at last : ")


// colors.unshift(firstColor)
// document.write("<h2>a. Updated List of Colors</h2>")
// document.write(colors + "</br> </br>")


// colors.push(lastColor)
// document.write("<h2>b. Updated List of Colors</h2>")
// document.write(colors + "</br> </br>")


// var addColor1 = prompt("Enter the color name to be added at start : ")
// var addColor2 = prompt("Enter the color name to be added at last : ")

// colors.unshift(addColor1)
// colors.unshift(addColor2)
// document.write("<h2>c. Updated List of Colors</h2>")
// document.write(colors + "</br> </br>")

// colors.shift()
// document.write("<h2>d. Updated List of Colors</h2>")
// document.write(colors + "</br> </br>")

// colors.pop()
// document.write("<h2>e. Updated List of Colors</h2>")
// document.write(colors + "</br> </br>")

// var addColorIndex = prompt("Enter the index at which you want to add the color : ")
// var addColorName = prompt("Enter the color name which you want to add to list : ")

// colors.splice(addColorIndex,0,addColorName)
// document.write("<h2>f. Updated List of Colors</h2>")
// document.write(colors + "</br> </br>")

// var delColorIndex = prompt("Enter the index at which you want to delete the color : ")
// var delColorCount = prompt("Enter the no. of colors which you want to delete from list : ")

// colors.splice(delColorIndex,delColorCount)
// document.write("<h2>g. Updated List of Colors</h2>")
// document.write(colors + "</br> </br>")

// Chapter # 14-16 - Task # 10
// var scores = [320,230,480,120]
// document.write("Scores of Students :" + scores + "<br/>");
// scores.sort()
// document.write(" Ordered Scores of Students :" + scores);

// Chapter # 14-16 - Task # 11
// var citiesList = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
// var selectedCitiesList = citiesList.slice(2,4)
// document.write("Cities List : <br/>")
// document.write(citiesList + "<br/><br/>")

// document.write("Selected Cities List : <br/>")
// document.write(selectedCitiesList + "<br/><br/>")

// Chapter # 14-16 - Task # 12

// var arr = ["This","is","my","cat"]
// document.write("Array : <br/>" + arr + "<br/><br/>")
// var join = arr.join(" ")
// document.write("String : <br/>" + join) 

// Chapter # 14-16 - Task # 13
// var device = ["keyboard","mouse","printer","monitor"]
// document.write("Devices : <br/>" + device + "<br/><br/><br/>")
// var firstDevice = device.shift()
// document.write("Out : <br/>" + firstDevice + "<br/>")
// var secondDevice = device.shift()
// document.write("Out : <br/>" + secondDevice + "<br/>")
// var thirdDevice = device.shift()
// document.write("Out : <br/>" + thirdDevice + "<br/>")
// var fourthDevice = device.shift()
// document.write("Out : <br/>" + fourthDevice + "<br/>")

// Chapter # 14-16 - Task # 14
// var device = ["keyboard","mouse","printer","monitor"]
// document.write("Devices : <br/>" + device + "<br/><br/><br/>")
// var firstDevice = device.pop()
// document.write("Out : <br/>" + firstDevice + "<br/>")
// var secondDevice = device.pop()
// document.write("Out : <br/>" + secondDevice + "<br/>")
// var thirdDevice = device.pop()
// document.write("Out : <br/>" + thirdDevice + "<br/>")
// var fourthDevice = device.pop()
// document.write("Out : <br/>" + fourthDevice + "<br/>")

// Chapter # 14-16 - Task # 15
// var phoneManf = ["Apple","Samsung","Motorla","Nokia","Sony","Haier"]
// document.write(
//     "<select>"+
//     "<option>" + phoneManf[0]+"</option>"+
//     "<option>" + phoneManf[1]+"</option>"+
//     "<option>" + phoneManf[2]+"</option>"+
//     "<option>" + phoneManf[3]+"</option>"+
//     "<option>" + phoneManf[4]+"</option>"+
//     "<option>" + phoneManf[5]+"</option>"+
//     "</select>"
// )

//Array & Loops
// Chapter # 17-20 - Task # 1
// var mdArray = [[],[],[]]

// Chapter # 17-20 - Task # 2
// var mdArray1 = [0,1,2,3]
// var mdArray2 = [1,0,1,2]
// var mdArray3 = [2,1,0,1]
// document.write(mdArray1 + "<br/>" + mdArray2 + "<br/>" + mdArray3 + "<br/>")

// Chapter # 17-20 - Task # 3
// for (var i = 1; i <= 10; i++){
//     document.write(i + "<br/>")
// }

// Chapter # 17-20 - Task # 4
// var table = prompt("Enter a number to show its multiplication table")
// var length = prompt("Enter the length of multiplication table : ")
// document.write("Multiplication table of  " + table + "<br/>")
// document.write("Length  " + length + "<br/>")
// document.write("<br/>")
// for (i=1; i<=length; i++){
//     document.write(table + " x " + i + " = " + (i*table) + "<br/>")
// }

// Chapter # 17-20 - Task # 5
// var fruits = ["apple","banana","mango","orange","strawberry"]
// for (i=0; i<=fruits.length-1; i++)
// document.write(fruits[i] + "<br/>")
// document.write("<br/>")

// for (j=0; j<=fruits.length-1; j++)
// document.write("Element at Index " + j + " is " + fruits[j] + "<br/>")

// Chapter # 17-20 - Task # 6

// var count
// var revCount
// var evenNo
// var oddNo
// var series

// document.write("<h4> Counting : </h4>")
//  for(count=1; count<=15; count++){
//    document.write(count + ",")
// }

// document.write("<h4> Reverse counting : </h4>")
//  for(revCount=10; revCount>=1; (revCount=revCount-1)){
//    document.write(revCount + ",")
// }

// document.write("<h4> Even : </h4>")
//  for(evenNo=0; evenNo<=20; (evenNo=evenNo+2)){
//    document.write(evenNo + ",")
// }


// document.write("<h4> Odd : </h4>")
//  for(oddNo=1; oddNo<=19; (oddNo=oddNo+2)){
//    document.write(oddNo + ",")
// }

// document.write("<h4> Series : </h4>")
//  for(evenNo=0; evenNo<=20; (evenNo=evenNo+2)){
//    document.write(evenNo + "k,")
// }

// Chapter # 17-20 - Task # 7

// var bakery = ["cake","apple pie","cookie","chips","patties"];
// var search = prompt("Welcome to ABC Bakery. What do you Want to order sir/ma'am? ")
// var itemLoc = bakery.indexOf(search)

// if(bakery.indexOf(search) !== -1){
//   alert(search +" is available at index " + itemLoc + " in our bakery")
// }else{
//   alert("We are Sorry ! " + search + " is not available in our bakery")
// }

// Chapter # 17-20 - Task # 8
// var numList = [24,53,78,91,12]
// var largestNo = 0

// document.write("Array items : " + numList + "<br/>")
// for (i=0; i<=numList.length; i++){
//   if(numList[i] > largestNo){
//     largestNo = numList[i]
//   }
// }
// document.write("The largest number is : " + largestNo)

// Chapter # 17-20 - Task # 9
// var numList = [24,53,78,91,12]
// var smallestNo = Math.min.apply(Math,numList)

// document.write("Array items : " + numList + "<br/>")

// for (i=0; i<=numList.length; i++){
//   if(numList[i] < smallestNo){
//     smallestNo = numList[i]
//   }
// }
// document.write("The smallest number is : " + smallestNo)


// Chapter # 17-20 - Task # 10
// for (i=5; i<=100; (i=i+5)){
//   document.write(i + ",")
// }