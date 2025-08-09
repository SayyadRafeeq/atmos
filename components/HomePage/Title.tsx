import React from 'react'
import Image from 'next/image'
import Search from './Search'
function Title() {
    return (
        <>
      <div className="bg-gray-100">
        <section className="cover bg-blue-teal-gradient relative bg-blue-400 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden pb-48 pt-24 flex items-center">
          {/* Background image section */}
          <div className="absolute inset-0 z-0">
            <img
              src="/weather-bg.png"
              alt=""
              className="w-full h-full object-cover opacity-30"
              style={{ position: "absolute", top: 0, left: 0, zIndex: "-1" }}
            />
          </div>

          {/* Content section */}
          <div className="lg:w-3/4 xl:w-2/4 relative z-10">
            <div>
              <h6 className="text-white text-4xl md:text-3xl xl:text-4xl font-bold leading-tight">
                Predicting the Unpredictable: Navigating Nature's Forecasted
                Pathways
              </h6>
              <br />
              {/* Search component */}
              <Search />
            </div>
          </div>
        </section>
      </div>
    </>
    )
}

export default Title