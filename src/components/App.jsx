import Phonebook from './Phonebook';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <Phonebook />
    </div>
  );
};
