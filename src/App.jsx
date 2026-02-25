import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='text-gray-700 border-b border-gray-200'>
        <div className='container flex mx-auto p-5 flex-col md:flex-row'>
          <a href="#" className='font-medium text-gray-900' >
            <span className='text-xl ml-3'>NisshoCode</span>
          </a>
          <nav className='md:ml-auto text-base'>
            <a href="#home" className='mr-5 hover:text-blue-400 duration-300'>Home</a>
            <a href="#about" className='mr-5 hover:text-blue-400 duration-300'>About</a>
            <a href="#skills" className='mr-5 hover:text-blue-400 duration-300'>Skills</a>
            <a href="#blog" className='mr-5 hover:text-blue-400 duration-300'>Blog</a>
          </nav>
        </div>
      </header>
      <section className='text-gray-700' id='home'>
        <div className='flex container mx-auto py-20 px-5 flex-col md:flex-row items-center'>
          <div className='md:w-1/2flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
            <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-4'>NisshoCode <br />
              My Portfolio Website</h1>
            <p className='ml-8 leading-relaxed'>現在、webエンジニアとしてデビューしてたのほやほやです。得意な言語はHTML,CSS,JavaScript,TypeScript,
              PHP,SQL,ReactなどWeb全般をpythonです。自信が作ったものを公開しておりますので、ぜひ見ていってください。
            </p>
            <button className='text-white bg-green-500 py-2 border-0 rounded text-1g hover:bg-green-600 duration-300'>Contact Me</button>
          </div>
          <div className='md-w-1/2 lg:max-w-lg w-5/6'>
            <img src="./img/myPicture.png" alt="" />
          </div>
        </div>
      </section>
      <section className='text-gray-700 border-t border-gray-200'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='text-center mb-20'>
            <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>About Me</h1>
            <p className='pb-10'>これまで、マーケティング業界に数年財務分析を行っていました。現在itぐおうかいでシステム構築にしながら副業としてweb
              サイトやWebAppを個人として受注しています。また投資やコンサルティングも積極的を行っており、ご相談されたい方はこんたくとをお待ちしております。
            </p>
            <p>以下の個人として成果物を公開しています。主にsnsなどのchatアプリ構築をreactやjsやtsで実装しています。また、pythonを使ってaiによる
              株価の予測サイトを構築しました。また数件の事務所のwebサイトの構築など多岐にわたります。
            </p>
          </div>
        </div>
        <div className='flex flex-wrap'>
          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-100 rounded-lg p-8'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 3H11V11H3V3Z" fill="currentColor" />
                    <path d="M3 13H11V21H3V13Z" fill="currentColor" />
                    <path d="M13 3H21V11H13V3Z" fill="currentColor" />
                    <path d="M13 13H21V21H13V13Z" fill="currentColor" />
                  </svg>
                </div>
                <h2 className='text-gray-900 text-lg font-medium ml-2'>SNS Chat App</h2>
              </div>
              <div>
                <p>reactとjavaScriptで投稿機能付きのchatアプリ。仕様はReact,javulaScript,html,css,firebase,AWS。ログイン・ログアウト認証機能、メッセージ投稿機能、お気に入り登録機能じっそうしています。</p>
                <a href="#" className='mt-3 text-green-500 items-center'>もっと見る→</a>
              </div>
            </div>
          </div>
          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-100 rounded-lg p-8'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 3H11V11H3V3Z" fill="currentColor" />
                    <path d="M3 13H11V21H3V13Z" fill="currentColor" />
                    <path d="M13 3H21V11H13V3Z" fill="currentColor" />
                    <path d="M13 13H21V21H13V13Z" fill="currentColor" />
                  </svg>
                </div>
                <h2 className='text-gray-900 text-lg font-medium ml-2'>SNS Chat App</h2>
              </div>
              <div>
                <p>reactとjavaScriptで投稿機能付きのchatアプリ。仕様はReact,javulaScript,html,css,firebase,AWS。ログイン・ログアウト認証機能、メッセージ投稿機能、お気に入り登録機能じっそうしています。</p>
                <a href="#" className='mt-3 text-green-500 items-center'>もっと見る→</a>
              </div>
            </div>
          </div>
          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-100 rounded-lg p-8'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 3H11V11H3V3Z" fill="currentColor" />
                    <path d="M3 13H11V21H3V13Z" fill="currentColor" />
                    <path d="M13 3H21V11H13V3Z" fill="currentColor" />
                    <path d="M13 13H21V21H13V13Z" fill="currentColor" />
                  </svg>
                </div>
                <h2 className='text-gray-900 text-lg font-medium ml-2'>SNS Chat App</h2>
              </div>
              <div>
                <p>reactとjavaScriptで投稿機能付きのchatアプリ。仕様はReact,javulaScript,html,css,firebase,AWS。ログイン・ログアウト認証機能、メッセージ投稿機能、お気に入り登録機能じっそうしています。</p>
                <a href="#" className='mt-3 text-green-500 items-center'>もっと見る→</a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default App
