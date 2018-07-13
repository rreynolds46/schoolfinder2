import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class CustomizedSlider extends Component {
  
    render() {
        const result = this.props.result;
        const minMark = this.props.minMark;
        const midMark = this.props.midMark;
        const highMark = this.props.highMark;
        const marks = {
            0: <p>{minMark}</p>,
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: <p>{midMark}</p>,
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: <p>{highMark}</p>,
        }
      return (
        <div className='section is-centered'>
          <div className='container columns is-centered'>
            <div className='column is-half is-centered'>
              <h2>{this.props.title}</h2>
              <br />
              <Slider
                dots min={0} 
                max={10} 
                marks={marks} 
                step={1}  
                value={result}
              />
            </div>
          </div>
        </div>

      )
    }
  }

export default CustomizedSlider;