import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.scss'
import FaAlignJustify from 'react-icons/lib/fa/align-justify'
import FacebookIcon from '@material-ui/icons/Facebook'
import { Button } from 'react-bootstrap';
import { OutboundLink } from "gatsby-plugin-google-analytics"


const Header = () => {
    // const data = useStaticQuery(graphql`
    //   query {
    //       site {
    //           siteMetadata {
    //               title
    //           }
    //       }
    //   }
    // `)

    return (
        <div>
            {/* <div className={headerStyles.topHeader}>
                <Link><p>MC#000000</p></Link>
            </div> */}
        <header className={headerStyles.header}>
             <nav>

           <div className={headerStyles.flex}>
                <ul className={headerStyles.navList}>
                    <li>
                <Link className={headerStyles.title} to="/">
                <img className={headerStyles.ggLogo} src={require("../images/cc-goldengoat-logo.png")} alt="Golden Goat Logo" />
                </Link>
            </li>
                    <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  to="/">Home</Link> 
                    </li><br />
                     <li> 
                    <div className={headerStyles.dropdown}>
                <OutboundLink className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  href="#">Products</OutboundLink>
                      <div className={headerStyles.dropdownItems}>
                      <OutboundLink href="#">Pain Relief</OutboundLink>
                       <OutboundLink href="#">Pets</OutboundLink>
                       <OutboundLink href="#">Coconut Oils</OutboundLink>
                       <OutboundLink href="#">Hemp Oils</OutboundLink>
                       <OutboundLink href="#">MCT Oils</OutboundLink>
                     </div>
                    </div>
                    </li>
                    <br />
                    <li>
                <OutboundLink className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  href="#">About</OutboundLink>
                    </li>


                     <li>
                <OutboundLink className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  href="#">Contact</OutboundLink>
                    </li>

                </ul>

                {/* mobile menu */}

                <div className={headerStyles.mobList}>
                    <h1><FaAlignJustify /></h1>
                    <div className={headerStyles.mobItems}>
                       <OutboundLink href="#">Products</OutboundLink>
                       <OutboundLink href="#">About Us</OutboundLink>
                       <OutboundLink href="#">Contact</OutboundLink>
                    </div>
                </div>


              <div className={headerStyles.mcNum}>
              <p>
              <OutboundLink href="https://www.facebook.com/GoldenGoatUSA/" target="_blank" rel="noopener noreferrer"><FacebookIcon color="primary" fontSize="medium"/></OutboundLink>
              </p>
              <p className={headerStyles.vline}><OutboundLink href="#"><Button variant="success">Shop Now</Button></OutboundLink></p>
              </div>
              </div>
            </nav>

            
        </header>
        </div>
    )
}

export default Header