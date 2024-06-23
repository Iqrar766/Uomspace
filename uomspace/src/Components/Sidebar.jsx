import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaLongArrowAltLeft,
  FaBookOpen,
  FaSearch,
  FaHome,
  FaChevronDown,
  FaUniversity,
  FaSlideshare,
  FaSignOutAlt,
} from "react-icons/fa";
import { RiCalendarEventLine } from "react-icons/ri";
import { FaBookBookmark, FaComputer, FaHandHoldingDroplet } from "react-icons/fa6";
// import SecSemeter from "./SoftwareEngineering/secSemeter";
// import IstSemester from "./SoftwareEngineering/IstSemester";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [softwareSubmenuOpen, setSoftwareSubmenuOpen] = useState(false);
  const [csitSubmenuOpen, setCsitSubmenuOpen] = useState(false);
  const [BiochemistrySubmenuOpen, setBiochemistrySubmenuOpen] = useState(false);

  const handleSubMenuToggle = (menuTitle) => {
    if (menuTitle === 'Software Engineering') {
      setSoftwareSubmenuOpen(!softwareSubmenuOpen);
      setCsitSubmenuOpen(false); // Close Computer Science & IT submenu if open
      setBiochemistrySubmenuOpen(false);
    } else if (menuTitle === 'Computer Science & IT') {
      setCsitSubmenuOpen(!csitSubmenuOpen);
      setSoftwareSubmenuOpen(false); // Close Software Engineering submenu if open
      setBiochemistrySubmenuOpen(false);
    } else if(menuTitle == 'Biochemistry') {
      setBiochemistrySubmenuOpen(!BiochemistrySubmenuOpen);
      setCsitSubmenuOpen(false);
      setCsitSubmenuOpen(false);
    }
  };

  const Menus = [
    { title: "Home" },
    {
      title: "Departments", icon: <FaUniversity />,
      submenus: true,
      submenusitems: [
        { title: "Software Engineering", submenus: true, icon: <FaBookBookmark />,
          submenusitems: [
            { title: "Semester 1st" , link: "/software-engineering/1st-semester" },
            { title: "Semester 2nd" },
            { title: "Semester 3rd" },
            { title: "Semester 4th" },
            { title: "Semester 5th" },
            { title: "Semester 6th" },
            { title: "Semester 7th" },
            { title: "Semester 8th" },
          ]
        },
        { title: "Computer Science & IT", submenus: true, icon: <FaComputer />,
          submenusitems: [
            { title: "Semester 1st" },
            { title: "Semester 2nd" },
            { title: "Semester 3rd" },
            { title: "Semester 4th" },
            { title: "Semester 5th" },
            { title: "Semester 6th" },
            { title: "Semester 7th" },
            { title: "Semester 8th" },
          ]
        },
        { title: "Biochemistry", submenus: true, icon: < FaSearch />,
        submenusitems: [
          { title: "Semester 1st" },
            { title: "Semester 2nd" },
            { title: "Semester 3rd" },
            { title: "Semester 4th" },
            { title: "Semester 5th" },
            { title: "Semester 6th" },
            { title: "Semester 7th" },
            { title: "Semester 8th" },
          ]
        },
        { title: "Biotechnology" },
        { title: "Botany" },
        { title: "Pharmacy" },
        { title: "Zoology" },
      ],
    },
    { title: "Opportunities", icon: < FaHandHoldingDroplet /> },
    { title: "Share Resources",link: "/ResourcesShare", icon: <FaSlideshare /> },
    { title: "University Event", icon: < RiCalendarEventLine/> },
    { title: "Logout" ,link: "" , icon: < FaSignOutAlt /> },  
  ];

  return (
    <div className="flex gap-10">
      <div
        className={`bg-slate-900 h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } relative duration-500 rounded-r-2xl`}
      >
        <FaLongArrowAltLeft
          className={`text-2xl rounded-full border-2 border-black text-black bg-white absolute -right-2 top-9 cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <FaBookOpen
            className={`text-4xl text-purple block float-left mr-2 cursor-pointer ${
              !open && "rotate-[360deg]"
            } duration-500`}
          />
          <h1
            className={`text-white origin-left text-2xl font-medium ml-2 cursor-pointer duration-500 ${
              !open && "scale-0"
            }`}
          >
            UomSpace
          </h1>
        </div>
        <div className="flex item-center my-5 rounded-md bg-white bg-opacity-10 mt-6 py-2">
          <FaSearch
            className={`text-white block text-lg float-left m-2 ${
              !open && "ml-4 w-full"
            }`}
          />
          <input
            type="text"
            placeholder="Search"
            className={`text-white bg-transparent w-full focus:outline-none ${
              !open && "hidden"
            }`}
          />
        </div>
        <ul className="pt-2">
          {Menus.map((menu, index) => menu.link ? (
    // Render a Link component for menu items with a link
    <Link to={menu.link} key={index} className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white hover:text-black rounded-md mt-2 relative z-40">
      <span className="text-2xl block float-left">
        {menu.icon ? menu.icon : <FaHome />}
      </span>
      <span className={`text-base font-medium flex-1 duration-700 ${!open && "hidden"}`}>
        {menu.title}
      </span>
      {/* No need to render submenus for items with a link */}
    </Link>
  ) :(
            <li
              key={index}
              className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white hover:text-black  rounded-md mt-2 relative z-40"
            >
              <span className="text-2xl block float-left">
                {menu.icon ? menu.icon : <FaHome />}
              </span>
              <span
                className={`text-base font-medium flex-1 duration-700 ${
                  !open && "hidden"
                }`}
              >
                {menu.title}
              </span>
              {menu.submenus && (
                <FaChevronDown
                  onClick={() => setSubmenuOpen(!submenuOpen)}
                  className={`duration-500 ${
                    submenuOpen && "rotate-180"
                  }`}
                />
              )}
              {menu.submenus && submenuOpen && open && (
                <ul
                  className={`absolute top-full -right-3/4 bg-slate-900 rounded-md mt-2 py-2 ${
                    !open && "hidden"
                  }`}
                >
                  {menu.submenusitems.map((submenusitem, index) => (
                    <li
                      key={index}
                      className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white  hover:text-black rounded-md mt-2 px-5"
                    >
                      {submenusitem.title}
                      {submenusitem.submenus && (
                        <FaChevronDown
                          onClick={() => handleSubMenuToggle(submenusitem.title)} // Handle submenu toggle
                          className={`duration-500 ${
                            (submenusitem.title === 'Software Engineering' && softwareSubmenuOpen) ||
                            (submenusitem.title === 'Computer Science & IT' && csitSubmenuOpen) ||
                            (submenusitem.title === 'Biochemistry' && BiochemistrySubmenuOpen)
                            ? "rotate-180"
                            : ''
                          }`}
                        />
                      )}
                      {submenusitem.submenus && submenusitem.title === 'Software Engineering' && softwareSubmenuOpen && open && (
                        <ul
                          className={`absolute  top-0 -right-60 mr-28 bg-slate-900 rounded-md mt-2 py-2 px-1 ${
                            !open && "hidden"
                          }`}
                        >
                          {submenusitem.submenusitems.map((subsubmenuitem, index) => (
                            <li
                              key={index}
                              className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white  hover:text-black rounded-md mt-2 px-5"
                            >
                              {subsubmenuitem.title}
                            </li>
                          ))}
                        </ul>
                      )}
                      {submenusitem.submenus && submenusitem.title === 'Computer Science & IT' && csitSubmenuOpen && open && (
                        <ul
                          className={`absolute top-0 -right-60 mr-28 bg-slate-900 rounded-md mt-2 py-2 px-1 ${
                            !open && "hidden"
                          }`}
                        >
                          {submenusitem.submenusitems.map((subsubmenuitem, index) => (
                            <li
                              key={index}
                              className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white  hover:text-black rounded-md mt-2 px-5"
                            >
                              {subsubmenuitem.title}
                            </li>
                          ))}
                        </ul>
                      )}
                      {submenusitem.submenus && submenusitem.title === 'Biochemistry' && BiochemistrySubmenuOpen && open && (
                        <ul
                          className={`absolute top-0 -right-60 mr-28 bg-slate-900 rounded-md mt-2 py-2 px-1 ${
                            !open && "hidden"
                          }`}
                        >
                          {submenusitem.submenusitems.map((subsubmenuitem, index) => (
                            <li
                              key={index}
                              className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white  hover:text-black rounded-md mt-2 px-5"
                            >
                              {subsubmenuitem.title}
                            </li>
                          ))}
                        </ul>
                      )}  
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
           {/* < SecSemeter /> */}
           <h1 className="text-4xl text-center ">Welcome to UomSpace<FaBookOpen className="mt-1 ml-2 inline-block" /></h1>
           <p className="w-7/12 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eveniet quis alias quam, dolores quisquam expedita placeat quidem necessitatibus, in qui dicta esse, mollitia illum saepe error consequuntur voluptate porro.</p>
      </div>
    </div>
  );
};

export default Sidebar;
