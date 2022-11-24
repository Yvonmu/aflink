import React, { useState } from 'react'
import Dashboard from "../../components/dashboard"

const CreateStore = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [img, setImg] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  }
  return (
    <Dashboard>
      <div className="w-full bg-grey-lightest">
          <div className="container mx-auto py-8">
            <div className="sm:w-full md:w-2/3 bg-gray-200 mx-auto rounded shadow-xl">
              <div className="py-4 text-xl font-serif font-bold text-black text-center bg-gray-300 font-bold border-b border-grey-lighter">
                Upload Team Store
              </div>
              <div className="py-4 px-8">
                <div className="mb-4">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="title"
                  >
                    Name
                  </label>
                  <input
                    className="appearance-none border rounded text-gray-600 w-full py-2 px-3 text-grey-darker"
                    type="text"
                    placeholder="Project"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="title"
                  >
                    Category
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    type="text"
                    placeholder="Jersey"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="title"
                  >
                    Amount(RWF)
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    type="number"
                    placeholder="10000"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                <div className="mb-4 flex">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2 grid place-items-center"
                    htmlFor="title"
                  >
                    Image
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    type={'file'}
                    placeholder="10000"
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                  />
                </div>
                <div className="my-8">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="description"
                  >
                    Details
                  </label>
                  <textarea
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                        id="description"
                        type="text"
                        rows={4}
                        placeholder="Item Summary"
                        value={details}
                    onChange={(e) => setDetails(e.target.value)}
                      />
                </div>
                <div className="flex items-center justify-center mt-8">
                  {loading ? (
                    <svg
                      role="status"
                      className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  ) : (
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="bg-green-600 font-bold inline-flex justify-center py-2 px-4 border border-transparent shadow-sm rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Upload
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
      </div>
    </Dashboard>
  )
}

export default CreateStore
