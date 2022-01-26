import React from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const StarPage = (props) => {
  const history = useHistory();
  const date = useParams();
  console.log(date)

  let star = ["1", "2", "3", "4", "5"];
  //map 내장함수를 사용하기 위해 초기 원본배열을 선언해줌
  //원본배열을 건드지 않으니깐 아무렇게나 배열만 맞게 선언해주면 됨
  
  const [count, setCount] = React.useState();
  //count: state값 setCount:count를 수정하는 어떠한 함수 <- React.useState훅을 사용해서
  //React.useState(0); ()인에는 state에 들어가는 인덱스 초기값으로 설정

  return (
    <div>

      <h3>
        <span className="day">{date.week_name}요일</span> 평점 남기기
      </h3>

      <div className="circle-list">
        {star.map((e, i) => {
          return <div onClick={() => {
            setCount(i) 
            console.log(count)
          }} style={{backgroundColor: (i < count+1) ? "yellow":"lightgray"}} key={i} className="star_circle"></div>;
        })}
      </div>

      <button
        className="btn" onClick={() => {history.goBack();}}>평점 남기기
      </button>

    </div>
  );
};

export default StarPage;