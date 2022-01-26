//react패키지에서 리액트 가져온다.
import React from "react";
import "./style.css";
import {useHistory} from "react-router-dom";

//화살표 함수문
const Weeks = (props) => {

    const history = useHistory();  //useHistory: 페이지 전환함수

    let day = ["일", "월", "화", "수", "목", "금", "토"];  //map함수를 쓰기 위해 임의지정

  return (
    <div>
      {/* 자바스크리트 안에서 html태그를 리턴해준 상태 -> {}안에서 자바스크립트 문법 사용 */}
      
      {/* <div className="weeks-list">을 배열의 index(6) 만큼 도는 함수*/}
      {day.map((e, i) => {

        // e:요소값 i:source에서 요소의 index; source:순회하는 대상;
        
        // 랜덤값 생성 함수
        let randomStar = Math.floor(Math.random() * 6);
        //console.log(randomStar)

        return (
          <div key={i} className="weeks-list"><span className="days">{e}</span>


            {/* <div className="circle"></div> 을 길이만큼(다섯번) 도는 함수*/}
            {Array.from({ length: 5 }, (v, i) => {
              return <div style={{backgroundColor: i < randomStar ? "yellow":"lightgray"}}
                      key={i} className="circle"></div>;
            })}

            <div id="arrow" onClick={() => {
              console.log(e)
                history.push("/StarPage/"+e);  //history.push("원하는 경로")
              }}> 
            </div>
          </div>
        );
      })}
    </div>
  );
};

//만든 컴포넌트를 다른 파이에서도 불러다가 쓸 수 있도록 export해줌!
export default Weeks;


// default 해오는 다른 형식
//export {Weeeks};
//import {Weeks} from './Weeks'; <- 임포트해오는 곳에서
