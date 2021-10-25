import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from 'antd';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import FillForm from '../../components/FillForm';

const { Title } = Typography;

const OperatorPage: FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <>
      <StyledRow align="middle" justify="center">
        <Col span={24}>
          <Title level={3}>Operator: {name.toUpperCase()}</Title>
        </Col>
        <Col span={24}>
          <FillForm />
        </Col>
      </StyledRow>
    </>
  );
};

const StyledRow = styled(Row)`
  padding: 15px;
  margin: 10px;
  flex-direction: column;
`;

export default OperatorPage;
