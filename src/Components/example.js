// DIFFERENT COMPOENENTS UPDATED ES6 2020 DOCUMENTATION//

// (4) Most Common Components (according to Pluralsight):
    // 1)createClass 

            // NO LONGER need ' createClass function ', just need to use ' class '
    // 2)ES class 
    // 3)Function 
    // 4)Arrow Function

// FUNCTION VS FUNCTIONAL COMPONENT // 

// FUNCTION COMPONENT - The only arguement declared with a FUNCTION component is the single ' (props) ' agrument that gets passed in. 
    //EX.//
    function HelloWorld(props){
            return (
                <h1> HelloWorld</h1>
            );
        }

// FUNCTIONAL COMPONENTS - Function components with additional funcationality (takes in more than a simple a props), of React-Hooks



// 1) FUNCTIONAL COMPONENTS //
// SUMMARY: SIMPLY JAVASCRIPT FUNCTION, ONLY USE WHEN this component won't interact with other data.

function Title()
{
    return <h1>Title of the Page</h1>;
}

// 2) CLASS COMPONENTS // 
// SUMMARY: Like functional components but CAN WORK WITH EACH OTHER, can pass data from one class component to another.

class Header extends React.Component {

    render(){
        return<h1>1st title of Header Page</h1>
    }
};

// 3) HIGH-ORDER COMPONENTS //
// SUMMARY: Also know by the Abrev. (HOCs), HOCs are components which takes a component as input(like MyComponent below), and return the component as output BUT WITH EXTENDED FUNCTIONALITIES. 

const exHOC = (MyComponent) => (props) => {
    return (
        <div>
            <MyComponent {...props}>
                {props.children.toUpperCase()}
            </MyComponent>
        </div>
    )
}

// 4) 
// SUMMARY: The 
// OTHER COMPONENTS //


