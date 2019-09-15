import React from 'react';
import styled from 'styled-components'

const Article = styled.article`
  padding: 100px 0;
  font-size: 25px;
`;
const Code = styled.div`
  display:inline-block;
  padding: 20px 80px 20px 40px;
  line-height: 1.8em;
  background-color: #eee;
`;
const Depth1 = styled.p`
  margin: 0;
  text-indent: 30px;
`;

function Step2() {
  return (
    <>
      <h1>Step2. Reducer 만들기 #1</h1>
      <section>
        <Article>
          <p>
            Reducer는 각 Action에 맞추어 Store의 oldState를 합쳐주는 일을 진행합니다.<br />
            Reducer가 작동하기 위한 최소한의 기본 구조를 작성하도록 합니다.<br /><br />
            action.js에서 만든 변수들을 가져옵니다.
          </p>
          <Code>
            import {"{"} VisibilityFilters {"}"} from './action.js'
          </Code>
          <p>
            맨 처음에는 발행된 Action이 없기 때문에 Store에 저장할 기본값을 만들어 줍니다. 
          </p>
          <Code>
            const initialState = {"{"}
              <Depth1>visibilityFilter: VisibilityFilters.SHOW_ALL,</Depth1>
              <Depth1>todos: []</Depth1>
            {"}"}
          </Code>
          <p>
            그리고 Reducer가 실행되면 Action의 식별자에 맞추어서 new State를 만들 함수를 정의합니다.
          </p>
          <Code>
            function todoApp ( state = initialState , action ) {"{"}
              <Depth1>return state;</Depth1>
            {"}"}
          </Code>
          <p>완성된 코드는 아래와 같습니다.</p>
          <Code>
            import {"{"} VisibilityFilters {"}"} from './action.js'
            <p>&nbsp;</p>
            const initialState = {"{"}
              <Depth1>visibilityFilter: VisibilityFilters.SHOW_ALL,</Depth1>
              <Depth1>todos: []</Depth1>
            {"}"}
            <p>&nbsp;</p>
            function todoApp ( state = initialState , action ) {"{"}
              <Depth1>return state;</Depth1>
            {"}"}
          </Code>
        </Article>
      </section>
    </>
  )
}

export default Step2;