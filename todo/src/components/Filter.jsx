import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/store';

function Filter(){
    const dispatch=useDispatch();
    const currentFilter=useSelector((state)=>state.filter);

    return(
        <div className="btn-group mb-4" role="group">
            <input 
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio1"
                autoComplete="off"
                checked={currentFilter==='ALL'}
                onChange={()=>dispatch(setFilter('ALL'))} 
            />
            <label className="btn btn-outline-primary" htmlFor="btnradio1">Tous</label>

            <input 
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio2"
                autoComplete="off"
                checked={currentFilter==='ACTIVE'}
                onChange={()=>dispatch(setFilter('ACTIVE'))} 
            />
            <label className="btn btn-outline-primary" htmlFor="btnradio2">Actifs</label>

            <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio3"
                autoComplete="off"
                checked={currentFilter==='COMPLETED'}
                onChange={()=>dispatch(setFilter('COMPLETED'))}
            />
            <label className="btn btn-outline-primary" htmlFor="btnradio3">Complétés</label>
        </div>
    );
}

export default Filter;