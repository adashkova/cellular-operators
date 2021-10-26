import { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import NotFoundPage from '../../pages/NotFoundPage';
import OperatorPage from '../../pages/OperatorPage';
import ResultPage from '../../pages/ResultPage';

const App: FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/payment/:name" component={OperatorPage} />
      <Route exact path="/result" component={ResultPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default App;
