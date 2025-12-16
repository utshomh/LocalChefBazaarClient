import { useQuery } from "@tanstack/react-query";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

import useAxios from "../../hooks/useAxios";
import Loader from "../../ui/shared/Loader";

const StatsPage = () => {
  const axios = useAxios();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["stats"],
    queryFn: () => axios.get("/stats").then((res) => res.data),
  });

  if (isLoading) return <Loader />;

  if (isError) throw new Error(error.message);

  const {
    totalUsers,
    totalChefs,
    totalMeals,
    totalOrders,
    paidOrders,
    totalReviews,
    pendingOrders,
    deliveredOrders,
    cancelledOrders,
    totalRevenue,
    ordersLast7Days,
  } = data;

  /* ---------- Chart Data ---------- */

  const ordersStatusData = [
    { name: "paid", value: paidOrders, color: "#0088FE" },
    { name: "pending", value: pendingOrders, color: "#FFBB28" },
    { name: "delivered", value: deliveredOrders, color: "#00C49F" },
    { name: "cancelled", value: cancelledOrders, color: "#FF4D4F" },
  ];

  const totalsData = [
    { label: "Users", value: totalUsers },
    { label: "Chefs", value: totalChefs },
    { label: "Meals", value: totalMeals },
    { label: "Orders", value: totalOrders },
    { label: "Reviews", value: totalReviews },
    { label: "Revenue (৳)", value: totalRevenue },
  ];

  return (
    <div className="space-y-8 p-6">
      <h2 className="text-4xl font-bold">Platform Statistics</h2>

      {/* Top Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {totalsData.map((item) => (
          <div
            key={item.label}
            className="w-full bg-base-100 shadow rounded-box p-6 text-center"
          >
            <div className="text-2xl font-bold">{item.value}</div>
            <div className="text-sm opacity-60">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Orders Status */}
        <div className="bg-base-100 shadow rounded-box p-6 space-y-4">
          <h3 className="text-xl font-semibold">Orders Status</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={ordersStatusData} dataKey="value" label>
                {ordersStatusData.map((_, i) => (
                  <Cell key={i} fill={ordersStatusData[i].color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Orders & Revenue Trend */}
        <div className="bg-base-100 shadow rounded-box p-6 space-y-4">
          <h3 className="text-xl font-semibold">
            Orders & Revenue (Last 7 Days)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={ordersLast7Days}>
              <XAxis
                dataKey="_id"
                tickFormatter={(value) =>
                  new Date(value).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                  })
                }
              />

              {/* Orders axis (LEFT) */}
              <YAxis
                yAxisId="orders"
                allowDecimals={false}
                label={{ value: "Orders", angle: -90, position: "insideLeft" }}
              />

              {/* Revenue axis (RIGHT) */}
              <YAxis
                yAxisId="revenue"
                orientation="right"
                label={{
                  value: "Revenue (৳)",
                  angle: -90,
                  position: "insideRight",
                }}
              />

              <Tooltip
                formatter={(value, name) =>
                  name === "revenue"
                    ? [`৳${value}`, "Revenue"]
                    : [value, "Orders"]
                }
              />

              <Legend />

              <Line
                yAxisId="orders"
                type="monotone"
                dataKey="orders"
                stroke="#0088FE"
                strokeWidth={2}
                dot={{ r: 4 }}
              />

              <Line
                yAxisId="revenue"
                type="monotone"
                dataKey="revenue"
                stroke="#00C49F"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
