import React from 'react'
import './ProjectModal.css';
import gsite from '../images/genderSite.png'
import lofi from '../images/genderlofiwire.jpg'
import hifi from '../images/genderhifiwire.png'
import genderProcess from '../images/GenderProcess.png'


function GendeRadarModal(props) {
        return (
                <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id="modal3">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h1 className="modal-title font-weight-light blue" id="exampleModalLabel">{props.name}</h1>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div className="modal-body">
                            <p className="lead">This project aim to create a visualization tool for UN’s gender inequality index. To achieve  
                           this <span className="blue font-weight-bolder">Information Architecture</span> is of vital importance as well  
                           as <span className="blue font-weight-bolder">designing and developing intuitive ways for the user to interact</span> with the information. </p>
                            <div className="row introinfo">
                                <div className="col-md-6">
                                <h6 className="info">My Role</h6>
                                <p> Information Architect &amp; Front-end Developer</p>
                                </div>
                                <div className="col-md-3">
                                <h6 className="info">Year</h6>
                                <p> 2018</p>
                                </div>
                                <div className="col-md-3">
                                <h6 className="info">Done at </h6>
                                <p> KTH</p>
                                </div>
                            </div>
                            <h4 className="font-weight-normal">Process</h4>
                            <div className="processContainer">
                                <img className="processPic" src={genderProcess} alt=""></img>
                            </div>
                            <h6>Research </h6><br></br> 
                            <p>First a complete understanding of how the inequality index is calculated and what variables it is based on was essential. After that I could start researching about information architecture and visualisation, early on the mantra “overview first, zoom and filter, 
                            then details on demand” was adopted. Since the index is worldwide it was decided to use a world map as an overview. Then I did a lot of research of 
                            different visualization techniques and diagrams, such as sunbursts, sankeys and chord diagrams. Because the index is made up of many different variable, 
                            which all contribute a different amount to the index, it was decided that a more detailed view of the index would be visualized with a sankey diagram. </p>
                            <h6>Wireframing </h6><br></br>
                            <p>Initially some wireframes was created using just pen and paper to make some sense to what the final design may look like.</p>
                            <img className="mapPic" src={lofi} alt=""></img>
                            <p>When we had a better sense of what direction the design should take, more high fidelity wireframes was developed.  </p>
                            <img className="hifiPic" src={hifi} alt=""></img>
                            <h6>Frontend Development </h6><br></br>
                            <p> I was responsible for developing the sankey diagram which would display more detailed information to the user about what 
                            factors in a specific country affects its inequality index. Unfortunately, problems arose with how the back-end would 
                            work with the sankey. As a result I had to quickly adapt and decided to work on developing a tree diagram instead, which also includes a 
                            lot of visualisation features that we needed. The website was developed in Angular and the diagram was created in D3.js. </p>
                            <img className="sitePic" src={gsite} alt=""></img>
                            <p>When a user first enters the service, a world map is shown with the gender inequality index displayed. The different colors show 
                                different values and a user can hover over a country to see the exact value for a specific year. The year can be changed in a slider 
                                just beneath the world map. To the right, there is a tree that can shows the different variables in different nodes. This is used to 
                                filter the map and its content on variables. Let’s say a user want to look at how the Female Labour index looks like. Then one simply 
                                clicks the node and the entire map will show details on that specific variable as well as information about what the variable actually 
                                measures Just beneath the tree. Furthermore, by clicking a country, a user can get information about the specific variable for the specific 
                                country and its development over time.</p>
                            <h6>Heuristic Evaluation </h6><br></br>
                            <p>To get an understanding of the current site experience I conducted a heuristic evaluation which was based on Jakob Nielsen's 10 general 
                                principles for interaction design. I for instance noticed that the site was not clearly displaying the system status to the user 
                                causing some confusion whether or not the site had refreshed after clicking on a country on the world map. Without getting a tutorial of how to use the site,
                                it could be hard for the user to understand how to use the site without some trial and error. No help nor documentation was available. On the plus side
                                the system matched well with the real world and spoke the user's "language". </p>
                            <h4 className="font-weight-normal">What I learned</h4>
                            <p>Even though I learned a great amount about Information architecture and visualization, and how to develop for it, my biggest takeaway is 
                                how important communication is in a large team project. We were a cross-functional team with 8 people working on the project, some UX designers like myself but 
                                also front-end and back-end developers, and it takes a lot of time and meetings just to get things going. As soon as we had our goal set and 
                                the first wireframes done, it was so much easier to progress in the work.   </p>
                        </div>
                    </div>
                </div>
                </div>
        )
}

export default GendeRadarModal
