Ep-2 (Notes)

npm: It manages packages and works as a Node package manager. Standard packages are hosted in npm libraries and utilities.

package.json configuration for NPM: This JSON file is used to configure NPM and contains information about the packages installed in a project.

npm init: This command is used to create a package.json file.

All dependencies will be listed in this JSON file.

Dev and Normal dependencies:

bundler: A tool that bundles packages to be pushed to production. Parcel is a popular bundler.

npm install -D parcel (Dev dependencies -D): This command installs parcel as a dev dependency in the package.json file.

After installing parcel, we will get a package-lock.json file. This file keeps track of all the versions of dependencies used in the project.

Transitive dependencies: These are dependencies that depend on other dependencies. For example, if a project depends on a package that depends on another package, those two packages are also considered transitive dependencies.

Node modules, which are collections of dependencies, can be stored in GitHub. However, to avoid pushing the entire Node module to GitHub, we can use the gitignore file to exclude certain files. Specifically, we should include the package/package-lock file in the gitignore file.

To install Node modules, we can use the npm install command, specifying the dependencies from the package/package-lock.json file.

When starting a new application, we can use Parcel to create a server to host the code. To do this, we can run the command npx parcel index.html, which will use the starter code as the index.html file.

Parcel also provides features such as Hot Module Replacement (HMR), which automatically refreshes the browser when changes are made to the code. Additionally, Parcel caches the build time, which reduces the time required to build the application as changes are made.

Ther are several features of parcel like code splitting, cross browser differential bundling, Parcel also performs image optimization for web applications. The core job of Parcel is to bundle the files, and it also compresses files by removing all white spaces from the web application. Parcel uses a file-watching algorithm to monitor changes to the files and ensure that the application is always up-to-date.

There are several ways to include React in an application. One way is to use CDN links, which are not the preferred method. The preferred method is to install React as a package using npm. For example, we can run the command npm install React or npm i React to install React.

We can also use the type module in the script section when we have import statements in the JavaScript code.

Ep-3 (Notes)
Writing start/build using npm run <script_name> modify or add script in package.json

React element? they are like DOM elements
const heading = React.createElement(
"h1",
{id: "Heading"},
"React"
)
Above is a react element which creates a object, When we render this element we will get html
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root is exisitng elemetn in Markup HTML, after rendering we will get it in webpage **replacing** everything in root with heading

** Above is not goodway **
JSX -> Javascript syntax & has a different syntax
JSX is not HTML inside javascript but HTML/XML like syntax
const jsxHeading = <h1 id="Heading">Heading using JSX</h1>;
above is better way, but it is not a valid syntax in .JS file,
But parcel will makesure this syntax is tanspiled into react syntax before script is loaded it will take help of babel via parcel, babel is a javascript compiler
JsxHEading is traspiled into React.createElement by babel, so code works in jsx sytanx in .JS files

Check different tags attributes in JSX
Attribites in tags for JSX is camel cased
We need to use ClassName istead of Class like in HTML
If we want to writ markup in multiple lines in JSX we need to wrap that in () beacuse babel needs to understand where markup is starting and ending

# React components?

Everything in React is a component
-> Class based components
-> functional components (new way of coding)..uses javascript functions

React functional Component
Normal JS function (Starts with capital letter)
JS funtion returns React element is React functional component
We can render FC like root.render(<RFC/>)

Component compostion -- putting element inside a element
If we want expecute any JS code in RFC we can put it in {} curly braces to execute javascript airthimetic or any operations and display/render in markup we can also keep JS varibles like JSX sytax components

Ep-4

# Props/Properties?

props is nothing but arguments to the function in React functional components passign props to the component

Conflict driven UI

Ep-5

# React Hooks? write more about it

## React Hooks

### 1. `useState`: State Hook

- **Purpose**: Enables state within functional components.
- **Syntax**:
  ```javascript
  const [state, setState] = useState(initialValue);
  state holds the initial value.
  setState updates the state and triggers a re-render.
  ```

Virtual DOM & Reconciliation

Virtual DOM
Definition: A lightweight, in-memory representation of the actual DOM.
How it Works: React updates the Virtual DOM first. Then, only the changes are applied to the real DOM, which optimizes performance.
Reconciliation & Diff Algorithm
Reconciliation: React compares the new Virtual DOM with the previous one to identify what’s changed.
Diff Algorithm: Efficiently finds and updates only the necessary parts in the real DOM, making React fast and efficient.
Process:

React builds a new Virtual DOM when the state changes.
The Diff Algorithm compares the new and old Virtual DOM.
React applies only the necessary updates to the real DOM.

Ep-6

Monolith and microservices architecture?

Monolith: A huge project.

We have UI, APIs, authentication, database connectivity, and notifications all in the same project. If we need to make a single change, we have to compile the entire project again, which takes a lot of time.

Microservices: Different services for different parts of the project.

UI service, authentication service, email service, and database service are all separate services. They are smaller when combined, but they make the app together. They follow the single responsibility principle.

All services have different timelines for development and changes.

For example, the UI needs to talk to the data service and the authentication service.

How are they deployed?

We are developing a React project that is a UI microservice.

Different services use different languages and talk to each other.

How are they connected? They run on their own specific ports and talk to each other. They make calls to different microservices.

How does React connect to different microservices?

How webapps fetch data from Backend ?
1st -> when an app load as soon as app loads we can make API call to fetch the data and when data comes we can render the UI, If api call takes 500ms , page will wait for 500ms and render UI

2nd -> As soon as page loads we will render the UI whatever the data we have, and make API call as asoon as result gets from API then render
In react we will always use sencond approach beacuse its better UX

1. useEffect Hook
   The useEffect Hook in React is used to perform side effects (like fetching data, setting up subscriptions, or changing the DOM) in functional components.

Syntax:

useEffect(() => {
// Your effect logic here
}, [dependencies]);
Arguments: It takes two arguments:
A callback function that contains the effect code.
A dependency array (optional). This array tells React when to re-run the effect based on changes to the values in the array.
How it Works:

If no dependency array is provided, useEffect runs after every render.
With an empty dependency array ([]), it runs only once after the initial render.
If the array has dependencies, useEffect re-runs every time those dependencies change.
Rules:

Use useEffect only inside function components.
Place it at the top level of the component function (not inside loops or conditionals). 2. Cross-Origin Resource Sharing (CORS)
CORS is a security feature that restricts web pages from making requests to a different domain than the one that served the web page. If you're trying to fetch data from a different origin, your browser may block it for security reasons.

Bypassing CORS:

Server-Side Proxy: Set up a server to fetch data and relay it to your client.
CORS Headers: The server can allow specific origins by setting CORS headers (Access-Control-Allow-Origin).
Third-Party Solutions: Sometimes, APIs provide options for bypassing CORS by using external services like cors-anywhere. 3. Optional Chaining (?.)
Optional chaining (?.) is a JavaScript operator that lets you safely access deeply nested properties without causing an error if any property is undefined or null.

Example:

const user = { name: "Alex", address: { city: "New York" } };
console.log(user?.address?.city); // "New York"
console.log(user?.contact?.phone); // undefined (no error) 4. Shimmer UI
Shimmer UI, also known as a skeleton loader, is a visual placeholder that shows an animated, skeleton-like version of the UI before actual data loads. It's useful for enhancing perceived performance in web applications by giving users a preview of the content layout.

Implementation:

Show a loading skeleton (usually gray blocks) where actual content will appear.
Hide the skeleton once the data loads, making the content visible. 5. Conditional Rendering
Conditional rendering in React allows you to render components or elements based on a condition.

Example:

const isLoggedIn = true;
return (

  <div>
    {isLoggedIn ? <Dashboard /> : <Login />}
  </div>
);
6. Routing with React Router DOM
React Router DOM helps in setting up routing for single-page applications (SPAs), allowing for a smoother experience as users navigate through different views without reloading the page.

Basic Steps:

Define Route Configuration: Create a route configuration with paths and components.
Router Setup: Use CreateBrowserRouter and RouterProvider to define routes.
Nested Routes: For consistent elements like headers or sidebars, you can use nested routes to keep those elements constant while only specific parts of the page change.
Link Component: Use the <Link> component for client-side navigation, avoiding full page reloads. 7. Client-Side vs. Server-Side Routing
Client-Side Routing: Uses JavaScript to manage navigation without reloading the page. React Router DOM is an example.
Server-Side Routing: Each navigation request goes to the server, and the server returns the full HTML for that page. This approach is typical of traditional web applications.
Summary Tags
useState/useEffect: React hooks for managing state and side effects.
React Router DOM: Library for SPA routing.
Shimmer/Skeleton UI: Placeholder visuals for loading states.
Conditional Rendering: Show or hide components based on conditions.
Optional Chaining: Safe access to nested properties.

ARROW FUNCTIONS

Implicit Return (Single Expression) – Use () to implicitly return a value (great for JSX):
const example = categories.map((category) => (

  <div key={category}>{category}</div>
));
Function Body with Explicit Return – Use {} when you need multiple lines or logic before returning:
const example = categories.map((category) => {
  const items = Menu[category];
  return <div key={category}>{items}</div>;
});
Returning an Object Directly – Wrap the object in ({}) to avoid confusion with a function body:
const example = categories.map((category) => ({
  name: category,
  items: Menu[category]
}));
Quick Rules:

() for implicit return (JSX or single expressions).
{} for function body (multiple lines or extra code).
({}) for direct object return.

///

Class-Based Components in React
Class-based components are one of the older ways of creating components in React. While functional components with hooks are now the preferred method, understanding class-based components is essential for working with legacy React applications.

Defining a Class-Based Component

A class-based component:

Extends React.Component.
Must include a render() method, which returns JSX (markup).
Example:

class MyComponent extends React.Component {
render() {
return (
<div>
<h1>Hello, World!</h1>
</div>
);
}
}
Using Props in Class-Based Components
Props are passed to class-based components the same way as functional components:
<MyComponent someProp="value" />
To access props in a class component:
Define a constructor:
constructor(props) {
super(props);
}
Use this.props to access a prop:
render() {
return <h1>{this.props.someProp}</h1>;
}
Why Use super()?
super(props) is required in the constructor of a class component because:
It calls the parent class's (React.Component) constructor.
It initializes the this context, allowing you to use this.props.
Why Use this?
this is used to refer to the current instance of the class.
It is necessary to access:
Props: this.props
State: this.state
Methods within the class.
State in Class-Based Components
State is an object that stores dynamic data for the component.
In class-based components, state is initialized in the constructor:
constructor(props) {
super(props);
this.state = { count: 0 };
}
Updating State

You cannot directly modify the state like this.state.count = this.state.count + 1.
Instead, use this.setState() to update state variables:
this.setState({ count: this.state.count + 1 });
Updates are batched for performance, meaning multiple setState calls may be grouped together.
Example:

onClick={() => {
this.setState({ count: this.state.count + 1 });
}}
React Component Lifecycle
The lifecycle of class-based components is broken into three main phases:

Mounting - When the component is created and inserted into the DOM.
Updating - When the component updates due to changes in state or props.
Unmounting - When the component is removed from the DOM.
Lifecycle Methods for Mounting

constructor(): Initializes state and binds methods.
render(): Returns JSX to be displayed.
React DOM Updates: Virtual DOM is used to efficiently update the real DOM.
componentDidMount(): Called after the component is rendered and the DOM is updated. Suitable for:
API calls
DOM manipulations.
Multiple Child Components and Lifecycle Order
If a parent component has multiple child class-based components, the lifecycle methods are called in the following order during mounting:

Parent Constructor
Parent Render
Child Constructors (in the order they appear)
Child Render Methods (in the order they appear)
React Commits DOM Updates for All Children
Child componentDidMount (in the order they appear)
Parent componentDidMount
React Lifecycle Optimization
React batches DOM updates to improve performance because manipulating the DOM directly is expensive.
By using a virtual DOM, React minimizes the number of actual DOM updates.
Virtual DOM
The virtual DOM is a lightweight copy of the real DOM.
React performs operations on the virtual DOM first and calculates the difference (diffing algorithm).
Only the changes are applied to the real DOM, reducing the overhead.
componentDidMount()
Called after the component is rendered and the DOM is updated.
It is used for:
Making API calls.
Setting up subscriptions (e.g., WebSocket or timers).
Interacting with DOM elements.
Order with Parent and Child Components:

Child componentDidMount methods are called before the parent's componentDidMount.
Why API Calls Are Made in componentDidMount()
Ensures the component is fully rendered before making requests.
Fetching data before render may lead to unnecessary re-renders.
Equivalent to the useEffect hook in functional components, which runs after rendering.
Lifecycle with Multiple Children Example
Parent and Multiple Children Example:

class Parent extends React.Component {
render() {
return (
<>
<Child1 />
<Child2 />
</>
);
}
}
class Child1 extends React.Component {
render() {
return <div>Child 1</div>;
}
}
class Child2 extends React.Component {
render() {
return <div>Child 2</div>;
}
}
Lifecycle Order:

Parent Constructor
Parent Render
Child1 Constructor
Child1 Render
Child2 Constructor
Child2 Render
React Commits DOM Updates for All Children
Child1 componentDidMount
Child2 componentDidMount
Parent componentDidMount
Key Notes for Quick Reference
Mounting Lifecycle:
Constructor → Render → componentDidMount.
Updating Lifecycle:
shouldComponentUpdate → Render → componentDidUpdate.
Unmounting Lifecycle:
componentWillUnmount.
Why Virtual DOM?
Minimizes real DOM updates, improving performance.
Batching in React:
All child components are rendered in the virtual DOM first, then the DOM is updated in a single commit phase.
APIs in componentDidMount:
Ideal for loading data asynchronously after initial render.

HOOKS VS OLD WAY

React Lifecycle Methods and useEffect
React provides lifecycle methods in class components and the useEffect hook in functional components to manage side effects like logging, API calls, and subscriptions.

Class Component Lifecycle Methods
componentDidUpdate:
Triggered after every update (state/props change).
Used for: API calls, responding to changes.
Example:
componentDidUpdate(prevProps, prevState) {
if (prevProps.data !== this.props.data) {
console.log("Props changed!");
}
}
Equivalent in functional components:
useEffect(() => {
console.log("Props changed!");
}, [data]); // Dependency array
componentWillUnmount:
Triggered when a component is removed from the DOM.
Used for: Cleaning up (e.g., clearing intervals, subscriptions).
Example:
componentWillUnmount() {
clearInterval(this.timer);
console.log("Timer cleared.");
}
Equivalent in functional components:
useEffect(() => {
const timer = setInterval(() => console.log("Logging..."), 10000);

return () => {
clearInterval(timer);
console.log("Timer cleared.");
};
}, []); // Cleanup function
Functional Component: useEffect
useEffect is a versatile hook that handles:

Mounting (like componentDidMount)
useEffect(() => {
console.log("Component mounted");
}, []); // Runs once
Updating (like componentDidUpdate)
useEffect(() => {
console.log("Data changed");
}, [data]); // Runs when 'data' changes
Unmounting (like componentWillUnmount)
useEffect(() => {
const timer = setInterval(() => console.log("Logging..."), 10000);

return () => clearInterval(timer); // Cleanup on unmount
}, []); // Runs once
Key Points: Cleanup in useEffect
Always clean up side effects (e.g., intervals, event listeners) in the return function of useEffect to avoid memory leaks.
Example:
useEffect(() => {
const timer = setInterval(() => console.log("Logging..."), 10000);

return () => {
clearInterval(timer);
console.log("Timer cleared.");
};
}, []);
Without cleanup, effects like setInterval will continue running even after navigating away, causing unintended behavior.

Class vs Functional Components: Lifecycle Comparison
Lifecycle Phase Class Component Method Functional Component Equivalent
Mounting (on load) componentDidMount useEffect(() => { ... }, []);
Updating (on props/state change) componentDidUpdate useEffect(() => { ... }, [dependencies]);
Unmounting (on removal) componentWillUnmount useEffect(() => { return () => { ... }; }, []);
Best Practices for useEffect
Always Cleanup Side Effects:
Use the return function to clean up intervals, subscriptions, or listeners.
Example:
useEffect(() => {
const timer = setInterval(() => console.log("Logging..."), 10000);

return () => clearInterval(timer); // Cleanup
}, []);
Use Dependencies to Control Execution:
Specify dependencies to run useEffect only when specific variables change.
Example:
useEffect(() => {
console.log("Dependency changed!");
}, [dependency]); // Only runs when 'dependency' changes
Simplify All Lifecycle Logic:
Handle mounting, updating, and unmounting in one place:
useEffect(() => {
console.log("Component mounted or updated!");

return () => console.log("Component unmounted!");
}, [dependency]);
Conclusion
useEffect replaces componentDidMount, componentDidUpdate, and componentWillUnmount with a unified syntax.
Always include cleanup logic to prevent memory leaks.
Functional components with useEffect are more concise and flexible than class-based lifecycle methods.
