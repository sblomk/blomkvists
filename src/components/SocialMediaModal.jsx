import React from 'react'
import './ProjectModal.css';
import bachelorProcess from '../images/BachelorProcess.png'
import bachelorAnalysis from '../images/analysisBachelor.PNG'

function CarbonBudgetModal(props) {
        return (
                <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id="modal5">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h1 className="modal-title font-weight-light blue" id="exampleModalLabel">{props.name}</h1>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div className="modal-body">
                        <p className="lead">
                        How does users of social media distribute their activity and sharing of information over several social media platforms at the same time?
                        This <span className="blue font-weight-bolder">UX Research</span> project set out to explore this by 
                        having <span className="blue font-weight-bolder">semi-structured interviews</span> with users and conducting 
                        a <span className="blue font-weight-bolder">competitive analysis</span> of different social media platforms.</p>
                        <div className="row introinfo">
                            <div className="col-md-6">
                            <h6 className="info">My Role</h6>
                            <p> UX Researcher</p>
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
                            <img className="processPic" src={bachelorProcess} alt=""></img>
                        </div>
                        <h6>Research </h6><br></br>
                        <p>The first step was to find out what possible factors may influence a user to not want to share information about it self. 
                            Partly this is to a large extent dictated by the established informational norms in a context. 
                            For instance, appropriate conversation topics at a bar are not the same as at a job interview. 
                            The case is the same if you compare an online group chat with friends and your whole social network. 
                            Another influence is privacy concerns, which can be seen as a concern about information not flowing through appropriate channels. 
                            As channels change, what was once acceptable information to share may no longer be the case. How the importance of privacy changes 
                            between contexts can be explained with contextual integrity. According to contextual integrity, our concern about sharing appropriate 
                            information is dependent on the social context, actors, and informational attributes (i.e. the content of the information). </p>
                        <h6>Competative Analysis</h6><br></br>
                        <p> The project focused on the three social media platforms Facebook, Instagram, and Snapchat. 
                            An analysis was made of their features and what users were able to do and/or create. 
                            For instance, did users have the ability to only share information to a specific part of their 
                            network and was information only temporary or permanent?</p>
                        <h6>User Research </h6><br></br>
                        <p> To determine if the previous research actually played any part in how user activity on social media platforms changes, 
                            users who used Instagram, Facebook, and Snapchat were interviewed. The interviews were semi-structured and open-ended and 
                            aimed to find out the frequency of use of the respective platform, how active the use was (i.e. did they engage with or post new content), 
                            the size of their social networks, and how they reasoned about what was “appropriate” behavior on each platform. The interviews were then 
                            transcribed and analysed, reoccurring themes were identified and categorized.  </p>
                        <img className="bachelorPic" src={bachelorAnalysis} alt=""></img>
                        <h6>Conclusions </h6><br></br>
                        <p>The size of users’ social network differed significantly between the platforms and the amount of active use and shared information followed suit. 
                            On Facebook, the platform where users had the largest network, was mostly used passively, i.e. users mostly only consumed content and did not 
                            engage with, or create, any content. However, the activity became more active in smaller user made groups and group chats on the platform, 
                            where the information only was shared to a smaller part of a user’s network which was seen as appropriate actors to consume the shared information. 
                            Users had the smallest network of contacts on Snapchat and this was the platform where users were the most active. In the interviews, 
                            users also shared a notion that some things are just not appropriate to share on some social media platforms, but may be appropriate on other ones. 
                            <br></br><br></br>
                            This means that privacy concerns and contextual integrity played a large part in user activity on social media platforms. Depending on the present actors, social context, and content, 
                            users make different decisions regarding what content to interact with or share. As a social network grows in size it also grows in social complexity, 
                            often resulting in lower user engagement and activity. Prevailing informational norms are also governing how to behave in the social media world. 
                            If a social media platform wishes to grow larger, it has to have these implications in mind. To alter these norms may be tough, but giving users the 
                            ability to create smaller groups in their network and through that decide present actors and the social context may be an easier way to combat the problem.
                        </p>
                        </div>
                    </div>
                </div>
                </div>
        )
}

export default CarbonBudgetModal
