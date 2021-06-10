import { useSelector, useDispatch } from "react-redux";
import { Header, Table } from "./index";
import { useEffect } from "react";
import { fetchLaunch } from "../actions/launch";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLaunch());
  }, [dispatch]);

  const isProgress = useSelector((state) => {
    // console.log(state);
    return state.launch.isProgress;
  });

  return (
    <div className="App">
      <Header />
      {isProgress ? <div>Loading</div> : <Table />}
    </div>
  );
}

export default App;
