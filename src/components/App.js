import { useSelector, useDispatch } from "react-redux";
import { Header, Table } from "./index";
import { useEffect, useMemo } from "react";
import { fetchLaunch } from "../actions/launch";
import { COLUMNS } from "./columns";
import LoadingState from "./LoadingState";
import "../loadingState.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLaunch());
  }, [dispatch]);
  const launch = useSelector((state) => state.launch.launch);
  const isProgress = useSelector((state) => state.launch.isProgress);
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => launch, [launch]);

  return (
    <div className="App">
      <Header />
      {isProgress ? <LoadingState /> : <Table columns={columns} data={data} />}
    </div>
  );
}

export default App;
