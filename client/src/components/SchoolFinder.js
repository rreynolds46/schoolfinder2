import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import ReactTable from "react-table";
import matchSorter from 'match-sorter'

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
                        data.push(school)
                    }.bind(this));
                    const columns = [{
                        Header: "School Name",
                        headerClassName: 'header-class',
                        accessor: "schoolProfile.name",
                        Cell: cell => {
                            return(<a href={`/schools/${cell.original.schoolID}`}>{cell.value}</a>)
                        },
                        filterMethod: (filter, rows) =>
                            matchSorter(rows, filter.value, { keys: ["name"] }),
                        filterAll: true
                    }, {
                        Header: "Location",
                        headerClassName: 'header-class',
                        accessor: "schoolProfile.location",
                        filterMethod: (filter, rows) =>
                            matchSorter(rows, filter.value, { keys: ["location"] }),
                        filterAll: true
                    }, {
                        Header: "Enrollment",
                        headerClassName: 'header-class',
                        accessor: "schoolProfile.enrollment",
                        filterMethod: (filter, row) => {
                            return row[filter.id] >= filter.value
                        }
                    }, {
                        Header: "Six Year Graduation Rate",
                        headerClassName: 'header-class',
                        accessor: "schoolProfile.sixYear",
                        Cell: cell => {
                            return(<p>{cell.value}%</p>)
                        } ,
                        filterMethod: (filter, row) => {
                            return row[filter.id] >= filter.value
                        }
                    }, {
                        Header: "Average GPA of Freshman",
                        headerClassName: 'header-class',
                        accessor: "schoolScores.gpa",
                        Cell: cell => {
                            return(<p>{cell.value}</p>)
                        } ,
                        filterMethod: (filter, row) => {
                            return row[filter.id] >= filter.value
                        }
                    }, {
                        Header: "Average SAT of Freshman",
                        headerClassName: 'header-class',
                        accessor: "schoolScores.sat",
                        Cell: cell => {
                            return(<p>{cell.value}</p>)
                        } ,
                        filterMethod: (filter, row) => {
                            return row[filter.id] >= filter.value
                        }
                    }];
                    return(
                        <div className='table-div'>
                            <ReactTable
                               data={data}
                               columns={columns}
                               className='-striped -highlight'
                               filterable
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
  