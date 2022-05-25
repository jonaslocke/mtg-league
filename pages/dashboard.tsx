import { FC, useState } from "react";
import { FontVariants } from "../src/types";
import Typography from "../src/components/Typography";
import { LeagueModel } from "../src/types";
import { useEffect } from "react";
import LeagueCard from "../src/components/LeagueCard";

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
    <div className="container">
      <Typography variant={FontVariants.HEADING_1}>Current Leagues</Typography>
      <div className="leagues-grid mt-8">
        {leagues.map(({ leagueName, id, start_date, end_date, format }) => (
          <LeagueCard
            id={id}
            leagueName={leagueName}
            end_date={end_date}
            start_date={start_date}
            format={format}
            key={id}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
