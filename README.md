[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11754654&assignment_repo_type=AssignmentRepo)
# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Runtime Analysis Answer

We can reason the following about the function:
- if the array has either 0, 1, 2, or 3 elements, return the sum of those elements or 0 and stop (1)
- split the array into 3 approximately equal thirds (1)
- add each third recursively using sumRange (3T(n/3))
- combine each sum (3)

Using this reasoning, we can determine that the recurrence relation for T(n) would be the following:<br>\
T = 1 if n <= 3<br>
T = 3T(n/3) + 3 if n > 3

With this recurrence relation in mind, we can determine Θ as follows:

T(n) = 3T(n/3) + 3<br>
= 3(3T((n/3)/3) + 3) + 3<br>
= 9T(n/9) + 12<br>
= 9(3T((n/3)/9) + 3) + 12<br>
= 27T(n/27) + 39<br>
= 3^(i)T(n/3^(i)) + k (a constant to represent some sum I won't bother to calculate here because it isn't asymptotically relevant)<br>
= 3^(log₃n)T(n/3^(log₃n)) + k<br>
= n\*1 + k<br>
= n + k ∈ Θ(n)<br>