/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    REACT_APP_NAME: string;
    REACT_APP_NAME_SHORT: string;
    REACT_APP_CLIENT_NAME: string;
    REACT_APP_CLIENT_VERSION: string;
    REACT_APP_API_URI: string;
    REACT_APP_GRAPHQL_API_URI: string;
    REACT_APP_UF_TENANT_ID: string;
    REACT_APP_UF_VERIFICATION_URL: string;
  }
}
