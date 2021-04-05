export const Team = (props) => {
  return (
    <div id='team'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>Meet the Team</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-6'>
                  <div className='testimonial'>
                    <div className='testimonial-image'>
                      {' '}
                      <img src={d.img} alt='' />{' '}
                    </div>
                    <div className='testimonial-content'>
                      <p>"{d.text}"</p>
                      <p>-</p>
                      <a className='linkedin' href={d.linkedin}> Linkedin </a>
                      <div className='testimonial-meta'> {d.name} </div>
                      <div className='testimonial-meta'> {d.title} </div>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
