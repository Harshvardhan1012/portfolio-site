import Heading from '@/components/Heading'
import SkillsFooter from '@/components/SkillsFotter'
import { Badge } from '@/components/ui/badge'
import { LightbulbIcon } from 'lucide-react'
import  graphql  from './../../../public/graphql.svg'
import  sql  from './../../../public/sql.png'
import  prisma  from './../../../public/prisma.svg'
import  redux  from './../../../public/redux.svg'
import  postman  from './../../../public/postman.svg'
import  apollo  from './../../../public/apollo.png'
import  express  from './../../../public/express.png'


import FramerWrapper from '@/components/animation/FramerWrapper'
const skillPage = () => {
  const programmingLanguages = [
    {
      name: 'HTML5',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
      name: 'CSS3',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    },
    {
      name: 'Graph QL',
      icon:graphql,
    },
    {
      name: 'SQL',
      icon:sql,
    },
  ]

  const frameworks = [
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'Next.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    },
    {
      name: 'Tailwind CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    },
    {
      name: 'Material UI',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
    },
    {
      name: 'Prisma',
      icon: prisma,
    },
    {
      name: 'Redux',
      icon: redux,
    },
    {
      name: 'Express',
      icon: express,
    },
    {
      name: 'Apollo Server/Client',
      icon: apollo,
    },
  ]

  const tools = [
    {
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },
    {
      name: 'GitHub',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    },
    {
      name: 'VS Code',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    },
    {
      name: 'MongoDB',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    },
    {
      name: 'PostgreSQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    },
    {
      name: 'postman',
      icon: postman,
    },
  ]

  return (
    // SKILLS PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5">
      <Badge
        variant="secondary"
        className="gap-1.5 py-1 ">
        <LightbulbIcon className="w-4 h-4" />
        My Skills
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Technical Experience/Skills.</Heading>
        <FramerWrapper
          y={0}
          x={200}>
          <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
            Currently i am a fresher and i have a solid understand of HTML5,
            CSS3, JS, TS and React, including responsive design principles. I
            specialize in building web applications and sites using Javascript,
            Typescript, React, Nextjs & Node.
          </p>
        </FramerWrapper>
        <FramerWrapper
          y={100}
          delay={0.3}
          className="block w-full">
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
            Programming Languages
          </h1>
          <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
            <SkillsFooter items={programmingLanguages} />
          </div>
        </FramerWrapper>
        <FramerWrapper
          className="block w-full"
          y={100}
          delay={0.32}>
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
            Framework/Libraries
          </h1>
          <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
            <SkillsFooter items={frameworks} />
          </div>
        </FramerWrapper>
        <FramerWrapper
          className="block w-full"
          y={100}
          delay={0.34}>
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
            Tools & Technologies
          </h1>
          <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
            <SkillsFooter items={tools} />
          </div>
        </FramerWrapper>
      </div>
    </div>
  )
}

export default skillPage
