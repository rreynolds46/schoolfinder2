import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class CustomizedSlider extends Component {
    onSliderChange = (value) => {
      this.props.onChange({
        target: {
          name: this.props.name,
          value
        }
      })
    }
  
    render() {
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
      
      const { onChange, ...rest } = this.props
      return (
        <div className='section'>
        <div className='container columns is-centered'>
          <div className='column is-half'>
            <h2>{this.props.title}</h2>
            <br />
            <Slider
              onChange={this.onSliderChange}
              name={this.props.name}
              dots min={0} 
              max={10} 
              marks={marks} 
              step={1}  
              defaultValue={5}
              {...rest}
            />
          </div>
        </div>
      </div>
      )
    }
  }

export default CustomizedSlider;