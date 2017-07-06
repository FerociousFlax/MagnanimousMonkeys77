import React from 'react';
import ReactDOM from 'react-dom';
import {Pie} from 'react-chartjs-2';

class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pieChartData: {
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
      <div className="piechart">
        <Pie
        data={this.state.pieChartData}
        options={{
          title: {
            display: true,
            text: "Thumbs Range",
            fontSize: 25
          },
          legend: {
            display: true,
            position:'top'
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


export default PieChart;