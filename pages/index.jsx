import Head from 'next/head'
import Link from 'next/link'
import Navbar from './navbar'
import LineChart from './linechart';
import PieChart from './piechart';
import React, {useState, useEffect} from 'react';

export default function Home() {
  const [dateState, useDateState] = useState(new Date());
useEffect(() => {
  setInterval(() => setDateState(new Date()), 30000);
}, []);
  return (
    <div >
      <Navbar></Navbar>
      <div className='infos'>
      {' '}
                {dateState.toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                })}
                <h1 className="h1Central">Sistema de Controle Pet Shop</h1>
      {dateState.toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                })}
      </div>
      <h2>Gráficos em Destaque:</h2>
      <div className='Charts'>
      <div className='lineHomeChart'><LineChart></LineChart></div>
      <div className='pieHomeChart'><PieChart></PieChart></div>
      </div>

    </div>
  )
}
