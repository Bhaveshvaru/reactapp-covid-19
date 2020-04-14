import React from 'react';
import './list.css';
const ApicardList = (props) => {
  //console.log(props.api)
  const cards = props.api.map((card) => {
    return (
        <div className="list" >
      <div className="ui cards " >
        <div className="card" style={{backgroundColor:"#EAF0F1"}}>
          <div className="content" >
            <div className="header" >{card.loc}</div>
            <div className="meta">
              TotalCases:{card.totalConfirmed}
              <br />
              Deaths:{card.deaths}
              <br />
              Discharged:{card.discharged}
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  });
  //   <div key= {props.api.loc}>
  //   location: {card.loc},<br/>
  //    cases: {card.totalConfirmed}
  //    discharged: {card.discharged}
  //    deaths: {card.deaths}
  //  </div>
  return <div style={{backgroundColor:"#616C6F"}} > {cards}</div>;
};
export default ApicardList;
