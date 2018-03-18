/* global graphql */

import React from 'react';
import Hero from '../components/hero';
import AboutUs from '../components/about';
import WhatWeDo from '../components/what-we-do';
import Header from '../components/header';
import Footer from '../components/footer';

const IndexPage = props =>
  (<main>
    <Header title="Conflux" />

    <Hero text={props.data.allDataJson.edges[0].node.hero.text}
      background={props.data.allDataJson.edges[0].node.hero.background} />

    <AboutUs
      title={props.data.allDataJson.edges[0].node.aboutUs.title}
      mainText={props.data.allDataJson.edges[0].node.aboutUs.mainText}
      content={props.data.allDataJson.edges[0].node.aboutUs.subText}
      background={props.data.allDataJson.edges[0].node.aboutUs.background} />

    <WhatWeDo
      title={props.data.allDataJson.edges[0].node.whatWeDo.title}
      mainText={props.data.allDataJson.edges[0].node.whatWeDo.mainText}
      content={props.data.allDataJson.edges[0].node.whatWeDo.subText}
      background={props.data.allDataJson.edges[0].node.whatWeDo.background} />

    <Footer />
  </main>);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allDataJson {
      edges {
        node {
          title
          aboutUs {
            title
            mainText
            background
            subText {
              text
            }
          },
          whatWeDo {
            title
            mainText
            background
            subText {
              text
            }
          }
          hero {
            text
            background
          }
        }
      }
    }
  }
`;
