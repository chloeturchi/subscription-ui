import React, { useState } from 'react';

import styled from 'styled-components';
import Input from './Inputs/Input';
import GenreSelect from './Inputs/GenreSelect';
import Checkbox from './Inputs/Checkbox';
import Submit from './Inputs/Submit';

const Form = () => {
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const [genre, setGenre] = useState('none');

  const [isChecked, setIsChecked] = useState({
    conditions: false,
    newsletter: false,
  });

  const handleChangeCheck = ({ target: { name, checked } }) => {
    setIsChecked({
      ...isChecked,
      [name]: checked,
    });
  };

  const handleChangeSelect = (e) => {
    setGenre(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Submitting ${name}, ${firstName}, ${email}, ${tel}, ${password}, ${confirmedPassword}`
    );
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <GenreContainer>
        <GenreSelect onChange={handleChangeSelect} value={genre} />
      </GenreContainer>
      <NameContainer>
        <Input
          inputName="Nom"
          type="text"
          name="nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </NameContainer>
      <FirstNameContainer>
        <Input
          inputName="Prenom"
          type="text"
          name="prenom"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </FirstNameContainer>
      <EmailContainer>
        <Input
          inputName="E-mail"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </EmailContainer>
      <TelContainer>
        <Input
          inputName="Téléphone"
          type="tel"
          name="tel"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />
      </TelContainer>
      <PasswordContainer>
        <Input
          inputName="Mot de passe"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </PasswordContainer>
      <ConfirmPasswordContainer>
        <Input
          inputName="Confirmation de mot de passe"
          type="password"
          name="confirmedpassword"
          value={confirmedPassword}
          onChange={(e) => setConfirmedPassword(e.target.value)}
        />
      </ConfirmPasswordContainer>
      <ConditionsContainer>
        <Checkbox
          name="conditions"
          textSize="12px"
          text="J'accepte les conditions d'utilisation et la politique de
          confidentialité"
          checked={isChecked['conditions']}
          onChange={handleChangeCheck}
        />
      </ConditionsContainer>
      <NewsletterContainer>
        <Checkbox
          name="newsletter"
          textSize="12px"
          text="Je m'inscrit à la Newsletter pour me tenir informé de toutes les
          dernières actualités"
          checked={isChecked['newsletter']}
          onChange={handleChangeCheck}
        />
      </NewsletterContainer>
      <SubmitContainer>
        <Submit type="submit" value="S'inscrire" />
      </SubmitContainer>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 272px 40px 272px;
  grid-template-rows: 75px 76px 74px 74.5px 40px 56.5px 75px;
  margin: 0px;
  height: 433px;
  width: 584px;
`;

const GenreContainer = styled.div`
  grid-column: 1;
  grid-row: 1;
`;

const NameContainer = styled.div`
  grid-column: 1;
  grid-row: 2;
`;

const FirstNameContainer = styled.div`
  grid-column: 3;
  grid-row: 2;
`;

const EmailContainer = styled.div`
  grid-column: 1;
  grid-row: 3;
`;

const TelContainer = styled.div`
  grid-column: 3;
  grid-row: 3;
`;

const PasswordContainer = styled.div`
  grid-column: 1;
  grid-row: 4;
`;

const ConfirmPasswordContainer = styled.div`
  grid-column: 3;
  grid-row: 4;
`;

const ConditionsContainer = styled.div`
  grid-column: 1/4;
  grid-row: 5;
`;

const NewsletterContainer = styled.div`
  grid-column: 1/4;
  grid-row: 6;
`;

const SubmitContainer = styled.div`
  text-align: center;
  grid-column: 1/4;
  grid-row: 7;
`;

export default Form;
