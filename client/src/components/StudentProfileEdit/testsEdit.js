import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';

import '../header.css';

import './testEdit.css';


class EditTest extends Component {
    componentDidMount = () => {
        const userID = this.props.match.params.userID;
        this.props.getUserProfile(userID);
        
    }

    constructor(props) {
        super(props);
        this.state = {
            _user: this.props.match.params.userID,
            ...props
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value*1});
    }

    onSubmit(e) {
        const userID = this.props.match.params.userID;
        e.preventDefault();
        this.props.testEdit(this.state, userID);
        const userURL = `/users/${userID}`;
        const { history } = this.props;
        history.push(userURL);
    }

    renderContent() {
        switch(this.props.student) {
            case null:
                return '';
            case false: 
                return '';
            default:
                const profileDone = this.props.student;
                if(profileDone._id) {
                    const { student } = this.props;
                    return (
                    <section className='container column is-three-fifths'> 
                    <form onSubmit={this.onSubmit}>
                        <div className="control form-button">
                            <button type='submit' className="button save">Save</button>
                        </div>
                        <div className='entryDiv container'>
                                <div className="columns is-multilined is-centered">
                                    <div className="field is-three-fifths column">
                                        <label className="label">SAT Total</label>
                                        <div className="control">
                                            <input defaultValue={student.tests.SAT} onChange={this.onChange.bind(this)} name='tests.SAT' className="input" type="number" placeholder="Score" min="0" max="1600"/>
                                        </div>
                                    </div>
                                    <div className="field column is-three-fifths">
                                        <label className="label">ACT</label>
                                        <div className="control">
                                            <input defaultValue={student.tests.ACT}  name='tests.ACT' onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="40"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='entryDiv container'>
                                <div className="columns is-multilined is-centered">
                                    <div className="field is-three-fifths column">
                                        <label className="label">SAT Math</label>
                                        <div className="control">
                                            <input defaultValue={student.tests.SATmath} onChange={this.onChange.bind(this)} name='tests.SATmath' className="input" type="number" placeholder="Score" min="0" max="800"/>
                                        </div>
                                    </div>
                                    <div className="field column is-three-fifths">
                                        <label className="label">SAT English</label>
                                        <div className="control">
                                            <input defaultValue={student.tests.SATenglish}  name='tests.SATenglish' onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="800"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <Collapsible trigger="AP Capstone">
                            <div className='entryDiv container'>
                                <div className="columns is-multilined is-centered">
                                    <div className="field is-three-fifths column">
                                        <label className="label">AP Research</label>
                                        <div className="control">
                                            <input defaultValue={student.tests.APresearch} onChange={this.onChange.bind(this)} name='tests.APresearch' className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-three-fifths">
                                        <label className="label">AP Seminar</label>
                                        <div className="control">
                                            <input defaultValue={student.tests.APseminar}  name='tests.APseminar' onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Collapsible>
                        <Collapsible trigger="Arts">
                            <div className='entryDiv container'>
                                <div className="columns is-multiline is-centered">
                                    <div className="field column is-two-fifths">
                                        <label className="label">Art History</label>
                                        <div className="control">
                                            <input name='tests.AParthistory' defaultValue={student.tests.AParthistory} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Studio Art 2-D</label>
                                        <div className="control">
                                            <input name='tests.APstudioart2d' defaultValue={student.tests.APstudioart2d} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Studio Art 3-D</label>
                                        <div className="control">
                                            <input name='tests.APstudioart3d' defaultValue={student.tests.APstudioart3d} onChange={this.onChange.bind(this)}  className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Studio Art Drawing</label>
                                        <div className="control">
                                            <input name='tests.APstudioartdrawing' defaultValue={student.tests.APstudioartdrawing} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Music</label>
                                        <div className="control">
                                            <input name='tests.APmusic' defaultValue={student.tests.APmusic} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Collapsible>
                        <Collapsible trigger="English">
                            <div className='entryDiv container'>
                                <div className="columns is-multilined is-centered">
                                    <div className="field is-three-fifths column">
                                        <label className="label">English Language</label>
                                        <div className="control">
                                            <input name='tests.APenglishlang'  defaultValue={student.tests.APenglishlang} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-three-fifths">
                                        <label className="label">English Literature</label>
                                        <div className="control">
                                            <input name='tests.APenglishlit' defaultValue={student.tests.APenglishlit} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Collapsible>
                        <Collapsible trigger="History and Social Science">
                        <div className='entryDiv container'>
                                <div className="columns is-multiline is-centered">
                                    <div className="field column is-two-fifths">
                                            <label className="label">Comparative Government</label>
                                            <div className="control">
                                                <input name='tests.APcomparativegov' defaultValue={student.tests.APcomparativegov} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">European History</label>
                                            <div className="control">
                                                <input name='tests.APeuro' defaultValue={student.tests.APeuro} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>                       
                                        <div className="field column is-two-fifths">
                                            <label className="label">Georgraphy</label>
                                            <div className="control">
                                                <input name='tests.APgeography' defaultValue={student.tests.APgeography} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Macroeconomics</label>
                                            <div className="control">
                                                <input name='tests.APmacro' defaultValue={student.tests.APmacro} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>                        
                                        <div className="field column is-two-fifths">
                                            <label className="label">Microeconomics</label>
                                            <div className="control">
                                                <input name='tests.APmicro' defaultValue={student.tests.APmicro} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Psychology</label>
                                            <div className="control">
                                                <input name='tests.APpsych' defaultValue={student.tests.APpsych} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>                        
                                        <div className="field column is-two-fifths">
                                            <label className="label">US Government</label>
                                            <div className="control">
                                                <input name='tests.APusgov' defaultValue={student.tests.APusgov} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">US History</label>
                                            <div className="control">
                                                <input name='tests.APushistory' defaultValue={student.tests.APushistory} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">World History</label>
                                            <div className="control">
                                                <input name='tests.APworldhistory' defaultValue={student.tests.APworldhistory} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </Collapsible>
                        <Collapsible trigger="Math and Computer Science">
                            <div className='entryDiv container'>
                                <div className="columns is-multiline is-centered">
                                    <div className="field column is-two-fifths">
                                        <label className="label">Calculus AB</label>
                                        <div className="control">
                                            <input name='tests.APcalcAB' defaultValue={student.tests.APcalcAB} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Calculus BC</label>
                                        <div className="control">
                                            <input name='tests.APcalcBC' defaultValue={student.tests.APcalcBC} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Computer Science A</label>
                                        <div className="control">
                                            <input name='tests.APcompsciA' defaultValue={student.tests.APcompsciA} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Computer Science P</label>
                                        <div className="control">
                                            <input name='tests.APcompsciP' defaultValue={student.tests.APcompsciP} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Statistics</label>
                                        <div className="control">
                                            <input name='tests.APstat' defaultValue={student.tests.APstat} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Collapsible>
                        <Collapsible trigger="Sciences">
                            <div className='entryDiv container'>
                                <div className="columns is-multiline is-centered">
                                    <div className="field column is-two-fifths">
                                        <label className="label">Biology</label>
                                        <div className="control">
                                            <input name='tests.APbio' defaultValue={student.tests.APbio} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Chemistry</label>
                                        <div className="control">
                                            <input name='tests.APchem' defaultValue={student.tests.APchem} onChange={this.onChange.bind(this)}  className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Environmental Sciences</label>
                                        <div className="control">
                                            <input name='tests.APenvironment' defaultValue={student.tests.APenvironment} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Physics Electricity</label>
                                        <div className="control">
                                            <input name='tests.APphysicsElect' defaultValue={student.tests.APphysicsElect} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Physics Mechanical</label>
                                        <div className="control">
                                            <input name='tests.APphysicsMech' defaultValue={student.tests.APphysicsMech} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Physics 1</label>
                                        <div className="control">
                                            <input name='tests.APphysics1' defaultValue={student.tests.APphysics1} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Physics 2</label>
                                        <div className="control">
                                            <input name='tests.APphysics2' defaultValue={student.tests.APphysics2} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Collapsible>
                        <Collapsible trigger="World Languages and Cultures">
                            <div className='entryDiv container'>
                                <div className="columns is-multiline is-centered">
                                    <div className="field column is-two-fifths">
                                        <label className="label">Chinese</label>
                                        <div className="control">
                                            <input name='tests.APchinese' defaultValue={student.tests.APchinese} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">French</label>
                                        <div className="control">
                                            <input name='tests.APfrench' defaultValue={student.tests.APfrench} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">German</label>
                                        <div className="control">
                                            <input name='tests.APgerman' defaultValue={student.tests.APgerman} onChange={this.onChange.bind(this)}  className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Italian</label>
                                        <div className="control">
                                            <input name='tests.APitalian' defaultValue={student.tests.APitalian} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Japanese</label>
                                        <div className="control">
                                            <input name='tests.APjapanese' defaultValue={student.tests.APjapanese} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Latin</label>
                                        <div className="control">
                                            <input name='tests.APlatin' defaultValue={student.tests.APlatin} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Spanish Language</label>
                                        <div className="control">
                                            <input name='tests.APspanishlang' defaultValue={student.tests.APspanishlang} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Spanish Language</label>
                                        <div className="control">
                                            <input name='tests.APspanishlit' defaultValue={student.tests.APspanishlit} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>  
                                </div>
                            </div>                      
                        </Collapsible>

                    </form>
                </section>
                    )
                } else {
                    return (
                        <section className='container column is-three-fifths'> 
                        <form onSubmit={this.onSubmit}>
                            <Collapsible trigger="AP Capstone">
                                <div className='entryDiv container'>
                                    <div className="columns is-multilined is-centered">
                                        <div className="field is-three-fifths column">
                                            <label className="label">AP Research</label>
                                            <div className="control">
                                                <input  onChange={this.onChange.bind(this)} name='tests.APresearch' className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-three-fifths">
                                            <label className="label">AP Seminar</label>
                                            <div className="control">
                                                <input   name='tests.APseminar' onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Collapsible>
                            <Collapsible trigger="Arts">
                                <div className='entryDiv container'>
                                    <div className="columns is-multiline is-centered">
                                        <div className="field column is-two-fifths">
                                            <label className="label">Art History</label>
                                            <div className="control">
                                                <input name='tests.AParthistory'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Studio Art 2-D</label>
                                            <div className="control">
                                                <input name='tests.APstudioart2d'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Studio Art 3-D</label>
                                            <div className="control">
                                                <input name='tests.APstudioart3d'  onChange={this.onChange.bind(this)}  className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Studio Art Drawing</label>
                                            <div className="control">
                                                <input name='tests.APstudioartdrawing'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Music</label>
                                            <div className="control">
                                                <input name='tests.APmusic'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Collapsible>
                            <Collapsible trigger="English">
                                <div className='entryDiv container'>
                                    <div className="columns is-multilined is-centered">
                                        <div className="field is-three-fifths column">
                                            <label className="label">English Language</label>
                                            <div className="control">
                                                <input name='tests.APenglishlang'   onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-three-fifths">
                                            <label className="label">English Literature</label>
                                            <div className="control">
                                                <input name='tests.APenglishlit'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Collapsible>
                            <Collapsible trigger="History and Social Science">
                            <div className='entryDiv container'>
                                    <div className="columns is-multiline is-centered">
                                        <div className="field column is-two-fifths">
                                                <label className="label">Comparative Government</label>
                                                <div className="control">
                                                    <input name='tests.APcomparativegov'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                                </div>
                                            </div>
                                            <div className="field column is-two-fifths">
                                                <label className="label">European History</label>
                                                <div className="control">
                                                    <input name='tests.APeuro'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                                </div>
                                            </div>                       
                                            <div className="field column is-two-fifths">
                                                <label className="label">Georgraphy</label>
                                                <div className="control">
                                                    <input name='tests.APgeography'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                                </div>
                                            </div>
                                            <div className="field column is-two-fifths">
                                                <label className="label">Macroeconomics</label>
                                                <div className="control">
                                                    <input name='tests.APmacro'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                                </div>
                                            </div>                        
                                            <div className="field column is-two-fifths">
                                                <label className="label">Microeconomics</label>
                                                <div className="control">
                                                    <input name='tests.APmicro'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                                </div>
                                            </div>
                                            <div className="field column is-two-fifths">
                                                <label className="label">Psychology</label>
                                                <div className="control">
                                                    <input name='tests.APpsych'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                                </div>
                                            </div>                        
                                            <div className="field column is-two-fifths">
                                                <label className="label">US Government</label>
                                                <div className="control">
                                                    <input name='tests.APusgov'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                                </div>
                                            </div>
                                            <div className="field column is-two-fifths">
                                                <label className="label">US History</label>
                                                <div className="control">
                                                    <input name='tests.APushistory'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                                </div>
                                            </div>
                                            <div className="field column is-two-fifths">
                                                <label className="label">World History</label>
                                                <div className="control">
                                                    <input name='tests.APworldhistory'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </Collapsible>
                            <Collapsible trigger="Math and Computer Science">
                                <div className='entryDiv container'>
                                    <div className="columns is-multiline is-centered">
                                        <div className="field column is-two-fifths">
                                            <label className="label">Calculus AB</label>
                                            <div className="control">
                                                <input name='tests.APcalcAB'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Calculus BC</label>
                                            <div className="control">
                                                <input name='tests.APcalcBC'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Computer Science A</label>
                                            <div className="control">
                                                <input name='tests.APcompsciA'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Computer Science P</label>
                                            <div className="control">
                                                <input name='tests.APcompsciP'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Statistics</label>
                                            <div className="control">
                                                <input name='tests.APstat'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Collapsible>
                            <Collapsible trigger="Sciences">
                                <div className='entryDiv container'>
                                    <div className="columns is-multiline is-centered">
                                        <div className="field column is-two-fifths">
                                            <label className="label">Biology</label>
                                            <div className="control">
                                                <input name='tests.APbio'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Chemistry</label>
                                            <div className="control">
                                                <input name='tests.APchem'  onChange={this.onChange.bind(this)}  className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Environmental Sciences</label>
                                            <div className="control">
                                                <input name='tests.APenvironment'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Physics Electricity</label>
                                            <div className="control">
                                                <input name='tests.APphysicsElect'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Physics Mechanical</label>
                                            <div className="control">
                                                <input name='tests.APphysicsMech'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Physics 1</label>
                                            <div className="control">
                                                <input name='tests.APphysics1'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Physics 2</label>
                                            <div className="control">
                                                <input name='tests.APphysics2'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Collapsible>
                            <Collapsible trigger="World Languages and Cultures">
                                <div className='entryDiv container'>
                                    <div className="columns is-multiline is-centered">
                                        <div className="field column is-two-fifths">
                                            <label className="label">Chinese</label>
                                            <div className="control">
                                                <input name='tests.APchinese'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">French</label>
                                            <div className="control">
                                                <input name='tests.APfrench'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">German</label>
                                            <div className="control">
                                                <input name='tests.APgerman'  onChange={this.onChange.bind(this)}  className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Italian</label>
                                            <div className="control">
                                                <input name='tests.APitalian'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Japanese</label>
                                            <div className="control">
                                                <input name='tests.APjapanese'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Latin</label>
                                            <div className="control">
                                                <input name='tests.APlatin'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Spanish Language</label>
                                            <div className="control">
                                                <input name='tests.APspanishlang'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Spanish Language</label>
                                            <div className="control">
                                                <input name='tests.APspanishlit'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>  
                                    </div>
                                </div>                      
                            </Collapsible>
                            <div className="control">
                                <button type='submit' className="button is-primary">Submit</button>
                            </div>
                        </form>
                    </section>
                    )
                }
        }
    }




    render() {
        return (

            <div className='container is-centered'>
                { this.renderContent() }
            </div>
 
      );
    }
  }

  EditTest.propTypes = {
      testEdit: PropTypes.func.isRequired,
      getUserProfile: PropTypes.func.isRequired
  }
  
  export default EditTest;
  
