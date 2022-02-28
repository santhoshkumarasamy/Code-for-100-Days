import './App.css';
import BirthdayRemainder from './Components/Birthday Remainder/BirthdayRemainder'
import Footer from './Components/Birthday Remainder/Footer'
import FindTours from './Components/Find Tours/FindTours'
import Random from './Components/Random Person/Random'
import Review from './Components/Reviews/Review';
function App() {
  return (
    <div className="App">
     {/* <BirthdayRemainder /> */}
     {/* <FindTours /> */}
     {/* <Random /> */}
     <Review />
     <Footer />
    </div>
  );
}

export default App;
