import logo from "./logo.svg";
import "./App.scss";
import Button from "./components/button/Button";
import Card from "./components/carrd/Card";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row g-4  ">
          <div className="col-md-2 col-sm-6">
            <Button value="Problem Solving" />
          </div>
          <div className="col-md-2 col-sm-6">
            <Button value="Live Chat" />
          </div>
          <div className="col-md-2 col-sm-6">
            <Button value="Group Reading" />
          </div>
          <div className="col-md-2 col-sm-6">
            <Button value="!0k Course" />
          </div>
          <div className="col-md-2 ">
            <Button value="Hand-on Active" />
          </div>
        </div>
        <div className="container">
          <div className="row g-5 ">
            <div className="col-md-4 col-sm-6">
              <Card />
            </div>
            <div className="col-md-4 col-sm-6">
              <Card />
            </div>
            <div className="col-md-4 col-sm-6">
              <Card />
            </div>
            <div className="col-md-4 col-sm-6">
              <Card />
            </div>
            <div className="col-md-4 col-sm-6">
              <Card />
            </div>
            <div className="col-md-4 col-sm-6">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
