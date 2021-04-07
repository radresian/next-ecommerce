import { ResponsivePie } from '@nivo/pie';

const margin = { top: 30, right: 200, bottom: 30, left: 30 };

const styles = {
  root: {
    fontFamily: 'consolas, sans-serif',
    textAlign: 'center',
    position: 'relative',
    height: 400,
    width: 600,
    marginTop: 10,
    background: '#fff',
    borderRight: 0,
    boxShadow: '0 0 50 rgba(0,0,0,0.06)'
  },
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
    value: 15
  },
  {
    id: 'Liquidity',
    label: 'Liquidity',
    value: 30
  },
  {
    id: 'Development',
    label: 'Development',
    value: 50
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
            <div style={styles.root}>
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
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2>How We Allocate $708,000 Fund Rised</h2>
              <li><span style={styles.liSpan}>50% Development: </span>$354,000 will be used for development and maintenance costs of the BestDrops dApp.</li>
              <p></p>
              <li><span style={styles.liSpan}>30% Liquidity: </span>$212,400 will be liquidity to Uniswap.</li>
              <p></p>
              <li><span style={styles.liSpan}>15% Marketing, Partnerships: </span>$106,200 will be used for marketing and partnerships.</li>
              <p></p>
              <li><span style={styles.liSpan}>5% Legal Fees: </span>35,400 is reserved for legal fees.</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
