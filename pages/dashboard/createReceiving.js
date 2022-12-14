import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import Dashboard from "../../components/dashboard";

const CreateJobCard = () => {
  var number = 0;
  const [item, setItem] = useState([]);
  const [qty, setQty] = useState([]);
  const [unitCost, setUnitCost] = useState([]);
  const [tCost, setTCost] = useState([]);
  const [batch, setBatch] = useState([]);
  const [expireDate, setExpireDate] = useState([]);
  const [receivingData, setReceivingData] = useState([]);
  const handleAdd = () => {
    const qtyAll = [...qty, []];
    setQty(qtyAll);
    const unitCostAll = [...unitCost, []];
    setUnitCost(unitCostAll);
    const tCostAll = [...tCost, []];
    setTCost(tCostAll);
    const batchNo = [...batch, []];
    setBatch(batchNo);
    const expireDateAll = [...expireDate, []];
    setExpireDate(expireDateAll);
    const receivingDataAll = [...receivingData, []];
    setReceivingData(receivingDataAll);
  };
  const handleChange = (onChangeValue, i) => {
    const inputdata = [...val];
    inputdata[i] = onChangeValue.target.value;
    setReceivingData(inputdata);
  };
  const handleDelete = (i) => {
    const deleteVal = [...receivingData];
    console.log(i,1);
    deleteVal.splice(i, 1);
    setReceivingData(deleteVal);
  };
  return (
    <Dashboard>
      {/* <button onClick={()=>handleAdd()}>Add</button>
      {val.map((data,i)=>{
        return (
          <div>
            <input value={data} onChange={e=>handleChange(e,i)} />
            <button onClick={()=>handleDelete(i)}>X</button>
          </div>
        )
      })} */}
      <section className="w-full flex justify-center my-16">
        <div className="w-3/4 shadow-xl bg-white m-8 p-8">
          <h1 className="font-serif text-3xl underline font-bold text-black text-center uppercase mb-12">
            item receiving form
          </h1>
          <div>
            <div className="flex md:w-full mb-4 sm:flex-wrap w-1/2 md:space-x-8 sm:space-y-4 font-serif">
              <div className="w-full flex space-x-4">
                <div className="md:w-1/4 sm:w-1/2 capitalize">delivery No.</div>
                <div className="md:w-3/4 sm:w-1/2">
                  <input
                    className="border border-red-300 rounded"
                    type={"text"}
                    // value={details}
                    // onChange={(e) => setDetails(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full flex">
                <div className="md:w-1/3 sm:w-1/2 capitalize">
                  receiving date
                </div>
                <div className="flex md:w-3/4 sm:w-1/2">
                  <input
                    className="border border-red-300 w-1/2 rounded"
                    type={"date"}
                  />
                </div>
              </div>
            </div>
            <div className="flex md:w-full mb-4 sm:flex-wrap w-1/2 md:space-x-8 sm:space-y-4 font-serif">
              <div className="w-full flex space-x-4">
                <div className="md:w-1/4 sm:w-1/2 capitalize">supplier</div>
                <div className="md:w-3/4 sm:w-1/2">
                  <input
                    className="border border-red-300 rounded"
                    type={"text"}
                  />
                </div>
              </div>
              <div className="w-full flex">
                <div className="md:w-1/4 sm:w-1/2 capitalize">Contact No.</div>
                <div className="md:w-3/4 sm:w-1/2">
                  <input
                    className="border border-red-300 rounded"
                    type={"tel"}
                  />
                </div>
              </div>
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
                            Qty.
                          </th>
                          <th className="py-3 border-b-2 text-left text-xs font-semibold text-gray-700 tracking-wider">
                            Unit Cost
                          </th>
                          <th className="pl-2 py-3 border-b-2 text-left text-xs font-semibold text-gray-700 tracking-wider">
                            Tot. Cost
                          </th>
                          <th className="py-3 border-b-2 text-left text-xs font-semibold text-gray-700 tracking-wider">
                            Batch No.
                          </th>
                          <th className="py-3 border-b-2 text-left text-xs font-semibold text-gray-700 tracking-wider">
                            Exp. Date
                          </th>
                          <th className="py-3 border-b-2"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {receivingData.map((expireDate, i) => {
                          return (
                            <tr>
                              <td className="border-b border-gray-200 bg-white text-sm">
                                {number += 1}.
                              </td>
                              <td className="py-5 border-b border-gray-200 bg-white text-sm">
                                <select
                                  onChange={(e) => setItem(e.target.value)}
                                  className="border border-red-300 w-full px-2 rounded"
                                >
                                  <option>Select...</option>
                                  <option>Card</option>
                                  <option>Mobile Money</option>
                                  <option>Airtel Money</option>
                                </select>
                              </td>
                              <td className="py-5 px-2 border-b border-gray-200 bg-white text-sm">
                                <input
                                  className="mb-4 border w-12 border-red-300 rounded"
                                  type={"number"}
                                  value={qty}
                                  onChange={(e) => setQty(e.target.value)}
                                />
                              </td>
                              <td className="w-8 border-b border-gray-200 bg-white text-sm">
                                <input
                                  className="border w-16 border-red-300 rounded"
                                  type={"number"}
                                  value={unitCost}
                                  onChange={(e) => setUnitCost(e.target.value)}
                                />
                              </td>
                              <td className="pl-3 py-5 border-b border-gray-200 bg-white text-sm">
                                <input
                                  className="border w-16 border-red-300 rounded"
                                  type={"text"}
                                  value={tCost}
                                  onChange={(e) => setTCost(e.target.value)}
                                />
                              </td>
                              <td className="pl-3 py-5 border-b border-gray-200 bg-white text-sm">
                                <input
                                  className="border w-16 border-red-300 rounded"
                                  type={"text"}
                                  value={batch}
                                  onChange={(e) => setBatch(e.target.value)}
                                />
                              </td>
                              <td className="py-5 border-b border-gray-200 bg-white text-sm">
                                <input
                                  className="border w-16 border-red-300 rounded"
                                  type={"date"}
                                  value={expireDate}
                                  onChange={(e) =>
                                    setExpireDate(e.target.value)
                                  }
                                />
                              </td>
                              <td className="py-5 border-b border-gray-200 text-2xl text-right">
                                <button
                                  type="button"
                                  onClick={() => handleDelete(i)}
                                  className="inline-block text-red-600 hover:text-red-600"
                                >
                                  <MdDelete />
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    <div className="flex font-serif my-4 justify-end w-full">
                      <div className="">
                        <button
                          onClick={() => handleAdd()}
                          className="rounded bg-red-600 px-2 text-white"
                        >
                          Add Item{" "}
                        </button>
                      </div>
                    </div>
                    <h1 className="underline decoration-red-600 text-red-600 font-serif font-bold">
                      Received by
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
};

export default CreateJobCard;
