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
          // { text: '⛏ Getting Started', link: '/getting-started' },
          {
            text: '🎁 Gift Module',
            collapsed: true,
            items: [
              { text: '💌 Send Gift', link: '/send-gift' },
              { text: '🛍️ Recive Gift', link: '/recive-gift' },
              { text: '🏞️ Gift Cover', link: '/gift-cover' },
              { text: '🏞️ Gift Cover Customize', link: '/gift-cover-custom' },
            ]
          },
          {
            text: '💎 Deposit Module',
            collapsed: true,
            items: [
              { text: '💎 Deposit', link: '/deposit' },
            ]
          },
          {
            text: '🏧 Withdraw Module',
            collapsed: true,
            items: [
              { text: '🏧 Withdraw', link: '/withdraw' },
            ]
          },
          {
            text: '🏆 Earning Module',
            collapsed: true,
            items: [
              { text: '🏆 How to Earn Gifts?', link: '/how-to-earn-gifts' },
            ]
          },
          {
            text: '🤜 Social Module',
            collapsed: true,
            items: [
              { text: '🤜 Invite 𝒇𝒓𝒊𝒆𝒏𝒅𝒔 System', link: '/invite-friends-system' },
            ]
          },
          {
            text: '₿ Tokenomic',
            collapsed: true,
            items: [
              { text: '₿ Tokenomic', link: '/tokenomic' },
            ]
          },
          {
            text: '👥 Ambassador Module',
            collapsed: true,
            items: [
              { text: '👥 Ambassador Program', link: '/ambassador-program' },
              { text: '👥 Step by Step', link: '/step-by-step-become-an-ambassador' },
            ]
          },
          {
            text: '🌐 Community Module',
            collapsed: true,
            items: [
              { text: '⏰ Daily Gift', link: '/daily-gift' },
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
