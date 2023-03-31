import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { HeaderContainer, LogoContainer, TitleContainer } from './PortalHeader.styles'
import logo from '../../../public/assets/logo.png';

const PortalHeader = () => {
  const [title, setTitle] = useState('Original Title')

  const handleNewTitle = event => {
    setTitle(event.detail.title);
  };

  useEffect(() => {  
    window.addEventListener('changeTitle', handleNewTitle);
    return () => {
      window.removeEventListener('changeTitle', handleNewTitle)
    }
  }, [handleNewTitle]);

  return (
    <>
      <Helmet titleTemplate='Microfrontends POC' />
      <HeaderContainer>
        <LogoContainer>
          <img src={logo} alt="Logo" />
        </LogoContainer>
				<TitleContainer>
        {title}
				</TitleContainer>
      </HeaderContainer>
    </>
  )
}

export default PortalHeader
