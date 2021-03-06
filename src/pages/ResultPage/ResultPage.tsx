import { FC } from 'react';
import { Result, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { SmileOutlined } from '@ant-design/icons';
import Layout from '../../components/Layout';

const ResultPage: FC = () => {
  const history = useHistory();

  const handleClick = (): void => {
    history.push('/');
  };

  return (
    <Layout>
      <Result
        icon={<SmileOutlined />}
        title="Great, we have done payment succesfully!"
        extra={
          <Button type="primary" onClick={handleClick}>
            Back Home
          </Button>
        }
      />
    </Layout>
  );
};

export default ResultPage;
