
import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatCard from "@/components/dashboard/StatCard";
import AreaChart from "@/components/dashboard/charts/AreaChart";
import BarChart from "@/components/dashboard/charts/BarChart";
import LineChart from "@/components/dashboard/charts/LineChart";
import PieChart from "@/components/dashboard/charts/PieChart";
import {
  DollarSign,
  Users,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <DashboardHeader 
        title="Dashboard" 
        subtitle="Welcome back! Here's an overview of your business" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Total Revenue"
          value="$24,780"
          icon={DollarSign}
          trend={{ value: "12% from last month", isPositive: true }}
        />
        <StatCard
          title="Active Users"
          value="573"
          icon={Users}
          trend={{ value: "5% from last month", isPositive: true }}
        />
        <StatCard
          title="Total Orders"
          value="1,245"
          icon={ShoppingCart}
          trend={{ value: "3% from last month", isPositive: false }}
        />
        <StatCard
          title="Conversion Rate"
          value="3.2%"
          icon={TrendingUp}
          trend={{ value: "0.8% from last month", isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <AreaChart title="Monthly Revenue" />
        <LineChart title="Weekly Traffic" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BarChart title="Top Products" />
        <PieChart title="Traffic Sources" />
      </div>
    </DashboardLayout>
  );
};

export default Index;
