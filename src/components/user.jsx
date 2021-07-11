import React from "react";
// Using Class Component
class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        planet: "earth",
    };
    console.log("Iam the constructor");
  };

  componentDidMount() {
    this.setState({ planet: "jupiter" });
  }

  shouldComponentUpdate(nextProp, nextState) {
    console.log("iam the shouldComponentUpdate");
    console.log( {
      nextProp,
      nextState,
    });
    
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {  
    console.log("iam the getSnapshotBeforeUpdate");
    console.log( { prevProps, prevState } );
    return true;
  }

  componentDidUpdate(){
    console.log(this.state);
  }

  // componentDidMount() {
  //   this.setState( { planet: "mars" } );
  //   console.log("Iam the componentDidMount");
  // };

  render() {
    console.log("Iam the render()");
    return (
      <div>
        <h1> {this.props.name} </h1>
        <p> {this.props.description} </p>
        <h3> {this.state.planet} </h3>
      </div>
    );
  };
};

export default User;

// const User = (props) => {
//     return (
//         <div>
//             <h1>{props.name}</h1>
//             <p>{props.description}</p>
//         </div>
//     );
// };

// export default User;