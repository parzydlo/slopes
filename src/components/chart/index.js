/*import {h, render} from 'preact';
import {LineChart, CartesianGrid, XAxis,YAxis,Tooltip,Legend,Line} from 'precharts'

const DATA = [

    { name: 'A', a: 4000},
    { name: 'B', a: 3000},
    { name: 'C', a: 2000},
    { name: 'D', a: 2780},
    { name: 'E', a: 1890},
    { name: 'F', a: 2390},
    { name: 'G', a: 3490}

];

render((
    <LineChart width={500} height={200} data={DATA}>
        <XAxis dataKey="name" orientation="bottom" height={20}/>
        <YAxis dataKey="Temperature"/>
        <CartesianGrid strokeDasharray="3 3" />
        <Line type="natural" datakey="a" stroke="#82ca9d" />
        <Tooltip />
        <Legend />
    </LineChart>
), document.body); /*


/* ignore disss
import { h, render } from 'preact';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'precharts';

const DATA = [
    { name: 'A', a: 4000, b: 2400 },
    { name: 'B', a: 3000, b: 1398 },
    { name: 'C', a: 2000, b: 9800 },
    { name: 'D', a: 2780, b: 3908 },
    { name: 'E', a: 1890, b: 4800 },
    { name: 'F', a: 2390, b: 3800 },
    { name: 'G', a: 3490, b: 4300 }
];

render((
    <BarChart width={500} height={200} data={DATA}>
        <XAxis dataKey="name" orientation="bottom" height={20} />
        <YAxis dataKey="Frequency" orientation="side" height ={20}/>
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="a" fill="#82ca9d" />
        <Bar dataKey="b" fill="#8884d8" />
        <Tooltip />
        <Legend />
    </BarChart>
), document.body); */

//for line graph render
import { h, render } from 'preact';
import { ComposedChart, Area, Line, XAxis, CartesianGrid, Tooltip } from 'precharts';

const DATA = [
    { name: 'A', a: 4000, b: 2400 },
    { name: 'B', a: 3000, b: 1398 },
    { name: 'C', a: 2000, b: 9800 },
    { name: 'D', a: 2780, b: 3908 },
    { name: 'E', a: 1890, b: 4800 },
    { name: 'F', a: 2390, b: 3800 },
    { name: 'G', a: 3490, b: 4300 }
];

render((
    <ComposedChart width={500} height={200} data={DATA}>
        <XAxis dataKey="name" orientation="bottom" height={20} />
        <CartesianGrid strokeDasharray="3 3" />
        <Line dataKey="a" stroke="red" />
        <Area dataKey="b" fill="green" opacity={.3} />
        <Tooltip />
    </ComposedChart>
), document.body);