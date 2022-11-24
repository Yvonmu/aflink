import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import {
  AiFillDashboard,
  AiOutlineCloudUpload,
  AiOutlineComment,
} from "react-icons/ai";
import { TbLogout, TbReport } from "react-icons/tb";
// import { MdOutlineSupervisorAccount } from "react-icons/hi";
import { GiTeamIdea } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import {
  MdLocalGroceryStore,
  MdNotificationsNone,
  MdOutlineAddShoppingCart,
  MdOutlineAddTask,
  MdOutlineLocalConvenienceStore,
  MdOutlineSupervisorAccount,
  MdOutlineSwitchAccount,
  MdSportsScore,
} from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { HiOutlineShoppingCart, HiTicket } from "react-icons/hi";
import {GoRequestChanges} from "react-icons/go"
import { Store } from "../utils/store";
import { GrDocumentPerformance, GrTicket, GrUserAdmin } from "react-icons/gr";
import { FaDonate, FaWpforms } from "react-icons/fa";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import Cookies from "js-cookie";
import axios from "axios";
import Gun from "gun/gun";
import { RiCustomerService2Fill } from "react-icons/ri";
const Dashboard = (props) => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  // const { state, dispatch } = useContext(Store);
  // const { userInfo } = state;
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const token = Cookies.get("userInfo");
  // const gun = Gun();
  // let data = {};
  // gun.get("username").on((d) => (data = { ...data, ...d }));
  // const bearToken = "Bearer ".concat(token);
  // if (!token === "") {
  //   router.push("/dashboardLogin");
  // }
  // const [employee, setEmployee] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     if (!userInfo) {
  //       router.push("/dashboardLogin");
  //     }
  //   }
  //   fetchData();

  //   gun.get("username").put(userInfo);
  //   setUsername(data.username);
  //   setEmail(data.email);
  //   axios({
  //     method: "get",
  //     url: "https://lyvo.herokuapp.com/api/v1/auth/account",
  //     headers: {
  //       Authorization: bearToken,
  //     },
  //   }).then((response) => {
  //     setEmployee(response.data);
  //   });
  // }, []);
  const logoutClickHandler = () => {
    dispatch({ type: "USER_LOGOUT" });
    dispatch({ type: "dashboard_LOGOUT" });
    Cookies.remove("userInfo");
    Cookies.remove("dashboardInfo");
    gun.get("username").put("");
    router.push("/dashboardLogin");
  };
  // if (!userInfo) {
  //   return function () {
  //     router.push("/dashboardLogin");
  //   };
  // } else {
  return (
    <div className="flex">
      {!isOpen ? (
        <nav
          className="z-10 bg-white shadow-2xl sm:hidden w-1/6 text-black py-4 px-3"
        >
          <div className="mb-8 flex justify-center">
            <Link href="/" passHref>
            <div className="flex justify-center">
              <img src="aflink.png" alt="aflink logo" className="w-1/2"/></div>
            </Link>
          </div>
          <h1 className="pt-4 pb-4 font-bold cursor-default text-gray-300 text-xs">
            Pages
          </h1>
          <Link href="../dashboard" passHref>
            <p
              className={
                router.pathname == "/dashboard"
                  ? "text-white rounded-lg px-2 shadow-xl bg-red-600 flex cursor-pointer pl-2"
                  : "cursor-pointer flex hover:text-white hover:rounded-lg hover:px-2 hover:shadow-xl hover:bg-red-600 my-4 pl-2"
              }
            >
              <span className="w-5/6">Dashboard</span>
              <AiFillDashboard className="mt-1" />
            </p>
          </Link>
          <Link href="../dashboard/profile" passHref>
            <p
              className={
                router.pathname == "/dashboard/profile"
                  ? "text-white rounded-lg px-2 shadow-xl bg-red-600 flex cursor-pointer pl-2"
                  : "cursor-pointer flex hover:text-white hover:rounded-lg hover:px-2 hover:shadow-xl hover:bg-red-600 my-4 pl-2"
              }
            >
              <span className="w-5/6">Profile</span>
              <CgProfile className="mt-1" />
            </p>
          </Link>
          <Link href="../dashboard/jobCard" passHref>
            <p
              className={
                router.pathname == "/dashboard/jobCard"
                  ? "text-white rounded-lg px-2 shadow-xl bg-red-600 flex cursor-pointer pl-2"
                  : "cursor-pointer flex hover:text-white hover:rounded-lg hover:px-2 hover:shadow-xl hover:bg-red-600 my-4 pl-2"
              }
            >
              <span className="w-5/6">Job Card</span>
              <HiOutlineShoppingCart className="mt-1" />
            </p>
          </Link>
          <Link href="../dashboard/requisition" passHref>
            <p
              className={
                router.pathname == "/dashboard/requisition"
                  ? "text-white rounded-lg px-2 shadow-xl bg-red-600 flex cursor-pointer pl-2"
                  : "cursor-pointer flex hover:text-white hover:rounded-lg hover:px-2 hover:shadow-xl hover:bg-red-600 my-4 pl-2"
              }
            >
              <span className="w-5/6">Requisition</span>
              <GoRequestChanges className="mt-1" />
            </p>
          </Link>
          <Link href="../dashboard/receiving" passHref>
            <p
              className={
                router.pathname == "/dashboard/receiving"
                  ? "text-white rounded-lg px-2 shadow-xl bg-red-600 flex cursor-pointer pl-2"
                  : "cursor-pointer flex hover:text-white hover:rounded-lg hover:px-2 hover:shadow-xl hover:bg-red-600 my-4 pl-2"
              }
            >
              <span className="w-5/6">Reports</span>
              <TbReport className="mt-1" />
            </p>
          </Link>

          <h1 className="pt-4 font-bold cursor-default text-gray-300 text-xs">
            Forms
          </h1>
          <Link href="../dashboard/createJobCard" passHref>
            <p
              className={
                router.pathname == "/dashboard/createJobCard"
                  ? "text-white rounded-lg px-2 shadow-xl bg-red-600 flex cursor-pointer pl-2"
                  : "cursor-pointer flex hover:text-white hover:rounded-lg hover:px-2 hover:shadow-xl hover:bg-red-600 my-4 pl-2"
              }
            >
              <span className="w-5/6">Create Job Card</span>
              <MdOutlineAddShoppingCart className="mt-2" />
            </p>
          </Link>
          <Link href="../dashboard/createReceiving" passHref>
            <p
              className={
                router.pathname == "/dashboard/createReceiving"
                  ? "text-white rounded-lg px-2 shadow-xl bg-red-600 flex cursor-pointer pl-2"
                  : "cursor-pointer flex hover:text-white hover:rounded-lg hover:px-2 hover:shadow-xl hover:bg-red-600 my-4 pl-2"
              }
            >
              <span className="w-5/6">Create Receiving</span>
              <FaWpforms className="mt-2" />
            </p>
          </Link>
          <Link href="../dashboard/createRequisition" passHref>
            <p
              className={
                router.pathname == "/dashboard/createRequisition"
                  ? "text-white rounded-lg px-2 shadow-xl bg-red-600 flex cursor-pointer pl-2"
                  : "cursor-pointer flex hover:text-white hover:rounded-lg hover:px-2 hover:shadow-xl hover:bg-red-600 my-4 pl-2"
              }
            >
              <span className="w-5/6">Create Requisition</span>
              <VscGitPullRequestCreate className="mt-1" />
            </p>
          </Link>
          <div className="py-4 ">
          <hr className="h-0.5 -mx-3 bg-black" /></div>
          <Link href="../dashboard/customers" passHref>
            <p
              className={
                router.pathname == "/dashboard/customers"
                  ? "text-white rounded-lg px-2 shadow-xl bg-red-600 flex cursor-pointer pl-2"
                  : "cursor-pointer flex hover:text-white hover:rounded-lg hover:px-2 hover:shadow-xl hover:bg-red-600 my-4 pl-2"
              }
            >
              <span className="w-5/6">Customers</span>
              <RiCustomerService2Fill className="mt-1" />
            </p>
          </Link>
          <Link href="../dashboard/suppliers" passHref>
            <p
              className={
                router.pathname == "/dashboard/suppliers"
                  ? "text-white rounded-lg px-2 shadow-xl bg-red-600 flex cursor-pointer pl-2"
                  : "cursor-pointer flex hover:text-white hover:rounded-lg hover:px-2 hover:shadow-xl hover:bg-red-600 my-4 pl-2"
              }
            >
              <span className="w-5/6">Suppliers</span>
              <MdOutlineLocalConvenienceStore className="mt-1" />
            </p>
          </Link>
          <div className="w-full mt-8 bg-black">
            <button
              className="text-xs hover:bg-red-600 w-full bg-black font-bold text-white uppercase cursor-pointer flex p-2"
              onClick={logoutClickHandler}
            >
              <BiLogOut className="w-1/3 text-sm" />
              <span className="w-1/2"> Logout</span>
            </button>
          </div>
        </nav>
      ) : (
        <nav className="z-10 text-2xl bg-white shadow-2xl text-gray-700 p-4">
          <div className="mb-8 flex justify-center">
            <Link href="/" passHref>
            <div className="flex justify-center">
              <img src="aflink.png" alt="aflink logo" className="w-12"/></div>
            </Link>
          </div>
          <h1 className="pt-4 pb-4 font-bold cursor-default text-gray-300 text-xs">
            Pages
          </h1>
          <Link href="../dashboard" passHref>
            <p
              className={
                router.pathname == "/dashboard"
                  ? "text-white rounded-lg px-2 shadow-xl bg-red-600 flex cursor-pointer pl-2"
                  : "cursor-pointer flex hover:text-white hover:rounded-lg hover:px-2 hover:shadow-xl hover:bg-red-600 my-4 pl-2"
              }
            >
              <AiFillDashboard className="mt-1" />
            </p>
          </Link>
          <Link href="../dashboard/profile" passHref>
            <p
              className={
                router.pathname == "/dashboard/profile"
                  ? "text-white rounded-lg px-2 shadow-xl bg-red-600 flex cursor-pointer pl-2"
                  : "cursor-pointer flex hover:text-white hover:rounded-lg hover:px-2 hover:shadow-xl hover:bg-red-600 my-4 pl-2"
              }
            >
              <CgProfile className="mt-1" />
            </p>
          </Link>
          <Link href="../dashboard/jobCard" passHref>
            <p
              className={
                router.pathname == "/dashboard/jobCard"
                  ? "text-white rounded-lg px-2 shadow-xl bg-red-600 flex cursor-pointer pl-2"
                  : "cursor-pointer flex hover:text-white hover:rounded-lg hover:px-2 hover:shadow-xl hover:bg-red-600 my-4 pl-2"
              }
            >
              <HiOutlineShoppingCart className="mt-1" />
            </p>
          </Link>
          <Link href="../dashboard/requisition" passHref>
            <p
              className={
                router.pathname == "/dashboard/requisition"
                  ? "text-white rounded-lg px-2 shadow-xl bg-red-600 flex cursor-pointer pl-2"
                  : "cursor-pointer flex hover:text-white hover:rounded-lg hover:px-2 hover:shadow-xl hover:bg-red-600 my-4 pl-2"
              }
            >
              <GoRequestChanges className="mt-1" />
            </p>
          </Link>
          <Link href="../dashboard/reports" passHref>
            <p
              className={
                router.pathname == "/dashboard/reports"
                  ? "text-white rounded-lg px-2 shadow-xl bg-red-600 flex cursor-pointer pl-2"
                  : "cursor-pointer flex hover:text-white hover:rounded-lg hover:px-2 hover:shadow-xl hover:bg-red-600 my-4 pl-2"
              }
            >
              <TbReport className="mt-1" />
            </p>
          </Link>

          <h1 className="pt-4 font-bold cursor-default text-gray-300 text-xs">
            Forms
          </h1>
          <Link href="../dashboard/createJobCard" passHref>
            <p
              className={
                router.pathname == "/dashboard/createJobCard"
                  ? "text-white rounded-lg px-2 shadow-xl bg-red-600 flex cursor-pointer pl-2"
                  : "cursor-pointer flex hover:text-white hover:rounded-lg hover:px-2 hover:shadow-xl hover:bg-red-600 my-4 pl-2"
              }
            >
              <MdOutlineAddShoppingCart className="mt-2" />
            </p>
          </Link>
          <Link href="../dashboard/createStore" passHref>
            <p
              className={
                router.pathname == "/dashboard/createStore"
                  ? "text-white rounded-lg px-2 shadow-xl bg-red-600 flex cursor-pointer pl-2"
                  : "cursor-pointer flex hover:text-white hover:rounded-lg hover:px-2 hover:shadow-xl hover:bg-red-600 my-4 pl-2"
              }
            >
              <FaWpforms className="mt-2" />
            </p>
          </Link>
          <Link href="../dashboard/createRequisition" passHref>
            <p
              className={
                router.pathname == "/dashboard/createRequisition"
                  ? "text-white rounded-lg px-2 shadow-xl bg-red-600 flex cursor-pointer pl-2"
                  : "cursor-pointer flex hover:text-white hover:rounded-lg hover:px-2 hover:shadow-xl hover:bg-red-600 my-4 pl-2"
              }
            >
              <VscGitPullRequestCreate className="mt-1" />
            </p>
          </Link>
          <div className="py-4 ">
          <hr className="h-0.5 -mx-3 bg-black" /></div>
          <Link href="../dashboard/customers" passHref>
            <p
              className={
                router.pathname == "/dashboard/customers"
                  ? "text-white rounded-lg px-2 shadow-xl bg-red-600 flex cursor-pointer pl-2"
                  : "cursor-pointer flex hover:text-white hover:rounded-lg hover:px-2 hover:shadow-xl hover:bg-red-600 my-4 pl-2"
              }
            >
              <RiCustomerService2Fill className="mt-1" />
            </p>
          </Link>
          <Link href="../dashboard/suppliers" passHref>
            <p
              className={
                router.pathname == "/dashboard/suppliers"
                  ? "text-white rounded-lg px-2 shadow-xl bg-red-600 flex cursor-pointer pl-2"
                  : "cursor-pointer flex hover:text-white hover:rounded-lg hover:px-2 hover:shadow-xl hover:bg-red-600 my-4 pl-2"
              }
            >
              <MdOutlineLocalConvenienceStore className="mt-1" />
            </p>
          </Link>
          <button
            className="cursor-pointer flex hover:text-white hover:rounded-lg hover:px-2 hover:shadow-xl hover:bg-red-600 text-black pl-2"
            onClick={logoutClickHandler}
          >
            <BiLogOut className="" />
          </button>
        </nav>
      )}
      <div className="w-full bg-white">
        <div className="w-full py-2 flex">
          <div className="w-3/4">
            <Hamburger color="black" toggled={isOpen} toggle={setOpen} />
          </div>
          {/* <div className="w-1/4"></div> */}
          <div className="w-1/2 flex justify-end px-4 space-x-4">
            <Link href="../dashboard/profile">
              <div className=" h-full grid place-items-center cursor-pointer  text-black font-bold">
                <div className="flex space-x-2">
                  <div>
                    <div className="flex">
                      <h1 className="text-xl text-center w-full font-bold text-black">
                        serger
                      </h1>
                    </div>
                    <span className="text-gray-300 mt-1">
                      {"<"}
                      serger@gmail.com
                      {">"}
                    </span>
                    {/* <p className="text-orange-600 -mt-1 font-normal">dashboard</p> */}
                  </div>
                </div>
              </div>
            </Link>
            <div className="grid place-items-center"><button
              className="cursor-pointer grid place-items-center flex text-white uppercase bg-red-600 font-bold h-3/5 text-center px-12"
              onClick={logoutClickHandler}
            >
              <div className="flex">
                <TbLogout className="text-xl" />
                <p className="text-sm">Logout</p>
              </div>
            </button></div>
          </div>
        </div>
        <main>
          <div>{props.children}</div>
        </main>
      </div>
    </div>
  );
};
// };

export default Dashboard;
