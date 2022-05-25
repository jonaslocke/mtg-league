import { FC, useState } from "react";
import { FontVariants } from "../src/types";
import Typography from "../src/components/Typography";
import { LeagueModel } from "../src/types";
import { useEffect } from "react";

const Dashboard: FC = () => {
  const [leagues, setLeagues] = useState<LeagueModel[]>([]);
  const fetchLeagues = async () => {
    const api = "/api/leagues";
    const response = await fetch(`${api}`);
    const { data } = await response.json();
    setLeagues(data);
  };

  useEffect(() => {
    fetchLeagues();
  }, []);

  return (
    <div className="pxy-20-10">
      <Typography variant={FontVariants.HEADING_1}>Current Leagues</Typography>
      {leagues.map(({ leagueName, id }) => (
        <div key={id}>{leagueName}</div>
      ))}
    </div>
  );
};

export default Dashboard;
