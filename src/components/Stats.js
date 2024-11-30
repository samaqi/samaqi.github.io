import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
    labels: [
        'Rinoa Heartilly/Squall Leonhart',
        'Seifer Almasy/Squall Leonhart',
        'Seifer Almasy/Quistis Trepe',
        'Irvine Kinneas/Selphie Tilmitt',
        'Squall Leonhart/Quistis Trepe',
        'Seifer Almasy/Fujin',
        'Irvine Kinneas/Quistis Trepe',
        'Zell Dincht/Selphie Tilmitt',
        'Irvine Kinneas/Squall Leonhart',
        'Seifer Almasy/Zell Dincht',
        'Zell Dincht/Squall Leonhart',
        'Laguna Loire/Raine Loire',
        'Cid Kramer/Edea Kramer',
        'Zell Dincht/Library Girl',
        'Fujin/Squall Leonhart'
    ],
    datasets: [
        {
            label: 'AO3',
            data: [677, 535, 233, 179, 31, 22, 6, 9, 72, 105, 59, 61, 32, 38, 12],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
        {
            label: 'FanFiction',
            data: [130, 31, 31, 11, 4, 2, 1, 0, 13, 24, 1, 14, 1, 2, 4],
            backgroundColor: 'rgba(153, 102, 255, 0.6)',
        }
    ]
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Number of Works by Ship',
        },
    },
};

const Stats = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Statistics
                </Typography>
                <Bar data={data} options={options} />
            </CardContent>
        </Card>
    );
};

export default Stats;