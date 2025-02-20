import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "Appointment-booking App",
      description:
        `This is a basic appointment booking application that enables users to schedule appointments with doctors. 
        It includes role-based access for users, admins, and superadmins.
         The app offers features for booking, scheduling, and managing appointments, allowing doctors to set their availability 
         `,
      tags: ["Supabase", "Shadcn Ui", "Nextjs"],
      link: "https://appointment-booking-app-two.vercel.app",
    },
    {
      title: "Mental Health Prediction Using ML",
      description:
        "Designed and implemented a machine learning-based mental health prediction model for corporate employees Utilized a diverse dataset of employee information to identify potential risk factors for mental health issues",
      tags: ["Python", "Machine Learning","Matplot Lib"],
      link: "https://github.com/Harshvardhan1012/Mental-Health-Prediction-using-ML",
    },
    {
      title: "R-Mango",
      description:
        " Designed a dual inventory system to manage separate stock for township and city users, ensuring fair and optimized distribution based on location-specific needs Developed an admin panel with features like daily inventory updates, time-restricted purchasing, secure 2FA login, and Jio Payment Gateway integration for smooth and safe transactions.",
        tags: ["React", "Typescript", "Node js","SQL Server","Tailwind CSS"],
      link: "",
    },
    {
      title: "R-Availability",
      description:
        "Developed R-Availability System to track server uptime and downtime with user-based roles, real-time monitoring, and detailed reporting",
      tags: ["React js", "Node js", "Tailwind CSS"],
      link: "",
    },
    {
      title: "Distribute Aid",
      description:
        "Contributed in making frontend pages for their main website",
      tags: ["Nextjs", "Typescript", "Radix Ui","Tailwind CSS"],
      link: "https://distributeaid.org",
    },
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 justify-center">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <Layers className="h-4 w-4" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3 my-5">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            I love to Build Cool Projects. Here, you&#x27;ll find a curated
            collection of my creative endeavors and technical projects. Each
            piece represents a journey of innovation, problem-solving, and
            continuous learning. Feel free to explore this showcase of my
            passion and expertise in action.
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
