module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.tsx',
    './lib/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo-banner': "url('/public/b2e-logo-navbar.jpg')",
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
};
