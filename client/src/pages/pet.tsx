import { Check, Plus } from "lucide-react";
import { useState } from "react";

import { AddTask } from "@/components/ui/add-task-menu";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { EventCard } from "@/components/ui/event-card";
import { ChartBarHorizontal } from "@/components/ui/health-chart";
import { HealthOverview } from "@/components/ui/health-overview";
import { PetHeader } from "@/components/ui/pet-page-header";
import { PetSettings } from "@/components/ui/pet-settings-menu";
import { TaskCarousel } from "@/components/ui/pet-task-carousel";
import { TextTitle } from "@/components/ui/text-styles";
import { dm_sans } from "@/lib/fonts";

export default function Default() {
  const [taskMenu, setTaskMenu] = useState(false);
  const [settingsMenu, setSettingsMenu] = useState(false);

  return (
    <div className={dm_sans.className}>
      <h1 className="flex justify-center p-10"> Navbar </h1>
      <PetHeader
        onClickTask={() => setTaskMenu(true)}
        onClickSettings={() => setSettingsMenu(true)}
        petImg=""
        petAlt="Spaghetti's Profile Image"
        petInit="S"
        petName="Spaghetti (example pet)"
        petType="Cat"
        petAge="5 yrs 6 months"
      />

      <div className="mx-[7vw]">
        {taskMenu === true && (
          <AddTask onClickClose={() => setTaskMenu(false)} />
        )}

        {settingsMenu === true && (
          <PetSettings
            petName="Spaghetti"
            petType="Cat"
            petDOB="01/06/2020"
            onClickClose={() => setSettingsMenu(false)}
          />
        )}

        <TextTitle className="mt-5 text-3xl"> Upcoming Tasks </TextTitle>
        <div className="flex justify-center md:mx-0">
          <TaskCarousel />
        </div>

        <TextTitle className="mt-10 text-3xl"> Calendar </TextTitle>
        <div className="flex flex-wrap gap-x-10">
          <Calendar
            mode="single"
            className="mt-5 h-fit w-full min-w-[275] rounded-3xl border p-5 pt-7 shadow-sm md:w-1/3"
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

        <TextTitle className="mt-10 text-3xl"> Health </TextTitle>
        <div className="flex flex-wrap gap-x-10">
          <div>
            <Button
              className="mt-5 w-full border-emerald-100 bg-emerald-50 p-5 text-emerald-800 hover:bg-emerald-100"
              variant="outline"
            >
              <Check className="mr-2" /> No health alerts for Spaghetti
            </Button>
            <ChartBarHorizontal />
            <Button
              className="mt-5 w-full p-5"
              variant="outline"
              onClick={() => "Add function later"}
            >
              <Plus className="mr-1" /> Add health event
            </Button>
          </div>
          <div className="min-w-[300] md:w-3/4 lg:w-1/2">
            <HealthOverview title="Vomit" occurrences="3" />
          </div>
        </div>
      </div>
      <div className="h-[75]"></div>
    </div>
  );
}
