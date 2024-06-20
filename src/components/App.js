import logo from "../logo.svg";
import "../App.css";
import ButtonComponents from "./ButtonComponents";
import PostList from "./PostList";
import SelectedPost from "./SelectedPost";

function App() {
  return (
    <div className="App container">
      <h2>Home</h2>
      <ButtonComponents />
      <br />
      <br />
      <div className="row justify-content-center">
        <div className="col-12 col-md-4">
          <SelectedPost />
        </div>
        <div className="col-12 col-md-4">
          <PostList />
        </div>
      </div>
    </div>
  );
}

export default App;
