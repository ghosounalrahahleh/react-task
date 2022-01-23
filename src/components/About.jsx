import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="content">
      <ul>
        <NavLink to="team"> OurTeam</NavLink>
      </ul>
      <h1>About Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo atque
        consectetur eveniet fugiat fugit debitis repellendus unde ipsum
        repudiandae suscipit cumque! Earum, fugit. Minus dolorum, fugit vitae
        quibusdam aliquid modi quisquam. Iusto aperiam soluta voluptas tempora
        fugiat saepe, sed laboriosam asperiores! Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Rerum a accusantium provident alias
        nostrum. Sint odit dolores inventore sit, possimus dignissimos minima.
        Sed aut amet atque nisi! Placeat, in laudantium.
      </p>
    </div>
  );
};

export default About;
