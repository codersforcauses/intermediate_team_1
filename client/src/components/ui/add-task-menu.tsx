import { Check, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DateTimePicker } from "@/components/ui/date-time-picker";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { TextTitle } from "@/components/ui/text-styles";

interface AddTaskProps {
  className?: string;
  onClickClose: () => void;
}

export function AddTask(props: AddTaskProps) {
  return (
    <div className="flex flex-col gap-5">
      <TextTitle className="flex gap-2 text-3xl">Add Task</TextTitle>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="checkout-7j9-card-name-43j">
            Task Title
          </FieldLabel>
          <Input
            id="checkout-7j9-card-name-43j"
            placeholder="Feed Spaghetti"
            required
          />
        </Field>
        <DateTimePicker />
        <div className="flex gap-5 lg:w-1/2">
          <Field>
            <FieldLabel htmlFor="checkout-7j9-card-name">For Pet</FieldLabel>
            <Input
              id="checkout-7j9-card-name"
              placeholder="Spaghetti"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="checkout-7j9-card-name-4">
              User Assignee
            </FieldLabel>
            <Input
              id="checkout-7j9-card-name-4"
              placeholder="@username"
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
          <Check className="mr-1" /> Save Task
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
