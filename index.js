// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
 console.log(typeof a);
 console.log(typeof b);

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(i=0; i<a.length; i++)
    {
        a[i] = a[i]*2
        
    }
console.log(a)
// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'

switch (b) 
    {
        case 1:
            console.log('Red Green White Black');
            break;
        case 2:
            console.log('Red+Green+White+Black');
            break;
        case 3:
            console.log('Red,Green,White,Black');
            break;
            
    }
// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
for (var i = 1; i < a.length; i++)
    for (var j = 0; j < i; j++)
        if (a[j] < a[i]) {
          var b = a[i];
          a[i] = a[j];
          a[j] = b;
        }

console.log(a);

// Program to find the most frequent element in the following array.


//TODO should output: 'a'
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var count =[];
var mostfrequent;
var compare = 0;
for (var i = 0; i < a.length; i++)
    {
        var temp = a[i];
        if(count[temp] == undefined)
            {
                count[temp] = 1
            }
        else
        {
            count[temp] = count[temp] + 1;
        }
        
        if(count[temp]>compare)
        {
            compare = count[temp];
            mostfrequent = a[i];
        }
    }
console.log(mostfrequent);
