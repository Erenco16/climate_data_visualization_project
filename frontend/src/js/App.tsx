import React from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import {PowerBIEmbed} from "powerbi-client-react";
import PowerBIReport from "./components/PowerBIReport";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <p>The graph below is the embedded one.</p>
          <div className="power_bi_graph">
              <iframe title="test_dashboard" width="600" height="373.5"
                      src="https://app.powerbi.com/view?r=eyJrIjoiNzY5NGIzNzAtMTdkNy00NGY4LThmMGQtYTliMjJjOGZiYzAwIiwidCI6Ijg1NjAyOTA4LWUxNWItNDNiYS05MTQ4LTM4YmM3NzNhODE2ZSIsImMiOjl9"
                      frameBorder="0" allowFullScreen={true}></iframe>
          </div>
          <p>The one below is through the rest api</p>
          <PowerBIReport />
      </header>
    </div>
  );
}

export default App;
