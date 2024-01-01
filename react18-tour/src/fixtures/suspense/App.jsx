import App1 from './App1/App'
import App2 from './App2'
import App3 from './App3'
const App = () => {
  return (
    <>
      <h3>base</h3>
      <App1/>
      <h3>Suspense</h3>
      <App2/>
      <h3>基本原理</h3>
      <App3/>
    </>
  );
};

export default App
