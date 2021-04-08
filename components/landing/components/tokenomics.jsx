import { ResponsivePie } from '@nivo/pie';

const margin = { top: 30, right: 200, bottom: 30, left: 30 };

const styles = {
  liSpan:{fontWeight:'bold'}
};

const data = [
  {
    id: 'Seed Sale',
    label: 'Seed Sale',
    value: 20
  },
  {
    id: 'Public Sale',
    label: 'Public Sale',
    value: 3
  },
  {
    id: 'Team',
    label: 'Team',
    value: 9
  },
  {
    id: 'Faundation',
    label: 'Faundation',
    value: 8
  },
  {
    id: 'Buyers Lottery',
    label: 'Buyers Lottery',
    value: 10
  },
  {
    id: 'NFT Mining',
    label: 'NFT Mining',
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


export const Tokenomics = (props) => {


  return (
    <div id='tokenomics'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2>Tokenomics</h2>
              <li><span style={styles.liSpan}>Seed Sale: </span>Price: $0.1 - 20% will be unlocked after listing. Remaining locked for 30 days then weekly vested over 6 months.</li>
              <p></p>
              <li><span style={styles.liSpan}>Public Sale: </span>Price: $0.12 - No vesting.</li>
              <p></p>
              <li><span style={styles.liSpan}>Listing: </span>Price: $0.125 on Uniswap.</li>
              <p></p>
              <li><span style={styles.liSpan}>NFT Creators Mining: </span>Every week a certain amount is distributed to NFT creators. Distribution amount will be reduced by time. First month begins with 100K for every week.</li>
              <p></p>
              <li><span style={styles.liSpan}>Buyers Lottery: </span>Every week a lottery is distributed to NFT buyers. First month 20K for each week and will be reduced by time.</li>
              <p></p>
              <li><span style={styles.liSpan}>Faundation: </span>850K will be used for Initial liquidity and 1.5M for stake programme.</li>
              <p></p>
              <li><span style={styles.liSpan}>Team: </span>Locked for one year, then weekly vesting over one year.</li>
            </div>
          </div>
          <div className='col-xs-12 col-md-6'>
            <div id='tokenomics-chart' >
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
            <span id='tokenomics-span' >30M</span>
          </div>
        </div>
      </div>
    </div>
  )
}
