import { useState, FC } from 'react';
import { Link } from 'react-router-dom';
import { Row, Button, Col } from 'antd';
import { IOperatorsState } from '../../interfaces';
import Layout from '../../components/Layout';
import styled from 'styled-components';

const StyledRow = styled(Row)`
  background-color: #2e2d2d;
  border-radius: 3px;
  padding: 15px;
  margin: 15px;
`;

const StyledButton = styled(Button)`
  border: none;
  background-color: #2e2d2d;
  width: 40%;
  :hover {
    color: #fff;
    background-color: #202020;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  font-size: 1rem;
  :hover {
    color: #1269ec;
  }
`;

const HomePage: FC = () => {
  const initialState = {
    isAllShown: false,
    lengthOfListOperators: 3,
    items: ['MTS', 'Tele2', 'Megafon', 'Rostelecom', 'Beeline', 'Yota'],
  };

  const [mobileOperators, setMobileOperators] =
    useState<IOperatorsState>(initialState);

  const handleClick = () => {
    const lengthOfList = mobileOperators.items.length;

    setMobileOperators({
      ...mobileOperators,
      isAllShown: true,
      lengthOfListOperators: lengthOfList,
    });
  };

  return (
    <Layout>
      <Row justify="center">
        <Col span={12}>
          {mobileOperators.items
            .slice(0, mobileOperators.lengthOfListOperators)
            .map((operator, idx) => (
              <StyledRow key={idx} justify="center">
                <Row>
                  <StyledLink to={`/payment/${operator.toLowerCase()}`}>
                    {operator}
                  </StyledLink>
                </Row>
              </StyledRow>
            ))}

          {!mobileOperators.isAllShown && (
            <Row justify="center">
              <StyledButton type="primary" onClick={handleClick}>
                More...
              </StyledButton>
            </Row>
          )}
        </Col>
      </Row>
    </Layout>
  );
};

export default HomePage;
