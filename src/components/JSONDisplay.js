import React from "react";

export default function JSONDisplay({ prefix, object }) {
    return <span>{`${prefix}:${JSON.stringify(object)}`}</span>;
};
