/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    REACT_APP_NAME: string;
    REACT_APP_NAME_SHORT: string;
    REACT_APP_API_URI: string;
  }
}
