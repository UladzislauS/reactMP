import styled from 'styled-components';

const SearchBarContainer = styled.div`
  margin: 10px 0;
`;


const SearchBarControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchBarLabel = styled.label`
  display: inline-block;
  font-size: 1.1em;
  margin: 15px 0;
  font-weight: 600;
`;

export {
    SearchBarContainer,
    SearchBarControls,
    SearchBarLabel
};