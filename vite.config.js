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
        forgotpassword: './forgot-password.html',
        venmo: './venmo.html',
        action: './action.html',
        support: './support.html',
        requestwallet: './request-wallet.html',
        profile: './profile.html',
        main: './main.css',
        service: './service-worker.js',
        usdt: './usdt.html',
        terms: './term-condition.html',
        ratecalculator: './rate-calculator.html',
        profile2: './profile-2.html',

      },
    },
  },
});
