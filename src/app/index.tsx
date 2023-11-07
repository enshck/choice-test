import { BrowserRouter } from 'react-router-dom';

import { Router } from 'components/router';
import './i18next';

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
