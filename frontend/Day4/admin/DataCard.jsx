import React from 'react'
import Chart from "react-apexcharts";
import { useSelector } from 'react-redux';
import MyChart from '../MyChart';
import { PropTypes } from 'prop-types';

const DataCard = ({ userName }) => {

    const { isDark } = useSelector((state) => state.global);

    const state = {
        options: {
            chart: {
                id: "basic-bar",
                background: isDark ? '#1a1a1a' : '#ffffff', // Set background color based on dark mode
                foreColor: isDark ? '#ffffff' : '#373d3f', // Set text color based on dark mode
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
        ]
    };

    return (
        <div className=" dark:bg-slate-900 w-full h-screen" style={{ backgroundImage: "url(/img/bottom3.svg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className="pl-4 pr-4">
                <nav className="block w-full max-w-full bg-transparent text-white shadow-none rounded-xl transition-all px-0 py-1">
                    <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center p-3">
                        <div className="capitalize">
                            <nav aria-label="breadcrumb" className="w-max">
                                <ol className="flex flex-wrap items-center w-full bg-opacity-60 rounded-md bg-transparent p-0 transition-all">
                                    <li className="flex items-center text-blue-gray-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-light-blue-500">
                                        <a href="#">
                                            <p className="block antialiased font-anuphan text-sm leading-normal dark:text-purple4 text-purple2 font-normal transition-all hover:opacity-100">dashboard</p>
                                        </a>
                                        <span className="text-gray-500 text-sm antialiased font-anuphan font-normal leading-normal mx-2 pointer-events-none select-none">/</span>
                                    </li>
                                    <li className="flex items-center text-white-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-purple3">
                                        <p className="block antialiased font-anuphan text-sm leading-normal text-black font-normal dark:text-white">home</p>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="flex items-center">
                            <a>
                                <span className="font-anuphan">{userName}</span>
                            </a>
                        </div>
                    </div>
                </nav>
                <div className="mt-8">
                    <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
                        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white dark:bg-slate-800 text-gray-700 shadow-md">
                            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
                                    <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path>
                                    <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" clipRule="evenodd"></path>
                                    <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z"></path>
                                </svg>
                            </div>
                            <div className="p-4 text-right">
                                <p className="block antialiased text-sm leading-normal tracking-wider text-blue-gray-600 dark:text-white font-anuphan font-semibold">Today's Money</p>
                                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900 dark:text-white">$53k</h4>
                            </div>
                            <div className="border-t border-blue-gray-50 p-4">
                                <p className="block antialiased font-anuphan text-base leading-relaxed font-normal text-blue-gray-600 dark:text-white">
                                    <strong className="text-green-500 ">+55%</strong>&nbsp;than last week
                                </p>
                            </div>
                        </div>
                        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white dark:bg-slate-800 text-gray-700 shadow-md">
                            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-purple2 to-purple text-white shadow-purple3 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
                                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                            <div className="p-4 text-right">
                                <p className="block antialiased text-sm leading-normal text-blue-gray-600 dark:text-white font-anuphan font-semibold tracking-wider">Today's Users</p>
                                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900 dark:text-white">2,300</h4>
                            </div>
                            <div className="border-t border-blue-gray-50 p-4">
                                <p className="block antialiased font-anuphan text-base leading-relaxed font-normal text-blue-gray-600 dark:text-white">
                                    <strong className="text-green-500">+3%</strong>&nbsp;than last month
                                </p>
                            </div>
                        </div>
                        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white dark:bg-slate-800 text-gray-700 shadow-md">
                            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                                    <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
                                </svg>
                            </div>
                            <div className="p-4 text-right">
                                <p className="block antialiased text-sm leading-normal text-blue-gray-600 dark:text-white font-anuphan font-semibold tracking-wider">New Clients</p>
                                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900 dark:text-white">3,462</h4>
                            </div>
                            <div className="border-t border-blue-gray-50 p-4">
                                <p className="block antialiased font-anuphan text-base leading-relaxed font-normal text-blue-gray-600 dark:text-white">
                                    <strong className="text-red-500">-2%</strong>&nbsp;than yesterday
                                </p>
                            </div>
                        </div>
                        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white dark:bg-slate-800 text-gray-700 shadow-md">
                            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
                                    <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"></path>
                                </svg>
                            </div>
                            <div className="p-4 text-right">
                                <p className="block antialiased text-sm leading-normal text-blue-gray-600 dark:text-white font-anuphan font-semibold tracking-wider">Sales</p>
                                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900 dark:text-white">$103,430</h4>
                            </div>
                            <div className="border-t border-blue-gray-50 p-4">
                                <p className="block antialiased font-anuphan text-base leading-relaxed font-normal text-blue-gray-600 dark:text-white">
                                    <strong className="text-green-500">+5%</strong>&nbsp;than yesterday
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* <div className="mb-2 grid grid-cols-1 gap-6 xl:grid-cols-3">
                        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
                            <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
                                <div>
                                    <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">Projects</h6>
                                    <p className="antialiased font-sans text-sm leading-normal flex items-center gap-1 font-normal text-blue-gray-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" aria-hidden="true" className="h-4 w-4 text-blue-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                        </svg>
                                        <strong>30 done</strong> this month
                                    </p>
                                </div>
                                <button aria-expanded="false" aria-haspopup="menu" id=":r5:" className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
                                    <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                            <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2">
                                <table className="w-full min-w-[640px] table-auto">
                                    <thead>
                                        <tr>
                                            <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                                                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">companies</p>
                                            </th>
                                            <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                                                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">budget</p>
                                            </th>
                                            <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                                                <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">completion</p>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="py-3 px-5 border-b border-blue-gray-50">
                                                <div className="flex items-center gap-4">
                                                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Material XD Version</p>
                                                </div>
                                            </td>

                                            <td className="py-3 px-5 border-b border-blue-gray-50">
                                                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">$14,000</p>
                                            </td>
                                            <td className="py-3 px-5 border-b border-blue-gray-50">
                                                <div className="w-10/12">
                                                    <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">60%</p>
                                                    <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                                                        <div className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white" style={{width: "60%"}}></div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-5 border-b border-blue-gray-50">
                                                <div className="flex items-center gap-4">
                                                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Add Progress Track</p>
                                                </div>
                                            </td>
                                            <td className="py-3 px-5 border-b border-blue-gray-50">
                                                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">$3,000</p>
                                            </td>
                                            <td className="py-3 px-5 border-b border-blue-gray-50">
                                                <div className="w-10/12">
                                                    <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">10%</p>
                                                    <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                                                        <div className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white" style={{width: "10%"}}></div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-5 border-b border-blue-gray-50">
                                                <div className="flex items-center gap-4">
                                                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Fix Platform Errors</p>
                                                </div>
                                            </td>
                                            <td className="py-3 px-5 border-b border-blue-gray-50">
                                                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">Not set</p>
                                            </td>
                                            <td className="py-3 px-5 border-b border-blue-gray-50">
                                                <div className="w-10/12">
                                                    <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">100%</p>
                                                    <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                                                        <div className="flex justify-center items-center h-full bg-gradient-to-tr from-green-600 to-green-400 text-white" style={{width: "100%"}}></div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-5 border-b border-blue-gray-50">
                                                <div className="flex items-center gap-4">
                                                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Launch our Mobile App</p>
                                                </div>
                                            </td>
                                            <td className="py-3 px-5 border-b border-blue-gray-50">
                                                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">$20,500</p>
                                            </td>
                                            <td className="py-3 px-5 border-b border-blue-gray-50">
                                                <div className="w-10/12">
                                                    <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">100%</p>
                                                    <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                                                        <div className="flex justify-center items-center h-full bg-gradient-to-tr from-green-600 to-green-400 text-white" style={{width: "100%"}}></div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-5 border-b border-blue-gray-50">
                                                <div className="flex items-center gap-4">
                                                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Add the New Pricing Page</p>
                                                </div>
                                            </td>
                                            <td className="py-3 px-5 border-b border-blue-gray-50">
                                                <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">$500</p>
                                            </td>
                                            <td className="py-3 px-5 border-b border-blue-gray-50">
                                                <div className="w-10/12">
                                                    <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">25%</p>
                                                    <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                                                        <div className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white" style={{width: "25%"}}></div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div> */}
                </div>

            </div >
            <div className='h-120'>
                <MyChart />
            </div>
        </div >
    )
}

DataCard.prototypes = {
    userName: PropTypes.string.isRequired,
}


export default DataCard;