
import React from "react";
import {
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Cell,
  Legend,
  Tooltip,
} from "recharts";

// Sample data - we'll replace this with real data later
const data = [
  { name: "Desktop", value: 400 },
  { name: "Mobile", value: 300 },
  { name: "Tablet", value: 200 },
  { name: "Other", value: 100 },
];

const COLORS = ["#3B82F6", "#8B5CF6", "#F97316", "#10B981"];

interface PieChartProps {
  title?: string;
  data?: Array<{ name: string; value: number }>;
}

const PieChart: React.FC<PieChartProps> = ({
  title = "Traffic Sources",
  data: propData,
}) => {
  const chartData = propData || data;

  return (
    <div className="chart-container">
      <h3 className="text-base font-medium mb-4">{title}</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsPieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                border: "1px solid hsl(var(--border))",
              }}
              formatter={(value: number, name: string) => [`${value}`, name]}
            />
            <Legend />
          </RechartsPieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieChart;
