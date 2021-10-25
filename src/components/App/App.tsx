import { FC } from 'react';
import { Layout } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from '../../pages/HomePage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import OperatorPage from '../../pages/OperatorPage';
import ResultPage from '../../pages/ResultPage';

const { Header, Content } = Layout;

const App: FC = () => {
  return (
    <Router>
      <StyledLayout>
        <StyledHeader>
          <Link to="/">
            <HomeOutlined /> Telecom
          </Link>
        </StyledHeader>
        <StyledContent>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/payment/:name" component={OperatorPage} />
            <Route exact path="/result" component={ResultPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </StyledContent>
      </StyledLayout>
    </Router>
  );
};

const StyledLayout = styled(Layout)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const StyledContent = styled(Content)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledHeader = styled(Header)`
  width: 100vw;
  background-color: #2e2d2d;
  font-size: 1.3rem;
  color: #fff;
`;

export default App;
