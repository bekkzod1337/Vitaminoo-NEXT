'use client';
import React from 'react';
import {
  Box,
  Card,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  Avatar,
} from '@mui/material';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Insights, Star } from '@mui/icons-material';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface ReportAnalyticsProps {
  showStats: boolean;
}

const ReportAnalytics: React.FC<ReportAnalyticsProps> = ({ showStats }) => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'This week',
        data: [10000, 18000, 30000, 42000, 50000, 25000, 15000],
        backgroundColor: (context: any) =>
          context.dataIndex === 4 ? '#3B82F6' : 'gray',
        borderRadius: 12,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, ticks: { stepSize: 10000 } },
      x: { grid: { display: false } },
    },
  };

  const topProducts = [
    { name: 'Azimak 500mg', type: 'Antibiotics', color: '#FFB3C1', orders: 250, img: '/product/1.png' },
    { name: 'Diprosan', type: 'Hormone', color: '#FFD166', orders: 225, img: '/product/1.png' },
    { name: 'Fanigan', type: 'Pain relief', color: '#9AE6B4', orders: 180, img: '/product/1.png' },
    { name: 'Fenibut 250mg', type: 'Sedative', color: '#BEE3F8', orders: 120, img: '/product/1.png' },
    { name: 'Azimak 500mg', type: 'Antibiotics', color: '#FFB3C1', orders: 96, img: '/product/1.png' },
  ];

  const maskValue = (value: string | number) => (showStats ? value : '*****');

  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
      {/* Left Section */}
      <Card
        sx={{
          flex: 2,
          p: 3,
          borderRadius: 3,
          border: '1px solid #ECEFF3',
          boxShadow: '0px 1px 3px rgba(16,24,40,0.1)',
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row" alignItems="center" spacing={1}>
            <Insights sx={{ color: '#3B82F6' }} />
            <Typography fontSize={20} fontWeight={600}>
              Report Analytics
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1}>
            <Select size="small" defaultValue="Categories" sx={{ borderRadius: 5 }}>
              <MenuItem value="Categories">Categories</MenuItem>
              <MenuItem value="Products">Products</MenuItem>
            </Select>
            <Select size="small" defaultValue="Brand" sx={{ borderRadius: 5 }}>
              <MenuItem value="Brand">Brand</MenuItem>
            </Select>
            <Select size="small" defaultValue="Weekly" sx={{ borderRadius: 5 }}>
              <MenuItem value="Weekly">Weekly</MenuItem>
              <MenuItem value="Monthly">Monthly</MenuItem>
            </Select>
          </Stack>
        </Stack>

        <Box sx={{ mt: 3 }}>
          <Bar data={data} options={options} />
        </Box>

        <Stack direction="row" spacing={3} mt={3}>
          <Card sx={{ flex: 1, p: 2, textAlign: 'center', borderRadius: 2 }}>
            <Typography color="#555">Amount</Typography>
            <Typography fontWeight={600} fontSize={20}>
              {maskValue('8,439,000')}
            </Typography>
          </Card>
          <Card sx={{ flex: 1, p: 2, textAlign: 'center', borderRadius: 2 }}>
            <Typography color="#555">Growth</Typography>
            <Typography fontWeight={600} fontSize={20}>
              {maskValue('+2,530,760')}
            </Typography>
          </Card>
          <Card sx={{ flex: 1, p: 2, textAlign: 'center', borderRadius: 2 }}>
            <Typography color="#555">Growth Percentage</Typography>
            <Typography fontWeight={600} fontSize={20}>
              {maskValue('17.00%')}
            </Typography>
          </Card>
        </Stack>
      </Card>

      {/* Right Section */}
      <Card
        sx={{
          flex: 1,
          p: 3,
          borderRadius: 3,
          border: '1px solid #ECEFF3',
          boxShadow: '0px 1px 3px rgba(16,24,40,0.1)',
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row" alignItems="center" spacing={1}>
            <Star sx={{ color: '#22C55E' }} />
            <Typography fontSize={20} fontWeight={600}>
              Top Products
            </Typography>
          </Stack>
          <TextField
            size="small"
            placeholder="Search"
            sx={{ width: 120, borderRadius: 1 }}
          />
        </Stack>

        <Stack direction="row" justifyContent="space-between" mt={3} mb={1}>
          <Typography fontSize={14} color="#555">
            Product Name
          </Typography>
          <Typography fontSize={14} color="#555">
            Total Orders
          </Typography>
        </Stack>

        <Stack spacing={2} mt={1}>
          {topProducts.map((p, i) => (
            <Stack
              key={i}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                p: 1.2,
                borderRadius: 2,
                '&:hover': { backgroundColor: '#F9FAFB' },
              }}
            >
              <Stack direction="row" alignItems="center" spacing={1.2}>
                <Avatar src={p.img} alt={p.name} sx={{ width: 40, height: 40, borderRadius: 1 }} />
                <Stack>
                  <Typography fontWeight={500}>{p.name}</Typography>
                  <Typography
                    fontSize={13}
                    fontWeight={500}
                    sx={{
                      color: '#111',
                      backgroundColor: p.color,
                      px: 1.2,
                      borderRadius: 2,
                      width: 'fit-content',
                      mt: 0.3,
                    }}
                  >
                    {p.type}
                  </Typography>
                </Stack>
              </Stack>
              <Typography fontWeight={500} color="#555">
                {maskValue(`${p.orders} Times`)}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Card>
    </Stack>
  );
};

export default ReportAnalytics;
