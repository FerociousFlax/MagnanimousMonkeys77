import React from 'react';
import ReactDOM from 'react-dom';
import {Bar} from 'react-chartjs-2';

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      barChartData: {
        labels: ['I DON\'T GET IT', 'NOT REALLY', 'NEUTRAL', 'I ALMOST GET IT', 'I GOT THIS!'],
        datasets: [
          {
            data: this.props.thumbsRange, // this.props.votes
            backgroundColor: ['rgb(255, 45, 45)', 'rgb(51, 153, 255)', 'rgb(255, 255, 102)', 'rgb(153, 102, 255)', 'rgb(75, 192, 192)']
          }
        ]
      }
    }
  }

  render() {
    return (
      <div className="barchart">
        <Bar
        data={this.state.barChartData}
        options={{
          title: {
            display: true,
            text: "Thumbs Range",
            fontSize: 25
          },
          legend: {
            display: false,
          },
            scales: {
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: '# of Votes',
                fontSize: 20
              },
              ticks: {beginAtZero: true}}]
          },
          layout: {
            padding: {
            left: 40,
            right: 40,
            bottom: 40,
            top: 40
            }
          }
        }}
        />
      </div>
    )
  }

}


export default BarChart;