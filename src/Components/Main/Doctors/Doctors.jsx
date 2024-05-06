import React from 'react';
import { DoctorsData } from '@/Components/Shared/Consts';
import SectionWrapper from '../SectionWrapper';
import Doctor from './Doctor';

const Doctors = () => {
  return (
    <SectionWrapper id="doctors">
      <h3 className="text-4xl font-bold text-center mb-20">
        {DoctorsData.heading}
      </h3>
      <div className="flex justify-between gap-10 overflow-auto px-5 md:p-0">
        {DoctorsData.doctors.map((doctor, index) => (
          <Doctor key={index} doc={doctor} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Doctors;
