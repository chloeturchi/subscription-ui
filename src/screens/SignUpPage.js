import React from 'react';

import styled from 'styled-components';
import PageTitle from '../components/PageTitle';
import SocialSubButton from '../components/SocialSubButton';
import BackLink from '../components/nav/BackLink';
import Divider from '../components/Divider';
import Text from '../components/Text';
import SubForm from '../components/form/SubForm';
import NavLink from '../components/nav/NavLink';
import googleIcon from '../assets/images/google-icon.svg';
import fbIcon from '../assets/images/facebook-icon.svg';

const SignUpPage = () => {
  return (
    <PageLayout>
      <BackLinkContainer>
        <BackLink />
      </BackLinkContainer>
      <PageTitleContainer>
        <PageTitle title="Inscription" />
      </PageTitleContainer>
      <GoogleContainer>
        <SocialSubButton
          onClick={() => console.log('Google sub')}
          iconImg={googleIcon}
          text={"S'incrire avec Google"}
        />
      </GoogleContainer>
      <FacebookContainer>
        <SocialSubButton
          onClick={() => console.log('Facebook sub')}
          iconImg={fbIcon}
          text={"S'incrire avec Facebook"}
        />
      </FacebookContainer>
      <SeparatorContainer>
        <Divider />
        <Text margin="0px 9.5px">ou</Text>
        <Divider />
      </SeparatorContainer>
      <FormContainer>
        <SubForm />
      </FormContainer>
      <SigninContainer>
        <Text size="12px">
          Vous avez déjà un compte ? <NavLink link="/">Connectez vous</NavLink>
        </Text>
      </SigninContainer>
    </PageLayout>
  );
};

const PageLayout = styled.div`
  display: grid;
  grid-template-columns: 40px 272px 40px 272px 40px;
  grid-template-rows: 32.5px [header-start] 38px 42.5px [socialsub-start] 94.9px [divider-start] 18px 14.5px [form-start] 453px [signin-start] 70px;
  width: 664px;
  margin: auto;
  height: 763px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 76px #00000014;
  border-radius: 20px;
  opacity: 1;
`;

const BackLinkContainer = styled.div`
  grid-column: 2;
  grid-row: header-start;
  display: flex;
  align-items: center;
`;

const PageTitleContainer = styled.div`
  grid-column: 2 / 5;
  grid-row: header-start;
`;

const GoogleContainer = styled.div`
  grid-column: 2;
  grid-row: socialsub-start;
`;

const FacebookContainer = styled.div`
  grid-column: 4;
  grid-row: socialsub-start;
`;

const SeparatorContainer = styled.div`
  display: flex;
  align-items: center;
  grid-column: 2 / 5;
  grid-row: divider-start;
`;

const FormContainer = styled.div`
  grid-column: 2 / 5;
  grid-row: form-start;
`;

const SigninContainer = styled.div`
  grid-column: 2 / 5;
  grid-row: signin-start;
  display: flex;
  justify-content: center;
  align-items: start;
`;

export default SignUpPage;
