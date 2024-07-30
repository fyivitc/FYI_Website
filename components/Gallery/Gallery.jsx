import React from 'react';
import { FaRegSquare } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { IconContext } from "react-icons";


function Gallery(){
    return(
        <>
<div className =" grid grid-cols-11 grid-rows-9 max-h-screen">
<div className =  " col-start-3 col-span-7 row-start-2 row-span-7 border-4 border-b-8 border-black rounded-t bg-gradient-to-tr from-blue-300 via-purple-400 to-pink-200   ">
     </div>
 <div className=" gap-2 p-2  col-start-3 col-span-7 sm:row-start-2 md:row-start-2 lg:row-start-2 sm:row-span-6 md:row-span-5 lg:row-span-3  overflow-auto inline-flex flex-wrap ">

<span>    <img src=" /Images/folder.png"  className=" h-20 "/>  <p>    2020-2021 </p></span>
<span>    <img src="/Images/folder.png" className=" h-20 "/>  <p>    2021-2022 </p></span>
<span>    <img src="/Images/folder.png" className=" h-20 "/>  <p>    2022-2023 </p></span>
<span>    <img src="/Images/folder.png" className=" h-20 "/>  <p>    2023-2024 </p></span>
<span>    <img src="/Images/folder.png" className=" h-20 "/> <p>     2024-2025</p> </span>
<span>    <img src="/Images/folder.png" className=" h-20 "/> <p>     2025-2026</p></span>
<span>    <img src="/Images/folder.png" className=" h-20 "/> <p>     2026-2027</p></span>
<span>    <img src="/Images/folder.png" className=" h-20 "/><p>     2027-2028</p> </span>
<span>    <img src="/Images/folder.png" className=" h-20 "/> <p>     2028-2029</p></span>
<span>    <img src="/Images/folder.png" className=" h-20 "/><p>     2029-2030</p> </span>
<span>    <img src="/Images/folder.png" className=" h-20 "/><p>     2024-2025</p> </span>
<span>    <img src="/Images/folder.png" className=" h-20 "/><p>     2024-2025</p> </span>
<span>    <img src="/Images/folder.png" className=" h-20 "/> <p>     2024-2025</p></span>
<span>    <img src="/Images/folder.png" className=" h-20 "/><p>     2024-2025</p></span>
<span>    <img src="/Images/folder.png" className=" h-20 "/><p>     2024-2025</p> </span>
<span>    <img src="/Images/folder.png" className=" h-20 "/><p>     2024-2025</p> </span>
<span>    <img src="/Images/folder.png" className=" h-20 "/><p>     2024-2025</p> </span>
<span>    <img src="/Images/folder.png" className=" h-20 "/><p>     2024-2025</p> </span>
<span>    <img src="/Images/folder.png" className=" h-20 "/><p>     2024-2025</p> </span>
<span>    <img src="/Images/folder.png" className=" h-20 "/><p>     2024-2025</p> </span>
</div>

<div className = " lg:hidden gap-20 col-start-3 col-end-10 row-start-9 inline-flex row-span-1 h-6 rounded-b justify-center bg-black " >
   <IconContext.Provider value={{color:"white"}}>
    <RxHamburgerMenu className=" rotate-90">  </RxHamburgerMenu>
    <FaRegSquare> </FaRegSquare>
    <MdKeyboardArrowLeft> </MdKeyboardArrowLeft>
    </IconContext.Provider>
</div>

<div className=" col-start-3 col-end-10 row-start-9 row-span-1 h-6 rounded-b justify-center bg-black text-white hidden lg:block ">
<p className=" text-center font-mont  ">MacBook Pro</p>

</div>
<img className=" row-start-9 my-6 col-start-2 col-end-11 hidden lg:block " src=" \Images\macbook_cover.png" />


</div>
    </>
    );
};
export default Gallery;