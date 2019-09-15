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
const Depth2 = styled.p`
  margin: 0;
  text-indent: 60px;
`;

function Step0() {
  return (
    <>
      <h1>Redux Tutorial</h1>
      <section>
        <Article>
          <h2>Action</h2>
          <p>
            Action이란, Store에 정보를 전달하기 위한 데이터 묶음으로<br />
            이벤트를 구분할 수 있는 식별자와 해당 이벤트의 실행에 필요한 값을 함께 가지고 있는 객체입니다.<br />
          </p>
          <Code>
            {"{"}<br />
              <Depth1>type: "식별자",</Depth1>
              <Depth1>payload: "값"</Depth1>
            {"}"}
          </Code>
        </Article>
        <Article>
          <h2>Action Creator</h2>
          <p>
            Action Creator란, Action을 생성해주는 함수이며 그게 전부입니다.<br />
          </p>
          <Code>
            function AddTodo(){"{"}<br />
              <Depth1>return {"{"}</Depth1>
                <Depth2>type: "식별자",</Depth2>
                <Depth2>payload: "값"</Depth2>
              <Depth1>{"}"}</Depth1>
            {"}"}
          </Code>
        </Article>
        <Article>
          <h2>Dispatch</h2>
          <p>
            Dispatch란, Component와 Store를 감시하며 값을 전달하는 역할을 합니다.<br />
            Component에서 Action이 발행되면, 감시하고 있던 Dispatch가 Action을 Reducer로 전달합니다.<br />
            Store에서 값이 변경되면, 감시하고 있던 Dispatch가 new State를 Component로 전달합니다.
          </p>
        </Article>
        <Article>
          <h2>Reducer</h2>
          <p>
            Reducer란, 각 Action에 맞추어 어떻게 상태를 변화시킬지 관리하는 함수입니다.<br />
            Dispatch를 통해 전달된 Action과 기존 Store에 저장된 old State 객체를 합쳐서 new State 객체를 생성합니다.<br />
            이 때, 생성된 new State 객체는 Store에 저장됩니다.
          </p>
        </Article>
        <Article>
          <h2>Store</h2>
          <p>Store란, 이 앱의 전체 상태를 저장하고 있는 저장소입니다.</p>
        </Article>
      </section>
    </>
  )
}

export default Step0;