import TeamStyle from "./Team.module.css";
import { TeamData } from "../Data";
import { useState, useEffect } from "react";

const Team = () => {
  const [team, setTeam] = useState("");
  useEffect(() => {
    setTeam(TeamData);
  }, []);
  return (
    <>
      <section className={TeamStyle.section}>
        <div className={TeamStyle.main_div}>
          <div className={TeamStyle.team_description}>
            <h2 className={TeamStyle.our_team}>Our team</h2>
            <p className={TeamStyle.description}>
              Explore the whole collection of open-source web components and
              elements built with the utility classNamees from Tailwind
            </p>
          </div>
          <div className={TeamStyle.team_section}>
            {team &&
              team.map((team) => {
                return (
                  <div data-aos="slide-down" className={TeamStyle.card}>
                    <img
                      className={TeamStyle.img}
                      src={team.profileImg}
                      alt=""
                    />

                    <span>{team.name}</span>

                    <p className={TeamStyle.info}>{team.description}</p>
                    <div className={TeamStyle.share}>
                      <span>{team.position}</span>
                      <span>{team.Department}</span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Team;
