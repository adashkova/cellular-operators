import { useState, FC } from 'react';
import { Link } from 'react-router-dom';
import { Row, Button } from 'antd';
import styled from 'styled-components';

interface IOperatorsState {
  isAllShown: boolean;
  lengthOfListOperators: number;
  items: string[];
}

const HomePage: FC = () => {
  const initialState = {
    isAllShown: false,
    lengthOfListOperators: 3,
    items: ['MTS', 'Tele2', 'Megafon', 'Rostelecom', 'Beeline', 'Yota'],
  };

  const [mobileOperators, setMobileOperators] =
    useState<IOperatorsState>(initialState);

  const handleClick = () => {
    const lengthOflist = mobileOperators.items.length;
    setMobileOperators({
      ...mobileOperators,
      isAllShown: true,
      lengthOfListOperators: lengthOflist,
    });
  };

  return (
    <>
      <Row justify="center" align="middle">
        {mobileOperators.items
          .slice(0, mobileOperators.lengthOfListOperators)
          .map((oper, idx) => {
            return (
              <StyledRow key={idx} justify="center" align="middle">
                <Row>
                  <StyledLink to={`/payment/${oper.toLowerCase()}`}>
                    {oper}
                  </StyledLink>
                </Row>
              </StyledRow>
            );
          })}

        {!mobileOperators.isAllShown && (
          <StyledRow justify="center" align="middle">
            <Row>
              <StyledButton onClick={handleClick}>More... </StyledButton>
            </Row>
          </StyledRow>
        )}
      </Row>
    </>
  );
};

const StyledRow = styled(Row)`
  width: 100%;
  background-color: #2e2d2d;
  border-radius: 3px;
  padding: 15px;
  margin: 15px;
`;

const StyledButton = styled(Button)`
  background-color: #2e2d2d;
  color: #fff;
  :hover {
    border: 1px #fff solid;
    color: #2e2d2d;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  font-size: 1rem;
  :hover {
    color: #d2f2f3;
    border: 1px solid #dbd9d9;
    box-shadow: 5px 5px 5px -5px rgba(246, 249, 251, 0.6);
    padding: 5px 10px;
    border-radius: 3px;
  }
`;

export default HomePage;
