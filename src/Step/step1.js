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

function Step1() {
  return (
    <>
      <h1>Step1. Action 만들기</h1>
      <section>
        <Article>
          <p>Todo List를 만들기 위해서 필요한 기능을 정의합니다.</p>
          <ol>
            <li>Todo 항목 추가하기</li>
            <li>추가된 Todo 항목을 완료시키거나 다시 활성화하기</li>
            <li>화면에 특정 Todo들만 보여주기</li>
          </ol>
          <br />
          <p>
            위와 같이 정의할 경우, Action은 총 3개가 필요합니다.<br />
            action.js를 생성하여 아래와 같이 Action의 식별자를 변수로 만들어줍니다.
          </p>
          <Code>
            export const ADD_TODO = 'ADD_TODO';<br />
            export const TOGGLE_TODO = 'TOGGLE_TODO';<br />
            export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
          </Code>
          <br /><br /><br /><br /><br /><br />
          <p>
            기능 정의 3번에서 '특정 Todo들만 보여주기'로 하였습니다. 특정 Todo에는 [ 모두 / 진행중 / 완료 ]로 구분할 수 있습니다.<br />
            action.js에 아래와 같이 필터 타입을 변수로 만들어줍니다.
          </p>
          <Code>
            export const VisibilityFilters = {"{"}
              <Depth1>SHOW_ALL : 'SHOW_ALL',</Depth1>
              <Depth1>SHOW_COMPLETED : 'SHOW_COMPLETED',</Depth1>
              <Depth1>SHOW_ACTIVE : 'SHOW_ACTIVE'</Depth1>
            {"}"}
          </Code>
          <br /><br /><br /><br /><br /><br />
          <p>Action에서 사용될 공통 변수들이 작성 완료되었습니다.</p>
          <p>이제 Action을 자동적으로 만들어낼 함수인 Action Creator를 만들어 줍니다.</p>
          <Code>
            export function addTodo(text) {"{"}
              <Depth1>return {"{"} type: ADD_TODO, text {"}"}</Depth1>
            {"}"}<br />
            export function toggleTodo(index) {"{"}
              <Depth1>return {"{"} type: TOGGLE_TODO, index {"}"}</Depth1>
            {"}"}<br />
            export function setVisibilityFilter(filter) {"{"}
              <Depth1>return {"{"} type: SET_VISIBILITY_FILTER, filter {"}"}</Depth1>
            {"}"}
          </Code>
        </Article>
      </section>
    </>
  )
}

export default Step1;