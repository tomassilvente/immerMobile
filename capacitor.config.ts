import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'immer',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;
