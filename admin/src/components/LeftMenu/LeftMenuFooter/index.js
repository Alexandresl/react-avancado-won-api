/**
 *
 * LeftMenuFooter
 *
 */

import React from 'react';

import Wrapper from './Wrapper';

function LeftMenuFooter() {
  // PROJECT_TYPE is an env variable defined in the webpack config
  // eslint-disable-next-line no-undef
  return (
    <Wrapper>
      <div className="poweredBy">
        Mantido por&nbsp;
        <a key="website" href="https://reactavancado.com.br" target="_blank" rel="noopener noreferrer">
          React Avançado
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
