import { useEffect, useRef, useState } from "react";
import PocketBase from "pocketbase";
import Header from "./components/Header.jsx";
import Table from "./components/Table.jsx";

function App() {
  const pb = useRef(null);
  const [battles, setBattles] = useState(null);

  useEffect(() => {
    pb.current = new PocketBase("https://api.bricefrisco.com");

    const run = async () => {
      const battles = await pb.current.collection("battles").getList(1, 20, {
        sort: "-startTime",
      });

      console.log(battles);
      setBattles(battles);
    };

    run();
  }, []);

  return (
    <>
      <div>
        <Header />
        {battles && <Table battles={battles} />}
      </div>
    </>
  );
}

export default App;
