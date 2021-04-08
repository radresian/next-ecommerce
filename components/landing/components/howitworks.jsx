import Step from './step';

export const Howitworks = (props) => {
  return (
    <div id='howitworks' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>How It Works for NFT Creators</h2>
        </div>
        <div className='row'>
          <div className='howitworks-card col-xs-12 col-sm-6 col-md-3'>
            <Step
              index={'01'}
              text={'Authenticated Artists Drop digital artworks or valuable assets by BestDrop creator UI'}
              img_url={'/img/howitworks/drop2.svg'}
            />
          </div>
          <div className='howitworks-card col-xs-12 col-sm-6 col-md-3'>
            <Step
              index={'02'}
              text={'Approved artworks or digital assets are become available through auction or through price offers'}
              img_url={'/img/howitworks/unpack2.svg'}
            />
          </div>
          <div className='howitworks-card col-xs-12 col-sm-6 col-md-3'>
            <Step
              index={'03'}
              text={'Artwork or digital asset is minted as NFT for the winner of the auction'}
              img_url={'/img/howitworks/signed.svg'}
            />
          </div>
          <div className='howitworks-card col-xs-12 col-sm-6 col-md-3'>
            <Step
              index={'04'}
              text={'Every week 100K $BESD is distributed to BestDrop NFT Creators. Distributed amount will be reduced by a time factor.'}
              img_url={'/img/howitworks/profit.svg'}
            />
          </div>
        </div>
      </div>
      <div className='container second-container'>
        <div className='col-md-10 col-md-offset-1 section-title '>
          <h2 className='section-title-h2'>How It Works For DAO members</h2>
        </div>
        <div className='row'>
          <div className='howitworks-card col-xs-12 col-sm-6 col-md-3'>
            <Step
              index={'01'}
              text={'Buy some $BESD from Uniswap'}
              img_url={'/img/howitworks/swap.svg'}
            />
          </div>
          <div className='howitworks-card col-xs-12 col-sm-6 col-md-3'>
            <Step
              index={'02'}
              text={'Lock your $BESD tokens with our smart contract and take our DAO tokens'}
              img_url={'/img/howitworks/block.svg'}
            />
          </div>
          <div className='howitworks-card col-xs-12 col-sm-6 col-md-3'>
            <Step
              index={'03'}
              text={'Vote and make purposals on DAO community with your DAO tokens. Have rights to buy limited edition special NTFs.'}
              img_url={'/img/howitworks/vote.svg'}
            />
          </div>
          <div className='howitworks-card col-xs-12 col-sm-6 col-md-3'>
            <Step
              index={'04'}
              text={'Earn $BESD proportional to lock time and have your share from service fees as Ether'}
              img_url={'/img/howitworks/profit.svg'}
            />
          </div>
        </div>
      </div>
      <div className='container second-container'>
        <div className='col-md-10 col-md-offset-1 section-title '>
          <h2 className='section-title-h2'>How It Works For NFT buyers</h2>
        </div>
        <div className='row'>
          <div className='howitworks-card col-xs-12 col-sm-6 col-md-3'>
            <Step
              index={'01'}
              text={'Make an offers for listed and auctioned NFTs by $ETH.'}
              img_url={'/img/howitworks/swap.svg'}
            />
          </div>
          <div className='howitworks-card col-xs-12 col-sm-6 col-md-3'>
            <Step
              index={'02'}
              text={'If you win the auction, you have the NFT.'}
              img_url={'/img/howitworks/block.svg'}
            />
          </div>
          <div className='howitworks-card col-xs-12 col-sm-6 col-md-3'>
            <Step
              index={'03'}
              text={'Your NFT is visible in your wallet, you can sell it here or any other NFT market place.'}
              img_url={'/img/howitworks/vote.svg'}
            />
          </div>
          <div className='howitworks-card col-xs-12 col-sm-6 col-md-3'>
            <Step
              index={'04'}
              text={'Win the auction or not you have the ticket for the weekly $BESD lottery now.'}
              img_url={'/img/howitworks/profit.svg'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
