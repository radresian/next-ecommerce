export default function VerticalTimeline(){
  
  return (
    <ul className="timeline" id="VerticalTimeline">

      <li>
        <div className="direction-r">
          <div className="flag-wrapper">
            <span className="flag">Freelancer</span>
            <span className="time-wrapper"><span className="time">2013 - present</span></span>
          </div>
          <div className="desc">My current employment. Way better than the position before!</div>
        </div>
      </li>

      <li>
        <div className="direction-r">
          <div className="flag-wrapper">
            <span className="flag">Apple Inc.</span>
            <span className="time-wrapper"><span className="time">2011 - 2013</span></span>
          </div>
          <div className="desc">My first employer. All the stuff I've learned and projects I've been working on.</div>
        </div>
      </li>

      <li>
        <div className="direction-r">
          <div className="flag-wrapper">
            <span className="flag">Harvard University</span>
            <span className="time-wrapper"><span className="time">2008 - 2011</span></span>
          </div>
          <div className="desc">A description of all the lectures and courses I have taken and my final degree?</div>
        </div>
      </li>

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
          background: rgb(80,80,80);
          background: -moz-linear-gradient(top, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);
          background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(30,87,153,1)), color-stop(100%,rgba(125,185,232,1)));
          background: -webkit-linear-gradient(top, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);
          background: -o-linear-gradient(top, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);
          background: -ms-linear-gradient(top, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);
          background: linear-gradient(to bottom, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);
          
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
          width: 260px;
          left: 64px;
        }
        
        .flag-wrapper {
          position: relative;
          display: inline-block;
          
          text-align: center;
        }
        
        .flag {
          position: relative;
          display: inline;
          background: rgb(248,248,248);
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
          background: #fff;
          border-radius: 10px;
          border: 4px solid rgb(255,80,80);
          z-index: 10;
        }
        
        .direction-r .flag:before {
          left: -40px;
        }
        
        .direction-l .flag:after {
          content: "";
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
        
        .direction-r .flag:after {
          content: "";
          position: absolute;
          right: 100%;
          top: 50%;
          height: 0;
          width: 0;
          margin-top: -8px;
          border: solid transparent;
          border-right-color: rgb(248,248,248);
          border-width: 8px;
          pointer-events: none;
        }
        
        .time-wrapper {
          display: inline;
          
          line-height: 1em;
          font-size: 0.66666em;
          color: rgb(250,80,80);
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
          background: rgb(248,248,248);
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
