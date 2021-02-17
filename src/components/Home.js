import React from "react";
import styled from "styled-components";
import LazyLoad from "react-lazyload";

function Home() {
  return (
    <Wrapper>
      <div className="title">Welcome to my Blog!</div>
      <section>
        <p>
          Hi, My Name is Vibhu and this is my Technology and Data Science Blog
        </p>
        <LazyLoad>
          <img
            width="100%"
            alt="Google collab,.NET,React,Flutter,Angular,Blazor,etc."
            src="https://raw.githubusercontent.com/vibhupuri/blog/main/header%20(1).png"
          />
        </LazyLoad>
      </section>
<p><a href="https://stackoverflow.com/users/4589611/vibhu">Stackoverflow</a><pre> | <a href="https://github.com/search?q=commenter%3Avibhupuri">Github</a></pre></p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: calc(100vh - 50px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  div.title {
    font-size: 30px;
    font-weight: bold;
  }
  section {
    p {
      font-size: 20px;
    }
  }
`;

export default Home;
