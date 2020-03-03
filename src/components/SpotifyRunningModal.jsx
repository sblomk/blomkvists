import React from 'react'
import './ProjectModal.css';
import wireframes from '../images/wireframes.png'
import storm from '../images/runningStrom.png'
import runningProcess from '../images/RunningProcess.png'
import runningProto from '../images/runningPrototype.png'


function SpotifyRunningModal(props) {
        return (
                <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id="modal1">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h1 className="modal-title font-weight-light blue" id="exampleModalLabel">{props.name}</h1>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div className="modal-body">
                            <p className="lead">Interaction with your phone during exercising just to listen to music can be troublesome. This <span className="blue font-weight-bolder">UX design project </span> 
                            set out to make this<span className="blue font-weight-bolder"> interaction easier</span>.</p>
                            <div className="row introinfo">
                                <div className="col-md-6">
                                <h6 className="info">My Role</h6>
                                <p> UX Designer &amp; Researcher</p>
                                </div>
                                <div className="col-md-3">
                                <h6 className="info">Year</h6>
                                <p> 2017</p>
                                </div>
                                <div className="col-md-3">
                                <h6 className="info">Done at </h6>
                                <p> KTH</p>
                                </div>
                            </div>
                            <h4 className="font-weight-normal">Process</h4>
                            <div className="processContainer">
                                <img className="processPic" src={runningProcess} alt=""></img>
                            </div>
                            <h6>User Research </h6><br></br><p> I conducted semi-structured interviews with potential users about how and why they use music while exercising, 
                            what their goal is and to identify pain points. One thing learned was that users listened to music to get a boost while exercising, but they  
                            thought that it was a hassle to get the music to adapt to their workout.</p>
                            <h6>UX Competative Analysis </h6><br></br><p> Here I looked at other apps commonly used while exercising, such as Runkeeper. To analyse it I did a 
                            heuristic evaluation to identify strengths and weaknesses. One of its strengths for example was its lack of needed interaction during use.   </p>
                            <h6>Personas </h6><br></br><p> Based on the user research we defined a target group and personas to help us develop design requirements, 
                            such as uninterruptive interaction and adaptation. We also developed user stories and scenarios with the personas, to further aid us in 
                            identifying more needs and motivation to use Spotify Running. Now we also had enough information and user insight to put together a mood board. 
                             </p>
                            <img className="moodPic" src={storm} alt=""></img>
                            <h6>Goals &amp; Visions </h6><br></br>
                            <p> We set our goal to make it easier to use Spotify Running with the vision: The design of Spotify Running should work instantly in synergy with your 
                                workout and flawlessly adapt to your own personal taste in music.</p>
                            <h6>Prototyping </h6><br></br><p> After some brainstorming and wireframing a final product design was decided. </p>
                            <img className="wirePic" src={wireframes} alt=""></img>
                            <p>To be able to test the new design on users, a high fidelity interactive prototype was developed using the 
                                Just In Mind prototyping tool.</p>
                            <img className="protoPic" src={runningProto} alt=""></img>
                            <p>In the final design the music adapts dynamically to your tempo while running. And before you start you get to 
                                combine several playlists into a running mix, which will be used during this session. The ability to lock a 
                                certain tempo was also conceptualized and would be turned on and off by tapping the phone, much like interaction 
                                with wireless headphones nowadays. These features would make music more tailored to you workout, as well as 
                                eliminating interruptive interaction with the phone.   </p>
                            <h6>User Tests </h6><br></br>
                            <p> During the user tests we put potential users in a scenario and let them perform a 
                            think-aloud to catch potential design problems while using the prototype navigating through the scenario. 
                            Then the Microsoft Reaction Card Method was used to test the desirability of the prototype. 
                            To identify any additional shortcomings in the design I held short user interview about their experience with the prototype.</p>
                            <h4 className="font-weight-normal">What I Learned</h4>
                            <p>Aside from learning more about the UX design process I also gained more experience on how to work in a group with several designers. 
                                We were five people on the team and we had to divide the work appropriately based on interest and skill. 
                                In developing new design ideas and then deciding which ideas to continue improving, communication and everyone 
                                being on the same page was key.  </p>
                        </div>
                    </div>
                </div>
                </div>
        )
}

export default SpotifyRunningModal
