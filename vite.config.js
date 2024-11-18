import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: './index.html',
        contact: './contact.html',
        redeem: './redeem.html',
        zelle: './zelle.html',
        signIn: './sign-in.html',
        signUp: './sign-up.html',
        paypal: './paypal.html', // corrected the spelling
        withdraw: './withdraw.html',
        deposit: './deposit.html',
        dashboard: './dashboard.html',
        venmo: './venmo.html',
        support: './support.html',
        requestwallet: './request-wallet.html',
        profile: './profile.html',
        main: './main.css',
      },
    },
  },
});
