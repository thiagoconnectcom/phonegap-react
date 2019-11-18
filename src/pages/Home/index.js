import React, {Component} from 'react';
import * as Chartjs from 'react-chartjs-2';
import Chart from 'react-google-charts';


export default class Home extends Component{

    render(){
        return(
            <div className="container mb-5 mt-5">
                <div className="demo-vertical-spacing">
                    <div className="mt-5 mb-5">
                        <Chartjs.Line
                            height={250}
                            data={{
                            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                            datasets: [{
                                label: 'My First dataset',
                                data: [43879867687687, 342342523591, 235252352589, 2523532523516, 2523525235221, 2525325325379, 235235235228],
                                borderWidth: 1,
                                backgroundColor: 'rgba(255, 193, 7, 0.3)',
                                borderColor: '#FFC107',
                                borderDash: [5, 5],
                                fill: false
                            }, {
                                label: 'My Second dataset',
                                data: [24, 63, 29, 75, 28, 54, 38],
                                borderWidth: 1,
                                backgroundColor: 'rgba(233, 30, 99, 0.3)',
                                borderColor: '#E91E63'
                            }]
                            }}
                            options={{
                            responsive: true,
                            maintainAspectRatio: false
                            }}
                        />
                    </div>

                    <div className="mt-5 mb-5">
                        <Chartjs.Bar
                            height={250}
                            data={{
                            labels: ['Italy', 'UK', 'USA', 'Germany', 'France', 'Japan'],
                            datasets: [{
                                label: '2010 customers #',
                                data: [53, 99, 14, 10, 43, 27],
                                borderWidth: 1,
                                backgroundColor: 'rgba(205, 220, 57, 0.3)',
                                borderColor: '#CDDC39'
                            }, {
                                label: '2014 customers #',
                                data: [55, 74, 20, 90, 67, 97],
                                borderWidth: 1,
                                backgroundColor: 'rgba(103, 58, 183, 0.3)',
                                borderColor: '#673AB7'
                            }]
                            }}

                            options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            scales: {
                                xAxes: [{
                                categoryPercentage: 0.75,
                                barPercentage: 0.95
                                }]
                            }
                            }}
                        />
                    </div>

                    <div className="mt-5 mb-5">
                        <Chartjs.Pie
                            height={250}
                            data={{
                            labels: [ 'Red', 'Blue', 'Yellow' ],
                            datasets: [{
                                data: [ 180, 272, 100 ],
                                backgroundColor: [ '#FF6384', '#36A2EB', '#FFCE56' ],
                                hoverBackgroundColor: [ '#FF6384', '#36A2EB', '#FFCE56' ]
                            }]
                            }}
                            options={{
                            responsive: true,
                            maintainAspectRatio: false
                            }}
                        />
                    </div>
                </div>
            </div>   
        )
    }
}