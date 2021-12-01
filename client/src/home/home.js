import React, { Component } from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";

class Home extends Component {
  render() {
    console.log("Comment List:", this.state);
    return (
      <div id="wrap">
        <div id="banner"></div>
        <div id="mainArea" className="contact">
          <h1>Welcome to Zanyo</h1>
          <p id="intro">
            {`
            Zhan Yu washing is available!
            As a major manufacturer of mid-to-high-end washing chemicals, Zhanyu Washing will accompany colleagues in the laundry industry to understand washing knowledge, solve washing problems, go deep into industry trends, and master first-hand washing information in the days to come.
            Mr. Jin Zhenquan, the founder of Zhanyu Biotechnology, has been in this industry for more than 20 years. From the beginning of washing machinery to later washing chemicals, his more than 20 years of experience in the industry have made him a treasurer of the development of this industry.
          As a branch manager of a well-known domestic washing equipment manufacturer, he understands the development process of washing equipment and treasures the washing products of various manufacturers: from the beginning of the dry cleaning machine, the washing machine, and then to the tunnel washing machine (washing dragon). , He knows all the washing effects and advantages of various products.
            In 2007, he and his friends set up a washing chemical company. In a blink of an eye, he has been immersed in this industry for more than ten years. In these more than ten years of hard work, the company has provided various medium and high-end detergent products for star hotels, hospitals, civil aviation departments, and various large and medium-sized laundry factories. Both products and services are highly praised by customers. Now in order to reach a higher level, he founded Shanghai Zhanyu Biotechnology Co., Ltd.
            Talking about the future development of this new company, Mr. Jin Zhenquan explained the cultural vision implied by the company's name in this way: "Zhan" has the meaning of "clear" in the old saying, "given" means "given", and we hope to provide customers with excellence We also hope to provide customers with excellent washing services.
          In order to strive for the best washing effect, they set up a professional research team, starting from raw material control, and establishing contact with internationally renowned chemical material brands. The research team pursues the optimization of the formula in terms of washing effect. The chemical material products provided by the company have been collected countless times. To the praise of customers. "The linen is very white, soft and bright."
            In the specific washing process, due to the various conditions faced by each washing unit: the water quality used for washing, the performance of the machine, the feeding situation of the distributing feeder equipped with the washing dragon, the pH balance, etc., these will affect the washing to a certain extent. The effect, in response to the problems faced by different user units, the company insists on urging customers and provides personalized solutions for different situations. Mr. Jin Zhenquan said: "High-quality products plus high-quality services, the combination of "Zhan" and "Yu" is the original intention of the company, and it will also be a consistent company culture. I believe that every customer who cooperates with Zhanyu will stay with it. deep impression."
            Zhanyu Washing, in line with the original intention, will not forget the future. In the current difficult time of the epidemic, we need our colleagues in the washing industry to work together to overcome the difficulties. We will also communicate with everyone on this platform, continue to explore, and make progress together!
            `}
          </p>
        </div>
      </div>
    );
  }
}
export default Home;
