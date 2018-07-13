import React, { Component } from 'react';
import PDF from 'react-pdf-js';

class Transcript extends Component {
  constructor(props) {
    super(props);
      this.state = {
      }
    }

    onDocumentComplete = (pages) => {
      this.setState({ page: 1, pages });
    }
   
    handlePrevious = () => {
      this.setState({ page: this.state.page - 1 });
    }
   
    handleNext = () => {
      this.setState({ page: this.state.page + 1 });
    }
   
    renderPagination = (page, pages) => {
      let previousButton = <li className="previous" onClick={this.handlePrevious}><button><i className="fa fa-arrow-left"></i> Previous</button></li>;
      if (page === 1) {
        previousButton = <li className="previous disabled"><button><i className="fa fa-arrow-left"></i> Previous</button></li>;
      }
      let nextButton = <li className="next" onClick={this.handleNext}><button>Next <i className="fa fa-arrow-right"></i></button></li>;
      if (page === pages) {
        nextButton = <li className="next disabled"><button>Next <i className="fa fa-arrow-right"></i></button></li>;
      }
      return (
        <nav>
          <ul className="pager">
            {previousButton}
            {nextButton}
          </ul>
        </nav>
        );
    }

    render(){
      const userID = this.props.match.params.userID;
      const url = `http://localhost:5000/uploads/transcripts/${userID}.pdf`;
      let pagination = null;
      if (this.state.pages) {
        pagination = this.renderPagination(this.state.page, this.state.pages);
      }
      return (
        <div>
          <div>
            {pagination}
            <PDF file={url}
              onDocumentComplete={this.onDocumentComplete}
              page={this.state.page} 
            />
          </div>
    </div>
      )}
    }
  
  export default Transcript;
  