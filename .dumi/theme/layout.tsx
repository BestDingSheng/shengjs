import React, { useContext, useEffect, useMemo } from 'react';
import Layout from 'dumi-theme-default/src/layout';
import { IRouteComponentProps, isBrowser } from 'umi';
import './layout.less';

const LayoutPage = ({ children, ...props }: IRouteComponentProps) => {
  return (
    <Layout {...props}>
      <div>{children}</div>
    </Layout>
  );
};

export default LayoutPage;
