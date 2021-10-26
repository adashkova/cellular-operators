import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Result, Button } from 'antd';
import Layout from '../../components/Layout';

const NotFoundPage: FC = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  return (
    <Layout>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={handleClick}>
            Back Home
          </Button>
        }
      />
    </Layout>
  );
};

export default NotFoundPage;
