/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function SoftCards({ language, colorMode }) {
  return (
    language === 'Portugues' ? (
      <section className="softSkills">

        <div className={`softBack ${colorMode}`}>
          <h2 className={`softSkill ${colorMode}`}>Criatividade</h2>
          <div className={`softCard${colorMode}`}>
            <p className={`softText ${colorMode}`}>
              The Last of Us is a television series based on the
              popular video game of the same name. It follows the
              story of Joel and Ellie, two survivors of a
              post-apocalyptic world ravaged by a deadly fungus
              that turns people into zombies, as they navigate
              through dangerous terrain and encounter other survivors.

            </p>

          </div>

        </div>

        <div className={`softBack ${colorMode}`}>
          <h2 className={`softSkill ${colorMode}`}>Comunicação</h2>
          <div className={`softCard${colorMode}`}>
            <p className={`softText ${colorMode}`}>
              The Last of Us is a television series based on the
              popular video game of the same name. It follows the
              story of Joel and Ellie, two survivors of a
              post-apocalyptic world ravaged by a deadly fungus
              that turns people into zombies, as they navigate
              through dangerous terrain and encounter other survivors.

            </p>
          </div>

        </div>

        <div className={`softBack ${colorMode}`}>
          <h2 className={`softSkill ${colorMode}`}>Curva De Aprendizado</h2>
          <div className={`softCard${colorMode}`}>
            <p className={`softText ${colorMode}`}>
              The Last of Us is a television series based on the
              popular video game of the same name. It follows the
              story of Joel and Ellie, two survivors of a
              post-apocalyptic world ravaged by a deadly fungus
              that turns people into zombies, as they navigate
              through dangerous terrain and encounter other survivors.

            </p>
          </div>
        </div>

      </section>
    ) : (
      <section className="softSkills">

        <div className={`softBack ${colorMode}`}>
          <h2 className={`softSkill ${colorMode}`}>Criativity</h2>
          <div className={`softCard${colorMode}`}>
            <p className={`softText ${colorMode}`}>
              The Last of Us is a television series based on the
              popular video game of the same name. It follows the
              story of Joel and Ellie, two survivors of a
              post-apocalyptic world ravaged by a deadly fungus
              that turns people into zombies, as they navigate
              through dangerous terrain and encounter other survivors.

            </p>

          </div>

        </div>

        <div className={`softBack ${colorMode}`}>
          <h2 className={`softSkill ${colorMode}`}>Comunication</h2>
          <div className={`softCard${colorMode}`}>
            <p className={`softText ${colorMode}`}>
              The Last of Us is a television series based on the
              popular video game of the same name. It follows the
              story of Joel and Ellie, two survivors of a
              post-apocalyptic world ravaged by a deadly fungus
              that turns people into zombies, as they navigate
              through dangerous terrain and encounter other survivors.

            </p>
          </div>

        </div>

        <div className={`softBack ${colorMode}`}>
          <h2 className={`softSkill ${colorMode}`}>Learning Curve</h2>
          <div className={`softCard${colorMode}`}>
            <p className={`softText ${colorMode}`}>
              The Last of Us is a television series based on the
              popular video game of the same name. It follows the
              story of Joel and Ellie, two survivors of a
              post-apocalyptic world ravaged by a deadly fungus
              that turns people into zombies, as they navigate
              through dangerous terrain and encounter other survivors.

            </p>
          </div>
        </div>

      </section>
    )
  );
}

export default SoftCards;
