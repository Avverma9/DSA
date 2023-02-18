 /*Given an array of integers, find another integer such that,
  if all the elements of the array are subtracted individually from that number, 
  then the sum of all the differences should add to 0. If any such integer exists, 
  print its value otherwise print '-1'.

Input:

    3
    1 2 3
    where:

First line represents the number of elements in the array.
Second line represents the elements in the array.

Output:
    2
Explanation:  The idea is to calculate the total sum of the array and divide it by the size of the array.
If the sum of the array is perfectly divisible by its size then the quotient obtained from this division operation will be 
the required hidden number*/

// JavaScript Program to find the
// hidden number
     
    // Driver Code
    // Getting the size of array
    let n = 3;
    // Getting the array of size n
    let a=[1, 2, 3];  
     
    // Finding sum of the array elements
    let sum = 0;
    for (let i = 0; i < n; i++) { 

            sum = sum + a[i];//
        }
        // Dividing sum by size n
        let x = sum / n;
        // Print x, if found  
        if (x * n == sum)
            console.log(x);
        else
            console.log("-1");
 
 
// This code is contributed by rag2127


