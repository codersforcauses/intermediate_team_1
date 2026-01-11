import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TaskCard } from "@/components/ui/task-card";

interface taskInfoObject {
  descr: string;
  due: string;
  forPet: number;
  id: number;
  isComplete: boolean;
  title: string;
}

interface taskInfoResponse {
  task: taskInfoObject;
}

export function TaskCarousel() {
  const [taskInfo, setTaskInfo] = useState<taskInfoResponse>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:8000/tasks/");
      const taskInfo = await data.json();
      setTaskInfo(taskInfo);
    };

    fetchData();
  }, []);

  // Not very efficient, and need to modify for multiple pets.
  function getTaskInfo(id: number, item: keyof taskInfoObject) {
    if (taskInfo) {
      let task: keyof taskInfoResponse;
      for (task in taskInfo) {
        if (taskInfo[task].id == id) {
          return taskInfo[task][item].toString();
        }
      }
    } else {
      return "";
    }
  }

  function formatDueDate(id: number, type: "day" | "time") {
    const due = getTaskInfo(id, "due") || "";
    const newDue = due.slice(0, 10);
    const date = new Date(newDue);
    const newDate = date.toString();

    if (type === "day") {
      const finalDate = newDate.slice(0, 16);
      return finalDate;
    } else if (type === "time") {
      const finalTime = newDate.slice(16, 21);
      return finalTime;
    }
  }

  return (
    <Carousel className="w-fit max-w-full">
      <CarouselContent>
        <CarouselItem key={1} className="basis-sm lg:basis-md -ml-10 mr-5">
          <TaskCard
            date={formatDueDate(1, "day") || ""}
            title={getTaskInfo(1, "title") || ""}
            usrImg=""
            usrAlt="@username"
            usrColour="bg-gray-200"
            usrInit="CS"
            usrName="You"
            usrAssignee="exampletask"
            time={formatDueDate(1, "time") || ""}
            descr={getTaskInfo(1, "descr") || ""}
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
