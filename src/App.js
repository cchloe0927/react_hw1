import React from 'react';
//App.js에서 Weeks를 호출해오기 //./는 내가 현재있는 경로에서 ~ //.js는 생략해도 됨!
import "./style.css";
import Weeks from './Weeks';
import StarPage from './StarPage';
import {Route, Switch} from "react-router-dom";
import NotFound from './NotFound';


//힘수형 컴포넌트 함수선언식
function App() {

  return (
    <div className="App">
      <div className='container'>
       
        <Switch>

          <Route path="/" exact> {/* exact: 같지 않으면 포함하지 않는다 -> "/" !== "/StarPage/" */}
            <h3>내 일주일은?</h3>
            <Weeks />            {/* useParms를 사용한 방법(children) */}
          </Route>

          <Route path="/Starpage/:week_name">  {/* :변수명 -> 동적 라우팅 */}
            <StarPage />         {/* useParms를 사용한 방법 */}
          </Route>

          <Route component={NotFound}>  {/* component속성을 바로 남겨주는 방법(props에 많은 정보가 넘어감) ->  */}
            {/* <NotFound /> */}
          </Route> 

        </Switch>
        
      </div>
    </div>
  );
}

export default App;