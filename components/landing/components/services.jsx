export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        {props.data.title &&
        <div className='section-title'>
          <h2>{props.data.title}</h2>
        </div>
        }
        <div className='row'>
          {props.data.data
            ? props.data.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
