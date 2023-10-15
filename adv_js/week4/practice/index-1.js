import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


class ExampleClass extends React.Component{ 

  render(){ 
      return( 
              <div> 
                  <h1>Welcome to  {this.props.title}'s Website!</h1> 
                  <p>{this.props.author}</p>
              </div> 
          ); 
  } 
} 

// Creating default props for  
// ExampleClass Component 
ExampleClass.defaultProps = { 
  title: "MM214",
  author: "Kris Secor"
} 



/*
class ExampleClass extends React.Component{ 
    render(){ 
        return( 
                <div> 
                    <h1>The names of students are: {this.props.names}</h1> 
                </div> 
            ); 
    } 
} 
  
// Passing an array as prop 
ExampleClass.defaultProps = { 
    names: ['Ryan', 'Greg', 'Amy'] 
} 
  
ReactDOM.render( 
    <ExampleClass />,  
    document.getElementById("root") 
); 
*/

ReactDOM.render( 
  <ExampleClass />,  
  document.getElementById("root") 
); 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
