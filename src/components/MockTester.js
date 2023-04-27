import React, { useState } from "react";
import ReactJson from "react-json-view";

export default function MockTester() {
    const [mockHeader, setMockHeader] = useState("");
    const [response, setResponse] = useState();
    const [msg, setMsg] = useState();
    const [submitting, setSubmitting] = useState(false);
    return (
        <>
            <h3>Mock data tester</h3>

            <input style={{padding: 5, width: 325}} value={mockHeader} placeholder="Try one of the examples above" onChange={(e) => setMockHeader(e.target.value)} />

            <button disabled={submitting} style={{padding: 3, marginTop:5, width: 100, display: "block"}} onClick={() => {
                setResponse();
                setMsg('Sending request...');
                setSubmitting(true);
                window.fetch('https://deployer.commvault.com/this-can-be-anything', {
                    headers: {
                        'Content-Type': 'application/json',
                        'mock': mockHeader,
                        'target-server': 'whatever-your-server-is'
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        setResponse(data);
                        setMsg();
                        setSubmitting(false);
                    })
                    .catch((error) => {
                        setMsg("Something went wrong!!!");
                        setSubmitting(false);
                    });
            }}>Submit</button>

            {response && <ReactJson src={response} collapsed />}
            {msg && <div>{msg}</div>}
        </>
    );
};
