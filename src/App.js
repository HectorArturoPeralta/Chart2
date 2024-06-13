import './App.css';
import BarChart from './Charts/BarChart';
import LineChart from './Charts/DoughnutChart';
import DoughnutChart from './Charts/DoughnutChart';
import PieChart from './Charts/PieChart';

function App() {
  return (
    <div className="App">
      <BarChart />
      <DoughnutChart />
      <LineChart />
      <PieChart />
    </div>
  );
}

export default App;
