import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import generateData from './data';

const Chart = ({ data }) => {
  const graphData = {
    labels: generateData(data),
    datasets: [{
      label: 'price(USD) last 7 days',
      data: generateData(data),
      backgroundColor: [
        'rgba(0, 0, 255, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
      ],
      borderWidth: 1,
      pointRadius: 0,
    }],
  };
  return (
    <>
      {' '}
      <Line
        data={graphData}
        width={100}
        height={50}
        options={{
          tooltips: { enabled: false },
          hover: { mode: null },
          maintainAspectRatio: false,
          scales: {
            xAxes: [{
              ticks: {
                display: false, // this will remove only the label
              },
            }],
          },
        }}
      />
    </>

  );
};

Chart.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};

export default Chart;
