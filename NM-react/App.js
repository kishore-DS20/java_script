const parent = React.createElement(
    "div",
    {id:"parent"}, 
    React.createElement(
        "div",{id:"child"}, 
       [React.createElement("h1",{},"Im a h1 tag"),React.createElement("h2",{},"Im a h2 tag")]
    ));




// const heading = React.createElement("h1", {id : "heading" , xyz:"abc"}, "hello from react!");

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("header"));

root.render(parent);
