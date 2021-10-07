import React from "react"
import { graphql } from "gatsby"
import Layout from "@components/layout"
import SEO from "@components/seo"
import markshustAvatar from "@assets/markshust-avatar.jpg"

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" />
        <img
          className="rounded-full h-48 h-48 lg:h-64 lg:w-64 mx-auto"
          src={markshustAvatar}
          alt="Mark Shust"
        />
        <h1 className="mb-8 text-3xl text-center font-extrabold tracking-tight text-gray-900 sm:text-5xl pb-4">
          About Me
        </h1>
        <div className="prose text-gray-700 prose-lg mt-8">
          <p>
            My passion over the last decade has revolved entirely around
            Magento. Starting with the early days of Magento 0.8, I've had a
            heavy interest in the Zend and Magento Frameworks, and have been
            devoted to eCommerce &amp; PHP for even longer (over 20 years!).
            I've held all positions within many organizations, ranging from
            junior developer to chief solution architect.
          </p>
          <p>
            During this time I've spoken at conferences such as{" "}
            <a
              href="https://info2.magento.com/rs/magentosoftware/images/imagine2012-barcamp-hail-or-fail.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Magento Imagine
            </a>{" "}
            and{" "}
            <a
              href="https://eventil.com/events/meet-magento-ny-2015/"
              target="_blank"
              rel="noreferrer"
            >
              Meet Magento New York
            </a>
            , and have been very outspoken in regards to following accepted best
            practices for Magento.
          </p>
          <p>
            My numerous years of LAMP stack programming expertise have paved the
            way for me to become a{" "}
            <a
              href="https://www.zend-zce.com/en/yellow-pages/ZEND014633"
              target="_blank"
              rel="noreferrer"
            >
              Zend Certified Engineer
            </a>{" "}
            and{" "}
            <a
              href="https://www.youracclaim.com/users/mark-shust"
              target="_blank"
              rel="noreferrer"
            >
              Adobe Certified Magento Developer
            </a>
            . I love open-source software, and have maintained{" "}
            <a
              href="https://github.com/markshust/docker-magento"
              target="_blank"
              rel="noreferrer"
            >
              the most popular development environment for Magento
            </a>{" "}
            since the release of Magento 2.
          </p>
          <p>
            I'm married to my wonderful wife Juliann, and we are the proud
            parents of twin girls Lily and Brielle. I live in Northeast Ohio and
            love eating chipotle burritos, solving Rubik's cubes, driving{" "}
            <a
              href="https://www.instagram.com/markshust/"
              target="_blank"
              rel="noreferrer"
            >
              my 240sx
            </a>
            , and watching Cleveland Browns games.
          </p>
        </div>
        <h2 className="text-3xl font-semibold mt-20 mb-6">Certifications</h2>
        <div className="prose text-gray-700 prose-lg mb-16">
          <p>
            I hold a few certifications revolving around my focus of PHP and
            Magento:
          </p>
          <ul>
            <li>
              <a
                href="https://www.youracclaim.com/earner/earned/badge/69c13212-d83b-4041-aeb2-04bee554bc41"
                target="_blank"
                rel="noreferrer"
              >
                Adobe Certified Professional (ACP) - Magento Commerce Developer
              </a>
              <br />
              <em>(April 2019)</em>
            </li>
            <li>
              <a
                href="https://www.youracclaim.com/earner/earned/badge/7411e8f8-e682-4360-b8c7-056f0b7d4b6f"
                target="_blank"
                rel="noreferrer"
              >
                Adobe Certified Expert (ACP) - Magento Commerce Business
                Practitioner
              </a>
              <br />
              <em>(February 2019)</em>
            </li>
            <li>
              <a
                href="https://u.magento.com/certification/directory/dev/883/"
                target="_blank"
                rel="noreferrer"
              >
                Magento 1 Certified Developer Plus
              </a>
              <br />
              <em>(March 2012)</em>
            </li>
            <li>
              <a
                href="https://www.zend-zce.com/en/yellow-pages/ZEND014633"
                target="_blank"
                rel="noreferrer"
              >
                Zend Certified Engineer (PHP5)
              </a>
              <br />
              <em>(July 2010)</em>
            </li>
          </ul>
        </div>
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`