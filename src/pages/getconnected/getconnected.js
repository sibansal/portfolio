import React,{ Component } from 'react'
import './getconnected.css'
import { TiSocialInstagramCircular } from "react-icons/ti";

const callImg = '/svg/call.svg'
const githubImg = '/svg/github.svg'
const mailImg = '/svg/mail.svg'
const telegramImg = '/svg/telegram.svg'
const twitterImg = '/svg/twitter.svg'

class GetConnected extends Component
{
    render()
    {
        return (
            <div className='layout getconnected' id='get-connected'>
                <h2>Get Connected</h2>
                <div className='content'>
                    {/* <div><a href='https://topmate.io/sibansal'><img src={callImg} className='align-middle' alt={'Book Free 1:1 Call'}/> Book 1:1 Call</a></div> */}
                    <div><a href='https://t.me/sibansal'><img src={telegramImg} className='align-middle' alt={'Telegram'}/> t.me/sibansal</a></div>
                    <div><a href='https://twitter.com/sibansal'><img src={twitterImg} className='align-middle' alt={'Twitter'}/> @sibansal</a></div>
                    <div><a href='https://instagram.com/isimranbansal'><TiSocialInstagramCircular size={32} className='align-middle' />@isimranbansal</a></div>
                    <div><a href='https://github.com/sibansal'><img src={githubImg} className='align-middle' alt={'Github'}/> github.com/sibansal</a></div>
                    <div><a href='mailto:hireme@sibansal.dev'><img src={mailImg} className='align-middle' alt={'Mail'}/> hireme@sibansal.dev</a></div>
                    <div><a href='mailto:queries@sibansal.dev'><img src={mailImg} className='align-middle' alt={'Mail'}/> queries@sibansal.dev</a></div>
                </div>
            </div>
          )
    }
}

export default GetConnected;