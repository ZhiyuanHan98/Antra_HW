# Challenge 1
![Challenge1](/challenge1.png)
# Challenge 2
![Challenge2](/challenge2.png)
# Challenge 3
![Challenge3](/challenge3.png)

# What is dependency and dev dependency? What’s the difference?
Dependency is the package/lib/framework used in this project after built.
Dev Dependency is the package/lib/framework used for development.
# What is package.json and package-lock.json? What’s the difference?
Package.json is the overview of script, dependency of this project.
package-lock contains more detail about the project dependency.
# What is JSX? Why do we need babel?
In jsx file, we can write HTML-like code directly inside JavaScript.
Babel compile the jsx into vanilla js code.
# SPA vs MPA
SPA loads a single HTML page once, without reload, update the page by changing the content in the same page.
MPA uses multiple page. Each page is a separate HTML document.
# CSR vs SSR
CSR render the page on clients side, the server sends the code needed to render the page, the client execute the code and generate the page. This has more smooth user experience with initial loading latency.
SSR renders the page on server side, the server compute all the elements in page and sends the results to clients.