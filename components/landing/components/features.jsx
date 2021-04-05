import Step from './step';

export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>How It Works for Creators</h2>
        </div>
        <div className='row'>
          <div className='col-xs-6 col-md-3'>
            <Step
              index={'01'}
              text={'Authenticated Artists Drop digital artworks or valuable assets by BestDrop creator UI'}
              img_url={'/img/howitworks/drop2.svg'}
            />
          </div>
          <div className='col-xs-6 col-md-3'>
            <Step
              index={'02'}
              text={'Approved artworks or digital assets are become available through auction or through price offers'}
              img_url={'/img/howitworks/unpack2.svg'}
            />
          </div>
          <div className='col-xs-6 col-md-3'>
            <Step
              index={'03'}
              text={'Artwork or digital asset is minted as NFT for the winner of the auction'}
              img_url={'/img/howitworks/signed.svg'}
            />
          </div>
          <div className='col-xs-6 col-md-3'>
            <Step
              index={'04'}
              text={'Every week 100.000 $BSTD is distributed to BestDrop Creators'}
              img_url={'/img/howitworks/profit.svg'}
            />
          </div>
        </div>
      </div>
      <div className='container second-container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>How It Works For DAO members</h2>
        </div>
        <div className='row'>
          <div className='col-xs-6 col-md-3'>
            <Step
              index={'01'}
              text={'Buy some BSTD/ETH Liquidity Provider tokens from Uniswap'}
              img_url={'/img/howitworks/swap.svg'}
            />
          </div>
          <div className='col-xs-6 col-md-3'>
            <Step
              index={'02'}
              text={'Block your Uniswap LP tokens with our smart contract and take our DAO tokens'}
              img_url={'/img/howitworks/block.svg'}
            />
          </div>
          <div className='col-xs-6 col-md-3'>
            <Step
              index={'03'}
              text={'Vote and make purposals on DAO community with your DAO tokens. Always you can get your LP tokens back.'}
              img_url={'/img/howitworks/vote.svg'}
            />
          </div>
          <div className='col-xs-6 col-md-3'>
            <Step
              index={'04'}
              text={'Every week 20.000 $BSTD is distributed to DAO token owners proportional to the amount and block time'}
              img_url={'/img/howitworks/profit.svg'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
