import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    ResponsiveContainer,
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from 'recharts';

const Statistics = () => {
    const data = useLoaderData();



    return (
        <div className='mt-5'>
            <div className="bg-[url('vector.png')] bg-no-repeat bg-left p-24">
                <h2 className='text-3xl font-semibold text-center'>Statistics</h2>
            </div>
            <div className='mx-20 md:mx-40 mb-20'>
                <ComposedChart
                    width={1000}
                    height={400}
                    data={data}
                    margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="mark" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="mark" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="mark" stroke="#ff7300" />
                </ComposedChart>
            </div>
        </div>
    );
};

export default Statistics;Statistics