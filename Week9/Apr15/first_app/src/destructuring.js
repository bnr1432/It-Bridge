import React from 'react';

// Destructuring in functional component
function Sample({ name, city }) {
    return <h1>Hello, {name} from {city}!</h1>;
  }


//   // Using class component
//  export default class Welcome extends React.Component {
//     render() {
//       const { name, city } = this.props;
//       return <h1>Hello, {name} from {city}!</h1>;
//     }
//   }
  
export default Sample;
  