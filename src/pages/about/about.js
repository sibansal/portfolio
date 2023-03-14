import React,{ Component } from 'react'
import './about.css'
class About extends Component
{
    render()
    {
        return (
            <div className='layout about'>
                <h2>About Me</h2>
                <div className='content'>
                    <div>
                        <p>
                            I am a tech enthusiast from my childhood so, I pursued technical education and I want to grow more
                            in the field and take best steps to do so and over the time I realize technology is not about me but
                            about us. In any good working system there are hundred and thousand of components working
                            together to run a system smoothly which perfectly make sense as a great team work. If I am 1 then
                            team of two is 11 and three is 111. I do not believe in impression but expression so most of time I
                            build my projects from scratch and there is 70% success rate as of now.
                        </p><br />
                        Some of undocumented things I am good at:<br />
                        <ul>
                            <li>Event coordination</li>
                            <li>Graphic design</li>
                            <li>Project planning</li>
                            <li>Strategic Planning</li>
                            <li>Teaching</li>
                        </ul><br/>
                        Some of documented things I am good at:<br />
                        <ul>
                            <li>Software development</li>
                            <li>Web development</li>
                        </ul><br/>
                        Some of the things I am quite good at messing up:<br />
                        <ul>
                            <li>Badminton</li>
                            <li>Dancing</li>
                            <li>Drawing</li>
                            <li>Singing</li>
                            <li>Writing</li>
                        </ul><br/>
                        Some of the things not made for me:<br/>
                        <ul>
                            <li>Good handwriting</li>
                            <li>Long lectures</li>
                            <li>Outdoor sports</li>
                        </ul><br/>
                        Thank you for visiting my website with patience and your valuable time investment
                    </div>
                </div>
            </div>
          )
    }
}

export default About;