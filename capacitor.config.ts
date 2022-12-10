import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.sm',
  appName: 'FRANSALON',
  webDir: 'www',
  bundledWebRuntime: false,

  server: {
    androidScheme: 'http',
    cleartext: true,
    allowNavigation: [
      'http://fransalonapp-env-1.eba-mv3mavpj.ap-northeast-1.elasticbeanstalk.com'
      

    ]
  },
  android: {
    allowMixedContent: true
  }


};

export default config;
