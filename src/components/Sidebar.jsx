// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';
import { RiBubbleChartLine } from 'react-icons/ri';
import { PiNotebookBold } from 'react-icons/pi';
import { FaBars, FaGithub } from 'react-icons/fa';
import hack from '../images/Hacking.png';

const Sidebar = () => {
  return (
    <div className="bg-gradient-to-b from-purple-950 to-purple-600 p-4 min-h-screen flex flex-col">
      <RiBubbleChartLine className='w-12 h-12 text-blue-50 mb-4' />
      {/* <h2 className="text-xl font-bold mb-4">Sidebar Content</h2> */}
      <nav className="flex-grow">
        <ul>
          <li className="mb-2">
            <Link to="/" className="flex items-center text-blue-500">
              <PiNotebookBold className="mr-2 w-8 h-8 text-blue-50 my-2 ml-2" />
              {/* <FaHome className="mr-2" /> Home */}
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/profile" className="flex items-center text-green-500">
              <FaGithub className="mr-2 w-8 h-8 text-blue-50 my-2 ml-2" />
              {/* <FaUser className="mr-2" /> Profile */}
            </Link>
          </li>
          <li>
            <Link to="/settings" className="flex items-center text-yellow-500">
              <FaBars className="mr-2 w-8 h-8 text-blue-50 my-2 ml-2" />
              {/* <FaCog className="mr-2" /> Settings */}
            </Link>
          </li>
        </ul>
      </nav>
      <div className="self-end w-10 h-10">
        <img src={hack} alt="Small hack computer image" />
      </div>
    </div>
  );
};

export default Sidebar;
