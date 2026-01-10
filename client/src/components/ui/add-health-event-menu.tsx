import { Check, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DateTimePicker } from "@/components/ui/date-time-picker";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { TextTitle } from "@/components/ui/text-styles";

interface AddHealthEventProps {
  className?: string;
  onClickClose: () => void;
}

export function AddHealthEvent(props: AddHealthEventProps) {
  return (
    <div className="flex flex-col gap-5">
      <hr className="mb-2 mt-10"></hr>
      <TextTitle className="flex gap-2 text-3xl">Add Health Event</TextTitle>
      <FieldGroup>
        <Field className="lg:max-w-1/2">
          <FieldLabel htmlFor="checkout-7j9-card-name-43j">
            Symptom Type
          </FieldLabel>
          <Input id="checkout-7j9-card-name-43j" placeholder="Vomit" required />
        </Field>
        <div className="lg:max-w-1/2 flex gap-5">
          <div className="mt-1.5">
            <DateTimePicker />
          </div>
          <Field>
            <FieldLabel htmlFor="checkout-7j9-card-name">Pet</FieldLabel>
            <Input
              id="checkout-7j9-card-name"
              placeholder="Spaghetti"
              required
            />
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor="checkout-7j9-card-name-">
            Description (optional)
          </FieldLabel>
          <Input
            id="checkout-7j9-card-name-"
            placeholder="50.0 g x Premium Cat Biscuits"
          />
        </Field>
      </FieldGroup>
      <div className="mt-5 flex items-center gap-5">
        <Button
          className="gray-600 hover:gray-400 rounded-full"
          onClick={props.onClickClose}
        >
          <Check className="mr-1" /> Save Event
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
