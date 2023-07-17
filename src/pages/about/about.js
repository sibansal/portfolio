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
                        Since my childhood, I've had a deep passion for technology which drove me to pursue technical education. My thirst for knowledge and growth in this field has only intensified over time. However, I've come to realize that technology is not just about me, but about us. A good working system involves hundreds and thousands of components working together as a team to achieve a common goal. If I am 1, then a team of two is 11, and three is 111. Together, we can accomplish great things.
                        </p><br />
                        <p>
                        When it comes to my projects, I believe in expression rather than just leaving an impression. That's why I often build them from scratch, resulting in a 70% success rate as of now.
                        </p><br />
                        Here are some of the undocumented skills I possess that you might find interesting:<br />
                        <ul>
                            <li>Event coordination</li>
                            <li>Graphic design</li>
                            <li>Project planning</li>
                            <li>Strategic Planning</li>
                            <li>Teaching</li>
                        </ul><br/>
                        I'm also proficient in the following documented skills:<br />
                        <ul>
                            <li>Software development</li>
                            <li>Web development</li>
                        </ul><br/>
                        Now, let's talk about some of the things I'm not so good at:<br />
                        <ul>
                            <li>Badminton</li>
                            <li>Dancing</li>
                            <li>Drawing</li>
                            <li>Singing</li>
                            <li>Writing</li>
                        </ul><br/>
                        Finally, there are some things that are just not meant for me:<br/>
                        <ul>
                            <li>Good handwriting</li>
                            <li>Long lectures</li>
                            <li>Outdoor sports</li>
                        </ul><br/>
                        I appreciate your patience and valuable time investment in visiting my website. Please feel free to reach out to me if you have any questions or would like to discuss potential collaborations.
                    </div>
                </div>
            </div>
          )
    }
}

export default About;