import styled from 'styled-components';

const InputContainer = styled.div`
  width: 100%;
  display: inline-block;
  position: relative;
  margin: 10px 0;

  &:after {
    content: '⤶';
    display: block;
    position: absolute;
    right: 10px;
    line-height: 50px;
    top: 0px;
    font-size: 1.5rem;
    color: #b3b2b2;
  }
`;

const Input = styled.input`
  width: calc(100% - 40px);
  padding: 0 20px;
  height: 50px;
  line-height: 50px;
  background: #000;
  border: none;
  font-size: 1.05rem;
  color: #b3b2b2;

  &:focus {
    border: none;
    outline: none;
    border-bottom: 2px solid #e50914;
  }
`;

export {
    InputContainer,
    Input
}