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
const Depth3 = styled.p`
  margin: 0;
  text-indent: 90px;
`;
const Depth4 = styled.p`
  margin: 0;
  text-indent: 120px;
`;
const Depth5 = styled.p`
  margin: 0;
  text-indent: 150px;
`;
const Depth6 = styled.p`
  margin: 0;
  text-indent: 180px;
`;
const Depth7 = styled.p`
  margin: 0;
  text-indent: 210px;
`;

function Step3() {
  return (
    <>
      <h1>Step3. Reducer 만들기 #2</h1>
      <section>
        <Article>
          <p>
            기본적인 구조가 갖추어진 Reducer에 필터 기능을 추가하도록 하겠습니다.
          </p>
          <Code>
            import {"{"}<br />
              <Depth1>SET_VISIBILITY_FILTER,</Depth1>
              <Depth1>VisibilityFilters</Depth1>
            {"}"} from './action.js'
            <p>&nbsp;</p>
            const initialState = {"{"}
              <Depth1>visibilityFilter: VisibilityFilters.SHOW_ALL,</Depth1>
              <Depth1>todos: []</Depth1>
            {"}"}
            <p>&nbsp;</p>
            function todoApp ( state = initialState , action ) {"{"}
              <Depth1>switch( action.type ) {"{"}</Depth1>
                <Depth2>case SET_VISIBILITY_FILTER:</Depth2>
                  <Depth3>return Object.assign({"{}"}, state, {"{"}</Depth3>
                    <Depth4>visibilityFilter: action.filter</Depth4>
                  <Depth3>})</Depth3>
                <Depth2>default:</Depth2>
                  <Depth3>return state;</Depth3>
              <Depth1>{"}"}</Depth1>
            {"}"}
          </Code>
        </Article>
        <Article>
          <p>
            이어서 다른 Action에 대해서도 new State를 만들 수 있도록 작성합니다.
          </p>
          <Code>
            import {"{"}<br />
              <Depth1>ADD_TODO,</Depth1>
              <Depth1>TOGGLE_TODO,</Depth1>
              <Depth1>SET_VISIBILITY_FILTER,</Depth1>
              <Depth1>VisibilityFilters</Depth1>
            {"}"} from './action.js'
            <p>&nbsp;</p>
            const initialState = {"{"}
              <Depth1>visibilityFilter: VisibilityFilters.SHOW_ALL,</Depth1>
              <Depth1>todos: []</Depth1>
            {"}"}
            <p>&nbsp;</p>
            function todoApp ( state = initialState , action ) {"{"}
              <Depth1>switch( action.type ) {"{"}</Depth1>
                <Depth2>case SET_VISIBILITY_FILTER:</Depth2>
                  <Depth3>return Object.assign({"{}"}, state, {"{"}</Depth3>
                    <Depth4>visibilityFilter: action.filter</Depth4>
                  <Depth3>})</Depth3>
                <Depth2>case ADD_TODO:</Depth2>
                  <Depth3>return Object.assign({"{}"}, state, {"{"}</Depth3>
                    <Depth4>todos: [</Depth4>
                      <Depth5>...state.todos,</Depth5>
                      <Depth5>{"{"}</Depth5>
                        <Depth6>text: action.text,</Depth6>
                        <Depth6>completed: false</Depth6>
                      <Depth5>{"}"}</Depth5>
                    <Depth4>]</Depth4>
                  <Depth3>})</Depth3>
                <Depth2>case TOGGLE_TODO:</Depth2>
                  <Depth3>return Object.assign({"{}"}, state, {"{"}</Depth3>
                    <Depth4>todos: state.todos.map((todo, index) => {"{"}</Depth4>
                      <Depth5>if( index === action.index ) {"{"}</Depth5>
                        <Depth6>return Object.assign({"{}"}, todo, {"{"}</Depth6>
                          <Depth7>completed: !todo.completed</Depth7>
                        <Depth6>})</Depth6>
                      <Depth5>}</Depth5>
                      <Depth5>return todo</Depth5>
                    <Depth4>})</Depth4>
                  <Depth3>})</Depth3>
                <Depth2>default:</Depth2>
                  <Depth3>return state;</Depth3>
              <Depth1>{"}"}</Depth1>
            {"}"}
          </Code>
        </Article>
        <Article>
          <p>
            하나의 함수에 모든 기능이 다 있으니 복잡해졌습니다.<br />
            todo의 관리와 필터 기능을 분리하고 정리도 해보도록 하겠습니다.
          </p>
          <Code>
            import {"{"}<br />
              <Depth1>ADD_TODO,</Depth1>
              <Depth1>TOGGLE_TODO,</Depth1>
              <Depth1>SET_VISIBILITY_FILTER,</Depth1>
              <Depth1>VisibilityFilters</Depth1>
            {"}"} from './action.js'
            <p>&nbsp;</p>
            const {"{ SHOW_ALL }"} = VisibilityFilters;
            <p>&nbsp;</p>
            function todos ( state = [] , action ) {"{"}
              <Depth1>switch( action.type ) {"{"}</Depth1>
                <Depth2>case ADD_TODO:</Depth2>
                  <Depth3>return Object.assign({"{}"}, state, {"{"}</Depth3>
                    <Depth4>todos: [</Depth4>
                      <Depth5>...state.todos,</Depth5>
                      <Depth5>{"{"}</Depth5>
                        <Depth6>text: action.text,</Depth6>
                        <Depth6>completed: false</Depth6>
                      <Depth5>{"}"}</Depth5>
                    <Depth4>]</Depth4>
                  <Depth3>})</Depth3>
                <Depth2>case TOGGLE_TODO:</Depth2>
                  <Depth3>return Object.assign({"{}"}, state, {"{"}</Depth3>
                    <Depth4>todos: state.todos.map((todo, index) => {"{"}</Depth4>
                      <Depth5>if( index === action.index ) {"{"}</Depth5>
                        <Depth6>return Object.assign({"{}"}, todo, {"{"}</Depth6>
                          <Depth7>completed: !todo.completed</Depth7>
                        <Depth6>})</Depth6>
                      <Depth5>}</Depth5>
                      <Depth5>return todo</Depth5>
                    <Depth4>})</Depth4>
                  <Depth3>})</Depth3>
                <Depth2>default:</Depth2>
                  <Depth3>return state;</Depth3>
              <Depth1>{"}"}</Depth1>
            {"}"}
            <p>&nbsp;</p>
            function visibilityFilter ( state = SHOW_ALL , action ) {"{"}
              <Depth1>switch( action.type ) {"{"}</Depth1>
                <Depth2>case SET_VISIBILITY_FILTER:</Depth2>
                  <Depth3>return Object.assign({"{}"}, state, {"{"}</Depth3>
                    <Depth4>visibilityFilter: action.filter</Depth4>
                  <Depth3>})</Depth3>
                <Depth2>default:</Depth2>
                  <Depth3>return state;</Depth3>
              <Depth1>{"}"}</Depth1>
            {"}"}
            <p>&nbsp;</p>
            function todoApp(state = {"{}"}, action) {"{"}
              <Depth1>return {"{"}</Depth1>
                <Depth2>visibilityFilter: visibilityFilter(state.visibilityFilter, action),</Depth2>
                <Depth2>todos: todos(state.todos, action)</Depth2>
              <Depth1>}</Depth1>
            }
          </Code>
        </Article>
        <Article>
          <p>
            분리 및 정리가 완료되었습니다.<br />
            combineReducers를 통해 Reducer를 묶어주고, 한 번 더 정리해보겠습니다.
          </p>
          <Code>
            import {"{ combineReducers }"} from 'redux'<br />
            import {"{"}<br />
              <Depth1>ADD_TODO,</Depth1>
              <Depth1>TOGGLE_TODO,</Depth1>
              <Depth1>SET_VISIBILITY_FILTER,</Depth1>
              <Depth1>VisibilityFilters</Depth1>
            {"}"} from './action.js'
            <p>&nbsp;</p>
            const {"{ SHOW_ALL }"} = VisibilityFilters;
            <p>&nbsp;</p>
            function todos ( state = [] , action ) {"{"}
              <Depth1>switch( action.type ) {"{"}</Depth1>
                <Depth2>case ADD_TODO:</Depth2>
                  <Depth3>return [</Depth3>
                    <Depth4>...state,</Depth4>
                    <Depth4>{"{"}</Depth4>
                      <Depth5>text: action.text,</Depth5>
                      <Depth5>completed: false</Depth5>
                    <Depth4>{"}"}</Depth4>
                  <Depth3>]</Depth3>
                <Depth2>case TOGGLE_TODO:</Depth2>
                  <Depth3>return state.map((todo, index) => {"{"}</Depth3>
                    <Depth4>if( index === action.index ) {"{"}</Depth4>
                      <Depth5>return Object.assign({"{}"}, todo, {"{"}</Depth5>
                        <Depth6>completed: !todo.completed</Depth6>
                      <Depth5>})</Depth5>
                    <Depth4>}</Depth4>
                    <Depth4>return todo</Depth4>
                  <Depth3>})</Depth3>
                <Depth2>default:</Depth2>
                  <Depth3>return state;</Depth3>
              <Depth1>{"}"}</Depth1>
            {"}"}
            <p>&nbsp;</p>
            function visibilityFilter ( state = SHOW_ALL , action ) {"{"}
              <Depth1>switch( action.type ) {"{"}</Depth1>
                <Depth2>case SET_VISIBILITY_FILTER:</Depth2>
                  <Depth3>return action.filter</Depth3>
                <Depth2>default:</Depth2>
                  <Depth3>return state;</Depth3>
              <Depth1>{"}"}</Depth1>
            {"}"}
            <p>&nbsp;</p>
            const todoApp = combineReducers({"{"}
              <Depth1>todos,</Depth1>
              <Depth1>visibilityFilter</Depth1>
            })
            <p>&nbsp;</p>
            export default todoApp;
          </Code>
        </Article>
      </section>
    </>
  )
}

export default Step3;