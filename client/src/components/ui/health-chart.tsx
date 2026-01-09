"use client";

import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { type ChartConfig,ChartContainer } from "@/components/ui/chart";

export const description = "A horizontal bar chart";

const chartData = [
  { healthincident: "Vomit", count: 5 },
  { healthincident: "Hairball", count: 3 },
  { healthincident: "Scratch", count: 1 },
];

const chartConfig = {
  count: {
    label: "Count",
    color: "oklch(92.5% 0.084 155.995)",
  },
} satisfies ChartConfig;

export function ChartBarHorizontal() {
  return (
    <Card className="mt-5 w-full rounded-3xl md:w-[450]">
      <CardHeader>
        <CardDescription>January - June 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <XAxis type="number" dataKey="count" hide />
            <YAxis
              dataKey="healthincident"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <Bar dataKey="count" fill="var(--color-count)" radius={5}>
              <LabelList
                position="right"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm"></CardFooter>
    </Card>
  );
}
