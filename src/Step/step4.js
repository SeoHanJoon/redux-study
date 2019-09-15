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

function Step4() {
  return (
    <>
      <h1>Step4. Store 만들기</h1>
      <section>
        <Article>
          <p>
            이제 Reducer까지 다 만들었습니다.<br />
            여기서 생성된 new State를 저장할 Store를 연결하도록 하겠습니다.
          </p>
          <Code>
            import {"{ createStore }"} from 'redux'<br />
            import todoApp from './reducers'<br />
            const store = createStore(todoApp)
          </Code>
        </Article>
        <Article>
          <p>
            짜잔, 연결되었습니다.<br />
            이제 앱에서 맨 처음에 열리는 컴포넌트인 index.js의 {"<App>"}에 연결합니다.
          </p>
          <Code>
            import React from 'react';<br />
            import ReactDOM from 'react-dom';<br />
            import {"{ Provider }"} from 'react-redux'<br />
            import {"{ createStore }"} from 'redux'<br />
            import todoApp from './reducers'<br />
            import './index.css';<br />
            import App from './App';<br />
            import * as serviceWorker from './serviceWorker';<br />
            <br />
            const store = createStore(todoApp)<br />
            <br />
            ReactDOM.render(<br />
              <Depth1>{"<Provider store={store}>"}<br /></Depth1>
                <Depth2>{"<App />"}<br /></Depth2>
              <Depth1>{"</Provider>"}<br /></Depth1>
            , document.getElementById('root'));
          </Code>
        </Article>
      </section>
    </>
  )
}

export default Step4;