import Cookbook from "./cookbook";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/cookbook/*"
                   element={<Cookbook/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}
export default App;