import React, {Component} from 'react';
import Box from "./component/box";
import BoxClass from "./component/BoxClass"


const choice = {
    rock : {
        name : "rock",
        image : "https://m.media-amazon.com/images/I/51rOMX5z40L.jpg"
    },
    sissor : {
        name : "sissor",
        image : "https://thumbs.dreamstime.com/b/sissor-2293994.jpg"
    },
    paper : {
        name : "paper",
        image : "https://spaldingeducationstore.org/cdn/shop/products/paper-spalding-vertical-paper-5-8-inch-pa1_1000x.jpg?v=1683973391"
    }
}


class AppClass extends Component {
    constructor(props) {
        super(props);
        this.state={
            userSelect:null,
            comSelect:null,
            result:""
        }

    }



    randomChoice = () => {
        let itemArray = Object.keys(choice);
        let randomItem = itemArray[Math.floor(Math.random()*itemArray.length)] ;
        return randomItem;
    }

     choiceRsp = (rsp) => {
        let computerChoice = this.randomChoice();
        this.setState({ userSelect : this.state.userSelect = choice[rsp] , comSelect : this.state.comSelect = choice[computerChoice], result : this.state.result = this.judgement(choice[rsp],choice[computerChoice])})
    }



     judgement = (userChoice, comChoice) => {
        if(userChoice.name === comChoice.name){
            return "tie"
        }else if(userChoice.name === "rock"){
            return comChoice.name === "sissor" ? "win" : "lose";
        }else if(userChoice.name === "sissor"){
            return comChoice.name === "paper" ? "win" : "lose";
        }else if(userChoice.name === "paper"){
            return comChoice.name === "rock" ? "win" : "lose";
        }
    }


    render() {
        return (
            <div className={"wrapper"}>
                <div className="main">
                    <BoxClass title="You" item={this.state.userSelect} result={this.state.result}/>
                    <BoxClass title="Computer" item={this.state.comSelect} result={this.state.result}/>
                </div>
                <div className={"buttonArea"}>
                    <button onClick={() => this.choiceRsp("sissor")}>가위</button>
                    <button onClick={() => this.choiceRsp("rock")}>바위</button>
                    <button onClick={() => this.choiceRsp("paper")}>보</button>
                </div>
            </div>
        );
    }
}

export default AppClass;

