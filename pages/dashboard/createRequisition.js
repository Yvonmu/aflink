import React from 'react'
import { MdDelete } from 'react-icons/md';
import Dashboard from '../../components/dashboard';


const CreateRequisition = () => {
    var number = 1;
    return (
      <Dashboard>
        <section className="w-full flex justify-center my-16">
          <div className="w-3/4 shadow-xl bg-white m-8 p-8">
            <h1 className="font-serif text-3xl underline font-bold text-black text-center uppercase mb-12">
              requisition form
            </h1>
            <div>
              <div className="flex md:w-full md:justify-end items-end mb-4 sm:flex-wrap w-1/2 font-serif">
                <div className="w-1/2 flex space-x-4">
                  <div className="md:w-1/4 sm:w-1/2 capitalize">order No.</div>
                  <div className="md:w-3/4 sm:w-1/2">
                    <input
                      className="border w-full border-red-300 rounded"
                      type={"text"}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex space-x-4 font-serif">
                <p className="capitalize">Reason</p>
                <input
                      className="border w-full border-red-300 rounded"
                      type={"text"}
                    />
              </div>
              <div className="">
                <div className="">
                  <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full overflow-hidden">
                      <table className="w-full">
                        <thead>
                          <tr>
                            <th className="py-3 border-b-2 text-left text-xs font-semibold text-gray-700 tracking-wider">
                              #
                            </th>
                            <th className="py-3 border-b-2 text-left text-xs font-semibold text-gray-700 tracking-wider">
                              Item
                            </th>
                            <th className="py-3 border-b-2 text-left text-xs font-semibold text-gray-700 tracking-wider">
                              Cost
                            </th>
                            <th className="py-3 border-b-2 text-left text-xs font-semibold text-gray-700 tracking-wider">
                              Qty.
                            </th>
                            <th className="pl-2 py-3 border-b-2 text-left text-xs font-semibold text-gray-700 tracking-wider">
                              Destination
                            </th>
                            <th className="py-3 border-b-2"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border-b border-gray-200 bg-white text-sm">
                              {number}.
                            </td>
                            <td className="py-5 border-b border-gray-200 bg-white text-sm">
                            <select className="border border-red-300 w-full px-2 rounded">
                                <option>Select...</option>
                                <option>Card</option>
                                <option>Mobile Money</option>
                                <option>Airtel Money</option>
                              </select>
                              
                            </td>
                            <td className="py-5 px-2 border-b border-gray-200 bg-white text-sm">
                            <input
                                className="border w-full border-red-300 rounded"
                                type={"number"}
                              />
                            </td>
                            <td className="w-8 border-b border-gray-200 bg-white text-sm">
                              <input
                                className="border w-12 border-red-300 rounded"
                                type={"number"}
                              />
                            </td>
                            <td className="pl-3 py-5 border-b border-gray-200 bg-white text-sm">
                            <select className="border border-red-300 w-full px-2 rounded">
                                <option>Select...</option>
                                <option>Card</option>
                                <option>Mobile Money</option>
                                <option>Airtel Money</option>
                              </select>
                            </td>
                            <td className="py-5 border-b border-gray-200 text-2xl text-right">
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
                      <div className="flex font-serif my-4 justify-end w-full">
                        <div className="">
                          <button className="rounded bg-red-600 px-2 text-white">
                            Add Item{" "}
                          </button>
                        </div>
                      </div>
                      <h1 className="underline decoration-red-600 text-red-600 font-serif font-bold">
                        Requested by
                      </h1>
                      <div className="font-serif py-4 flex w-1/2">
                        <label className="w-1/3">Names</label>
                        <input
                          className="border h-1/2 w-1/3 border-red-300 rounded"
                          type={"text"}
                        />
                      </div>
                      <div className="font-serif flex w-1/2">
                        <label className="w-1/3">Position</label>
                        <input
                          className="border h-1/2 w-1/2 border-red-300 rounded"
                          type={"text"}
                        />
                      </div>
                      <h1 className="underline decoration-red-600 text-red-600 font-serif pt-8 font-bold">
                        Verified by
                      </h1>
                      <div className="font-serif py-4 flex w-1/2">
                        <label className="w-1/3">Names</label>
                        <input
                          className="border h-1/2 w-1/3 border-red-300 rounded"
                          type={"text"}
                        />
                      </div>
                      <div className="font-serif flex w-1/2">
                        <label className="w-1/3">Position</label>
                        <input
                          className="border h-1/2 w-1/2 border-red-300 rounded"
                          type={"text"}
                        />
                      </div>
                      <h1 className="underline decoration-red-600 text-red-600 font-serif pt-8 font-bold">
                        Authorized by
                      </h1>
                      <div className="font-serif py-4 flex w-1/2">
                        <label className="w-1/3">Names</label>
                        <input
                          className="border h-1/2 w-1/3 border-red-300 rounded"
                          type={"text"}
                        />
                      </div>
                      <div className="font-serif flex w-1/2">
                        <label className="w-1/3">Position</label>
                        <input
                          className="border h-1/2 w-1/2 border-red-300 rounded"
                          type={"text"}
                        />
                      </div>
  
                      <div className="flex font-serif my-4 justify-end w-full">
                        <div className="">
                          <button className="rounded bg-red-600 px-2 text-white text-lg">
                            Save Changes{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Dashboard>
    );
}

export default CreateRequisition
