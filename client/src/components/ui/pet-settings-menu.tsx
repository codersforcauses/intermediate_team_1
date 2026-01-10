import { Check, X } from "lucide-react";

import { DOBPicker } from "@/components/ui/dob-picker";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";

import { Button } from "./button";
import { CardTitle } from "./card";
import { Input } from "./input";

interface PetSettingsProps {
  className?: string;
  petName: string;
  petType: string;
  petDOB: string;
  onClickClose: () => void;
}

export function PetSettings(props: PetSettingsProps) {
  return (
    <div className="flex flex-col gap-5">
      <CardTitle className="flex gap-2 text-3xl">
        Settings for {props.petName}
      </CardTitle>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="checkout-7j9-card-name-43j">Pet Name</FieldLabel>
          <Input id="checkout-7j9-card-name-43j" placeholder={props.petName} />
        </Field>
        <div className="lg:max-w-1/2 flex gap-5">
          <Field className="-mt-1">
            <FieldLabel htmlFor="checkout-7j9-card-name">Pet Type</FieldLabel>
            <Input id="checkout-7j9-card-name" placeholder={props.petType} />
          </Field>
          <DOBPicker prevDOB={props.petDOB} />
        </div>
      </FieldGroup>
      <div className="mt-5 flex items-center gap-5">
        <Button
          className="gray-600 hover:gray-400 rounded-full"
          onClick={props.onClickClose}
        >
          <Check className="mr-1" /> Save changes
        </Button>
        <Button
          className="rounded-full"
          variant="outline"
          onClick={props.onClickClose}
        >
          <X className="mr-1" /> Discard and close
        </Button>
      </div>
      <hr className="my-5"></hr>
    </div>
  );
}
