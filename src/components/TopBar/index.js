import React from "react";
import {
  FaPhone,
  FaWhatsapp,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

import { Container } from "./styles";

const TopBar = () => {
  return (
    <Container>
      <div className="content">
        <div className="contact">
          <span>
            <FaPhone />
            (11) 3862.7321
          </span>
          <span>
            <FaWhatsapp />
            (11) 94748.9690
          </span>
        </div>
        <div className="social-buttons">
          <a href="!#">
            <FaYoutube size={30} />
          </a>
          <a href="!#">
            <FaTwitter size={30} />
          </a>
          <a href="!#">
            <FaInstagram size={30} />
          </a>
          <a href="!#">
            <FaFacebook size={30} />
          </a>
        </div>
      </div>
    </Container>
  );
};
export default TopBar;
