import React from 'react'

function card(props) {
    var i=1;
    function show() {
        var front = document.getElementById(props.id + "_front");
        var back = document.getElementById(props.id + "_back");
        var card = document.getElementById(props.id);
        console.log();
        if(getComputedStyle(front).display=='block'){
            card.style.transform = `rotateY(${180*i}deg)`;
            front.style.display = "none";
            back.style.display = "block";
            i++;
        }
        else{
            card.style.transform = `rotateY(${180*i}deg)`;
            front.style.display = "block";
            back.style.display = "none";
            i++;

        }
    }
    return (
        <>
            <div className="card" id={props.id} onClick={show}> 
                <div className="front" id={props.id + "_front"}>
                    <img className='founder_img' src={props.img} alt='' />
                    <div className="card-body">
                        <div>
                            <h5>{props.name} </h5>
                            <p>{props.position}</p>
                        </div>
                        <div className="img">
                            <a href={props.linkedin} target='_blank'><img src="/Images/Vector.png" alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="back" id={props.id + "_back"}>
                    <p>{props.about}</p>
                </div>
            </div>
        </>
    )
}

export default card