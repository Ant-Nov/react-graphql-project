import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "../ui/chart";
import { Card, CardContent, CardTitle } from "../ui/card";
import type { ChartData } from "recharts/types/state/chartDataSlice";

export interface ChartProps {
  chartData: ChartData<{name: string; count: number}>,
  chartConfig: ChartConfig,
  title: string;
}

const UserChart = ({ chartData, chartConfig, title }: ChartProps) => {
  return (
    <Card className="inline-flex">
      <CardTitle className="text-center">{title}</CardTitle>

      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-50 w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <YAxis dataKey="count" tickMargin={10} />

            <XAxis
              dataKey="name"
              tickLine={false}
              tickMargin={10}
              tickFormatter={(value: string) => value.length > 10 ? `${value.slice(0, 10)}…` : value}
            />
            
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="count" fill={`var(--color-name)`} radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
export default UserChart