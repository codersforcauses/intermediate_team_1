import { Clock8 } from "lucide-react";

import { Label } from "@/components/ui/label";

interface ClockProps {
  className?: string;
  id: string;
  time: string;
}

export function ClockTime(props: ClockProps) {
  return (
    <div className="flex gap-x-1.5 text-muted-foreground">
      <Clock8 className="h-auto w-4" id={props.id} />
      <Label htmlFor={props.id} className="self-center">
        {" "}
        {props.time}{" "}
      </Label>
    </div>
  );
}
