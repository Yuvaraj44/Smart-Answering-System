import React from "react";
import Calendar from "react-calendar";
import { format, parse } from "date-fns";
import { Link } from "react-router-dom";
function Sidebar() {
  const tileClassName = ({ date, view }) => {
    if (view === "month" && isSameDay(date, new Date())) {
      return "current-date";
    }
  };
  const isSameDay = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };
  const customLocale = {
    localize: {
      month: (n) => format(new Date(0, n), "MM"),
    },
    formatLong: {
      date: () => "MM yyyy",
    },
    parse,
  };
  const sideBar = [
    { to: "/aboutus", label: "About Us" },
    { to: "/about", label: "Editorial Board" },
  ];
  return (
    <>
      <section className="max-w-xs w-full xl:block hidden space-y-5 ">
        <div className="border">
          <h1 className="bg-primary text-white p-2 shadow">Important Links</h1>
          <div className="flex flex-col p-2 space-y-2 ">
            {sideBar.map((link) => (
              <Link key={link.to} to={link.to}>
                <button className="underline border-slate-300 text-sm font-semibold cursor-pointer">
                  {link.label}
                </button>
              </Link>
            ))}
          </div>
        </div>
        <Calendar
          className="sidebar-calendar"
          tileClassName={tileClassName}
          locale={customLocale}
        />
      </section>
    </>
  );
}
export default Sidebar;
