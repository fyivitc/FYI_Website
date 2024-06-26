import React from "react";
import MemberCard from "./components/MemberCard/MemberCard";

export default () => (
  <>
    <div className="bg-black ">
      <div className="p-5 pt-14 text-center">
        <p className="text-xl text-blue-500">OUR TEAM</p>
        <p className="text-white text-5xl pl-3 pt-2">
          Meet our Faculty Coordinators and Founder.
        </p>
      </div>
      <div className="w-full p-5 py-14 grid lg:grid-cols-4 md:grid-cols-2 gap-5 gap-y-8 justify-between justify-items-center content-around ">
        <MemberCard
          name="Name"
          designation="Designation"
          imageUrl="/image.png"
          linkedinUrl="#"
          quote="Some quote"
        />
        <MemberCard
          name="Name"
          designation="Designation"
          imageUrl="/image.png"
          linkedinUrl="#"
          quote="Some quote"
        />
        <MemberCard
          name="Name"
          designation="Designation"
          imageUrl="/image.png"
          linkedinUrl="#"
          quote="Some quote"
        />
        <MemberCard
          name="Name"
          designation="Designation"
          imageUrl="/image.png"
          linkedinUrl="#"
          quote="Some quote"
        />
      </div>
    </div>
  </>
);
