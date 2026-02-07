import './App.css';
import {ArticlesList} from './ArticlesList.jsx'
import {Timer} from './Timer.jsx'

export const App = () => {
  return (
    <div className="App">
      <Timer />
        <ArticlesList />
    </div>
  );
}
