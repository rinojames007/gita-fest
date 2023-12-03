import React from "react";
import { Link } from "react-router-dom";

const NavToPages = () => {
  return (
    <div className="bg-gradient-to-b from-black via-purple-900 to-black min-h-screen">
      <div className="eventIncharge">
        <ul className="flex flex-col w-full justify-center items-center text-white font-bold text-2xl h-screen space-y-11 ">
          <li>
            <Link
              className="hover:text-gray-400 active:underline py-1"
              to="/eventInchargeProfile"
            >
              Event Incharge Profile
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-gray-400 active:underline py-1"
              to="/eventCoordinatorProfile"
            >
              Event Coordinator Profile
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-gray-400 active:underline py-1"
              to="/organiserProfile"
            >
              Event Organiser Profile
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-gray-400 active:underline py-1"
              to="/HelpSupportProfile"
            >
              Help & Support Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavToPages;
