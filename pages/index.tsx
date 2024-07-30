import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "../components/Hero/Hero";
import Footer from "@/components/footer/footer";
import MemberSection from "../components/MemberSection/MemberSection";
import styles from "../styles/Home1.module.css";
import Gallery from "../components/Gallery/Gallery";


export default function Home() {
  return (
    <>
    <Gallery/> 
      {/* <Hero /> */}
      {/* <div className={styles.container}>
        <div className={styles.iphone}>
          <Image
            src="/Frame.svg"
            layout="responsive"
            width={752} //752
            height={1538} //1538
            alt="iPhone background"
          />
        </div>
        <div className={styles.toggle}>
          <div className={styles.arrow}>
            <div className={styles.ellipse}>
              <Image
                src="/arrowtoggle.svg"
                layout="responsive"
                width={64}
                height={64}
                alt="iPhone background"
              />
            </div>
          </div>
        </div>

        <div className={styles.gallery}>GALLERY</div>

        <div className={styles.bg}>
          <Image
            src="/Vector.svg"
            layout="responsive"
            width={954} //954
            height={1927} //1927
            alt="iPhone background"
          />
        </div>
      </div> */}
      {/* <MemberSection /> */}
      {/* <Footer /> */}
    </>
  );
}

// end of first code

//start of second code

// import type { NextPage } from "next";
// import Head from "next/head";
// import Image from 'next/image';
// import styles from "../styles/Home.module.css";

// export default function Home() {
//   return (
//     <div className={styles.container} style={{ width: '60em', height: '67.375em' }}>
//       <div className={styles.iphone} style={{ left: '5.5em', top: '24.25em' }}>
//         <Image
//           src="/Frame.svg"
//           width={47}//752px / 16px
//           height={96.125}//1538px / 16px
//           alt="iPhone background"
//         />
//       </div>
//       <div className={styles.toggle} style={{ left: '110.8125em', top: '5.9375em' }}>
//         <div className={styles.arrow}>
//           <div className={styles.ellipse}>
//             <Image
//               src="/arrowtoggle.svg"
//               width={4}//64px / 16px
//               height={4}//64px / 16px
//               alt="iPhone background"
//             />
//           </div>
//         </div>
//       </div>

//       <div className={styles.gallery} style={{ width: '18.8125em', height: '6em', left: '3.0625em', top: '4.625em', fontSize: '4.0625em' }}>
//         GALLERY
//       </div>

//       <div className={styles.bg} style={{ left: '60.375em', top: '13.75em' }}>
//         <Image
//           src="/Vector.svg"
//           width={59.625}//954px / 16px
//           height={120.4375}//1927px / 16px
//           alt="iPhone background"
//         />
//       </div>
//     </div>
//   );
// }
