import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.scss'
import FaAlignJustify from 'react-icons/lib/fa/align-justify'
import FacebookIcon from '@material-ui/icons/Facebook'
import { Button } from 'react-bootstrap';


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
                    {/* <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  to="/">Home</Link> 
                    </li><br />
                     <li> 
                    <div className={headerStyles.dropdown}>
                <a className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  href="#">Products</a>
                      <div className={headerStyles.dropdownItems}>
                      <a href="#">Pain Relief</a>
                       <a href="#">Pets</a>
                       <a href="#">Coconut Oils</a>
                       <a href="#">Hemp Oils</a>
                       <a href="#">MCT Oils</a>
                     </div>
                    </div>
                    </li>
                    <br />
                    <li>
                <a className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  href="#">About</a>
                    </li>


                     <li>
                <a className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  href="#">Contact</a>
                    </li> */}

                </ul>

                {/* mobile menu */}

                {/* <div className={headerStyles.mobList}>
                    <h1><FaAlignJustify /></h1>
                    <div className={headerStyles.mobItems}>
                       <a href="#">Products</a>
                       <a href="#">About Us</a>
                       <a href="#">Contact</a>
                    </div>
                </div> */}


              {/* <div className={headerStyles.mcNum}>
              <p>
              <a href="https://www.facebook.com/GoldenGoatUSA/" target="_blank" rel="noopener noreferrer"><FacebookIcon color="primary" fontSize="medium"/></a>
              </p>
              <p className={headerStyles.vline}><a href="#"><Button variant="success">Shop Now</Button></a></p>
              </div> */}
              </div>
            </nav>

            {/* <div className={headerStyles.mcNum}>
                <p>MC# 1322334</p>
                <p className={headerStyles.vline}>Talk To Us!<br /> <a href="tel:800-888-8888">800-888-8888</a></p>
                <Link className={headerStyles.Buttonvline} to="/form"><Button variant="info">Get Quote</Button></Link>
            </div> */}
            
        </header>
        </div>
    )
}

export default Header