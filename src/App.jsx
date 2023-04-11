import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [deniz, setDeniz] = useState(0);
  const [muge, setMuge] = useState(0);
  useEffect(() => {
    console.log("İlk kez renderda çalışır sonra çalışmaz.");
  }, []);
  useEffect(() => {
    console.log("her işlemde çalışır");
  });
  useEffect(() => {
    console.log("sadece deniz ile ilgili işlemde çalışır");
  }, [deniz]);
  useEffect(() => {
    console.log("sadece müge ile ilgili işlemde çalışır");
  }, [muge]);
  useEffect(() => {
    console.log("hem deniz hem müge ile ilgili işlemde çalışır");
  }, [deniz, muge]);

  const resetValue = () => {
    setDeniz(0);
    setMuge(0);
  };
  return (
    <div className="App">
      <h1>Use Effect Test // Console</h1>
      <div className="card">
        <button onClick={() => setDeniz(deniz + 1)}>Deniz ++</button>
        <p>Deniz : {deniz}</p>
      </div>
      <div className="card">
        <button onClick={() => setMuge(muge + 1)}>Müge ++</button>
        <p>Müge : {muge}</p>
      </div>
      <div className="card">
        <button onClick={resetValue}>Sıfırla</button>
      </div>
    </div>
  );
}

export default App;
