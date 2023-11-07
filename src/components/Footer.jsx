import React from "react";
import { footerText } from "@/constants";
const Footer = () => {
return(
    <footer id="footer">
        <div className="footer__inner">
            <div className="footer__text">
                <span>subinggood</span>
                <span>Fortpolio</span>
            </div>
            <div className="footer__info">
            <div className="left">
                <div className="title">
                    <a href="#">
                        sign up
                    </a>
                </div>
                <p>다양한 프레임워크를 이용한 웹 사이트</p>
            </div>
            <div className="right">
                <h3>social</h3>
                <ul>
                        {footerText.map((footer,key)=>(
                    <li>
                            <a href={footer.link} target="_blank" rel="noopener noreferrer">
                            {footer.title}
                        </a>
                        <em>{footer.desc}</em>
                    </li>
                            ))}
                    
                </ul>
            </div>
            </div>
            <div className="footer__right">
                @subinggood<br/>
                @ 2023 website portfolio
            </div>
        </div>

    </footer>
)
}

export default Footer;