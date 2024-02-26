
import Navbar from "./Navbar"
import Founder from "./Founder"


function Hero() {

    

    return (
        <>
            
            <Navbar />
            <Founder />

            <div className="about" id='About'>
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, sequi. Voluptate, perspiciatis nihil. Provident neque enim praesentium sed atque, aspernatur magni nihil labore eveniet ea quas, quidem et deleniti repellendus eius dicta quod tempore soluta doloribus aliquam. Ratione, laudantium tempora pariatur reiciendis architecto eligendi, labore excepturi veniam vitae necessitatibus consequuntur.</p>
            </div>
            <div className="line"></div>
            <div className="about">
                <div className="about_display">
                    <div className="section">
                        <h1>Our Facuilty Coordinator</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, sequi. Voluptate, perspiciatis nihil. Provident neque enim praesentium sed atque, aspernatur magni nihil labore eveniet ea quas, quidem et deleniti repellendus eius dicta quod tempore soluta doloribus aliquam. Ratione, laudantium tempora pariatur reiciendis architecto eligendi, labore excepturi veniam vitae necessitatibus consequuntur.</p>
                    </div>
                    <img src="/images/Ellipse 6.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Hero