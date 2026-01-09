import { MapPin } from "lucide-react";

import { Label } from "@/components/ui/label";

interface LocLabelProps {
  className?: string;
  id: string;
  location: string;
}

export function LocLabel(props: LocLabelProps) {
  return (
    <div className="flex gap-1.5 text-muted-foreground">
      <MapPin className="h-auto w-4" id={props.id} />
      <Label className="self-center" htmlFor={props.id}>
        {" "}
        {props.location}{" "}
      </Label>
    </div>
  );
}
