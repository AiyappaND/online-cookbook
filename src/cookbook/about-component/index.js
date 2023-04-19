import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faThumbsDown, faThumbsUp} from "@fortawesome/free-solid-svg-icons";
function About() {
    return(
        <>
            <div className="row text-center">
                <h1>About Us</h1>
                <p>                                                           </p>
            </div>
            <div className="row text-center">
                <div className="col-4">
                    <div className="row center">
                        <h5>Palna Patel</h5>
                    </div>
                    <div className="row">
                        <img src="/images/me.jpg" className="rounded-circle w-100" height={500}/>
                    </div>
                    <div className="row">
                        <p>                                  </p>
                        <p> Hello! My name is Palna and I have been passionate about cooking since I was a little girl. This website was my dream. It was an opportunity to combine my passions and create a space for people to share recipes and learn them too! Please sign up :)</p>
                    </div>
                </div>
                <div className="col-4">
                    <div className="row center">
                        <h5>Aiyappa Deviah</h5>
                    </div>
                    <div className="row">
                        <img src="/images/aiyappa.png" className="rounded-circle w-100" height={500}/>
                    </div>
                    <div className="row">
                        <p>                                  </p>
                        <p> This is Aiyappa! I'm so happy you decided to scroll onto our website. This site is a creative playground to both share personal recipes, find unique family recipes, and just grab ideas to make your very own new recipe. Together we can connect through cooking! I highly recommend signing up as a premium user as there are so many features such as a favorites list that will make your experience here even better! </p>
                    </div>
                </div>
                <div className="col-4">
                    <div className="row center">
                        <h5>Amy Ku</h5>
                    </div>
                    <div className="row">
                        <img src="/images/amy.png" className="rounded-circle w-100" height={500}/>
                    </div>
                    <div className="row">
                        <p>                                  </p>
                        <p> Amy here :) It is so nice to see you on our website! Making this site was so much fun as we are all passionate about website building, cooking, recipes, and connecting with people. Combining all our passions, we have come up with this space where you can sign up and interact with people and recipes! </p>
                    </div>
                </div>
                <div className="row center">
                    <p>                                                           </p>
                    <div className="col"></div>
                    <div className="col-2">
                        <FontAwesomeIcon icon={faThumbsUp}/>
                    </div>
                    <div className="col-2">
                        <FontAwesomeIcon icon={faThumbsDown}/>
                    </div>
                    <div className="col-2">
                        <FontAwesomeIcon icon={faThumbsUp}/>
                    </div>
                    <div className="col"></div>
                </div>
                <div className="row center">
                    <h4> Follow Us! </h4>
                </div>
            </div>
        </>
    );
}
export default About
