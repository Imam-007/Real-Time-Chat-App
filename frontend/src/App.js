import "./App.css";
// import Homepage from "./Pages/Homepage";
import Homepage from "./page/Homepage";
import { Route } from "react-router-dom";
// import Chatpage from "./Pages/Chatpage";
import Chatpage from "./page/Chatpage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
    </div>
  );
}

export default App;
