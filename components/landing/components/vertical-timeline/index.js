export default function VerticalTimeline(props){
  
  return (
    <ul className="timeline" id="VerticalTimeline">

      {props.data.items.map((item,i)=>(
          <li key={i}>
            <div className="direction-r">
              <div className="flag-wrapper">
                <span className="flag">{item.title}</span>
                <span className="time-wrapper"><span className="time">{item.date}</span></span>
              </div>
            </div>
          </li>
        )
      )}


      <style jsx>{`
        .timeline {
          position: relative;
          margin: 0 auto;
          margin-top: 20px;
          padding: 1em 0;
          list-style-type: none;
        }
        
        .timeline:before {
          position: absolute;
          left: 30px;
          top: 0;
          content: ' ';
          display: block;
          width: 6px;
          height: 100%;
          margin-left: -3px;
          background: linear-gradient(to right, #674bef 0%, #001e65 130%);
          z-index: 5;
        }
        
        
        .timeline li {
          padding: 1em 0;
        }
        
        .timeline li:after {
          content: "";
          display: block;
          height: 0;
          clear: both;
          visibility: hidden;
        }
        
        .direction-l {
          position: relative;
          width: 300px;
          float: left;
          text-align: right;
        }
        
        .direction-r {
          position: relative;
          width: 280px;
          left: 64px;
        }
        
        .flag-wrapper {
          position: relative;
          display: grid;
          float: left;
          text-align: left;
        }
        
        .flag {
          position: relative;
          display: inline;
          background: linear-gradient(to right, #674bef 0%, #001e65 130%);
          padding: 6px 10px;
          border-radius: 5px;
          
          font-weight: 600;
          text-align: left;
        }
        
        .direction-l .flag {
          -webkit-box-shadow: -1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
          -moz-box-shadow: -1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
          box-shadow: -1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
        }
        
        .direction-r .flag {
          -webkit-box-shadow: 1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
          -moz-box-shadow: 1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
          box-shadow: 1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
        }
        
        .direction-l .flag:before,
        .direction-r .flag:before {
          position: absolute;
          top: 50%;
          right: -40px;
          content: ' ';
          display: block;
          width: 12px;
          height: 12px;
          margin-top: -10px;
          background: #021e66;
          border-radius: 10px;
          border: 1px solid rgb(62 161 255);
          z-index: 10;
        }
        
        .direction-r .flag:before {
          left: -40px;
        }
        
        .direction-l .flag:after {
          position: absolute;
          left: 100%;
          top: 50%;
          height: 0;
          width: 0;
          margin-top: -8px;
          border: solid transparent;
          border-left-color: rgb(248,248,248);
          border-width: 8px;
          pointer-events: none;
        }
        
        
        .time-wrapper {
          display: inline;
          line-height: 1em;
          font-size: 0.66666em;
          color: rgb(61 160 252);
          vertical-align: middle;
        }
        
        .direction-l .time-wrapper {
          float: left;
        }
        
        .direction-r .time-wrapper {
          float: right;
        }
        
        .time {
          display: inline-block;
          padding: 4px 6px;
        }
        
        .desc {
          margin: 1em 0.75em 0 0;
          
          font-size: 0.77777em;
          font-style: italic;
          line-height: 1.5em;
        }
        
        .direction-r .desc {
          margin: 1em 0 0 0.75em;
        }
        
      `}</style>

    </ul>
  );
}
