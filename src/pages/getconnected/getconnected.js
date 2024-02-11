import React,{ Component } from 'react'
import './getconnected.css'
import callImg from './../../static/svg/call.svg'
import githubImg from './../../static/svg/github.svg'
import mailImg from './../../static/svg/mail.svg'
import telegramImg from './../../static/svg/telegram.svg'
import twitterImg from './../../static/svg/twitter.svg'

class GetConnected extends Component
{
    render()
    {
        return (
            <div className='layout getconnected'>
                <h2>Get Connected</h2>
                <div className='content'>
                    <div><a href='https://topmate.io/sibansal'><img src={callImg} alt={'Book Free 1:1 Call'}/>Book 1:1 Call</a></div>
                    <div><a href='https://t.me/sibansal'><img src={telegramImg} alt={'Telegram'}/>t.me/sibansal</a></div>
                    <div><a href='https://twitter.com/sibansal'><img src={twitterImg} alt={'Twitter'}/>twitter.com/sibansal</a></div>
                    <div><a href='https://github.com/sibansal'><img src={githubImg} alt={'Github'}/>github.com/sibansal</a></div>
                    <div><a href='mailto:queries@sibansal.dev'><img src={mailImg} alt={'Mail'}/>queries@sibansal.dev</a></div>
                    <div><a href='mailto:hireme@sibansal.dev'><img src={mailImg} alt={'Mail'}/>hireme@sibansal.dev</a></div>
                </div>
            </div>
          )
    }
}

export default GetConnected;