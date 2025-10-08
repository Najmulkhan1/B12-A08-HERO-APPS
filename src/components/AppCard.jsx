import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  const { image, ratingAvg, title, downloads, id } = app;

  return (
    <div>
      <Link to={`/app/${id}`}>
        <div className="card bg-base-100 shadow-sm ">
          <figure className="py-2 m-2  h-[300px]">
            <img className="h-[300px] object-cover" src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="font-semibold">{title}</h2>

            <div className="flex justify-between">
              <div className="flex items-center px-2 rounded-md bg-[#F1F5E8] text-[#00D390]">
                <MdOutlineFileDownload />
                {downloads}
              </div>
              <div className="flex items-center px-2 rounded-md bg-[#FFF0E1] text-[#FF8811]">
                <IoStar />
                {ratingAvg}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AppCard;
