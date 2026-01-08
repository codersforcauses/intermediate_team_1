import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TaskCard } from "@/components/ui/task-card";

export function TaskCarousel() {
  return (
    <Carousel className="w-fit max-w-full">
      <CarouselContent>
        <CarouselItem key={1} className="basis-sm lg:basis-md -ml-10 mr-5">
          <TaskCard
            date="Wednesday, July 7th, 2025"
            title="Feed Spaghetti"
            usrImg=""
            usrAlt="@username"
            usrColour="bg-gray-200"
            usrInit="CS"
            usrName="You"
            usrAssignee="exampletask"
            time="7:00 am"
            descr="50.0 g x Premium Cat Biscuits"
          />
        </CarouselItem>
        <CarouselItem key={2} className="basis-sm lg:basis-md -ml-10 mr-5">
          <TaskCard
            date="Wednesday, July 7th, 2025"
            title="Flea Medicine"
            usrImg=""
            usrAlt="@username"
            usrColour="bg-blue-200"
            usrInit="IT"
            usrName="Someone"
            usrAssignee="exampletask1"
            time="5:00 pm"
          />
        </CarouselItem>
        <CarouselItem key={3} className="basis-sm lg:basis-md -ml-10 mr-5">
          <TaskCard
            date="Wednesday, September 24th, 2025"
            title="Long Title Long Title Long Title Long Title Long Title"
            usrImg=""
            usrAlt="@username"
            usrColour="bg-emerald-200"
            usrInit="CS"
            usrName="Someone Else Long Name"
            usrAssignee="exampletask2"
            time="10:00 pm"
            descr="50.0 g x Premium Cat Biscuits 50.0 g x Premium Cat Biscuits 50.0 g x Premium Cat Biscuits 50.0 g x Premium Cat Biscuits 50.0 g x Premium Cat Biscuits"
          />
        </CarouselItem>
        <CarouselItem key={4} className="basis-sm lg:basis-md -ml-10 mr-5">
          <TaskCard
            date="Wednesday, July 7th, 2025"
            title="Feed Spaghetti"
            usrImg=""
            usrAlt="@username"
            usrColour="bg-gray-200"
            usrInit="CS"
            usrName="You"
            usrAssignee="exampletask3"
            time="5:00 pm"
            descr="50.0 g x Premium Cat Biscuits"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="invisible md:visible" />
      <CarouselNext className="invisible md:visible" />
    </Carousel>
  );
}
