import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TokenGifts WHITEPAPER",
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  description: "TonGifts|TokenGifts|Web3.0|BlockChain|Gift|telegram｜TG｜TON｜Telegram Mini Apps|WHITEPAPER|BTC|ETH|SOLANA",
  lastUpdated: true,
  themeConfig: {
    siteTitle: "TokenGifts WHITEPAPER",
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [

      { text: 'Ambassador', link: '/ambassador-program' },
      { text: 'X', link: 'https://x.com/TokenGiftsBot' },
      { text: 'Launch', link: 'https://t.me/tokengiftbot/TokenGift' }
    ],
    
    sidebar: [
      {
        text: 'WHITEPAPER',
        items: [
          { text: '🎉 Overview', link: '/overview' },
          { text: '👉 Getting Started', link: '/getting-started' },
          {
            text: '🎁 Gift Module',
            collapsed: true,
            items: [
              { text: '🏞️ Gift Cover Customize', link: '/gift-cover-custom' },
            ]
          },
          {
            text: '💎 Deposit Module',
            collapsed: true,
            items: [
              { text: '🛑 Deposit', link: '/deposit' },
            ]
          },
          {
            text: '🏧 Withdraw Module',
            collapsed: true,
            items: [
              { text: '🔶 Withdraw', link: '/withdraw' },
            ]
          },
          {
            text: '🏆 Earning Module',
            collapsed: true,
            items: [
              { text: '🏞️ Gift Cover Customize', link: '/gift-cover-custom' },
            ]
          },
          {
            text: '👥 Ambassador Module',
            collapsed: true,
            items: [
              { text: '👥 Ambassador Program', link: '/ambassador-program' },
            ]
          },
          {
            text: '📝 Terms Module',
            collapsed: true,
            // link: '/terms-of-purchase',
            items: [
              { text: '📝 Terms of use', link: '/terms-of-use' },
              { text: '📌 Terms of Purchase', link: '/terms-of-purchase' },
            ]
          },
          { text: '🤝 Contact Us', link: '/contact-us' },
        ]
      }
    ],

    search: {
      provider: 'local'
    }
  }
})
