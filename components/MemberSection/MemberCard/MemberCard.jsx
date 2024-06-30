import React from "react";
import styles from "./MemberCard.module.css";

const MemberCard = ({ ...props }) => {
  return (
    <>
      <div className={styles.flip_card}>
        <div className={styles.flip_card_inner}>
          <div
            className={`${styles.flip_card_front} overflow-hidden flex flex-col`}
          >
            <div className="rounded-full h-[65%] aspect-square overflow-hidden self-center z-10 ">
              <img
                src={props.imageUrl}
                alt="Avatar"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="bg-stone-800 flex-grow -mt-[30%] rounded-lg flex flex-col min-[580px]:pt-[35%] pt-[25%] pb-10">
              <p className="text-lg text-blue-500 mt-2">{props.designation}</p>
              <p className="text-3xl text-white">{props.name}</p>
            </div>
          </div>
          <div
            className={`${styles.flip_card_back} flex  backdrop-blur-3xl bg-stone-800 items-center flex-col`}
          >
            <p className="text-3xl mt-auto ">
              {`"`}
              {props.quote}
              {`"`}
            </p>
            <p className="self-end justify-self-end m-3 text-lg">
              - {props.name}
            </p>
            <div className="self-end mt-auto flex mb-5 mr-5 text-3xl">
              <section className="flex justify-center items-center">
                <a
                  href={props.linkedinUrl}
                  className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#0077b5] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1.1em"
                    viewBox="0 0 512 512"
                    stroke-width="0"
                    fill="currentColor"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path>
                  </svg>
                  <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-500 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                    Linkedin
                  </span>
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberCard;
