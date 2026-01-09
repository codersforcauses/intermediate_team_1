import { ChevronRight, SquarePen } from "lucide-react";

import { Card, CardDescription } from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

interface HealthOccurProps {
  className?: string;
  usrImg?: string;
  usrAlt: string;
  usrInit: string;
  date: string;
  descr: string;
}

export function HealthOccur(props: HealthOccurProps) {
  return (
    <Card className="mb-3 mr-3 w-fit rounded-xl py-5">
      <div className="flex px-5">
        <div>
          <div className="flex flex-none">
            <Avatar className="h-8 w-8">
              <AvatarImage
                className="h-8 w-8 rounded-full"
                src={props.usrImg}
                alt={props.usrAlt}
              />
              <AvatarFallback className="h-8 w-8">
                {" "}
                {props.usrInit}{" "}
              </AvatarFallback>
            </Avatar>
            <p className="text-1/2 ml-2 self-center"> {props.date} </p>
          </div>
          <CardDescription className="text-1/2 text-gray-500">
            <div className="flex gap-2 pt-3">
              {" "}
              <SquarePen className="w-4" />{" "}
              <p className="line-clamp-1 max-w-32 truncate"> {props.descr} </p>
            </div>
          </CardDescription>
        </div>
        <ChevronRight size={45} className="-mr-2 ml-4 self-center" />
      </div>
    </Card>
  );
}
