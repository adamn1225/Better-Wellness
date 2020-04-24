import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Button } from 'react-bootstrap';
import headerStyles from './header.module.scss'
import FaAlignJustify from 'react-icons/lib/fa/align-justify'


const Header = () => {
    const data = useStaticQuery(graphql`
      query {
          site {
              siteMetadata {
                  title
              }
          }
      }
    `)

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
                <img className={headerStyles.ggLogo} src={require("../images/gg-logo.png")} />
                </Link>
            </li>
                    <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  to="/">Home</Link> 
                    </li><br />
                     <li> 
                    <div className={headerStyles.dropdown}>
                <a className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  href="https://goldengoatcbd.com/index.php/shop/">Products</a>
                      <div className={headerStyles.dropdownItems}>
                      <a href="https://goldengoatcbd.com/index.php/product-category/pain-relief/">Pain Relief</a>
                       <a href="https://goldengoatcbd.com/index.php/product-category/cbd-treats-for-pets/">Pets</a>
                       <a href="https://goldengoatcbd.com/index.php/product-category/cbd-coconut-oil/">Coconut Oils</a>
                       <a href="https://goldengoatcbd.com/index.php/product-category/cbd-oil-extract/">Hemp Oils</a>
                       <a href="https://goldengoatcbd.com/index.php/product-category/mct-oil/">MCT Oils</a>
                     </div>
                    </div>
                    </li>
                    <br />
                    <li>
                <a className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  href="https://goldengoatcbd.com/index.php/about-us/">About</a>
                    </li>


                     <li>
                <a className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  href="https://goldengoatcbd.com/index.php/contact/">Contact</a>
                    </li>

                </ul>

                {/* mobile menu */}

                <div className={headerStyles.mobList}>
                    <h1><FaAlignJustify /></h1>
                    <div className={headerStyles.mobItems}>
                       <Link to="/blog">Blog</Link>
                       <a href="#">Link 2</a>
                       <a href="#">Link 3</a>
                    </div>
                </div>


              <div className={headerStyles.mcNum}>
              <p>
              FB | IG
              </p>
              <p className={headerStyles.vline}>Talk To Us!<br /> <a href="tel:800-888-8888">800-888-8888</a></p>
              </div>
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