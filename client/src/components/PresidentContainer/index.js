// importing necessary dependencies and styling
import React, { useEffect, useState, useContext } from "react";
import Container from "@material-ui/core/Container";
import GridList from "@material-ui/core/GridList";
import OutlinedCard from "../Card/index";
import API from "../../utils/API";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { UserContext } from "../../context/contexts/UserContext";
import { trackPromise } from "react-promise-tracker";
import Pagination from "../Pagination";
// import Pagination from "@material-ui/lab/Pagination";


const useStyles = makeStyles(theme => ({
    root: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    },
    gridList: {
        width: "100%",
        height: "100%",
        justifyContent: "center"
    },
    pagination: {
        "& > *": {
            marginTop: theme.spacing(2),
            justifyContent: "center",
            alignItems: "center"
        }
    }
}));

// container for presidential candidates and exporting component for other parts of application
export default function PresidentContainer() {
    const classes = useStyles();
    const [president, setPresident] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [candidatesPerPage, setCandidatesPerPage] = useState(25);
    const { user } = useContext(UserContext);

    useEffect(() => {
        getPresident();
    }, []);

    const getPresident = async () => {
        try {
            const response = await trackPromise(API.getPresident());
            const cleanData = response.data.candidate.map(person => ({
                ...person,
                coreValues:
                    "http://votesmart.org/issue_rating_category.php?can_id=" + person.candidateId
            }));
            setPresident(cleanData);
        } catch (error) {
            console.log(error);
        }
    };

    const indexofLastCandidate = currentPage * candidatesPerPage;
        const indexofFirstCandidate = indexofLastCandidate - candidatesPerPage;
        const currentCandidates =  president.slice(
                    indexofFirstCandidate,
                    indexofLastCandidate
                );

    const paginate = pageNumber => setCurrentPage(pageNumber);    


    const saveCandidate = async data => {
        try {
            await API.saveCandidate(user.token, {
                candidateName: data.ballotName,
                candidateParty: data.electionParties,
                candidateId: data.candidateId,
                coreValues: data.coreValues
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Container className={classes.root}>
            <Typography variant="h4">
                Presidential Candidates for November 3rd General Election
            </Typography>
            <GridList className={classes.gridList} cols={3}>
                {currentCandidates.map((person, i) =>
                    person.electionStatus === "Running" ||
                    (person.electionStatus === "Announced" &&
                        person.electionParties !== "Write-In (Independent)" &&
                        person.electionParties !== "Write-In") ? (
                        <OutlinedCard
                            key={i}
                            candidateId={person.candidateId}
                            candidateName={person.ballotName}
                            candidatePhoto={person.photo}
                            candidateParty={person.electionParties}
                            action={() => {
                                saveCandidate(person);
                            }}
                            btncontent="Save to My Ballot"
                            coreValues={person.coreValues}
                        />
                    ) : (
                        ""
                    )
                )}
            </GridList>
            {/* <Pagination
                className={classes.pagination}
                count={count}
                page={page}
                siblingCount={1}
                boundaryCount={1}
                variant="outlined"
                shape="rounded"
                onChange={handlePageChange}
            /> */}
            <Pagination
                className={classes.pagination}
                candidatesPerPage={candidatesPerPage}
                totalCandidates={president.length}
                paginate={paginate}
            />
        </Container>
    );
}
