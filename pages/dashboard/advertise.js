import React from "react";
import Dashboard from "../../components/dashboard";

const Advertise = () => {
  return (
    <Dashboard>
      <div className="md:w-3/4 bg-white grid place-items-center h-full shadow-xl md:m-8">
        <div className="w-full">
          <div className="mt-4">
            <table className="">
              <thead>
                <tr>
                  <th scope="">Image</th>
                  <th scope="">Title</th>
                  <th scope="">Details</th>
                  <th scope="right-0 bg-black">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>item.title</td>
                  <td>item.team </td>
                  <td>item.due_date</td>
                  <td className="flex w-full justify-end space-x-8">
                    <div className="">
                      <button className="bg-green-600 hover:bg-green-800 text-white px-2 py-1 font-bold">
                        Update
                      </button>
                      <button
                        className="bg-red-600 hover:bg-red-800 text-white px-2 py-1 font-bold"
                        onClick={(e) => deleteUser(item.id, e)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default Advertise;
