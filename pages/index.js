import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { Store } from "../utils/store";
export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { redirect } = router.query;

  useEffect(() => {
    async function fetchData() {
      // if (true) {
      //   router.push("/dashboard");
      // }
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    var data = JSON.stringify({
      username: username,
      password: password,
    });

    axios({
      method: "post",
      url: "https://lyvo.herokuapp.com/api/v1/auth/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    }).then(function async(response) {
      if (response.data.response === "Unsuccessful") {
        alert("Only Restricted User can Log In");
        setLoading(false);
        return router.push("/adminLogin");
      } else {
        const data = response.data.token;
        const username = response.data;
        dispatch({ type: "USER_LOGIN", payload: username });
        Cookies.set("userInfo", data);
        Cookies.set("username", username);
        setLoading(false);
        return router.push(redirect || "/admin");
      }
    });
  };
  return (
    <div className="antialiased  bg-white text-gray-900 font-sans">
      <div className="grid place-items-center h-screen">
        <div className="flex justify-center bg-white rounded shadow-xl p-8 md:w-1/2 sm:w-full">
          <div className="w-full ">
            <div>
              <span className="w-full font-serif text-3xl uppercase font-bold py-6">
                Login
              </span>
              <span className="text-green-600">(Admin)</span>
            </div>
            <p className="font-serif font-bold text-xl">
              Hello! let&apos;s get started
            </p>
            <form className="my-4">
              <div className="mb-4 md:w-full">
                <label htmlFor="email" className=" text-xl mb-2">
                  Username
                </label>
                <input
                  className="w-full text-xl border rounded p-2 outline-none focus:shadow-outline"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-4 md:w-full">
                <label htmlFor="password" className=" text-xl mb-2">
                  Password
                </label>
                <input
                  className="w-full text-xl border rounded p-2 outline-none focus:shadow-outline"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex mb-6 justify-end">
                <Link href="/forgetpassword">
                  <p className="text-green-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out">
                    Forgot password?
                  </p>
                </Link>
              </div>
              <div className="flex justify-center my-4">
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
                    // style={{ backgroundColor: "#B1E0E5" }}
                    className="text-white uppercase font-semibold bg-green-600 px-8 py-2"
                    onClick={handleSubmit}
                  >
                    Login
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
