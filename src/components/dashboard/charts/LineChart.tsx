
import React from "react";
import {
  Line,
  LineChart as RechartsLineChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Sample data - we'll replace this with real data later
const data = [
  { name: "Week 1", visitors: 4000, customers: 2400 },
  { name: "Week 2", visitors: 3000, customers: 1398 },
  { name: "Week 3", visitors: 5000, customers: 2800 },
  { name: "Week 4", visitors: 2780, customers: 1908 },
  { name: "Week 5", visitors: 1890, customers: 1800 },
  { name: "Week 6", visitors: 2390, customers: 2300 },
  { name: "Week 7", visitors: 3490, customers: 3300 },
];

interface LineChartProps {
  title?: string;
  data?: Array<{ name: string; visitors: number; customers: number }>;
}

const LineChart: React.FC<LineChartProps> = ({
  title = "Weekly Traffic",
  data: propData,
}) => {
  const chartData = propData || data;

  return (
    <div className="chart-container">
      <h3 className="text-base font-medium mb-4">{title}</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart
            data={chartData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                border: "1px solid hsl(var(--border))",
              }}
            />
            <Line
              type="monotone"
              dataKey="visitors"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="customers"
              stroke="hsl(var(--secondary-foreground))"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChart;
