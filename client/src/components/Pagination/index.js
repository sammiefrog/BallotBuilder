import React from "react";

const Pagination = ({ candidatesPerPage, totalCandidates, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCandidates / candidatesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="container">
            <nav class="table-responsive d-flex mb-2">
                <ul className="pagination mx-auto mb-0">
                    {pageNumbers.map(number => (
                        <li className="page-item" key={number}>
                            <a onClick={() => paginate(number)} href="#!" className="page-link">
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
