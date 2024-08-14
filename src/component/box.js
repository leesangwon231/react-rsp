import React from 'react';

const Box = ({title,item,result}) => {

    let results;

    if(title === "Computer" && result !== ""){
        results = result === "win" ? "lose" : "win"
        if(result === "tie"){
            results = "tie";
        }
    }else{
        results = result
    }



    return (
    <div className={`box ${results}`}>
        <h1>{title}</h1>
        <img className={"item-img"} src={item?.image} />
        <h2>{results}</h2>
    </div>
  );
}

export default Box;