import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useApps from "../hooks/useApps";
import downloadIcon from "../assets/icon-downloads.png";
import starIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";
import RatingsChart from "../components/RatingsChart";
import Swal from "sweetalert2";
import { Bounce, ToastContainer, toast } from "react-toastify";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ErrorApp from "../error/ErrorApp";

const AppDetails = () => {
  const { id } = useParams();
  const { apps } = useApps();
  const app = apps.find((a) => String(a.id) === id);
  const {
    title,
    image,
    long_description,
    downloads,
    ratings,
    reviews,
    companyName,
    size,
    ratingAvg,
  } = app || {};
  console.log(app);

  const [isInstall, setIsInstall] = useState(false);

  useEffect(() => {
    const installedApps = JSON.parse(localStorage.getItem("app")) || [];
    const installed = installedApps.some((p) => p.id === app?.id);
    if (installed) setIsInstall(true);
  }, [app]);

  if (!app) {
    return <ErrorApp />;
  }

  const handleAddToInstall = () => {
    setIsInstall(true);
    const existingList = JSON.parse(localStorage.getItem("app"));

    console.log(existingList);

    let updateList = [];

    if (existingList) {
      const isDuplicate = existingList.some((p) => p.id === app.id);
      if (isDuplicate)
        return Swal.fire({
          title: "This app is already install !",
          icon: "error",
          draggable: true,
        });
      updateList = [...existingList, app];
    } else {
      updateList.push(app);
    }

    localStorage.setItem("app", JSON.stringify(updateList));

    toast.success(`Yahoo!! ${app.title} Installed Successfully`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="md:flex gap-6 mt-15">
        <div className="flex justify-center items-center">
          <figure className="flex justify-center items-center h-[227px] w-[227px] bg-white">
            <img src={image} alt="" />
          </figure>
        </div>

        <div className="w-full">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-[14px] text-gray-400">
            Developed by{" "}
            <span className="text-gradiendt font-semibold">{companyName}</span>
          </p>
          <div className="border-b border-gray-300 my-6"></div>

          <div className="flex gap-10">
            <div className="">
              <img className="h-6" src={downloadIcon} alt="" />
              <h4 className="text-sm text-gray-600">Downloads</h4>
              <h1 className="text-2xl font-bold">{downloads}</h1>
            </div>
            <div className="">
              <img className="h-6" src={starIcon} alt="" />
              <h4 className="text-sm text-gray-600">Average Ratings</h4>
              <h1 className="text-2xl font-bold">{ratingAvg}</h1>
            </div>
            <div className="">
              <img className="h-6" src={reviewIcon} alt="" />
              <h4 className="text-sm text-gray-600">Total Reviews</h4>
              <h1 className="text-2xl font-bold">{reviews}</h1>
            </div>
          </div>

          <div>
            <button
              disabled={isInstall}
              onClick={() => handleAddToInstall()}
              className=" bg-[#00D390] text-white py-2 px-3 font-semibold rounded-sm mt-3 cursor-pointer hover:bg-[#30aa83]"
            >
              {isInstall ? "Installed" : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-300 mt-4"></div>

      {/* chart */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold mt-8">Ratings</h3>
        <div className="">
          <ResponsiveContainer width="100%" height={230}>
            <BarChart
              data={ratings}
              layout="vertical"
              margin={{
                top: 20,
                right: 30,
                left: 0,
                bottom: 5,
              }}
            >
              <XAxis type="number" axisLine={false} tickLine={false} />
              <YAxis
                dataKey="name"
                type="category"
                axisLine={false}
                tickLine={false}
                reversed
              />
              <Tooltip />

              <Bar dataKey="count" fill="#FF8811" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="border-b border-gray-300 mt-4"></div>

      <div>
        <h3 className="text-xl font-semibold mt-8">Description</h3>
        <p className="text-gray-500 text-sm mt-4 mb-14">{long_description}</p>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default AppDetails;
