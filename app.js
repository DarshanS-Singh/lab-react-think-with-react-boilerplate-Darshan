class ReactContainer extends React.Component{
    render(){
        return React.createElement(`div`,null,`Hey Kalvians`,
        React.createElement(`div`,null,`Let's rock and roll with classes`)
        );
    }
}
// const container = document.getElementById('react-container');
// ReactDOM.render(React.createElement(ReactContainer),container);

// ReactDOM.render("Hello! Welcome to React",container);

// Functional component
// const Container = () =>{
//     return React.createElement(`div`,null,`Hey Kalvians! Welcome to React Learning`,
//        React.createElement(`div`,null,`Let's rock and roll`)
//        );
// }
// // Render the Container
// const container = document.getElementById('react-container');
// ReactDOM.render(React.createElement(Container),container);

const Container = () =>{
    return React.createElement(`div`,null,`Hey Kalvians! Welcome to React Learning`,
       React.createElement(`div`,null,`Let's rock and roll`)
       );
}
// Render the Container
const container = document.getElementById('react-container');
ReactDOM.render(React.createElement(Container),container);