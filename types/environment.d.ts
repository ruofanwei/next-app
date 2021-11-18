namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    FACEBOOK_ID: string;
    FACEBOOK_SECRET: string;
    GOOGLE_ID: string;
    GOOGLE_SECRET: string;
    LINE_CHANNEL_ID: string;
    LINE_CHANNEL_SECRET: string;
  }
}
