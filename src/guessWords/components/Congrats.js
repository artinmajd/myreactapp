import React from "react";

const Congrats = (props) => {
if(props.success){
return <div id={"congrats-alert"}>Congratulations! You guessed the word!</div>;
}

return null;
};

export default Congrats;


// class _Congrats extends React.Component{
//     constructor (props){
//         super(props)
//         this.state={guessedWords:[],secretWord:'Letter',success:false}
//     }
//     render (){
//         this.setState({success:true})
//         if(this.props.success){
//             return <div id={"congrats-alert"}>Congratulations! You guessed the word!</div>;
//             }
//     }
// }