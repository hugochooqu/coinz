import React, { useState, useEffect } from "react";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import axios from "axios";

const Services = () => {
  const companyCommonStyles =
    "min-h-[190px] sm:px-0 sm:min-w-[140px] flex flex-col  items-start border-[0.5px] border-slate-900 text-base font-light text-blue-500 bg-slate-200 p-7 justify-between blue-glassmorphism";

  const [data, setData] = useState(null);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(data);

  if (!data) return null;


  return (
    <div className="flex flex-col lg:flex-row  w-full justify-center items-center bg-transparent ">
      <div className="grid sm:grid-cols-3 grid-cols-2 w-[70%] mx-5 mt-10 mb-8 rounded-tr-2xl">
        {data.map((coin) => (
          <div
            className={`${companyCommonStyles}`}
            key={coin.id}
            image={coin.image}
            name={coin.name}
            price={coin.current_price.toLocaleString()}
            percentage={coin.price_change_percentage_24h.toFixed(2)}
          >
            <div className="flex flex-row justify-between mx-0 md:mx-3 lg:mx-5">
              <p className="text-lg font-medium">{coin.name} </p>
              <img src={coin.image} className="w-[25%]" />
            </div>

            <div className="flex flex-col md:flex-row justify-between md:gap-4 mx-0 md:mx-3 lg:mx-5">
            <p className="lg:mx-2">${coin.current_price.toLocaleString()}</p>
            <div className="lg:mx-12">
              {coin.price_change_percentage_24h.toFixed(2) < 0 ? (
                <span className="text-red-700 flex flex-row">
                  <FiArrowDown />
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </span>
              ) : (
                <span className="text-green-900 flex flex-row gap-1">
                  <FiArrowUpRight />
                
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </span>
              )}
            </div>
            </div>
          
          </div>
        ))}

        {/* <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div> */}
      </div>
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className=" text-3xl sm:text-5xl py-2 text-gradient font-medium tracking-normal leading-10 ">
            Explore top Crypto's like <br /> Bitcoin,Ethereum, and <br /> Dogecoin
          </h1>
          <p className="text-left my-2 text-blue-700 font-normal md:w-9/12 w-11/12 text-base">
            See all available assets Cryptocurrencies and NFT'S
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
