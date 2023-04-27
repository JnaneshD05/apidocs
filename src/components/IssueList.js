import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ReactMarkdown from "react-markdown";
import { Button, Card, CardActions, CardContent, CardHeader, InputAdornment, LinearProgress, List, Paper, TextField, Typography } from "@mui/material";

const TOKEN = "-K_8jJho1axexRFb5noH";
const API = "https://git.commvault.com/api/v4/projects/356/issues?per_page=100&state=opened";

const Issue = ({ title, description, assignees, labels, id }) => {
    return (
        <Card sx={{ p: 2, m: 2 }}>
            <CardHeader title={`#${id}: ${title}`} subheader={labels.join(", ")} />
            <CardContent>
                <ReactMarkdown>{description.replaceAll('(/uploads/', '(https://git.commvault.com/eng/ui/teer/uploads/')}</ReactMarkdown>
                {assignees && assignees.length > 0 && <Typography variant="subtitle2">Assignees: {assignees.map(a => a.name).join(", ")}</Typography>}
            </CardContent>
            <CardActions>
                <Button href={`mailto:teer@commvault.com?subject=Ques about teer issue ${id}: ${title}&body=https://git.commvault.com/eng/ui/teer/-/issues/${id}`} target="_blank">Enquire</Button>
            </CardActions>
        </Card>
    );
};

export default function IssueList() {
    const [state, setState] = useState({ search: "" });
    const updateState = (newData) => setState((os) => ({ ...os, ...newData }));

    const loadIssues = async () => {
        updateState({ loading: true });
        window.fetch(API, {
            headers: {
                'PRIVATE-TOKEN': TOKEN
            }
        })
            .then(response => response.json())
            .then(data => {
                updateState({ loading: false, issues: data, masterList: data });
            })
            .catch((error) => {
                updateState({ loading: false, issues: null, error: error });
            });
    };

    const search = (keywords) => {
        updateState({ search: keywords });
        if (window.searchReq) {
            window.clearTimeout(window.searchReq);
        }
        window.searchReq = window.setTimeout(() => {
            const filtered = state.masterList.filter(i => {
                const assignees = i.assignees.map(a => a.name).join(", ");
                const labels = i.labels.join(", ");
                return i.title.toLowerCase().includes(keywords.toLowerCase()) ||
                    assignees.toLowerCase().includes(keywords.toLowerCase()) ||
                    labels.toLowerCase().includes(keywords.toLowerCase()) ||
                    i.description.toLowerCase().includes(keywords.toLowerCase());
            });
            updateState({ issues: filtered });
        }, 500);
    };

    useEffect(() => {
        loadIssues();
    }, []);
    return (
        <Paper sx={{ p: 2 }}>
            <p>Teer team has the following issues in the queue. Issues being actively worked on are tagged "in-progress".</p>
            {!state.error && !state.loading && (
                <TextField
                    type="search"
                    fullWidth
                    placeholder="Search by tag, author, description or title"
                    value={state.search}
                    onChange={(e) => search(e.target.value)}
                    variant="standard"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment>
                                <SearchIcon />
                            </InputAdornment>
                        )
                    }}
                />
            )}
            {state.loading && <LinearProgress />}
            {state.error && <p>Something went wrong. Please contact the teer team.</p>}
            {!state.error && !state.loading && state.issues && state.issues.length === 0 && <p>No issues found.</p>}
            {state.issues && (
                <List>
                    {state.issues.map(issue => (
                        <Issue {...issue} key={issue.id} />
                    ))}
                </List>
            )}
        </Paper>
    )
};
