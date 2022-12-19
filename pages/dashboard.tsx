import { FC, useState } from "react";
import { FontVariants } from "../src/types";
import Typography from "../src/components/Typography";
import { LeaderboardModel } from "../src/types";
import { useEffect } from "react";
import LeagueCard from "../src/components/LeagueCard";

const Dashboard: FC = () => {
  const [leagues, setLeagues] = useState<LeaderboardModel[]>([]);
  const fetchLeagues = async () => {
    const api = "/api/leagues";
    const response = await fetch(`${api}`);
    const { data } = await response.json();
    console.log(data);
    setLeagues(data);
  };

  useEffect(() => {
    fetchLeagues();
  }, []);

  return (
    <div className="container">
      <Typography variant={FontVariants.HEADING_1}>Current Leagues</Typography>
      <div className="leagues-grid mt-8">
        {leagues
          .filter(({ deletedOn }) => !deletedOn)
          .map(
            ({
              leagueName,
              id,
              start,
              end,
              format,
              createdAt,
              image,
              deletedOn,
            }) => (
              <LeagueCard
                id={id}
                leagueName={leagueName}
                end={end}
                start={start}
                format={format}
                createdAt={createdAt}
                image={image}
                deletedOn={deletedOn}
                key={id}
              />
            )
          )}
      </div>
    </div>
  );
};

export default Dashboard;
