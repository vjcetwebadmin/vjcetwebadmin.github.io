import React, { Component } from 'react'
import { MDBDataTable } from 'mdbreact';

    const Recruitment2021 = () => {
        const data = {
          columns: [
            {
                label: 'SL. NO',
                field: 'slno',
                sort: 'asc',
                width: 100
              },
            {
              label: 'COMPANY',
              field: 'company',
              sort: 'asc',
              width: 270
            },
            {
              label: 'YEAR',
              field: 'year',
              sort: 'asc',
              width: 270
            },
            {
              label: 'BRANCH',
              field: 'branch',
              sort: 'asc',
              width: 150
            },
            {
              label: 'NO OF STUDENTS',
              field: 'no_of_students',
              sort: 'asc',
              width: 270
            }
          ],
          rows: [     
                    {
                        slno: '1',
                        company: 'ELEATION',
                        year: '2021',
                        branch: 'CIVIL',
                        no_of_students: '02'
                    },
                    {
                        slno: '2',
                        company: 'ELEATION',
                        year: '2021',
                        branch: 'ME',
                        no_of_students: '03'
                    },
                    {
                        slno: '3',
                        company: 'EXPERION',
                        year: '2021',
                        branch: 'CSE',
                        no_of_students: '11'
                    },
                    {
                        slno: '4',
                        company: 'FACTWEAVERS',
                        year: '2021',
                        branch: 'CSE',
                        no_of_students: '02'
                    },
                    {
                        slno: '5',
                        company: 'GADGEON',
                        year: '2021',
                        branch: 'CSE',
                        no_of_students: '02'
                    },
                    {
                        slno: '6',
                        company: 'GUIDEHOUSE',
                        year: '2021',
                        branch: 'CSE',
                        no_of_students: '04'
                    },
                    {
                        slno: '7',
                        company: 'IMAGE INFO SYSTEM',
                        year: '2021',
                        branch: 'CSE',
                        no_of_students: '03'
                    },
                    {
                        slno: '8',
                        company: 'INFOSYS',
                        year: '2021',
                        branch: 'CIVIL',
                        no_of_students: '06'
                    },
                    {
                        slno: '9',
                        company: 'INFOSYS',
                        year: '2021',
                        branch: 'ECE',
                        no_of_students: '06'
                    },
                    {
                        slno: '10',
                        company: 'INFOSYS',
                        year: '2021',
                        branch: 'EEE',
                        no_of_students: '02'
                    },
                    {
                        slno: '11',
                        company: 'INFOSYS',
                        year: '2021',
                        branch: 'CSE',
                        no_of_students: '12'
                    }, 
                    {
                        slno: '12',
                        company: 'INFOSYS',
                        year: '2021',
                        branch: 'ME',
                        no_of_students: '02'
                    },
                    {
                        slno: '13',
                        company: 'INFOSYS',
                        year: '2021',
                        branch: 'IT',
                        no_of_students: '01'
                    },
                    {
                        slno: '14',
                        company: 'MITSOGO',
                        year: '2021',
                        branch: 'CSE',
                        no_of_students: '01'
                    },
                    {
                        slno: '15',
                        company: 'NMS WORKS',
                        year: '2021',
                        branch: 'CSE',
                        no_of_students: '05'
                    },
                    {
                        slno: '16',
                        company: 'SUTHERLAND GLOBAL - VOICE',
                        year: '2021',
                        branch: 'CIVIL',
                        no_of_students: '04'
                    },
                    {
                        slno: '17',
                        company: 'SUTHERLAND GLOBAL - VOICE',
                        year: '2021',
                        branch: 'ECE',
                        no_of_students: '04'
                    },
                    {
                        slno: '18',
                        company: 'SUTHERLAND GLOBAL - VOICE',
                        year: '2021',
                        branch: 'IT',
                        no_of_students: '04'
                    },
                    {
                        slno: '19',
                        company: 'TCS',
                        year: '2021',
                        branch: 'CIVIL',
                        no_of_students: '04'
                    },
                    {
                        slno: '20',
                        company: 'TCS',
                        year: '2021',
                        branch: 'ECE',
                        no_of_students: '11'
                    },
                    {
                        slno: '21',
                        company: 'TCS',
                        year: '2021',
                        branch: 'EEE',
                        no_of_students: '4'
                    },
                    {
                        slno: '22',
                        company: 'TCS',
                        year: '2021',
                        branch: 'CSE',
                        no_of_students: '34'
                    },
                    {
                        slno: '23',
                        company: 'TCS',
                        year: '2021',
                        branch: 'IT',
                        no_of_students: '02'
                    },
                    {
                        slno: '24',
                        company: 'TCS',
                        year: '2021',
                        branch: 'ME',
                        no_of_students: '02'
                    },
                    {
                        slno: '25',
                        company: 'VIT',
                        year: '2021',
                        branch: 'CSE',
                        no_of_students: '03'
                    },
                    {
                        slno: '26',
                        company: 'VVDN',
                        year: '2021',
                        branch: 'EEE',
                        no_of_students: '01'
                    },
                    {
                        slno: '27',
                        company: 'ZERONE',
                        year: '2021',
                        branch: 'CSE',
                        no_of_students: '03'
                    },
                ]
              };
              
  
    return (
      <div>

      
      <MDBDataTable
      striped
      bordered
      small
      data={data}
      />
      </div>
      );
    }

export default Recruitment2021;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    