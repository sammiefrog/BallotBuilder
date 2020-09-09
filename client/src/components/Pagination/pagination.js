import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles(theme => ({
    root: {
        "& > *": {
            marginTop: theme.spacing(2)
        }
    }
}));

const PaginationOutlined = ({ candidatesPerPage, totalCandidates, paginate }) => {
    const classes = useStyles();
    const [page, setPage] = React.useState(1);

        // const pageNumbers = [];

        // for (let i = 1; i <= Math.ceil(totalCandidates / candidatesPerPage); i++) {
        //     pageNumbers.push(i);
        // }
    
    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <div className={classes.root}>
            {/* {pageNumbers.map(number => ( */}
                <Pagination
                    page={page}
                    onChange={handleChange}
                    count={10}
                    // onClick={() => paginate(number)}
                    href="#!"
                    variant="outlined"
                    color="primary"
                />
            {/* ))} */}
        </div>
    );
};

export default PaginationOutlined;