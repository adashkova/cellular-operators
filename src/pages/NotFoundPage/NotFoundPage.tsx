import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Result, Button } from 'antd';

const NotFoundPage: FC = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  return (
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
  );
};

export default NotFoundPage;
