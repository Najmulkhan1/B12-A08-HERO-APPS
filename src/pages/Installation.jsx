import React, { useEffect, useState } from "react";
import { IoStar } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import Swal from "sweetalert2";

const Installation = () => {
  const [install, setInstall] = useState([]);
  const [SortApp, setSortApp ] = useState("none")

  useEffect(() => {
    const saveApps = JSON.parse(localStorage.getItem("app"));
    if (saveApps) setInstall(saveApps);
  }, []);

  console.log(install);
//   const {id} = install

  // const sortedItem = (()=>{
  //     if(sortApp === '')
  // })()

const handleRemove = (appId) => {
  const appList = JSON.parse(localStorage.getItem("app")) || [];

  console.log("Before remove:", appList);
  console.log("Removing ID:", appId);

  const updatedList = appList.filter(a => String(a.id) !== String(appId));

  console.log("After remove:", updatedList);

  localStorage.setItem("app", JSON.stringify(updatedList));

  setInstall(prev => prev.filter(a => String(a.id) !== String(appId)));

  Swal.fire({
    title: "Uninstall App successfully!",
    icon: "success",
    timer: 1500,
    showConfirmButton: false,
  });
};

const parseDownloads = (str) => {
    const num = parseFloat(str);
    if (str.includes("B")) return num * 1_000_000_000;
    if (str.includes("M")) return num * 1_000_000;
    if (str.includes("K")) return num * 1_000;
    return num;
  };

  // const sortedApps = [...install].sort((a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads));

  // console.log(sortedApps);
  const sortedItem = (() => {
    if (SortApp === 'app-desc') {
      return [...install].sort((a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads))
    } else if (SortApp === 'app-asc') {
      return [...install].sort((a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads))
    } else {
      return install
    }
  })()


  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center my-8 space-y-2">
        <h1 className="text-3xl font-bold">Your Installed Apps</h1>
        <p className="text-gray-500 text-sm">
          Explore All Apps on the Market developed by us.
        </p>

        <div className="flex justify-between">
          <h1>{install.length} App Install</h1>

          <label className="border border-gray-400 py-1 px-2 rounded-md">
            <select value={SortApp} onChange={(e) => setSortApp(e.target.value)}>
                <option value="none">Sort by Download</option>
                <option value="app-desc">High &gt;Low</option>
                <option value="app-asc">Low &lt;High</option>
            </select>
          </label>
        </div>

        <div className="space-y-3">
          {sortedItem.map((p) => (
            <div className="card card-side bg-base-100 shadow-sm">
              <figure className="p-1">
                <img
                  className="w-40 h-29 object-contain"
                  src={p.image}
                  alt={p.name}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{p.title}</h2>
                <div className="flex ">
                  <div className="flex items-center px-2 rounded-md  text-[#00D390]">
                    <MdOutlineFileDownload />
                    {p.downloads}
                  </div>
                  <div className="flex items-center px-2 rounded-md  text-[#FF8811]">
                    <IoStar />
                    {p.ratingAvg}
                  </div>
                  <div>
                    <p>{p.size} MB</p>
                  </div>
                  
                </div>
                {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div> */}
              </div>

              <div className="flex items-center gap-3 pr-3">
                <button onClick={() => handleRemove(p.id)} className="bg-[#00D390] text-white py-2 px-3 font-semibold rounded-sm mt-3 cursor-pointer hover:bg-[#30aa83]">Uninstall</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation;
