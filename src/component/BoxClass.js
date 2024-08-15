import React, {Component} from 'react';

class BoxClass extends Component {
    constructor() {
        super();
       this.results = "";
    }

    test= () => {
        if(this.props.title === "Computer" && this.props.result !== ""){
          this.results =  this.props.result === "win" ? "lose" : "win";
            if(this.props.result === "tie"){
                this.results =  "tie";
            }
        }else{
            this.results=  this.props.result;
        }
    }

    render() {
        this.test();
        return (
            <div className={`box ${this.results}`}>
                <h1>{this.props.title}</h1>
                <img className={"item-img"} src={this.props.item?.image}/>
                <h2>{this.results}</h2>
            </div>
        );
    }
}

export default BoxClass;
