import './CustomerReview.css'
import Chart from 'react-apexcharts'
export default function CustomerReview() {
    const data = {
        series:[
            {
                name:'Review',
                data: [10,50,30,90, 40, 120,100],
            },
        ],
        options: {
            chart: {
                type: 'area',
                height: 'auto',
            },
            fill: {
                colors: ['#fff'],
                type:'gradient'
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
                colors: ['#ff9229'],
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy  HH:mm',
                },
            },
            grid: {
                show: false,
            },
            xaxis: {
                type: 'datetime',
                categories: [
                    new Date("2024-09-19T00:00:00Z").getTime(),
                    new Date("2024-09-19T01:30:00Z").getTime(),
                    new Date("2024-09-19T02:30:00Z").getTime(),
                    new Date("2024-09-19T03:30:00Z").getTime(),
                    new Date("2024-09-19T04:30:00Z").getTime(),
                    new Date("2024-09-19T05:30:00Z").getTime(),
                    new Date("2024-09-19T06:30:00Z").getTime(),
                ]
            },
            yaxis: {
                show: false
            },
            toolbar:{
                show:false
            }
        },
    };
  return (
   <div className="CustomerReview">
    <Chart series={data.series} options={data.options} type='area'/>
   </div>
  )
}
