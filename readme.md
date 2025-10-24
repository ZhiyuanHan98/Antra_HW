# Challenge 1
![Challenge1](/challenge1.png)
# Challenge 2
![Challenge2](/challenge2.png)
# Challenge 3
![Challenge3](/challenge3.png)

# What’s the purpose of using the key attribute when we render a list of items in JSX?
The key attr helps react to keep track of items. When the one item's data is updated, it will uses the key to find the li dom in the ul.
# What is the “children” props?
it returns a array of return value from React.createElement.
jsx defining innerHTML of the component will be parsed to
js and passed to children props.
# What is pure function and pure component?
pure function has no side effect, regardless of outer factors and variables.
Always returns the same output for the same input.
Pure Component will render same result with same props and state.
# What is conditional rendering? How do you implement it effectively?
Conditional Rendering uses if-else-like statement to conditionally render components. When the condition is satisfied, the component will be rendered, if not, it's not rendered.