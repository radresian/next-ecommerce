import { ResponsivePie } from '@nivo/pie';

const margin = { top: 30, right: 200, bottom: 30, left: 30 };

const styles = {
  liSpan:{fontWeight:'bold'}
};

const data = [
  {
    id: 'Legal Fees',
    label: 'Legal Fees',
    value: 5
  },
  {
    id: 'Marketing, Partnerships',
    label: 'Marketing, Partnerships',
    value: 20
  },
  {
    id: 'Liquidity',
    label: 'Liquidity',
    value: 15
  },
  {
    id: 'Development',
    label: 'Development',
    value: 60
  }
];

const legends=[
    {
      anchor: 'bottom',
      direction: 'row',
      justify: false,
      translateX: 0,
      translateY: 56,
      itemsSpacing: 0,
      itemWidth: 100,
      itemHeight: 18,
      itemTextColor: '#999',
      itemDirection: 'left-to-right',
      itemOpacity: 1,
      symbolSize: 18,
      symbolShape: 'circle',
      effects: [
        {
          on: 'hover',
          style: {
            itemTextColor: '#000'
          }
        }
      ]
    }
];


export const Funds = (props) => {


  return (
    <div id='tokenomics'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <div id="fund-chart">
              <ResponsivePie
                data={data}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                colors={{ scheme: 'nivo' }}
                borderWidth={1}
                borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
                radialLabelsSkipAngle={10}
                radialLabelsTextColor="#333333"
                radialLabelsLinkColor={{ from: 'color' }}
                sliceLabelsSkipAngle={10}
                sliceLabelsTextColor="#333333"
                sliceLabel={(item) => `${item.value}%`}
                legends={[]}
              />
            </div>
            <span id="fund-span">$708,000</span>
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text' id='fund-texts'>
              <h2>{props.data.title}</h2>
              {props.data.items.map(item => (
                <>
                  <li><span style={styles.liSpan}>{item.label}</span>{item.description}</li>
                  <p></p>
                </>
              ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
