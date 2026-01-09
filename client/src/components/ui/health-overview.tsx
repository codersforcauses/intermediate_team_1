import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HealthOccur } from "@/components/ui/health-occurrence-small";

interface HealthOverviewProps {
  className?: string;
  title: string;
  occurrences: string;
}

export function HealthOverview(props: HealthOverviewProps) {
  return (
    <Card className="mt-5 h-auto w-full rounded-3xl px-3 py-1">
      <CardHeader>
        <CardDescription className="text-neutral-700">Overview</CardDescription>
        <CardTitle className="text-2xl">{props.title}</CardTitle>
        <CardDescription className="p-2 pl-0 text-neutral-500">
          {props.occurrences} occurrences over the past month.
        </CardDescription>
      </CardHeader>
      <CardContent className="max-w-150 max-h-75 -mr-5 flex flex-wrap overflow-scroll lg:-mr-10">
        <HealthOccur
          usrImg=""
          usrAlt="shadcn"
          usrInit="CN"
          date="5th July 2025"
          descr="Too many biscuits"
        />
        <HealthOccur
          usrImg=""
          usrAlt="shadcn"
          usrInit="CN"
          date="5th July 2025"
          descr="Too many biscuits Too many biscuits"
        />
        <HealthOccur
          usrImg=""
          usrAlt="shadcn"
          usrInit="CN"
          date="15th July 2025"
          descr="Too many biscuits Too many biscuitsToo many biscuitsToo many biscuitsToo many biscuits"
        />
      </CardContent>
      <CardFooter className="flex gap-2 text-muted-foreground"></CardFooter>
    </Card>
  );
}
