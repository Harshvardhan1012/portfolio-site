import FramerWrapper from '@/components/animation/FramerWrapper'
import Heading from '@/components/Heading'
import { Badge } from '@/components/ui/badge'
import { Briefcase } from 'lucide-react'
import Image from 'next/image'
import th from '../../../public/techHolding.png'
import creart from './../../../public/creart.png'
import ril from './../../../public/RIL.png'

const experiencePage = () => {
  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge
        variant="secondary"
        className="gap-1.5 py-1 ">
        <Briefcase className="h-4 w-4" />
        Experience
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Experience</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.35}
            className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            June 2023 - July 2023
          </FramerWrapper>
          <FramerWrapper
            y={0}
            x={100}
            delay={0.35}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point flex-row flex items-center">
            <Image
              src={creart}
              height={30}
              width={70}
              alt="TH logo"
            />
            <div className="text-xl font-rubik max-sm:text-xl">
              SDE Intern, <br /> CreArt Solutions - Ahmedabad, Gujarat
            </div>
          </FramerWrapper>
        </div>
        <div className="w-full h-fit flex">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.35}
            className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            Jan 2024 - May 2024
          </FramerWrapper>
          <FramerWrapper
            y={0}
            x={100}
            delay={0.35}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point flex-row flex items-center ">
            <Image
              src={th}
              height={30}
              width={70}
              alt="TH logo"
            />
            <div className="text-xl font-rubik max-sm:text-xl">
              SDE Intern, <br /> Tech Holding - Ahmedabad, Gujarat
            </div>
          </FramerWrapper>
        </div>
        <div className="w-full h-fit flex">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.35}
            className="w-1/4 font-rubik flex items-center justify-evenly text-xl max-sm:text-base ">
            August 2024 - Present
          </FramerWrapper>
          <FramerWrapper
            y={0}
            x={100}
            delay={0.35}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point flex flex-row items-center">
            <Image
              src={ril}
              height={30}
              width={70}
              alt="RIL logo"
            />
            <div className="text-xl font-rubik max-sm:text-xl">
              Graduate Engineer Trainee, <br /> Reliance Industries - Jamnagar
              ,Gujarat
            </div>
          </FramerWrapper>
        </div>
      </div>
    </div>
  )
}

export default experiencePage
