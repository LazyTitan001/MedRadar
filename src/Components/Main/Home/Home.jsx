import React from 'react';
import { BiSolidContact } from 'react-icons/bi';
import { MdHomeWork } from 'react-icons/md';
import SectionWrapper from '../SectionWrapper';

const Home = () => {
  return (
    <SectionWrapper id="home">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 text-center md:text-left">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded transform scale-125"
                alt="hero"
                src="https://advinhealthcare.com/wp-content/uploads/2022/12/Types-of-Hospitals-2.jpg"
              />
            </div>

            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ">
                Chirayu Hospital
              </h1>
              <p className="mb-8 leading-relaxed">
                We are a 100-bedded multi-disciplinary critical and acute care
                facility that is served by more than 50 consultants from diverse
                specialities with the support staff and systems that range from
                a 24-hour blood bank, a complete radiology unit with facilities
                for CT scan.
              </p>
              <div className="justify-center">
                <div className="flex items-center">
                  <BiSolidContact style={{ fontSize: '25px' }} />
                  <span className="ml-2"> +91 755 270 9100</span>
                </div>
                <br />
                <div className="flex items-center">
                  <MdHomeWork style={{ fontSize: '50px' }} />
                  <span className="ml-2">
                    7895+7GR, Bhopal-Indore Highway Bhainsakhedi, Bairagarh,
                    Bhopal, Madhya Pradesh 462030
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SectionWrapper>
  );
};

export default Home;
