import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function BrowserOnlyWrapper(props) {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => {
                const Component = require(`./${props.name}`).default;
                return <Component {...props} />;
            }}
        </BrowserOnly>
    )
};
