import React, {useState} from 'react';
import {TextInput} from 'react-native';
import styles from './Style';

const LARANJA_ESCURO = '#feb38d';
const CINZA_CLARO = '#D3D3D3';

const InputAndroidStyled = ({...otherProps}) => {
  const [isSelecionado, setIsSelecionado] = useState(false);

  const handleFocus = (event) => {
    setIsSelecionado(true);
  };

  const handleBlur = (event) => {
    setIsSelecionado(false);
  };

  return (
    <TextInput
      selectionColor={LARANJA_ESCURO}
      underlineColorAndroid={isSelecionado ? LARANJA_ESCURO : CINZA_CLARO}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={styles.input}
      {...otherProps}
    />
  );
};

export default InputAndroidStyled;
