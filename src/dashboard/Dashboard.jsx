import React, {  useState, useEffect } from 'react';
import axios from 'axios';

import { BarChart, AreaChart, LineChart, Line, Area, Bar, Rectangle, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
function Dashboard() {
    const [data, setData] = useState([]);
    const myapi = () => {
        axios.get('https://dummyjson.com/products').then((d) => {
            setData(d.data.products);
        })
    }
    useEffect(() => {
        myapi()
    }, []);

    return (
        <div className='container cus-area'>
            <div className='row text-light d-flex gap-4 '>
                  
                <section className='col-md-7 cus-filter  rounded pt-4 pb-3 ms-1 me-1' style={{ height: '400px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >

                            <XAxis dataKey=" " />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="stock" fill="#8884d8" activeBar={<Rectangle fill="orange" stroke="blue" />} />
                            <Bar dataKey="rating" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                        </BarChart>
                    </ResponsiveContainer>
                </section>

                <section className='col-md-4 cus-filter rounded pt-4 pb-3' style={{ height: '400px' }}>
                    <ResponsiveContainer>
                        <AreaChart
                            data={data}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >

                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>
                    </ResponsiveContainer>
                </section>

            </div>
            <div className='row text-light d-flex gap-4  '>
                <section className='col-md-6 cus-filter mt-4 rounded pt-4 pb-3 mb-4'>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            
                            <XAxis dataKey="" />
                            <YAxis />
                            <Tooltip />
                             
                            <Line type="monotone" dataKey="price"   stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="stock"   stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </section>
                <section className='col-md-5 cus-filter mt-4 rounded pt-4 pb-3 mb-4'>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            
                            <XAxis dataKey="" />
                            <YAxis />
                            <Tooltip />
                             
                            <Line type="monotone" dataKey="price"   stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="stock"   stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </section>

            </div>

        </div>
    )
}

export default Dashboard