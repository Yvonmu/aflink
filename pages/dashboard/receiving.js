import React from 'react'
import { MdDelete, MdOutlineUpdate } from 'react-icons/md'
import Dashboard from '../../components/dashboard'

const Receiving = () => {
  return (
    <Dashboard>
        <section className="w-full flex justify-center my-16">
          <div className="w-3/4 shadow-xl bg-white m-8 p-8">
            <h1 className="font-serif text-3xl underline font-bold text-black text-center uppercase mb-12">
              receiving form
            </h1>
            <div>
              <div className="">
                <div className="">
                  <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full overflow-hidden">
                      <table className="w-full">
                        <thead>
                          <tr className='bg-black'>
                            <th className="py-3 px-5 border-b-2 text-left text-xs font-semibold text-white tracking-wider">
                              Item
                            </th>
                            <th className="py-3 px-5 border-b-2 text-left text-xs font-semibold text-white tracking-wider">
                              Qty.
                            </th>
                            <th className="py-3 px-5 border-b-2 text-left text-xs font-semibold text-white tracking-wider">
                              Unit Cost
                            </th>
                            <th className="py-3 px-5 border-b-2 text-left text-xs font-semibold text-white tracking-wider">
                              Tot. Cost
                            </th>
                            <th className="py-3 px-5 border-b-2 text-left text-xs font-semibold text-white tracking-wider">
                              Batch No.
                            </th>
                            <th className="py-3 px-5 border-b-2 text-left text-xs font-semibold text-white tracking-wider">
                              Exp. Date
                            </th>
                            <th className="py-3 px-5 border-b-2 text-left text-xs font-semibold text-white tracking-wider">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-5 px-5 border-b border-gray-200 bg-white text-sm">
                            Item data
                            </td>
                            <td className="py-5 px-5 border-b border-gray-200 bg-white text-sm">
                            5
                            </td>
                            <td className="py-5 px-5 border-b border-gray-200 bg-white text-sm">
                              46665
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            4223424
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            42234233sd24
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            11/11/2022
                            </td>
                            <td className="py-5 px-5 border-b border-gray-200 text-2xl">
                              <button
                                type="button"
                                className="inline-block text-green-600 hover:text-red-600"
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

export default Receiving
