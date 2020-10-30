import React, { Component } from 'react';

class About extends Component {
        constructor() {
                super();

                this.state
        }
}


    // Class Components //

    // 0.5) BOTH the  props AND state are managed ON an instance of the class. 
    // 1) Can have as many functions as Needed but " Render " function is MANDATORY. 
            //  2) RENDER FUNCTION in CLASS COMPONENTS = You make the render function in the compnent return the virtual DOM description of your component. 
                    // 3)  ' Props ' as arguments in Class components 





                    // SCOPED FUNCTION WITH COSNTRUCTOR AND SUPER //

                //     newestFunction(); // - How can I reference this Globally? Easy to reference within the module
                //     newFunction();
                    
                    
                    
                //     function newestFunction(){
                //       function newFunction() {
                //         class App extends Component {
                //           constructor() {
                //             super();
                    
                //             this.state = {
                //               message: ""
                //             };
                //           }
                    
                //           handleChange(value) {
                //             this.setState({ message: value });
                //           }
                    
                //           render() {
                //             return (
                //               <div className="About">
                //                 <input onChange={e => this.handleChange(e.target.value)} type="text" />
                //                 <p>{this.state.message}</p>
                //                 <div><li>
                //                         <ui>
                //                                 </ui>
                //                                 </li></div>
                //               </div>
                //             );
                //           }
                //         }
                    
                //         export {App};
                //       }
                //       const App = newestFunction();
                //     }
                    
                //     export {newestFunction};