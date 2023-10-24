import AppLayout from './layouts';
import myAxios from './urlAPI';
import axios from 'axios';

function App() {
  myAxios.get('/api/category')
  .then(res => {
    console.log(res.data)
  })
  .catch(error => {
    // Handle errors
  });
  return (
    <AppLayout/>
  );
}

export default App;
