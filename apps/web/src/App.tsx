import { WELCOME_MESSAGE } from '@learning/shared';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '2rem',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1>{WELCOME_MESSAGE}</h1>
    </div>
  );
}

export default App;
