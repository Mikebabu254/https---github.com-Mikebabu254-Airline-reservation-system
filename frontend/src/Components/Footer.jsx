import { Fa500Px, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer(){
    return(
        <div className="bg-info d-flex  ">
            <h3>JetSet Airline Reservation </h3>
            <div>
                <FaInstagram/>
                <FaFacebook/>
                <FaTwitter/>
            </div>
            
            <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium tempore quae suscipit sint numquam adipisci iure neque saepe? Doloribus cumque minima aperiam aliquam est velit.</p>

        </div>
    )
}

export default Footer;