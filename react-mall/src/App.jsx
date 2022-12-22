import React from 'react';
import Routes from './routes/index';
import { IconStyle } from './assets/iconfont/iconfont';
import { Provider } from 'react-redux';
import store from './store';
import { GlobalStyle } from './style';

// function App() {
//   const routes = useRoutes(routes);
//   return routes;
// }

const App = () => {
  return (
      <Provider store={store}>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        <Routes></Routes>
      </Provider>
  );
}
export default App;
