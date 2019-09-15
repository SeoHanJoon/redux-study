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

function Step5() {
  return (
    <>
      <h1>Step5. 컴포넌트 만들기</h1>
      <section>
        <Article>
          <p>
            이제 Reducer까지 다 만들었습니다.<br />
            이제 그냥 컨테이너와 컴포넌트를 만들면 됩니다!<br />
            아래 링크를 통해 공식 문서에서 제공하는 가이드에 맞춰 작성하시면 됩니다.
          </p>
          <Code>
            <a href="https://redux.js.org/basics/usage-with-react">https://redux.js.org/basics/usage-with-react</a>
          </Code>
        </Article>
      </section>
    </>
  )
}

export default Step5;