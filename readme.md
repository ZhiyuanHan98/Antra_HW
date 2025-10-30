# Challenge 1
![Challenge1](challenge1.png)
# Challenge 2
![Challenge2](challenge2.png)
# Challenge 3
![Challenge3](challenge3.png)
# Challenge 4
![Challenge4](challenge4.png)
# What is state lifting and props drilling?
State lifting: move state up to the closest common ancestor so multiple children can read/update
Props drilling: passing props through many intermediate layers that don’t use them, just to reach a deep child.
# How to avoid props drilling?
React Context to put shared state in a Provider -> read with useContext
# Compare useState vs useReducer. When is useReducer a better choice?
useState is best for simple, local, independent pieces of state.
useReducer is best for complex state with multiple fields, interdependent updates, or many event types
# How to trigger a re-render in React?
A component re-renders when its render inputs change including the props and states.