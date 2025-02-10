import React from "react";
import { Header } from "./components/header.component";

export const Details = ({ data, lang }) => {
  const [dataLoaded, setDataLoaded] = React.useState(false);

  const {
    contact,
    skills,
    education_and_languages: education,
    soft_skills: softSkills,
    more_info: moreInfo,
    professional_experience: experience,
    projects
  } = data;

  const titles = {
    contact: lang === "ES" ? "CONTACTO" : "CONTACT",
    skills: lang === "ES" ? "COMPETENCIAS" : "SKILLS",
    education: lang === "ES" ? "EDUCACIÓN E IDIOMAS" : "EDUCATION AND LANGUAGES",
    softSkills: lang === "ES" ? "HABILIDADES" : "SOFT SKILLS",
    moreInfo: lang === "ES" ? "MÁS INFO" : "MORE INFO",
    experience: lang === "ES" ? "EXPERIENCIA PROFESIONAL" : "PROFESSIONAL EXPERIENCE",
    projects: lang === "ES" ? "PROYECTOS" : "PROJECTS",
  }

  React.useEffect(() => {
    if (data) setDataLoaded(true);
  }, [])

  return (
    <>
      {
        data ? (
          <>
            <Header data={data} />
            <main data-loaded={data && dataLoaded}>

              <div className="grid grid--content">
                <section>

                  {
                    contact && (
                      <article>
                        <h2>{titles.contact}</h2>
                        <ul className="clean">
                          <li>{contact.location}</li>
                          <li><a href={`tel:${contact.phone}`}>{contact.phone}</a></li>
                          <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
                          <li><a
                            href={contact.linkedin}>{contact.linkedin}</a>
                          </li>
                          <li><a href={contact.github}>{contact.github}</a></li>
                        </ul>
                      </article>
                    )
                  }

                  <article>
                    <h2>{titles.skills}</h2>
                    <ul>
                      {
                        skills?.map((skill, idx) => <li key={`skill-${idx}`}>{skill}</li>)
                      }
                    </ul>
                  </article>

                  <article>
                    <h2>{titles.education}</h2>
                    <ul>
                      {
                        education?.map((skill, idx) => <li key={`education-${idx}`}>{skill}</li>)
                      }
                    </ul>
                  </article>


                  <article>
                    <h2>{titles.softSkills}</h2>
                    <ul>
                      {
                        softSkills?.map((skill, idx) => <li key={`soft-skill-${idx}`}>{skill}</li>)
                      }
                    </ul>
                  </article>

                  <article>
                    <h2>{titles.moreInfo}</h2>
                    <ul>
                      {
                        moreInfo?.map((info, idx) =>
                          <li key={`info-${idx}`}>
                            <a href={info} target="_blank">
                              {info}
                            </a>
                          </li>
                        )
                      }
                    </ul>
                  </article>
                </section>
                <section>
                  <h2>{titles.experience}</h2>
                  {
                    experience?.map((pos, idx) =>
                      <article key={`experience-${idx}`}>
                        <h3>{pos.title}</h3>
                        <h4>{pos.company} {pos.years}</h4>
                        <ul className="clean">
                          {
                            pos.responsibilities?.map((item, id) =>
                              <li key={`experience-${idx}-${id}`}>{item}</li>
                            )
                          }
                        </ul>
                        <small><b>{pos.technologies}</b></small>
                      </article>
                    )
                  }

                  <h2>{titles.projects}</h2>
                  {
                    projects?.map((project, idx) =>
                      <article key={`project-${idx}`}>
                        <h3>{project.title}</h3>
                        <h4>{project.company} {project.years}</h4>
                        <p>{project.description}<br />
                          <a href={project.link} target="_blank">{project.link}</a>
                        </p>
                      </article>
                    )
                  }
                </section>

              </div>

            </main>
          </>
        ) : (
          <dialog open role="alert">
            <h4>Error fetching the data</h4>
            {/* <form method="dialog">
              <button>close</button>
            </form> */}
          </dialog>
        )
      }
    </>
  );
};