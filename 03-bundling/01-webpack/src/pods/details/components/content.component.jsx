import React from "react";

export const Content = ({ data, lang }) => {

  const {
    contact,
    skills,
    education_and_languages: education,
    soft_skills: softSkills,
    more_info: moreInfo
  } = data;

  const titles = {
    contact: lang === "ES" ? "CONTACTO" : "CONTACT",
    skills: lang === "ES" ? "COMPETENCIAS" : "SKILLS",
    education: lang === "ES" ? "EDUCACIÓN E IDIOMAS" : "EDUCATION AND LANGUAGES",
    softSkills: lang === "ES" ? "HABILIDADES" : "SOFT SKILLS",
    moreInfo: lang === "ES" ? "MÁS INFO" : "MORE INFO",
  }


  return (

    <main>

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
          {
            skills && (
              <article>
                <h2>{titles.skills}</h2>
                <ul>
                  {
                    skills.map((skill, idx) => <li key={`skill-${idx}`}>{skill}</li>)
                  }
                </ul>
              </article>
            )
          }
          {
            education && (
              <article>
                <h2>{titles.education}</h2>
                <ul>
                  {
                    education.map((skill, idx) => <li key={`education-${idx}`}>{skill}</li>)
                  }
                </ul>
              </article>

            )
          }
          {
            softSkills && (
              <article>
                <h2>{titles.softSkills}</h2>
                <ul>
                  {
                    softSkills.map((skill, idx) => <li key={`soft-skill-${idx}`}>{skill}</li>)
                  }
                </ul>
              </article>
            )
          }
          {
            moreInfo && (
              <article>
                <h2>{titles.moreInfo}</h2>
                <ul>
                  {
                    moreInfo.map((info, idx) =>
                      <li key={`info-${idx}`}>
                        <a href={info} target="_blank">
                          {info}
                        </a>
                      </li>
                    )
                  }
                </ul>
              </article>
            )
          }
        </section>
        <section>
          <h2>EXPERIENCIA PROFESIONAL</h2>
          <article>
            <h3>Desarrollador Front end ~ Diseño web</h3>
            <h4>Cool Tabs [2017 - 2024]</h4>
            <ul className="clean">
              <li>Desarrollo Front end, mantenimiento y desarrollo de soluciones front end de la aplicación Cool
                Tabs realizada en Ruby on Rails.</li>
              <li>Diseño Gráfico y Web para clientes, proyectos internos y funcionalidades de la plataforma.</li>
            </ul>
            <small><b>[HTML, CSS, JavaScript ES6, jQuery 3, Ruby]</b></small>
          </article>
          <article>
            <h3>Desarrollador Front end</h3>
            <h4>Mister Kiwi - Letterbrand [2015 - 2017]</h4>
            <ul className="clean">
              <li>Desarrollo Front end sobre CMS propietario (escrito en PHP 5) y Wordpress 4.</li>
              <li>Diseño web para proyectos de clientes.</li>
              <li>Personalización y creación de Temas y Plugins.</li>
            </ul>
            <small><b>[HTML, CSS, JavaScript ES6, jQuery 3, PHP 5]</b></small>
          </article>
          <article>
            <h3>Desarrollador Front end ~ UX/UI</h3>
            <h4>Betteranapp Lab [2014 - 2015]</h4>
            <ul className="clean">
              <li>Desarrollo Front end con Wordpress 4.</li>
              <li>Personalización de Temas y Plugins.</li>
              <li>Diseño web ~ UX/UI para clientes.</li>
              <li>Gestión de servidor Linux con Azure WS.</li>
            </ul>
            <small><b>[HTML, CSS, JavaScript ES5, jQuery 2, PHP 4, Azure WS]</b></small>
          </article>
          <article>
            <h3>Desarrollador Front end ~ Diseño web</h3>
            <h4>Blusens Corporation [2008 - 2013]</h4>
            <ul className="clean">
              <li>Desarrollo Front end con Wordpress 3</li>
              <li>Personalización de Temas y Plugins</li>
              <li>Diseño Gráfico y Web para proyectos internos.</li>
            </ul>
            <small><b>[HTML, CSS, JavaScript ES3, PHP 4]</b></small>
          </article>
          <h2>PROYECTOS</h2>
          <article>
            <h3>Quickmock</h3>
            <h4>Lemoncode [2024 - ]</h4>
            <p>Colaboración en projecto Open Source<br />
              <a href="https://github.com/Lemoncode/quickmock">https://github.com/Lemoncode/quickmock</a>
            </p>
          </article>
        </section>

      </div>

    </main>
  )
}