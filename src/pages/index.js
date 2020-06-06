import React, { Component } from "react";
import styled from "styled-components";
import Layout from "../components/common/Layout";
import Section from "../components/home/Section";
import LearnCard from "../components/home/LearnCard";
import WorkCard from "../components/home/WorkCard";
import PlayCard from "../components/home/PlayCard";

import intro from "../assets/images/01-intro.jpg";
import themes from "../assets/images/02-themes.jpg";
import graphql from "../assets/images/03-graphql.jpg";
import cms from "../assets/images/04-cms.jpg";
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

class Home extends Component {
  render() {
    return (
      <Layout>
        <Section
          side="right"
          title="learn"
          subtitle="Research is creating new knowledge."
        >
          <CardContainer>
            <LearnCard
              delay={1000}
              background={intro}
              link="blog/todo"
              title="Gatsby Intro"
              subtitle="JAMSTACK"
            />

            <LearnCard
              delay={1200}
              background={themes}
              link="blog/todo"
              title="Gatsby Theme"
              subtitle="JAMSTACK"
            />
            <LearnCard
              delay={1400}
              background={graphql}
              link="blog/todo"
              title="GraphQL"
              subtitle="JAMSTACK"
            />
            <LearnCard
              delay={1600}
              background={cms}
              link="blog/todo"
              title="CMS"
              subtitle="JAMSTACK"
            />
          </CardContainer>
        </Section>
        <Section
          side="left"
          title="work"
          subtitle="Without labor nothing prospers."
        >
          <CardContainer>
            <WorkCard />
            <WorkCard />
          </CardContainer>
        </Section>
        <Section
          side="right"
          title="PLAY"
          subtitle="Play is training for the unexpected."
        >
          <CardContainer>
            <PlayCard />
          </CardContainer>
        </Section>
      </Layout>
    );
  }
}

export default Home;
