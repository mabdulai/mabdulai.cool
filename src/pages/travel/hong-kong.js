import React, { Component } from 'react';
import Layout from '../../components/layout';
import styled from 'styled-components';

const Container = styled.section`
  max-width: 1300px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 40px;
  font-family: 'Gilroy';
  text-transform: uppercase;
  font-weight: 900;
`;

const Subtitle = styled.h2`
  display: inline-block;
  font-size: 12px;
  font-family: 'roboto mono';
  text-transform: uppercase;
  font-weight: 300;
  background: #000;
  color: #fff;
  padding: 4px 8px;
`;

const Block = styled.p`
  padding-top: 32px;
  max-width: 100ch;
`;

const BlockTitle = styled.h3`
  font-family: 'Gilroy';
  font-size: 18px;
  padding-bottom: 4px;
`;
const BlockText = styled.div`
  font-family: 'roboto mono';
  font-size: 16px;
`;

class HongKong extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <Title>Hong Kong & Seoul</Title>
          <Subtitle>Amazing time with friends and lots of food :)</Subtitle>
          <Block>
            <BlockTitle>What are React Hooks</BlockTitle>
            <BlockText>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam beatae veniam quidem ab, harum provident
              ut quam mollitia fugiat consequatur quos nostrum magni expedita molestiae veritatis aspernatur! Eveniet,
              ut est reprehenderit aliquam quis necessitatibus tempore nisi illum in quam omnis voluptas obcaecati,
              eligendi non sapiente pariatur. Libero tempore sequi ipsam eaque placeat illum ipsa nulla eius voluptatem
              vero, nobis doloribus velit est beatae esse quis suscipit, ut impedit! Corrupti, ullam. Quae asperiores
              quos architecto, accusantium iste similique eius dignissimos perferendis debitis deleniti porro iure ut
              eum aspernatur. In odio assumenda repudiandae nam illo sit quo blanditiis, minima ducimus, ab odit!
            </BlockText>
          </Block>
          <Block>
            <BlockText>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam beatae veniam quidem ab, harum provident
              ut quam mollitia fugiat consequatur quos nostrum magni expedita molestiae veritatis aspernatur! Eveniet,
              ut est reprehenderit aliquam quis necessitatibus tempore nisi illum in quam omnis voluptas obcaecati,
              eligendi non sapiente pariatur. Libero tempore sequi ipsam eaque placeat illum ipsa nulla eius voluptatem
              vero, nobis doloribus velit est beatae esse quis suscipit, ut impedit! Corrupti, ullam. Quae asperiores
              quos architecto, accusantium iste similique eius dignissimos perferendis debitis deleniti porro iure ut
              eum aspernatur. In odio assumenda repudiandae nam illo sit quo blanditiis, minima ducimus, ab odit!
            </BlockText>
          </Block>
          <Block>
            <BlockText>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam beatae veniam quidem ab, harum provident
              ut quam mollitia fugiat consequatur quos nostrum magni expedita molestiae veritatis aspernatur! Eveniet,
              ut est reprehenderit aliquam quis necessitatibus tempore nisi illum in quam omnis voluptas obcaecati,
              eligendi non sapiente pariatur. Libero tempore sequi ipsam eaque placeat illum ipsa nulla eius voluptatem
              vero, nobis doloribus velit est beatae esse quis suscipit, ut impedit! Corrupti, ullam. Quae asperiores
              quos architecto, accusantium iste similique eius dignissimos perferendis debitis deleniti porro iure ut
              eum aspernatur. In odio assumenda repudiandae nam illo sit quo blanditiis, minima ducimus, ab odit!
            </BlockText>
          </Block>
        </Container>
      </Layout>
    );
  }
}

export default HongKong;
