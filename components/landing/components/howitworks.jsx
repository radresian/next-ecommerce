import Step from './step';

export const Howitworks = (props) => {
  return (
    <div id='howitworks' className='text-center'>
      {props.data.groups.map((group, i)=>(
          <div key={i} className='container'>
            <div className='col-md-10 col-md-offset-1 section-title'>
              <h2>{group.title}</h2>
            </div>
            <div className='row'>
              {group.items.map((item, index) => (
                  <div key={index} className='howitworks-card col-xs-12 col-sm-6 col-md-3'>
                    <Step
                      index={'0'+(index+1)}
                      text={item.text}
                      img_url={item.img_url}
                    />
                  </div>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  )
}
