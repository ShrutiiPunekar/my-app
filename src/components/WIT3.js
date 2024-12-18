import React from 'react';
import lift from './lift.png';
import './WIT3.css';
export default function WIT3() {
  return (
    
        <main>
        <h5 className="loc">3rd Floor<br/></h5>

        <div className="main_div">
        <h5 className="gate">Main Gate</h5>
        <div className="outer">

        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="black" className="bi bi-bar-chart-fill stair1" viewBox="0 0 16 16">
            <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
        </svg>

        <button type="button" className="btn btn-L301">Computer<br/>Center<br/>L301</button>
        <button type="button" className="btn btn-admi">AdmissionC</button>

        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="black" className="bi bi-bar-chart-fill stair2" viewBox="0 0 16 16">
            <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
        </svg>

        <div className="container1">

            <div className="inner">

            <button type="button" className="btn btn-315">CR L315</button>
            <button type="button" className="btn btn-316">CR L316</button>
            <button type="button" className="btn btn-317">CR L317</button>
            <button type="button" className="btn btn-318">CR L318</button>
            <button type="button" className="btn btn-319">CR L319</button>
            
            
            <button type="button" className="btn btn-302">CR L302</button>
            <button type="button" className="btn btn-303">CR L303</button>
            <button type="button" className="btn btn-304">FacultyRoom<br/>L304</button>
            <button type="button" className="btn btn-305">CR L305</button>
            <button type="button" className="btn btn-306">CR L306</button>

            

            <button type="button" className="btn btn-301">LA301</button>
            <button type="button" className="btn btn-309">Faculty<br/>Room L309</button>



            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="black" className="bi bi-bar-chart-fill stair3" viewBox="0 0 16 16" transform="rotate(180deg)">
            <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
            </svg>

            <button type="button" className="btn btn-308">ProgLab<br/>L308</button>
            <button type="button" className="btn btn-307">ProjLab<br/>L307</button>

            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="black" className="bi bi-bar-chart-fill stair4" viewBox="0 0 16 16" transform="rotate(180deg)">
            <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
            </svg>
            
            <img src={lift} className="lift1" width="50" height="50" ></img>
        </div>

        </div>
        </div>
        <h5 className="library">Library Side</h5>

        </div>
        </main>


  );
}

