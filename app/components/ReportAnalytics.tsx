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
    maintainAspectRatio: false,
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
    { name: 'Azimak 500mg', type: 'Antibiotics', color: '#FFB3C1', orders: 96, img: '/product/1.png' },
  ];

  const maskValue = (value: string | number) => (showStats ? value : '*****');

  return (
    <Stack className='mt-5' direction={{ xs: 'column', md: 'row' }} spacing={3}>
      {/* Left Section */}
      <Card className='w-[655px] h-[668px]'
        sx={{
          flex: 2,
          p: 0,
          borderRadius: 3,
          border: '1px solid #ECEFF3',
          boxShadow: '0px 1px 3px rgba(16,24,40,0.1)',
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row" alignItems="center" spacing={1}>
            {/* icon circle 44x44 */}
            <Box sx={{ width: 44, height: 44, bgcolor: '#2D71F7', borderRadius: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1 }}>
              <Insights sx={{ color: '#FFFFFF', fontSize: 24 }} />
            </Box>
            <Typography fontSize={24} fontWeight={500} sx={{ width: 180 }}>
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

        {/* Chart wrapper: matches provided dimensions (615x444) with inner plot area 517x352 */}
        <Box sx={{ mt: 3, px: 2.5, py: 2.5, width: '615px', height: '444px', border: '1px solid #DFE1E7', borderRadius: '16px', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
            <Bar data={data} options={options} />
          </Box>
        </Box>

        {/* Three summary cards with exact sizes from spec: width ~191.67px, height 92px, padding 12px, borderRadius 16px */}
        <Stack direction="row" spacing={3} mt={3}>
          <Card sx={{ width: '191.67px', height: '92px', p: 1.5, borderRadius: '16px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography color="#555" sx={{ fontSize: '18px', lineHeight: '25px' }}>Amount</Typography>
            <Typography fontWeight={600} fontSize={28} sx={{ mt: 0.5 }}>
              {maskValue('8,439,000')}
            </Typography>
          </Card>
          <Card sx={{ width: '191.67px', height: '92px', p: 1.5, borderRadius: '16px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography color="#555" sx={{ fontSize: '18px', lineHeight: '25px' }}>Growth</Typography>
            <Typography fontWeight={600} fontSize={28} sx={{ mt: 0.5 }}>
              {maskValue('+2,530,760')}
            </Typography>
          </Card>
          <Card sx={{ width: '191.67px', height: '92px', p: 1.5, borderRadius: '16px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography color="#555" sx={{ fontSize: '18px', lineHeight: '25px' }}>Growth Percentage</Typography>
            <Typography fontWeight={600} fontSize={28} sx={{ mt: 0.5 }}>
              {maskValue('17.00%')}
            </Typography>
          </Card>
        </Stack>
      </Card>

      {/* Right Section */}
      <Card
        sx={{
          width: '424px',
          height: '668px',
          p: '2px',
          borderRadius: '20px',
          border: '1px solid #ECEFF3',
          boxShadow: '0px 1px 3px rgba(16,24,40,0.1)',
          boxSizing: 'border-box',
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row" alignItems="center" spacing={1}>
            <Box sx={{ width: 44, height: 44, bgcolor: '#22C55E', borderRadius: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1 }}>
              <Star sx={{ color: '#FFFFFF', fontSize: 24 }} />
            </Box>
            <Typography fontSize={24} fontWeight={500}>
              Top Products
            </Typography>
          </Stack>

          <TextField
            size="small"
            placeholder="Search"
            sx={{
              width: '156px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '100px',
                bgcolor: '#F8FAFB',
                height: '44px',
              },
              '& .MuiOutlinedInput-input': { padding: '6px 12px' },
            }}
          />
        </Stack>

        {/* Table container: 384x552 inside right card */}
        <Box sx={{ mt: 3, width: '384px', height: '552px', background: '#FFFFFF', border: '1px solid #ECEFF3', borderRadius: '12px', boxSizing: 'border-box', display: 'flex', overflow: 'hidden' }}>
          {/* Product Name column - 267 x 552 */}
          <Box sx={{ width: '267px', height: '552px', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <Box sx={{ display: 'flex', alignItems: 'center', px: '12px', gap: 1, height: '48px', background: '#ECEFF3', borderBottom: '1px solid #DFE1E7' }}>
              <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#111' }}>Product Name</Typography>
            </Box>

            {/* Rows */}
            <Box sx={{ flex: 1, overflowY: 'auto' }}>
              {topProducts.map((p, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'center', px: '12px', gap: 1.5, height: '84px', borderBottom: '1px solid #ECEFF3' }}>
                  <Avatar src={p.img} alt={p.name} sx={{ width: 58, height: 58, borderRadius: '11.2258px' }} />
                  <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#111' }}>{p.name}</Typography>
                    <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#111', backgroundColor: p.color, px: 1, borderRadius: 1, width: 'fit-content', mt: 0.3 }}>{p.type}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Revenue / Orders column - 117 x 552 */}
          <Box sx={{ width: '117px', height: '552px', display: 'flex', flexDirection: 'column', borderLeft: '1px solid #ECEFF3' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '48px', background: '#ECEFF3', borderBottom: '1px solid #DFE1E7' }}>
              <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#111' }}>Total Orders</Typography>
            </Box>
            <Box sx={{ flex: 1 }}>
              {topProducts.map((p, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '84px', borderBottom: '1px solid #ECEFF3' }}>
                  <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#111' }}>{p.orders} Times</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Card>
    </Stack>
  );
};

export default ReportAnalytics;
