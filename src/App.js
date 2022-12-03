
import './App.css';
import FormProvider from './contexts/Form';
import ShopProvider from './contexts/Shop';
import Router from './routes';


function App() {
  return (
    <ShopProvider>
    <FormProvider>
    <Router />
    </FormProvider>
    </ShopProvider>
    
  );
}

export default App;
