import React from "react";
import s from './Pagination.module.css';

function Pagination ({ current_page, page_cant, pagination }) {
    return (
        <div className={s.container}>
            <button className={s.btn} disabled={current_page > 1? false : true} onClick={() => pagination(current_page-1)}>PREVIOS</button>
            <div className={s.page_cant}>{current_page}-{page_cant}</div>
            <button className={s.btn} disabled={current_page < page_cant? false : true} onClick={() => pagination(current_page+1)}>NEXT</button>
        </div>
    )
};
export default Pagination;