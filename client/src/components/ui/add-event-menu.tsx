"use client";

import { Check, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import { DateTimePicker } from "@/components/ui/date-time-picker";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

interface AddEventProps {
  className?: string;
  onClickClose: () => void;
}

export function AddEvent(props: AddEventProps) {
  return (
    <div className="flex flex-col gap-5">
      <hr className="mb-2 mt-10"></hr>
      <CardTitle className="flex gap-2 text-3xl">Add Event</CardTitle>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="checkout-7j9-card-name-43j">
            Event Title
          </FieldLabel>
          <Input
            id="checkout-7j9-card-name-43j"
            placeholder="Vet Appointment for Spaghetti"
            required
          />
        </Field>
        <DateTimePicker />
        <div className="lg:max-w-2/3 flex gap-5">
          <Field>
            <FieldLabel htmlFor="checkout-7j9-card-name-4">Location</FieldLabel>
            <Input
              id="checkout-7j9-card-name-4"
              placeholder="Type a location"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="checkout-7j9-card-name">For Pet</FieldLabel>
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
      <hr className="mt-5"></hr>
    </div>
  );
}
