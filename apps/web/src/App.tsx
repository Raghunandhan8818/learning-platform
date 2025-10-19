import { WELCOME_MESSAGE } from '@learning/shared';
import { TamaguiProvider } from '@tamagui/core';
import { config } from '@learning/shared';
import { Button } from 'tamagui';

function App() {
  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          fontSize: '2rem',
          fontFamily: 'Arial, sans-serif',
          gap: '20px',
          padding: '20px',
          backgroundColor: '#f0f0f0',
        }}
      >
        <h1 style={{ color: '#333' }}>{WELCOME_MESSAGE}</h1>
        <Button theme="blue">Hello world</Button>
      </div>
    </TamaguiProvider>
  );
}

export default App;
