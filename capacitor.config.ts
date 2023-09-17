import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'immer',
  webDir: 'out',
  server: {
    androidScheme: 'https',
    url: "http://192.168.0.13:3000",
    cleartext: true
  }
};

export default config;
