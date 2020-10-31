import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { applicationStore } from './redux/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { EpisodesPage } from './pages/EpisodesPage';
import { EpisodeDetailPage } from './pages/EpisodeDetailPage';
function App() {
  return (
   <Provider store={ applicationStore() }>
     <Router>
       <Switch>
         <Route path="/episodes/:season">
           <EpisodesPage></EpisodesPage>
         </Route>
         <Route path="/episode-detail/:id">
           <EpisodeDetailPage></EpisodeDetailPage>
         </Route>
         <Route path="/">
           <HomePage></HomePage>
         </Route>
       </Switch>
     </Router>
   </Provider>
  );
}

export default App;
