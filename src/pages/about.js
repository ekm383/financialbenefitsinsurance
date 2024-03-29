import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"
import BannerPage from "../components/globals/banner/BannerPage"
import Section from "../components/globals/section/Section"
import Img1 from "../images/agents/FBI-Travis-Motosue.jpg"
import Img2 from "../images/agents/FBI-Edward-Motosue.jpg"
import Img3 from "../images/scout-medal.png"
import Img4 from "../images/generations.jpg"
import Img5 from "../images/silver-beaver-medal.jpg"
import Img6 from "../images/helmet.jpg"
import Img7 from "../images/grandparents.jpg"
import Logos from "../components/globals/footer/Logos"

const AboutPage = () => {
  const image = useStaticQuery(graphql`
    {
      bg: file(relativePath: { eq: "background/fbihi-bg-05.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Wrapper>
        <SEO
          title="Home"
          description="We are an independent insurance agency. We do not work for an insurance company; we work for you!`,
      author: `@financialbenefitsinsurance"
          keywords={[
            `Hawaii Term Life Insurance`,
            `Hawaii Medicare Supplements`,
            `Hawaii Medicare Advantage`,
            `Hawaii Health Insurance`,
          ]}
        />
        <BackgroundImage
          Tag="section"
          className="bg-hero"
          fluid={image.bg.childImageSharp.fluid}
          backgroundColor={`#ffffff`}
        >
          <Section style={{ width: "100vw", alignItems: "center" }}>
            <BannerPage title="About Us" />
          </Section>
        </BackgroundImage>
        <Section style={{ margin: "4rem auto 0rem auto" }}>
          <iframe
            title="About FBIHI"
            src="https://player.vimeo.com/video/754486861?h=632d8111fa"
            width="100%"
            height="360"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          ></iframe>
        </Section>
        <Section style={{ paddingTop: "3rem" }}>
          <div className="box">
            <p>
              When choosing an insurance agency, you want a company you can
              trust. We are an independent insurance agency. We do not work for
              an insurance company; we work for you! We work on your side when
              you have a loss and follow through to see that you get fair,
              prompt payment.
            </p>
            <p>
              As an independent, full-service insurance agency, our duty is to
              our clients best interests. As your insurance agents, it is our
              responsibility to provide YOU the best service and the best
              coverage, at the best possible price.
            </p>
            <p>
              We are a little old fashioned, if you want something done quickly,
              we will do everything we can to assist. Customer service is of
              paramount importance to us. Our customers recommend us to their
              friends. Our expertise is based on well-trained experienced staff
              that can tailor a comprehensive insurance program for your
              specific needs. You will have the added benefit of working with
              agents who understand your needs. Finding the right policy is only
              the beginning.
            </p>
            <p>When you become our client, you will receive:</p>
            <ul>
              <li>
                Practical and accurate information about your insurance policy
                and your insurance company.
              </li>
              <li>An agent who works for your interests.</li>
              <li>Personal service.</li>
            </ul>
            <p>
              Whether you need to make a policy change, have a question about
              billing or need to report a claim our customer service
              representatives are the best in the business and will handle your
              request professionally and quickly.
            </p>
            <p>
              Our web site is also available 24/7 to accommodate your busy
              schedule. Please bookmark our website, and visit us often. We look
              forward to hearing from you!
            </p>
            <p>
              Help Kupuna (Seniors) find peace of mind in the communities we
              serve. We believe Seniors deserve to live healthier productive
              lives. We want everyone get more from life.
            </p>
            <p>"Do the right thing, Always"</p>
            <p>
              "We believe, No one plan is good for everyone. Everyone has
              different wants and needs. Everyone has different medical
              conditions. Everyone has different financial situations. Everyone
              is different."
            </p>
          </div>
        </Section>
        <Section style={{ margin: "4rem auto 2rem auto" }}>
          <iframe
            title="About FBIHI"
            src="https://player.vimeo.com/video/754487064?h=4119f76e17"
            width="100%"
            height="360"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          ></iframe>
        </Section>
        <Section style={{ paddingBottom: "3rem" }}>
          <div className="container">
            <div className="profile">
              <img src={Img1} alt="travis" width="200" />
              <h4>
                Travis Motosue
                <br /> President
              </h4>
              <p>
                Born February 17, 1981 and raised on the Windward side of Oahu
                in Kailua, to Ed and Darlee-Ruth, Travis Motosue was the last
                strike in his father’s attempt to get a boy. His dad was told 3
                strikes and you are out, as his first 2 children were beautiful
                healthy girls, but luckily in 1981 a boy was on their way on the
                third try. While growing up in Kailua, Travis was very active in
                the community doing service projects and even became the top
                selling person for Boy Scout Makahiki tickets for many years in
                row. Travis eventually attained the rank of Eagle Scout and also
                attended and graduated from Iolani High School in 1999.
                <br />
                <img src={Img3} alt="scout" width="200" />
                <br />
                Following his graduation, he went on to attend Oregon State
                University and then graduated at University of Hawaii with a
                B.S. major in Biology in 2003.
              </p>
              <p>
                While attending Iolani and University of Hawaii, Travis stayed
                with his grandparents as they lived in Kaimuki which was closer
                to his schooling than the windward side. During his stays, he
                had grown a close bond and relationship with his grandparents
                and eventually saw the changing of the times.
                <br />
                <img src={Img7} alt="scout" width="200" />
                <br />
                While he was younger, they took care of him; but as times have
                passed he found himself helping with their needs of taking them
                to the doctors, stores, and making them food. Seeing this
                occurring and the fact that the seniors needed help, he decided
                to look into working with the seniors in the insurance market.
                Recently, Travis has had a very busy personal life having had
                his son, Julian, born on May 27, 2017 and then getting married
                in 2018 to his longtime girlfriend and now wife, Jessica. Mason
                his second son was born March 21, 2019. Family life for Travis
                has definitely been a blessing, but also a lifestyle change that
                keeps on evolving as he adjusts to life as a father and husband.
              </p>
              <p>
                Travis Motosue has been working with insurance and has
                specialized in Medicare options for seniors ever since the
                Medicare Part D prescription drug and Medicare Advantage plans
                came to Hawaii in 2004. Being an insurance broker, he makes it a
                point to talk to each client individually to find the plan that
                best suites them as each person has different wants and needs.
                Mr. Motosue has 18 years of experience in the insurance
                business, helping the needs of the Medicare options for Medicare
                eligible beneficiaries. His agency Financial Benefits Insurance,
                Inc has been in business from 2010. Benefits are our business,
                service sets us apart.
              </p>
            </div>
            <div className="profile">
              <img src={Img2} alt="travis" width="200" />
              <h4>
                Edward Motosue
                <br /> Vice President
              </h4>
              <p>
                Born February 10, 1949, in Honolulu, Hawaii, to Seiji and
                Kiyoko, Edward Motosue was the first of five children – two boys
                followed by three girls. Attending Iolani School he graduated in
                1967, then later married his high school sweetheart, Darlee.
                They have been together for fifty-one years. Edward earned a
                bachelor’s degree (BS Biology) from University of Hawaii in 1971
                and earned a master’s degree (MBA) from Pepperdine University in
                1978. At seventy-one years old he has three children, ten
                grandchildren, and fourteen great grandchildren. Edward is
                fortunate his dad is still alive. He is ninety-six years old.
                <br />
                <img src={Img4} alt="ed" width="200" />
                <br />
              </p>
              <p>
                Enjoying the outdoors, Edward leads Scouts on five-day high
                adventure trips on the Neighbor Islands where he backpacks with
                his own tent, food, and water carried on his back. Being an avid
                Scouter, he received the Silver Beaver award in 1998.
                <br />
                <img src={Img5} alt="ed" width="200" /> <br />
                He was the Activities/Civic Committee Chairman in Aloha Council
                and also Ko'olau District Commissioner. Edward is also a diehard
                football fan since his days at UH, holding seven season tickets
                every year to take his family and friends. Through winning
                seasons and losing seasons, Edward is at UH football games. Go
                Warriors!!!
                <br />
                <img src={Img6} alt="ed" width="200" /> <br />
              </p>
              <p>
                In 1971 Edward entered the Sears Roebuck National Trainee
                Program and started work at the Ala Moana store. After
                managerial assignments in Ala Moana, Pearlridge, Kaneohe, and
                Waipahu stores Edward stayed in the Sears District Office for
                twenty years. At twenty-four he was the youngest Store Checklist
                Manager. Edward earned numerous awards at Sears over the years
                but decided to retire in 2006 after thirty-five years in retail
                management.
              </p>
              <p>
                Working at Sears was a tremendous blessing for Edward. It was at
                Sears that he developed his management, leadership skills, and
                the value of customer service. After retiring, Edward found
                there was a life after Sears. Helping and educating Medicare
                beneficiaries on their options was both gratifying and
                fulfilling.
              </p>
              <p>
                Edward passed the Hawaii Life and Health Licensing exam in 2006
                and worked with his son, Travis, at Advantage Insurance and
                Insurance Benefits Service. In 2010, they opened Financial
                Benefits Insurance, Inc., a brokerage agency that represents
                over forty carriers. The company specializes in Senior Products
                (Retirement plans, Long Term Care plans, Medicare Advantage
                plans, Medicare Supplement plans, and Group Medical plans),
                while also providing Living Benefit and Tax-Free Income for Life
                plans.
              </p>
              <p>
                Since its inception, Financial Benefits Insurance has grown
                rapidly and currently has seventy four agents. Edward and Travis
                do over 140 Medicare seminars every year. Emphasizing everyone
                has different wants and needs, Edward’s motto is “No one plan is
                good for everybody”. He also says,” Benefits are our business,
                service sets us apart”.
              </p>
            </div>
          </div>
        </Section>
      </Wrapper>
      <Logos />
    </Layout>
  )
}

const Wrapper = styled.div`
  .bg-hero {
    width: 100%;
    background-position: center center;
    background-repeat: repeat-y;
    background-size: cover;
  }
  .box {
    margin: 0rem auto;
  }
  p {
    margin-bottom: 1rem;
  }
  ul {
    margin-bottom: 1rem;
    padding-left: 3rem;
  }
  img {
    margin-bottom: 1rem;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0rem auto;
  }
  .profile {
    flex-basis: 45%;
    margin-top: 2rem;
  }
  h4 {
    color: var(--mainColor);
    margin-bottom: 1rem;
  }
  @media (max-width: 768px) {
    .box {
      width: 90vw;
    }
    .container {
      width: 100vw;
    }
    img {
      margin-left: 0rem;
    }
    .profile {
      flex-basis: 100%;
    }
  }
`

export default AboutPage
