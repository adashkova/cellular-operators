import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Row, Col } from 'antd';
import FillForm from '../../components/FillForm';
import Layout from '../../components/Layout';

const { Title } = Typography;

const OperatorPage: FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <Layout>
      <Row justify="center">
        <Col span={24}>
          <Row justify="center">
            <Title level={3}>Operator: {name.toUpperCase()}</Title>
          </Row>
        </Col>

        <Col span={24}>
          <Row justify="center">
            <FillForm />
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export default OperatorPage;
