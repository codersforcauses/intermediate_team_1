import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface UserLabelProps {
  className?: string;
  colour: string;
  assignee: string;
  img?: string;
  alt: string;
  initials: string;
  name: string;
}

export function UserLabel(props: UserLabelProps) {
  return (
    <div
      className={cn(
        "max-w-1/2 flex w-fit gap-x-1 rounded-full p-1 px-2.5",
        props.colour,
      )}
    >
      <div
        className="flex flex-row flex-wrap items-center gap-2.5"
        id={props.assignee}
      >
        <Avatar className="h-6 w-6">
          <AvatarImage
            className="rounded-full"
            src={props.img}
            alt={props.alt}
          />
          <AvatarFallback className="h-6 w-6 bg-white p-1 text-xs">
            {" "}
            {props.initials}{" "}
          </AvatarFallback>
        </Avatar>
        <Label htmlFor={props.assignee} className="text-xs text-black">
          {props.name}
        </Label>
      </div>
    </div>
  );
}
