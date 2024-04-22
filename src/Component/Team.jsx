import React, { useState, useEffect } from "react";
import TeamStyle from "./Team.module.css";
import { TeamData } from "../Data";

const Team = () => {
  const [team, setTeam] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const departments = [
    "All",
    "HR",
    "Developer",
    "Designer",
    "Selse",
    "Marketing",
  ];

  useEffect(() => {
    setTeam(TeamData);
  }, []);

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
  };

  const filteredTeam =
    selectedDepartment === "All"
      ? team
      : team.filter((member) => member.Department === selectedDepartment);

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
          <div className={TeamStyle.select}>
            <label htmlFor="department">Select Department:</label>
            <select
              className={TeamStyle.selection}
              id="department"
              value={selectedDepartment}
              onChange={handleDepartmentChange}
            >
              {departments.map((department) => (
                <option key={department} value={department}>
                  {department}
                </option>
              ))}
            </select>
          </div>
          <div className={TeamStyle.team_section}>
            {filteredTeam.map((member) => (
              <div
                data-aos="slide-down"
                className={TeamStyle.card}
                key={member.id}
              >
                <img className={TeamStyle.img} src={member.profileImg} alt="" />
                <span>{member.name}</span>
                <p className={TeamStyle.info}>{member.description}</p>
                <div className={TeamStyle.share}>
                  <span>{member.position}</span>
                  <span>{member.Department}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
