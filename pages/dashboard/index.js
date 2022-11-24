import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import Chart from "react-google-charts";
import { AiFillDashboard } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { RiCommunityFill, RiCustomerService2Fill, RiTeamFill } from "react-icons/ri";
import { FcAdvertising, FcParallelTasks } from "react-icons/fc";
import axios from "axios";
import { Store } from "../../utils/store";
import Cookies from "js-cookie";
import Gun from "gun/gun";
export const dataChart = [
  ["Year", "Task", "Progress"],
  ["06/22", 1000, 400],
  ["08/22", 1170, 460],
  ["07/22", 660, 1120],
  ["09/22", 1030, 540],
];

export const options = {
  title: "Team Performance",
  curveType: "function",
  legend: { position: "bottom" },
};
import Dashboard from "../../components/dashboard";
import { HiOutlineShoppingCart, HiTicket } from "react-icons/hi";
import { MdOutlineLocalConvenienceStore } from "react-icons/md";
import { TbReport } from "react-icons/tb";

const IndexDashboard = () => {
  return (
    <Dashboard>
      <div className="h-full pb-12">
        <h1 className="pb-8 pt-16 text-gray-600 px-8">
          <strong className="text-black">Analytics /</strong> Dashboard
        </h1>
        <section className="grid md:grid-cols-4 sm:grid-cols-1 mb-8 mx-12 gap-10">
          <div className="bg-white shadow-xl px-2">
            <div className="py-4 flex">
              <TbReport className="mt-1 w-1/4 mr-2 text-6xl text-red-600" />
              <div className="right-0 md:w-3/4 sm:w-1/2 sm:ml-4 md:ml-16">
                <h1 className="mt-2 text-4xl md:text-right">
                  0
                </h1>
                <h1 className="mb-0 md:text-right">ItemReceived</h1>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-xl px-2">
            <div className="py-4 flex">
              <HiOutlineShoppingCart className="mt-1 w-1/4 mr-2 text-6xl text-red-600" />
              <div className="right-0 md:w-3/4 sm:w-1/2 sm:ml-4 md:ml-16">
              <h1 className="mt-2 text-4xl md:text-right">
                  0
                </h1>
                <h1 className="mb-0 md:text-right">Job Cards</h1>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-xl px-2">
            <div className="py-4 flex">
              <MdOutlineLocalConvenienceStore className="mt-1 w-1/4 mr-2 text-6xl text-red-600" />
              <div className="right-0 md:w-3/4 sm:w-1/2 sm:ml-4 md:ml-16">
              <h1 className="mt-2 text-4xl md:text-right">
                  0
                </h1>
                <h1 className="mb-0 md:text-right">Suppliers</h1>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-xl px-2">
            <div className="py-4 flex">
              <RiCustomerService2Fill className="mt-1 w-1/4 mr-2 text-6xl text-red-600" />
              <div className="right-0 md:w-3/4 sm:w-1/2 sm:ml-4 md:ml-16">
              <h1 className="mt-2 text-4xl md:text-right">
                  0
                </h1>
                <h1 className="mb-0 md:text-right">Customers</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white md:mx-2 shadow-xl mb-8 py-4 px-2">
          <h4>Performance</h4>
          <div>
            <Chart
              chartType="LineChart"
              width="100%"
              height="400px"
              data={dataChart}
              options={options}
            />
          </div>
        </section>
        <section className="mb-8 py-4 px-2">
          <div className="">
            <div className="card mb-8 flex-fill">
              <div className="card-header">
                <h5 className="card-title mb-0">Latest Tasks</h5>
              </div>
              <table className="table table-hover my-0">
                <thead className="border-b">
                  <tr>
                    <th>Task Name</th>
                    <th className="d-none d-xl-table-cell">Start Date</th>
                    <th className="d-none d-xl-table-cell">End Date</th>
                    <th className="d-none d-xl-table-cell">Progress</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td>item.title</td>
                    <td className="d-none d-xl-table-cell text-sm text-gray-900 font-light whitespace-nowrap">
                      item.start_date
                    </td>
                    <td className="d-none d-xl-table-cell">item.due_date</td>
                    <td className="flex justify-center h-full w-full ">
                      zcvzsd
                    </td>
                    <td className="">
                      <span className="badge bg-green-600">Progress</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </Dashboard>
  );
};

export default IndexDashboard;
