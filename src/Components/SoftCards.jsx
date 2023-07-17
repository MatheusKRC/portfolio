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
              Gosto muito de tentar diferenciar nas idéias e
              frequentemente exercito minha criatividade com o
              objetivo de juntar diveras idéias e ir moldando
              elas até obter o melhor resultado.
              Costumo separar em etapas, sendo elas: brainstorm de idéias,
              buscar inspirações, escolher a melhor e mais viável
              e finalmente começar a produzir.
            </p>

          </div>

        </div>

        <div className={`softBack ${colorMode}`}>
          <h2 className={`softSkill ${colorMode}`}>Comunicação</h2>
          <div className={`softCard${colorMode}`}>
            <p className={`softText ${colorMode}`}>
              Minha Comunicação é a minha principal SoftSkill, tenho
              muita facilidade em repassar o que quero dizer, tentando ao
              máximo sempre gerar interesse no ouvinte para que entenda
              com mais facilidade o que tenho a falar. Podendo facilmente
              explicar a lógica por trás de um código ou abstrair o conceito
              de alguma idéia para um projeto.

            </p>
          </div>

        </div>

        <div className={`softBack ${colorMode}`}>
          <h2 className={`softSkill ${colorMode}`}>Curva De Aprendizado</h2>
          <div className={`softCard${colorMode}`}>
            <p className={`softText ${colorMode}`}>
              Tenho facilidade em absorver e entender novos conhecimentos,
              dificilmente será necessário me explicar algo diversas vezez,
              caso tenha algo que eu não conheça 100% não irá demorar até que
              eu aprenda e mesmo que seja dificil estou sempre disposto a
              mes esforçar para aprender algum conteúdo que seja necessário.
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
              I really like trying to differentiate between ideas and
              I often exercise my creativity with the
              objective of joining different ideas and shaping
              them until you get the best result.
              I usually separate it into stages, namely: brainstorm ideas,
              seek inspirations, choose the best and most viable
              and finally start producing.

            </p>

          </div>

        </div>

        <div className={`softBack ${colorMode}`}>
          <h2 className={`softSkill ${colorMode}`}>Comunication</h2>
          <div className={`softCard${colorMode}`}>
            <p className={`softText ${colorMode}`}>
              My Communication is my main SoftSkill, I have
              very easy to pass on what I want to say, trying at the same time
              maximum always generate interest in the listener so that he understands
              more easily what I have to say. can easily
              explain the logic behind a code or abstract the concept
              of an idea for a project.

            </p>
          </div>

        </div>

        <div className={`softBack ${colorMode}`}>
          <h2 className={`softSkill ${colorMode}`}>Learning Curve</h2>
          <div className={`softCard${colorMode}`}>
            <p className={`softText ${colorMode}`}>
              I find it easy to absorb and understand new knowledge,
              it will hardly be necessary to explain something to me several times,
              if there is something I do not know 100% i will not take long until
              I learn and even if it is difficult I am always willing to
              mes strive to learn some content that is necessary.

            </p>
          </div>
        </div>

      </section>
    )
  );
}

export default SoftCards;
