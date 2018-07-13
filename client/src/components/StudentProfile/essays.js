import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';

import '../StudentProfileEdit/testEdit.css';

class Essay extends Component {
    componentDidMount = () => {
        const userID = this.props.match.params.userID;
        this.props.getStudentEssay(userID);

    }

    constructor(props) {
        super(props);
        this.state = {
            _user: this.props.match.params.userID,
            ...props
        }
    }

    renderContent() {
        switch(this.props.essay) {
            case null:
                return '';
            case false:
                return '';
            default:
                const essayDone = this.props.essay;
                if(essayDone._id) {
                    const { essay } = this.props;
                    return(
                        <section className='container column is-three-fifths'> 
                        <form onSubmit={this.onSubmit}>
                            <Collapsible trigger="1. Some students have a background, identity, interest, or talent that is so 
                                                  meaningful they believe their application would be incomplete without it. If 
                                                  this sounds like you, then please share your story. ">
                                <div className='entryDiv container'>
                                      <textarea value={essay.questionOne} name='questionOne' className="textarea" rows="10"></textarea>
                                </div>                 
                            </Collapsible>
                            <Collapsible trigger="2. The lessons we take from obstacles we encounter can be fundamental to later success. Recount 
                                                  a time when you faced a challenge, setback, or failure. How did it affect you, 
                                                  and what did you learn from the experience?  ">
                                <div className='entryDiv container'>
                                      <textarea value={essay.questionTwo} name='questionTwo' className="textarea" rows="10"></textarea>
                                </div>                 
                            </Collapsible>
                            <Collapsible trigger="3. Reflect on a time when you questioned or challenged a belief or idea.
                                                  What prompted your thinking? What was the outcome? ">
                                <div className='entryDiv container'>
                                      <textarea value={essay.questionThree} name='questionThree' className="textarea" rows="10"></textarea>
                                </div>                 
                            </Collapsible>
                            <Collapsible trigger="4. Describe a problem you've solved or a problem you'd like to solve. It 
                                                  can be an intellectual challenge, a research query, an ethical dilemma - 
                                                  anything that is of personal importance, no matter the scale. Explain its 
                                                  significance to you and what steps you took or could be taken to identify
                                                  a solution. ">
                                <div className='entryDiv container'>
                                      <textarea value={essay.questionFour} name='questionFour' className="textarea" rows="10"></textarea>
                                </div>                 
                            </Collapsible>
                            <Collapsible trigger="5. Discuss an accomplishment, event, or realization that sparked a period 
                                                  of personal growth and a new understanding of yourself or others. ">
                                <div className='entryDiv container'>
                                      <textarea value={essay.questionFive} name='questionFive' className="textarea" rows="10"></textarea>
                                </div>                 
                            </Collapsible>
                            <Collapsible trigger="6. Describe a topic, idea, or concept you find so engaging that it makes 
                                                  you lose all track of time. Why does it captivate you? What or who do you
                                                  turn to when you want to learn more? ">
                                <div className='entryDiv container'>
                                      <textarea value={essay.questionSix} name='questionSix' className="textarea" rows="10"></textarea>
                                </div>                 
                            </Collapsible>
                            <Collapsible trigger="7. Share an essay on any topic of your choice. It can be one you've already
                                                  written, one that responds to a different prompt, or one of your own design.  ">
                                <div className='entryDiv container'>
                                      <textarea value={essay.questionSeven} name='questionSeven' className="textarea" rows="10"></textarea>
                                </div>                 
                            </Collapsible>
                        </form>
                    </section>
                    )
                }
    }
}




    render() {
        return (

            <div className='container is-centered'>
                { this.renderContent()}
            </div>
 
      );
    }
  }

  Essay.propTypes = {
      essayEdit: PropTypes.func.isRequired,
      getStudentEssay: PropTypes.func.isRequired
  }
  
  export default Essay;
  