export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              { props.language==='TR' ?
                <div className='col-md-8 col-md-offset-2 intro-text'>
                  <h1 style={{fontFamily: 'Orbitron, sans-serif'}}>
                    {props.data ? props.data.title1 : 'Loading'}
                    {props.data ? props.data.title2 : 'Loading'}
                    {props.data ? props.data.title3 : 'Loading'}
                    {props.data ? props.data.title4 : 'Loading'}
                    {'-'}
                    {props.data ? props.data.title5 : 'Loading'}
                    {props.data ? props.data.title6 : 'Loading'}
                  </h1>

                  <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                  <a
                    href='#about'
                    className='btn btn-custom btn-lg page-scroll'
                  >
                    { props.data.learnMore }
                  </a>{' '}
                </div>
                :
                <div className='col-md-8 col-md-offset-2 intro-text'>
                  <h1>
                    {props.data ? props.data.title1 : 'Loading'}
                    <span></span>
                  </h1>
                  <h2>
                    {props.data ? props.data.title2 : 'Loading'}
                    <span>{props.data ? props.data.title3 : 'Loading'}</span>
                  </h2>
                  <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                  <a
                    href='#about'
                    className='btn btn-custom btn-lg page-scroll'
                  >
                    { props.data.learnMore }
                  </a>{' '}
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
