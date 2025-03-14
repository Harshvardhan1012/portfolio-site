import FramerWrapper from '@/components/animation/FramerWrapper'
import Heading from '@/components/Heading'
import { Badge } from '@/components/ui/badge'
import { Briefcase } from 'lucide-react'

const educationPage = () => {
  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge
        variant="secondary"
        className="gap-1.5 py-1 ">
        <Briefcase className="h-4 w-4" />
        Education
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Education</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.35}
            className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            2020 - 2024
          </FramerWrapper>
          <FramerWrapper
            y={0}
            x={100}
            delay={0.35}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point ">
            <div className="text-2xl font-rubik max-sm:text-xl">
              Bachelor in Electronics and Communication, <br /> Nirma
              University, Ahmedabad, Gujarat
            </div>
            <p className=' font-poppins text-base w-full text-primary  max-sm:text-xs'>PPI - 7/10</p>
          </FramerWrapper>
        </div>
        <div className="w-full h-fit flex">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.35}
            className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            2019
          </FramerWrapper>
          <FramerWrapper
            y={0}
            x={100}
            delay={0.35}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point ">
            <div className="text-2xl font-rubik max-sm:text-xl">
              HSC-CBSE, <br /> The Study School, Udaipur, Rajasthan
            </div>
            <p>
              Percentage - 82.4%
            </p>
          </FramerWrapper>
        </div>
        <div className="w-full h-fit flex">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.35}
            className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            2017
          </FramerWrapper>
          <FramerWrapper
            y={0}
            x={100}
            delay={0.35}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point ">
            <div className="text-2xl font-rubik max-sm:text-xl">
              SSC-CBSE, <br /> Hind Zinc School, Chittorgarh, Rajasthan
            </div>
            <p className=' font-poppins text-base w-full text-primary  max-sm:text-xs'>Percentage - 77.9%</p>
          </FramerWrapper>
        </div>
      </div>
    </div>
  )
}

export default educationPage
