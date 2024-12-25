import React from 'react';
import team_1 from './assets/images/team-1.jpg';
import team_2 from './assets/images/team-2.jpg';
import team_3 from './assets/images/team-3.jpg';
import team_4 from './assets/images/team-4.jpg';
import team_5 from './assets/images/team-5.jpg';
import team_6 from './assets/images/team-6.jpg';
import team_7 from './assets/images/team-7.jpg';

export default function Team() {
  const teamMembers = [
    { id: 1, name: "PENTAPATI VENKATA SURYA KAMAL", designation: "FOUNDER, CEO", photo: team_1 },
    { id: 2, name: "SRI VENKAT BORA", designation: "CO- Founder, CMO", photo: team_2 },
    { id: 3, name: "JEEVAN SAI NABBA", designation: "COO (Chief operating officer)", photo: team_3 },
    { id: 4, name: "GRANDHI HEMANTH", designation: "CFO (chief finical officer)", photo: team_4 },
    { id: 5, name: "Mamindla Vamshi", designation: "FULL STACK DEVELOPER", photo: team_5 },
    { id: 6, name: "SRIRAMULA HARISH", designation: "ANDROID DEVELOPER", photo: team_7 },
    { id: 7, name: "SHINAGAM KUMAR SWAMY", designation: "CTO (Chief Technical Offiecer)", photo: team_6 },

  ];

  return (
    <section className="team section" id="team" aria-label="Team">
      <div className="container">
        <p className="section-subtitle text-center">- Meet the Minds Behind the Magic -</p>
        <h2 className="h2 section-title text-center">Our Talented Team</h2>
        <p className="section-text text-center">
          At Infiedge, our talented team delivers excellence, drives innovation, and turns visionary ideas into impactful realities.
        </p>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div className="team-card" key={member.id}>
              <div className="team-photo-container">
                <img
                  src={member.photo}
                  alt={`${member.name}'s photo`}
                  className="team-photo"
                />
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-designation">{member.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
