import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useApps from "../hooks/useApps";
import downloadIcon from "../assets/icon-downloads.png";
import starIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";
import { Bounce, ToastContainer, toast } from "react-toastify";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Swal from "sweetalert2";
import ErrorApp from "../error/ErrorApp";
import Loader from "../components/Loader";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const app = apps.find((a) => String(a.id) === id);

  const [isInstall, setIsInstall] = useState(false);
  const [isLoadingBtn, setIsLoadingBtn] = useState(false); 

  useEffect(() => {
    const installedApps = JSON.parse(localStorage.getItem("app")) || [];
    const installed = installedApps.some((p) => p.id === app?.id);
    if (installed) setIsInstall(true);
  }, [app]);

  if (loading) return <Loader />;
  if (!app) return <ErrorApp />;

  const {
    title,
    image,
    long_description,
    description,
    downloads,
    ratings,
    reviews,
    companyName,
    size,
    ratingAvg,
  } = app || {};

  const handleAddToInstall = async () => {
    if (isInstall || isLoadingBtn) return;
    setIsLoadingBtn(true);

    // fake delay (loading effect)
    await new Promise((res) => setTimeout(res, 1500));

    const existingList = JSON.parse(localStorage.getItem("app")) || [];
    const isDuplicate = existingList.some((p) => p.id === app.id);
    if (isDuplicate) {
      setIsLoadingBtn(false);
      return Swal.fire({
        title: "This app is already installed!",
        icon: "error",
        draggable: true,
      });
    }

    const updatedList = [...existingList, app];
    localStorage.setItem("app", JSON.stringify(updatedList));

    setIsInstall(true);
    setIsLoadingBtn(false);

    toast.success(`Yahoo!! ${app.title} Installed Successfully`, {
      position: "top-center",
      autoClose: 2000,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <>
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
              <div>
                <img className="h-6" src={downloadIcon} alt="" />
                <h4 className="text-sm text-gray-600">Downloads</h4>
                <h1 className="text-2xl font-bold">{downloads}</h1>
              </div>
              <div>
                <img className="h-6" src={starIcon} alt="" />
                <h4 className="text-sm text-gray-600">Average Ratings</h4>
                <h1 className="text-2xl font-bold">{ratingAvg}</h1>
              </div>
              <div>
                <img className="h-6" src={reviewIcon} alt="" />
                <h4 className="text-sm text-gray-600">Total Reviews</h4>
                <h1 className="text-2xl font-bold">{reviews}</h1>
              </div>
            </div>

           
            <div>
              <button
                onClick={handleAddToInstall}
                disabled={isInstall || isLoadingBtn}
                className={`py-2 px-4 font-semibold rounded-sm mt-4 flex items-center justify-center gap-2 transition-all ${
                  isInstall
                    ? "bg-gradent text-white  cursor-not-allowed"
                    : "bg-gradent text-white hover:bg-[#30aa83]"
                } disabled:opacity-70`}
              >
                {isLoadingBtn ? (
                  <>
                    <svg
                      className="w-4 h-4 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 11-8 8z"
                      ></path>
                    </svg>
                    Installing...
                  </>
                ) : isInstall ? (
                  <>
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    Installed
                  </>
                ) : (
                  `Install Now (${size} MB)`
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-300 mt-4"></div>

        {/* chart */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold mt-8">Ratings</h3>
          <div>
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
          <p className="text-gray-500 text-sm mt-4 ">{description}</p>
          <p className="text-gray-500 text-sm mt-4 mb-14">{long_description}</p>
        </div>

        <ToastContainer />
      </div>
    </>
  );
};

export default AppDetails;
