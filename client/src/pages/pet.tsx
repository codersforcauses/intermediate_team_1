import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { EventCard } from "@/components/ui/event-card";
import { PetHeader } from "@/components/ui/pet-page-header";
import { TaskCarousel } from "@/components/ui/pet-task-carousel";
import { TextTitle } from "@/components/ui/text-styles";
import { dm_sans } from "@/lib/fonts";

export default function Default() {
  return (
    <div className={dm_sans.className}>
      <h1 className="flex justify-center p-10"> Navbar </h1>
      <PetHeader
        onClickTask={() => "state function here"}
        onClickSettings={() => "state function here"}
        petImg=""
        petAlt="Spaghetti's Profile Image"
        petInit="S"
        petName="Spaghetti (example pet)"
        petType="Cat"
        petAge="5 yrs 6 months"
      />

      <div className="mx-[7vw] mt-5">
        <TextTitle className="text-3xl"> Upcoming Tasks </TextTitle>
        <div className="flex justify-center md:mx-0">
          <TaskCarousel />
        </div>

        <TextTitle className="mt-10 text-3xl"> Calendar </TextTitle>
        <div className="flex flex-wrap gap-x-10">
          <Calendar
            mode="single"
            className="mt-5 h-fit w-full rounded-3xl border p-5 pt-7 shadow-sm md:w-1/3"
            captionLayout="dropdown"
          />
          <div className="min-w-100 w-fit">
            <EventCard
              date="Monday, July 9th, 2025"
              title="Vet Appointment for Spaghetti"
              usrImg=""
              usrAlt="shadcn"
              usrColour="bg-neutral-200"
              usrInit="CN"
              usrName="You"
              usrAssignee="exampletask3"
              time="5:00 pm"
              location="none"
              descr="50.0 g x Premium Cat Biscuits"
            />
            <Button
              className="mt-5 w-full p-5"
              variant="outline"
              onClick={() => "Add function later"}
            >
              <Plus className="mr-1" /> Add event
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
