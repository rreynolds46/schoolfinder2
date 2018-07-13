import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import ReactTable from "react-table";
import 'react-table/react-table.css';

import './header.css';


class SchoolSearch extends Component {
    componentDidMount = () => {
        this.props.getSchoolList();
    }

    renderContent() {
                const listDone = this.props.schoolList;
                if(listDone) {
                    const { schoolList } = this.props;
                    const data = [];
                    schoolList.forEach(function(school) {
                        data.push(school.schoolProfile)
                    }.bind(this));
                    const columns = [{
                        Header: "School Name",
                        headerClassName: 'header-class',
                        accessor: "name",
                        Cell: cell => {
                            return(<a href={`/schools/${cell.original.schoolID}`}>{cell.value}</a>)
                        } 
                    }, {
                        Header: "Location",
                        headerClassName: 'header-class',
                        accessor: "location"
                    }, {
                        Header: "Enrollment",
                        headerClassName: 'header-class',
                        accessor: "enrollment"
                    }, {
                        Header: "Six Year Graduation Rate",
                        headerClassName: 'header-class',
                        accessor: "sixYear",
                        Cell: cell => {
                            return(<p>{cell.value}%</p>)
                        }
                    }];
                    return(
                        <div className='table-div'>
                            <ReactTable
                               data={data}
                               columns={columns}
                               className='-striped -highlight'
                            />
                        </div>
                    )
                } else {
                    return '';
        
        }
        
    }

    render() {
      return(
        <div>
            
            <div className='container is-centered'>

                {this.renderContent()}
                


            </div>
        </div>  
    
      )}   
  }
  
  SchoolSearch.propTypes = {
    getSchoolList: PropTypes.func.isRequired
  }
  
  function mapStateToProps(state) {
    return state;
  }
  
  export default connect(mapStateToProps, actions)(SchoolSearch);
  