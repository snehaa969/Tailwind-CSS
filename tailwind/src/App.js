import './App.css';
import { Footer, Header } from './components';
import { ALLRoutes } from './routes/ALLRoutes';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <ALLRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
