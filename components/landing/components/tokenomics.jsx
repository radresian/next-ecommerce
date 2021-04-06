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
  overlay: {
    position: 'absolute',
    top: 0,
    right: margin.right,
    bottom: 0,
    left: margin.left,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 96,
    color: '#FFFFFF',
    // background: "#FFFFFF33",
    textAlign: 'center',
    // This is important to preserve the chart interactivity
    pointerEvents: 'none'
  },
  totalLabel: {
    fontSize: 24
  }
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
    value: 15
  },
  {
    id: 'Stake',
    label: 'Stake',
    value: 9
  },
  {
    id: 'Liquidity',
    label: 'Liquidity',
    value: 3
  },
  {
    id: 'Mining',
    label: 'Mining',
    value: 50
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
              <p>{props.data ? props.data.paragraph : 'loading...'}</p>
            </div>
          </div>
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
                defs={[
                  {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    size: 4,
                    padding: 1,
                    stagger: true
                  },
                  {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                  }
                ]}
                fill={[
                  {
                    match: {
                      id: 'ruby'
                    },
                    id: 'dots'
                  },
                  {
                    match: {
                      id: 'c'
                    },
                    id: 'dots'
                  },
                  {
                    match: {
                      id: 'go'
                    },
                    id: 'dots'
                  },
                  {
                    match: {
                      id: 'python'
                    },
                    id: 'dots'
                  },
                  {
                    match: {
                      id: 'scala'
                    },
                    id: 'lines'
                  },
                  {
                    match: {
                      id: 'lisp'
                    },
                    id: 'lines'
                  },
                  {
                    match: {
                      id: 'elixir'
                    },
                    id: 'lines'
                  },
                  {
                    match: {
                      id: 'javascript'
                    },
                    id: 'lines'
                  }
                ]}
                legends={[
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
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
