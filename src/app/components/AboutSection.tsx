"use client"
const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Jupyter Notebooks" },
]


export const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 pt-14 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Sobre mi
          <hr className="w-6 h-1 mx-auto my-4 bg-[#0e79b2] border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-16 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <p>
              ¡Hola! Soy Junior Guevara, un apasionado desarrollador web front-end con experiencia en HTML, CSS
              y JavaScript. Me encanta crear interfaces web atractivas y funcionales que brinden
              una excelente experiencia de usuario.
            </p>
            <p>
              Estoy emocionado de seguir desarrollando mis habilidades y construyendo mi carrera en el campo del
              desarrollo web. Si estás interesado/a en colaborar o tienes alguna pregunta,
              ¡no dudes en contactarme!
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map(({ skill }, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
