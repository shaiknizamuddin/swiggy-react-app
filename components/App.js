import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";

const AppLayout = () => (
  <div className="main-app">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
