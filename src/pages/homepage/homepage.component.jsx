import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import lapimage from '../../assets/laptopimage.png';
import { firestore } from '../../firebase/firebase.utils';

import './homepage.styles.scss';

const HomePage = () => {

    // eslint-disable-next-line
    // useEffect(()=>{
    //     firestore.collection("users").get().then(function(querySnapshot) {
    //         console.log("Users")
    //         querySnapshot.forEach(function(doc) {
    //             // doc.data() is never undefined for query doc snapshots
    //             console.log(doc.id, " => ", doc.data());
    //         });
    //     });
    // })
    
    return(
        <div className='homepage'>
            <div className="u-center-text u-margin-bottom-big carpetHeading">
                <h2 className="heading-primary">
                    <span className="heading-primary--main">Carpet</span>
                    <span className="heading-primary--sub">is your way to go </span>
                </h2>
            </div>
            <section className="section-about">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Make Your Exam in Less Than 5 Minutes
                    </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">Make your examinations in CARPET</h3>
                        <p className="paragraph">
                        Create, send and analyze your exams, quizzes and assessments with CARPET. Carpet provides a secure environment for both students and teaching staff via shuffled exams and options in a random order.
                        </p>
                        <h3 className="heading-tertiary u-margin-bottom-small">Display Statistics of Self or Institution</h3>
                        <p className="paragraph">
                            CARPET provides detailed results for students , class exam results with anti-cheat checking system for teachers and detailed analysis for institutions who wants to see their progress and success.
                        </p>
                        <Link to="signin"><button className="btn btn--green nextStepButton">Next Step &rarr;</button></Link>
                    </div>
                    <div className="col-1-of-2">
                        <img alt="laptop" src={lapimage} className="lapimage"/>
                    </div>
                </div>
                
            </section>
            
            <section className="section-tours" id="section-tours">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        CHOOSE YOUR PATH
                    </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front" >
                                <div className="card__picture card__picture--1">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--1"> The Student</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>Unlimited Exams</li>
                                        <li>Up to 15 classes</li>
                                        <li>Detailed Exam Results</li>
                                        <li>Class Results</li>
                                        <li>Learn from your mistakes</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">Free Plan</p>
                                    </div>
                                    <a href="/" className="btn btn--white">Join now!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front" >
                                <div className="card__picture card__picture--2">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--2"> The Instructor</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>Unlimited Exams</li>
                                        <li>Up to 500 Students</li>
                                        <li>Detailed Exam Results</li>
                                        <li>Carpet Anticheat</li>
                                        <li>AnalyzePatterns</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-2">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">$14.99</p>
                                    </div>
                                    <a href="#popup" className="btn btn--white">Join now!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front" >
                                <div className="card__picture card__picture--3">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--3"> The Institution</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>Includes Every Instructor</li>
                                        <li>Up to 1000 classes</li>
                                        <li>Detailed Class Information</li>
                                        <li>Instructor Activity </li>
                                        <li>Cheat Free Instituion</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-3">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">$999.99</p>
                                    </div>
                                    <a href="/" className="btn btn--white">Apply now!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="u-center-text u-margin-top-huge">
                    <a href="/" className="btn btn--green nextStepButton">Learn More</a>
                </div>

            </section>
        </div>
    )
}
export default HomePage;