import React from "react";

const Pagination = ({ candidatesPerPage, totalCandidates, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCandidates / candidatesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <nav>
                <ul className="pagination">
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
