import React, { useState } from "react";
import {
  footerLinksColumnOne,
  footerLinksColumnTwo,
  newsletter,
} from "../data";

const Footer = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:divyanshsxn998@gmail.com?subject=Query from Website&body=Phone Number: ${phoneNumber}%0D%0AQuery: ${query}`;
  };
  return (
    <div className="bg-[linear-gradient(133deg,_#566270_0%,_#283444_100%)]">
      <div className="max-w-[1490px] mx-auto px-10 py-[120px]">
        <div className="flex flex-col items-center xl:items-start xl:flex-row xl:justify-between gap-12">
          <div className="w-full xl:w-auto flex flex-col items-center xl:items-start">
            <h2 className="text-white text-center xl:text-start font-medium text-3xl lg:text-[32px]">
              {newsletter}
            </h2>
            <div className="relative w-full xs:w-[380px] xl:w-[320px] mt-11 space-y-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="rounded-full w-full pl-6 pr-[140px] py-4 bg-primary outline-none text-white text-base xs:text-lg placeholder-white"
                />
                <input
                  type="text"
                  placeholder="Query"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="rounded-full w-full pl-6 pr-[140px] py-4 bg-primary outline-none text-white text-base xs:text-lg placeholder-white"
                />
                <div className="text-center">
                  <button
                    type="submit"
                    className="rounded-full pl-6 pr-[30px] py-4 w-[80%] bg-blue-300 outline-none text-black text-base xs:text-lg"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 w-full">
            <div className="flex flex-col xs:flex-row gap-12 w-full md:w-auto">
              {footerLinksColumnOne.map((item, index) => (
                <div
                  key={index}
                  className="text-white max-w-screen-md md:max-w-[340px] flex-1 md:flex-auto"
                >
                  <h6 className="mb-8 text-base lg:text-lg font-bold text-center xl:text-start">
                    {item.title}
                  </h6>
                  <ul className="flex flex-col gap-4">
                    {item.links.map((link, i) => (
                      <div
                        key={`list-item-${i}`}
                        className="w-full flex mx-auto justify-center xl:justify-start"
                      >
                        <li className="font-medium text-sm md:text-base cursor-pointer text-center xl:text-start w-fit">
                          {link}
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-col xs:flex-row gap-12 w-full md:w-auto">
              {footerLinksColumnTwo.map((item, index) => (
                <div
                  key={index}
                  className="text-white max-w-screen md:max-w-[340px] flex-1 md:flex-auto"
                >
                  <h6 className="mb-8 text-base lg:text-lg font-bold text-center xl:text-start">
                    {item.title}
                  </h6>
                  <ul className="flex flex-col gap-4">
                    {item.links.map((link, i) => (
                      <div
                        key={`list-item-${i}`}
                        className="w-full flex mx-auto justify-center xl:justify-start"
                      >
                        <li
                          className={`font-medium text-sm md:text-base ${
                            index !== 1 && "cursor-pointer"
                          } text-center xl:text-start w-fit`}
                        >
                          {link}
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white my-12" />

        <h6 className="text-white text-center text-base lg:text-lg">
          &copy; Daunku - All rights reserved
        </h6>
      </div>
    </div>
  );
};

export default Footer;
