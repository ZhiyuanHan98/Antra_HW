# Challenge 1
![Challenge1](challenge1.png)
# Challenge 2
![Challenge2](challenge2.png)
# Challenge 3
![Challenge3](challenge3.png)
# Challenge 4
![Challenge4](challenge4.png)
# What is immutability
Immutability means that data is never changed directly. Instead, a new copy of the data is created and assigned.

# What is state update batching and why
React batches multiple state updates into a single re-render to Reduces unnecessary DOM updates.

# What are the 2 forms of setState argument and what is the difference
a. direct value: directly assigned to fixed value
setCount(5);
b. function: take account of original count value
setState(count => count + 1);

# Controlled vs uncontrolled components

React-managed vs DOM-managed input state