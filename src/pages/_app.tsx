import { ComponentClass, useState } from 'react';
import { AppProps } from 'next/app';
import MainLayout from 'layouts/MainLayout';
import useEmailPlaceholders from 'hooks/useEmailPlaceholders';
import useAOS from 'hooks/useAOS';
import 'styles/scss/styles.scss';

const MyApp: React.FC<Props> = ({ Component, pageProps }) => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  useEmailPlaceholders();
  useAOS();

  return (
    <MainLayout isNavbarOpen={isNavMenuOpen} setIsNavMenuOpen={setIsNavMenuOpen}>
      <Component {...pageProps} />
    </MainLayout>
  );
};

interface Props {
  Component: ComponentClass;
  pageProps: AppProps;
}

export default MyApp;
