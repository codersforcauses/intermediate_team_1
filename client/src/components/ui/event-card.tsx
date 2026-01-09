import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ClockTime } from "@/components/ui/clock-time";
import { LocLabel } from "@/components/ui/location-label";
import { UserLabel } from "@/components/ui/user-label";

interface EventCardProps {
  className?: string;
  date: string;
  title: string;
  usrImg: string;
  usrAlt: string;
  usrColour: string;
  usrInit: string;
  usrName: string;
  usrAssignee: string;
  time: string;
  location: string;
  descr: string;
}

export function EventCard(props: EventCardProps) {
  return (
    <Card className="mt-5 h-auto w-fit max-w-[500] rounded-3xl md:px-2 md:py-3 md:pr-10">
      <CardHeader>
        <CardDescription className="text-neutral-700">
          {props.date}
        </CardDescription>
        <CardTitle className="pt-2 text-2xl">{props.title}</CardTitle>
        <div className="flex gap-1 pt-1 md:gap-3">
          <div className="hidden md:flex">
            <UserLabel
              img={props.usrImg}
              alt={props.usrAlt}
              colour={props.usrColour}
              initials={props.usrInit}
              name={"Created by " + props.usrName}
              assignee={props.usrAssignee}
            />
          </div>
          <ClockTime id="clocktest" time={props.time} />
          <LocLabel id="loctest" location={props.location} />
        </div>
      </CardHeader>
      <CardContent className="flex flex-wrap">
        <div className="max-w-100">
          <CardDescription> {props.descr} </CardDescription>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 text-muted-foreground"></CardFooter>
    </Card>
  );
}
