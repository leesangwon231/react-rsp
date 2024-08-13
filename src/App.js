import './App.css';
import Box from "./component/box"
import {useState} from "react";


// 1. 박스 2개 (타이틀 사진 결과)
// 2. 가위 바위 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 보임
// 4. 컴퓨터는 랜덤하게 선택이 된다
// 5. 3,4 번의 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 테두리 색깔 변경 (이기면 - 초록, 지면 - 빨강 , 비기면 - 검정)
function App() {
    const [userSelect,setUserSelect] = useState(null);

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


    const choiceRsp = (rsp) => {
        setUserSelect(choice[rsp])
    }

  return (
      <div>
          <div className="main">
              <Box title="You" item = {userSelect}/>
              {/*<Box title="computer"/>*/}
          </div>
          <div className={"main"}>
              <button onClick={() => choiceRsp("sissor")}>가위</button>
              <button onClick={() => choiceRsp("rock")}>바위</button>
              <button onClick={() => choiceRsp("paper")}>보</button>
          </div>
      </div>
  );
}

export default App;
