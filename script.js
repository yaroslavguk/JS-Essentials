//- Find and display total sum of numbers from 1 to 3;

function sumTo(n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log('- Find and display total sum of numbers from 1 to 3:', sumTo(3));


//- Find and display total sum of numbers from 20 to 220;

function sumTo2(n) {
  var sum = 0;
  for (var i = 20; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log('- Find and display total sum of numbers from 20 to 220:', sumTo2(220));

//- Display even numbers from 1 to 20 by using for loop
//  do it with using ‘continue’

console.log('Display even numbers from 1 to 20 by using for loop do it with using continue');

for (var i = 1; i <= 20; i++)
{
   if ((i % 2) != 0) {
      continue;
   }
   console.log(i);           
}

//do it without using ‘continue’

console.log('do it without using continue');

for (var k = 1; k <= 20; k++) {

   if ((k % 2) == 0) 
      
   console.log(k);           
}

//- Display odd numbers from 10 to 30 by using ‘while’ loop.

console.log('Display odd numbers from 10 to 30 by using while loop');
    
    var i = 10;
    while (i <= 30) {
    if (i % 2 == 1) {
    console.log(i);
    }
    i++;
}

// Display number from 1 to 15 using ‘for’ loop, once number of iteration 
// is equal the number of month of your birthday then stop execution of loop

console.log('Display numbers from 1 to 15 using ‘for’ loop, once num of iteration is equal the num of month of your birthday then stop execution of loop');
  
  for (var i = 1; i <=15; i++) {
    if (i === 6) {
          break;
        }
        console.log(i);
}

// Rewrite code from using ‘for’ to using ‘while’

console.log('Rewrite code from using ‘for’ to using while');

    var i = 0;
    while(i<5) {
    console.log(`number ${i} =)`);
    i++;
}

// - Write code which will ask user (prompt ) to put number greater than 100, repeat prompt until user put required number, then display result of prompt
//   do it using ‘while’

console.log('Write code which will ask user (prompt ) to put number greater than 100, repeat prompt until user put required number, then display result of prompt do it using while');

   var num = 0;
   while (num < 101 || isNaN(num)) {
   num = prompt('put number greater than 100');
}

//do it using ‘do while’

   var num1;
   do {
   num1 = prompt('put number greater than 100');
}  while (num1 <= 100 || isNaN(num1));

//- Show in console using for.
console.log('Show # in console using for');

   var num = 8;
   var foo = "";
   for (var i = 1; i <= num; i++) {
   foo = foo + "#";
   console.log(foo);
}
