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
                <OutboundLink className={headerStyles.title} href="https://goldengoatcbd.com/index.php/shop/">
                <img className={headerStyles.ggLogo} src={require("../images/cc-goldengoat-logo.png")} alt="Golden Goat Logo" />
                </OutboundLink>
            </li>
                    <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  to="https://goldengoatcbd.com/">Home</Link> 
                    </li><br />
                     <li> 
                    <div className={headerStyles.dropdown}>
                <OutboundLink className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  href="https://goldengoatcbd.com/index.php/shop/">Products</OutboundLink>
                      <div className={headerStyles.dropdownItems}>
                      <OutboundLink href="https://goldengoatcbd.com/index.php/product-category/pain-relief/">Pain Relief</OutboundLink>
                       <OutboundLink href="https://goldengoatcbd.com/index.php/product-category/cbd-treats-for-pets/">Pets</OutboundLink>
                       <OutboundLink href="https://goldengoatcbd.com/index.php/product-category/cbd-coconut-oil/">Coconut Oils</OutboundLink>
                       <OutboundLink href="https://goldengoatcbd.com/index.php/product-category/cbd-oil-extract/">Hemp Oils</OutboundLink>
                       <OutboundLink href="https://goldengoatcbd.com/index.php/product-category/cbd-oil-extract/">MCT Oils</OutboundLink>
                     </div>
                    </div>
                    </li>
                    <br />
                    <li>
                <OutboundLink className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  href="https://goldengoatcbd.com/index.php/about-us/">About</OutboundLink>
                    </li>


                     <li>
                <OutboundLink className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  href="https://goldengoatcbd.com/index.php/contact/">Contact</OutboundLink>
                    </li>

                </ul>

                {/* mobile menu */}

                <div className={headerStyles.mobList}>
                    <h1><FaAlignJustify /></h1>
                    <div className={headerStyles.mobItems}>
                       <OutboundLink href="https://goldengoatcbd.com/index.php/shop/">Products</OutboundLink>
                       <OutboundLink href="https://goldengoatcbd.com/index.php/about-us/">About Us</OutboundLink>
                       <OutboundLink href="https://goldengoatcbd.com/index.php/contact/">Contact</OutboundLink>
                    </div>
                </div>


              <div className={headerStyles.mcNum}>
              <p>
              <OutboundLink href="https://www.facebook.com/GoldenGoatUSA/" target="_blank" rel="noopener noreferrer"><FacebookIcon color="primary" fontSize="medium"/></OutboundLink>
              </p>
              <p className={headerStyles.vline}><OutboundLink href="https://goldengoatcbd.com/index.php/shop/"><Button variant="success">Shop Now</Button></OutboundLink></p>
              </div>
              </div>
            </nav>

            
        </header>
        </div>
    )
}

export default Header