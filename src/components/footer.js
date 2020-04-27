import React from 'react'
import { graphql, useStaticQuery} from 'gatsby'
import { Link } from 'gatsby'

import footerStyles from './footer.module.scss'
import { Container, Row, Col } from 'reactstrap';

import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                author
            }
        }
    }
    `)
    return (
        <footer className={footerStyles.footer}>
             <Container>
              <Row className={footerStyles.linkRow}>
               <Col className={footerStyles.footerSocial} activeClassName={footerStyles.activeNavItem}>
               <h5>Our Products</h5>
               <Link>Hemp Oil</Link>
               <Link>Coconut Oil</Link>
               <Link>Pain Cream</Link>
               <Link>Pet Products</Link>
              </Col>
              <Col className={footerStyles.footerNav}>
                <h5>CONTACT US</h5>
                <p>TOLL FREE: <a href="tel:954-826-4318">(800)-888-8888</a></p>
                <a href="tel:954-826-4318"></a>
                <p>EMAIL: <a href="">info@betterwellnessusa.com</a></p>
               </Col>
               <Col className={footerStyles.footerSocial}>
               <FacebookIcon color="primary" fontSize="medium"/>
              <InstagramIcon color="secondary" fontSize="medium"/>
               </Col>
              </Row>
            </Container>
            <div className={footerStyles.copyright}><p>Owned by {data.site.siteMetadata.author}, copyright 2020</p></div>
            
        </footer>
    )
}

export default Footer