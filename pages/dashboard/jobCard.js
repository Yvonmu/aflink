import React from 'react'
import { MdDelete, MdOutlineUpdate } from 'react-icons/md'
import Dashboard from '../../components/dashboard'

const JobCard = () => {
  return (
    <Dashboard>
      <section className="w-full flex justify-center my-16">
        <div className="w-3/4 shadow-xl bg-white m-8 p-8">
          <h1 className="font-serif text-3xl underline font-bold text-black text-center uppercase mb-12">
            job card
          </h1>
          <div>
            <div className="">
              <div className="">
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                  <div className="inline-block min-w-full overflow-hidden">
                    <table className="w-full">
                      <thead>
                        <tr>
                        <th className="py-3 px-5 border-b-2 text-left text-xs font-semibold text-gray-700 tracking-wider">
                            Customer
                          </th>
                          <th className="py-3 px-5 border-b-2 text-center text-xs font-semibold text-gray-700 tracking-wider">
                            Description
                          </th>
                          <th className="py-3 px-5 border-b-2 text-center text-xs font-semibold text-gray-700 tracking-wider">
                            Material
                          </th>
                          <th className="py-3 px-5 border-b-2 text-center text-xs font-semibold text-gray-700 tracking-wider">
                            Qty.
                          </th>
                          <th className="pl-2 py-3 px-5 border-b-2 text-left text-center text-xs font-semibold text-gray-700 tracking-wider">
                            Width(M)
                          </th>
                          <th className="py-3 px-5 border-b-2 text-center text-left text-xs font-semibold text-gray-700 tracking-wider">
                            Height(M)
                          </th>
                          <th className="py-3 px-5 border-b-2 text-center text-xs font-semibold text-gray-700 tracking-wider">
                            Date
                          </th>
                          <th className="py-3 px-5 border-b-2"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                        <td className="py-5 px-5 border-b border-gray-200 bg-white text-sm">
                        <h1 className='text-lg'>john doe</h1>
                            <p className='text-xs text-gray-500'>+07888888766</p>
                          </td>
                          <td className="py-5 px-5 border-b border-gray-200 bg-white text-sm">
                            kkk
                          </td>
                          <td className="py-5 px-5 px-2 border-b border-gray-200 bg-white text-sm">
                            Lorem
                          </td>
                          <td className="w-8 text-center border-b border-gray-200 bg-white text-sm">
                            5
                          </td>
                          <td className="px-5 py-5 border-b text-center border-gray-200 bg-white text-sm">
                            54
                          </td>
                          <td className="py-5 px-5 text-center border-b border-gray-200 bg-white text-sm">
                            6
                          </td>
                          <td className="py-5 px-5 border-b text-center border-gray-200 bg-white text-sm">
                            11/11/2022
                          </td>
                          <td className="py-5 border-b border-gray-200 text-2xl text-right">
                            <button
                              type="button"
                              className="inline-block text-green-600"
                            >
                              <MdOutlineUpdate />
                            </button>
                            <button
                              type="button"
                              className="inline-block text-red-600 hover:text-red-600"
                            >
                              <MdDelete />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Dashboard>
  )
}

export default JobCard
