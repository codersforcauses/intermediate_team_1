import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ClockTime } from "@/components/ui/clock-time";
import { Label } from "@/components/ui/label";
import { UserLabel } from "@/components/ui/user-label";

interface TaskCardProps {
  className?: string;
  title: string;
  date: string;
  usrImg?: string;
  usrAlt: string;
  usrColour: string;
  usrInit: string;
  usrName: string;
  usrAssignee: string;
  time: string;
  descr?: string;
  onMarkComplete?: () => void;
}

export function TaskCard(props: TaskCardProps) {
  let hasDescr: boolean = false;

  if (props.descr) {
    hasDescr = true;
  }

  return (
    <Card className="ml-10 mt-5 h-auto w-fit max-w-[500] rounded-3xl md:px-2 md:py-3 md:pr-10">
      <CardHeader className="gap-2">
        <CardDescription className="text-neutral-700">
          {props.date}
        </CardDescription>
        <CardTitle className="text-2xl">{props.title}</CardTitle>
        <div className="flex gap-2">
          <UserLabel
            img={props.usrImg}
            alt={props.usrAlt}
            colour={props.usrColour}
            initials={props.usrInit}
            name={props.usrName}
            assignee={props.usrAssignee}
          />
          <ClockTime id="clocktest" time={props.time} />
        </div>
      </CardHeader>
      {hasDescr && (
        <CardContent className="-mb-1 flex flex-wrap">
          <div className="max-w-[500]">
            <CardDescription className="text-gray-400">
              {" "}
              {props.descr}{" "}
            </CardDescription>
          </div>
        </CardContent>
      )}
      <CardFooter className="flex gap-2 text-muted-foreground">
        <Checkbox
          id="complete"
          onClick={props.onMarkComplete}
          className="border-muted-foreground"
        />
        <Label htmlFor="complete"> Mark as complete </Label>
      </CardFooter>
    </Card>
  );
}
