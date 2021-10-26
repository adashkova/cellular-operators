import { FC } from 'react';
import { Layout as AntLayout, Typography } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const { Header, Content } = AntLayout;
const { Text } = Typography;

const StyledHeader = styled(Header)`
  background-color: #2e2d2d;
`;

const StyledLink = styled(Link)`
  font-size: 1.3rem;
  color: #fff;
`;

const StyledText = styled(Text)`
  color: #fff;
`;

const Layout: FC = ({ children }) => (
  <AntLayout style={{ minHeight: '100vh' }}>
    <StyledHeader>
      <StyledLink to="/">
        <HomeOutlined />
        <StyledText strong> TELECOM</StyledText>
      </StyledLink>
    </StyledHeader>
    <Content style={{ margin: '200px 0' }}>{children}</Content>
  </AntLayout>
);
export default Layout;
