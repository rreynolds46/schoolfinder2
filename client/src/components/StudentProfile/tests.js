import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';

import '../StudentProfileEdit/testEdit.css';

class Test extends Component {
    componentDidMount = () => {
        const userID = this.props.match.params.userID;
        this.props.getStudentTest(userID);
        
    }

    constructor(props) {
        super(props);
        this.state = {
            _user: this.props.match.params.userID,
            ...props
        }
    }

    renderContent() {
        switch(this.props.tests) {
            case null:
                return '';
            case false: 
                return '';
            default:
                const testDone = this.props.test;
                if(testDone._id) {
                    const { test } = this.props;
                    return (
                  <section className='container column is-three-fifths'> 
                    <form onSubmit={this.onSubmit}>
                        <Collapsible trigger="AP Capstone">
                            <div className='entryDiv container'>
                                <div className="columns is-multilined is-centered">
                                    <div className="field is-three-fifths column">
                                        <label className="label">AP Research</label>
                                        <div className="control">
                                            <input value={test.APresearch} name='APresearch' className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-three-fifths">
                                        <label className="label">AP Seminar</label>
                                        <div className="control">
                                            <input value={test.APseminar} name='APseminar'  className="input" type="number" placeholder="Score" min="0" max="5"/>
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
                                            <input name='AParthistory' value={test.AParthistory} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Studio Art 2-D</label>
                                        <div className="control">
                                            <input name='APstudioart2d' value={test.APstudioart2d} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Studio Art 3-D</label>
                                        <div className="control">
                                            <input name='APstudioart3d' value={test.APstudioart3d}  className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Studio Art Drawing</label>
                                        <div className="control">
                                            <input name='APstudioartdrawing' value={test.APstudioartdrawing} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Music</label>
                                        <div className="control">
                                            <input name='APmusic' value={test.APmusic} className="input" type="number" placeholder="Score" min="0" max="5"/>
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
                                            <input name='APenglishlang'  value={test.APenglishlang} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-three-fifths">
                                        <label className="label">English Literature</label>
                                        <div className="control">
                                            <input name='APenglishlit' value={test.APenglishlit} className="input" type="number" placeholder="Score" min="0" max="5"/>
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
                                                <input name='APcomparativegov' value={test.APcomparativegov} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">European History</label>
                                            <div className="control">
                                                <input name='APeuro' value={test.APeuro} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>                       
                                        <div className="field column is-two-fifths">
                                            <label className="label">Georgraphy</label>
                                            <div className="control">
                                                <input name='APgeography' value={test.APgeography} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Macroeconomics</label>
                                            <div className="control">
                                                <input name='APmacro' value={test.APmacro} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>                        
                                        <div className="field column is-two-fifths">
                                            <label className="label">Microeconomics</label>
                                            <div className="control">
                                                <input name='APmicro' value={test.APmicro} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Psychology</label>
                                            <div className="control">
                                                <input name='APpsych' value={test.APpsych} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>                        
                                        <div className="field column is-two-fifths">
                                            <label className="label">US Government</label>
                                            <div className="control">
                                                <input name='APusgov' value={test.APusgov} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">US History</label>
                                            <div className="control">
                                                <input name='APushistory' value={test.APushistory} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">World History</label>
                                            <div className="control">
                                                <input name='APworldhistory' value={test.APworldhistory} className="input" type="number" placeholder="Score" min="0" max="5"/>
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
                                            <input name='APcalcAB' value={test.APcalcAB} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Calculus BC</label>
                                        <div className="control">
                                            <input name='APcalcBC' value={test.APcalcBC} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Computer Science A</label>
                                        <div className="control">
                                            <input name='APcompsciA' value={test.APcompsciA} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Computer Science P</label>
                                        <div className="control">
                                            <input name='APcompsciP' value={test.APcompsciP} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Statistics</label>
                                        <div className="control">
                                            <input name='APstat' value={test.APstat} className="input" type="number" placeholder="Score" min="0" max="5"/>
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
                                            <input name='APbio' value={test.APbio} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Chemistry</label>
                                        <div className="control">
                                            <input name='APchem' value={test.APchem}  className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Environmental Sciences</label>
                                        <div className="control">
                                            <input name='APenvironment' value={test.APenvironment} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Physics Electricity</label>
                                        <div className="control">
                                            <input name='APphysicsElect' value={test.APphysicsElect} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Physics Mechanical</label>
                                        <div className="control">
                                            <input name='APphysicsMech' value={test.APphysicsMech} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Physics 1</label>
                                        <div className="control">
                                            <input name='APphysics1' value={test.APphysics1} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Physics 2</label>
                                        <div className="control">
                                            <input name='APphysics2' value={test.APphysics2} className="input" type="number" placeholder="Score" min="0" max="5"/>
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
                                            <input name='APchinese' value={test.APchinese} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">French</label>
                                        <div className="control">
                                            <input name='APfrench' value={test.APfrench} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">German</label>
                                        <div className="control">
                                            <input name='APgerman' value={test.APgerman}  className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Italian</label>
                                        <div className="control">
                                            <input name='APitalian' value={test.APitalian} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Japanese</label>
                                        <div className="control">
                                            <input name='APjapanese' value={test.APjapanese} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Latin</label>
                                        <div className="control">
                                            <input name='APlatin' value={test.APlatin} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Spanish Language</label>
                                        <div className="control">
                                            <input name='APspanishlang' value={test.APspanishlang} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Spanish Language</label>
                                        <div className="control">
                                            <input name='APspanishlit' value={test.APspanishlit} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>  
                                </div>
                            </div>                      
                        </Collapsible>

                    </form>
                </section>
                    )
                }
        }
    }




    render() {
        const { test } = this.props;
        console.log(test);
        return (

            <div className='container is-centered'>
                { this.renderContent() }
            </div>
 
      );
    }
  }

  Test.propTypes = {
      testEdit: PropTypes.func.isRequired,
      getStudentTest: PropTypes.func.isRequired
  }
  
  export default Test;
  
