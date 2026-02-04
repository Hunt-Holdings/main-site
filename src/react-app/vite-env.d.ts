/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_COMPANY_NAME: string;
  readonly VITE_PHONE_NUMBER: string;
  readonly VITE_EMAIL: string;
  readonly VITE_LINKEDIN_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
