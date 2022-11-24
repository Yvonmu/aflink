import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import {
  AiFillDashboard,
  AiOutlineCloudUpload,
  AiOutlineComment,
} from "react-icons/ai";
import { TbLogout } from "react-icons/tb";
// import { MdOutlineSupervisorAccount } from "react-icons/hi";
import { GiTeamIdea } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import {
  MdLocalGroceryStore,
  MdNotificationsNone,
  MdOutlineAddTask,
  MdOutlineSupervisorAccount,
  MdOutlineSwitchAccount,
  MdSportsScore,
} from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { HiTicket } from "react-icons/hi";
import { Store } from "../utils/store";
import { GrTicket, GrUserAdmin } from "react-icons/gr";
import { FaDonate, FaWpforms } from "react-icons/fa";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import Cookies from "js-cookie";
import axios from "axios";
import Gun from "gun/gun";
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
          className="z-10 text-lg bg-gray-200 shadow-2xl sm:hidden w-1/6 text-gray-700 p-4"
          // style={{ backgroundColor: "#B1E0E5" }}
        >
          <div className="mb-4 text-center">
            <Link href="/" passHref>
              <span className="cursor-pointer font-bold text-center pb-8">
                FT<span className="text-green-600">M</span>A
              </span>
            </Link>
          </div>
          <h1 className="mt-4 text-xl font-serif cursor-default text-black font-bold">
            Pages
          </h1>
          <Link href="../dashboard" passHref>
            <p
              className={
                router.pathname == "/dashboard"
                  ? "text-green-600 font-serif flex cursor-pointer pl-2"
                  : "cursor-pointer flex font-serif hover:text-green-600 my-4 pl-2"
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
                  ? "text-green-600 font-serif flex cursor-pointer pl-2"
                  : "cursor-pointer flex font-serif hover:text-green-600 my-4 pl-2"
              }
            >
              <span className="w-5/6">Profile</span>
              <CgProfile className="mt-1" />
            </p>
          </Link>
          <Link href="../dashboard/store" passHref>
            <p
              className={
                router.pathname == "/dashboard/store"
                  ? "text-green-600 font-serif flex cursor-pointer pl-2"
                  : "cursor-pointer flex font-serif hover:text-green-600 my-4 pl-2"
              }
            >
              <span className="w-5/6">Store</span>
              <MdLocalGroceryStore className="" />
            </p>
          </Link>
          <Link href="../dashboard/ticket" passHref>
            <p
              className={
                router.pathname == "/dashboard/ticket"
                  ? "text-green-600 font-serif flex cursor-pointer pl-2"
                  : "cursor-pointer flex font-serif hover:text-green-600 my-4 pl-2"
              }
            >
              <span className="w-5/6">Ticket</span>
              <HiTicket className="mt-1" />
            </p>
          </Link>
          <Link href="../dashboard/investors" passHref>
            <p
              className={
                router.pathname == "/dashboard/investors"
                  ? "text-green-600 font-serif flex cursor-pointer pl-2"
                  : "cursor-pointer flex font-serif hover:text-green-600 my-4 pl-2"
              }
            >
              <span className="w-5/6">Advertise</span>
              <GrUserAdmin className="mt-1" />
            </p>
          </Link>

          <h1 className="mt-8 text-2xl font-bold font-serif cursor-default text-black mb-4">
            Forms
          </h1>
          <Link href="../dashboard/uploadMatch" passHref>
            <p
              className={
                router.pathname == "/dashboard/uploadMatch"
                  ? "text-green-600 font-serif flex cursor-pointer pl-2"
                  : "cursor-pointer flex font-serif hover:text-green-600 my-4 pl-2"
              }
            >
              <span className="w-5/6">Upload Fixtures</span>
              <MdSportsScore className="mt-2" />
            </p>
          </Link>
          <Link href="../dashboard/createStore" passHref>
            <p
              className={
                router.pathname == "/dashboard/createStore"
                  ? "text-green-600 font-serif flex cursor-pointer pl-2"
                  : "cursor-pointer flex font-serif hover:text-green-600 my-4 pl-2"
              }
            >
              <span className="w-5/6">Create Team Store</span>
              <FaWpforms className="mt-2" />
            </p>
          </Link>
          <Link href="../dashboard/createTicket" passHref>
            <p
              className={
                router.pathname == "/dashboard/createTicket"
                  ? "text-green-600 font-serif flex cursor-pointer pl-2"
                  : "cursor-pointer flex font-serif hover:text-green-600 my-4 pl-2"
              }
            >
              <span className="w-5/6">Create Ticket</span>
              <GrTicket className="mt-2" />
            </p>
          </Link>
          <Link href="../dashboard/createInvestors" passHref>
            <p
              className={
                router.pathname == "/dashboard/createInvestors"
                  ? "text-green-600 font-serif flex cursor-pointer pl-2"
                  : "cursor-pointer flex font-serif hover:text-green-600 my-4 pl-2"
              }
            >
              <span className="w-5/6">Upload Advertise</span>
              <VscGitPullRequestCreate className="" />
            </p>
          </Link>
          <hr className="h-0.5 bg-black" />
          <Link href="../dashboard/viewDonation" passHref>
            <p
              className={
                router.pathname == "/dashboard/viewDonation"
                  ? "text-green-600 font-serif flex cursor-pointer pl-2"
                  : "cursor-pointer flex font-serif hover:text-green-600 my-4 pl-2"
              }
            >
              <span className="w-5/6">Donation</span>
              <FaDonate className="mt-1" />
            </p>
          </Link>
          <Link href="../dashboard/viewQA" passHref>
            <p
              className={
                router.pathname == "/dashboard/viewQA"
                  ? "text-green-600 font-serif flex cursor-pointer pl-2"
                  : "cursor-pointer flex font-serif hover:text-green-600 my-4 pl-2"
              }
            >
              <span className="w-5/6">Community</span>
              <AiOutlineComment className="" />
            </p>
          </Link>
          <div className="relative w-full flex mt-44 justify-center">
            <button
              className="bottom-0 hover:bg-green-600 bg-black font-bold text-white uppercase cursor-pointer flex my-4 py-2 px-4"
              onClick={logoutClickHandler}
            >
              <BiLogOut className="mt-1.5 text-gray-200" />
              &nbsp;<span className="w-5/6"> Logout</span>
            </button>
          </div>
        </nav>
      ) : (
        <nav className="z-10 text-2xl bg-gray-200 shadow-2xl text-gray-700 p-4">
          <div className="mb-4 text-center">
            <Link href="/" passHref>
              <span className="cursor-pointer font-bold text-center pb-8 text-green-600">
                BC
              </span>
            </Link>
          </div>
          <h1 className="mt-8 text-xl font-serif cursor-default text-black">
            Pages
          </h1>
          <Link href="/dashboard" passHref>
            <p
              className={
                router.pathname == "/dashboard"
                  ? "text-green-600 font-serif flex cursor-pointer pl-2"
                  : "cursor-pointer flex font-serif hover:text-green-600 my-4 pl-2"
              }
            >
              <AiFillDashboard className="" />
            </p>
          </Link>
          <Link href="../dashboard/profile" passHref>
            <p
              className={
                router.pathname == "/dashboard/profile"
                  ? "text-green-600 font-serif flex cursor-pointer pl-2"
                  : "cursor-pointer flex font-serif hover:text-green-600 my-4 pl-2"
              }
            >
              <CgProfile className="" />
            </p>
          </Link>
          <Link href="../dashboard/store" passHref>
            <p
              className={
                router.pathname == "/dashboard/store"
                  ? "text-green-600 font-serif flex cursor-pointer pl-2"
                  : "cursor-pointer flex font-serif hover:text-green-600 my-4 pl-2"
              }
            >
              <MdLocalGroceryStore className="" />
            </p>
          </Link>
          <Link href="../dashboard/ticket" passHref>
            <p
              className={
                router.pathname == "/dashboard/ticket"
                  ? "text-green-600 font-serif flex cursor-pointer pl-2"
                  : "cursor-pointer flex font-serif hover:text-green-600 my-4 pl-2"
              }
            >
              <HiTicket className="" />
            </p>
          </Link>
          <Link href="../dashboard/investors" passHref>
            <p
              className={
                router.pathname == "/dashboard/investors"
                  ? "text-green-600 font-serif flex cursor-pointer pl-2"
                  : "cursor-pointer flex font-serif hover:text-green-600 my-4 pl-2"
              }
            >
              <GrUserAdmin className="mt-0.5" />
            </p>
          </Link>

          <h1 className="mt-8 text-2xl font-bold font-serif cursor-default text-black mb-4">
            Forms
          </h1>
          <Link href="../dashboard/uploadMatch" passHref>
            <p
              className={
                router.pathname == "/dashboard/uploadMatch"
                  ? "text-green-600 font-serif flex cursor-pointer pl-2"
                  : "cursor-pointer flex font-serif hover:text-green-600 my-4 pl-2"
              }
            >
              <MdSportsScore className="mt-2" />
            </p>
          </Link>
          <Link href="/dashboard/createStore" passHref>
            <p
              className={
                router.pathname == "/dashboard/createStore"
                  ? "text-green-600 font-serif flex cursor-pointer pl-2"
                  : "cursor-pointer flex font-serif hover:text-green-600 my-4 pl-2"
              }
            >
              <FaWpforms className="" />
            </p>
          </Link>
          <Link href="../dashboard/createTicket" passHref>
            <p
              className={
                router.pathname == "/dashboard/createTicket"
                  ? "text-green-600 font-serif flex cursor-pointer pl-2"
                  : "cursor-pointer flex font-serif hover:text-green-600 my-4 pl-2"
              }
            >
              <GrTicket className="" />
            </p>
          </Link>
          <Link href="../dashboard/createInvestors" passHref>
            <p
              className={
                router.pathname == "/dashboard/createInvestors"
                  ? "text-green-600 font-serif flex cursor-pointer pl-2"
                  : "cursor-pointer flex font-serif hover:text-green-600 my-4 pl-2"
              }
            >
              <VscGitPullRequestCreate className="" />
            </p>
          </Link>
          <hr className="h-0.5 bg-black" />
          <Link href="../dashboard/viewDonation" passHref>
            <p
              className={
                router.pathname == "/dashboard/viewDonation"
                  ? "text-green-600 font-serif flex cursor-pointer pl-2"
                  : "cursor-pointer flex font-serif hover:text-green-600 my-4 pl-2"
              }
            >
              <FaDonate className="" />
            </p>
          </Link>
          <Link href="../dashboard/viewQA" passHref>
            <p
              className={
                router.pathname == "/dashboard/viewQA"
                  ? "text-green-600 font-serif flex cursor-pointer pl-2"
                  : "cursor-pointer flex font-serif hover:text-green-600 my-4 pl-2"
              }
            >
              <AiOutlineComment className="" />
            </p>
          </Link>
          <button
            className="cursor-pointer flex hover:text-green-600 text-black pl-2"
            onClick={logoutClickHandler}
          >
            <BiLogOut className="" />
          </button>
        </nav>
      )}
      <div className="w-full">
        <div className="w-full py-2 flex">
          <div className="w-3/4">
            <Hamburger color="black" toggled={isOpen} toggle={setOpen} />
          </div>
          {/* <div className="w-1/4"></div> */}
          <div className="w-1/2 flex space-x-4">
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
            <button
              className="cursor-pointer h-3/4 grid place-items-center flex text-white uppercase bg-black font-bold mt-2 text-center px-4"
              onClick={logoutClickHandler}
            >
              <div className="flex">
                <TbLogout className="text-xl" />
                <p className="text-sm">Logout</p>
              </div>
            </button>
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
