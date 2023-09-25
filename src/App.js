import logo from "./logo.svg";
import "./App.scss";
import Button from "./components/button/Button";
import Card from "./components/carrd/Card";

function App() {
  return (
    <div className="App">
      <section className='section-1 mt-5'>
        <div className="container">
          <div className='row'>
            <div className='col-6 col-sm-6 col-md-6 col-lg-3'>
                <h4>col 1</h4>
            </div>
            <div className='col-6 col-sm-6 col-md-6 col-lg-3'>
                <h4>col 2</h4>
            </div>
            <div className='col-6 col-sm-6 col-md-6 col-lg-3'>
                <h4>col 3</h4>
            </div>
            <div className='col-6 col-sm-6 col-md-6 col-lg-3'>
                <h4>col 4</h4>
            </div>
            <div className='col-6 col-sm-6 col-md-6 col-lg-4'>
                <h4>col 5</h4>
            </div>
            <div className='col-6 col-sm-6 col-md-6 col-lg-4'>
                <h4>col 6</h4>
            </div>
          </div>
        </div>
      </section>

      {/* <hr /> */}

      {/* <Button value="FER201m" />
      <Button value="FER201m" />
      <Button value="FER201m" />
      <Button value="FER201m" /> */}
      {/* <hr /> */}
      {/* <div className="list-card" style={{padding: "30px"}}>
        <Card title="Test" />
        <Card />
        <Card />
        <Card />
        <Card />
      </div> */}
    </div>
  );
}

export default App;
