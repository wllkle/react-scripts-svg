const { name: REPO_NAME, repository } = require("../package.json");
const { url: REPO_URL } = repository;

const REPO = `*
*   GENERATED BY ${REPO_NAME.toUpperCase()}
*   ${REPO_URL.replace(".git", "")}`;

export const WARNING_COMMENT: string = `/*
*   DO NOT MAKE CHANGES TO THIS FILE
*   THIS FILE WILL BE OVERWRITTEN
${REPO}
*/`;

export const WARNING_COMMENT_FORCE: string = `/*
*   ANY CHANGES MADE TO THIS FILE WILL BE
*   OVERWRITTEN IF FORCE (-f) FLAG IS USED
${REPO}
*/`;

export const BANNER: string = `\n██████  ███████  ██████   ██████ ████████    ███████ ██     ██  ██████  ███████
██   ██ ██      ██    ██ ██         ██       ██      ██     ██ ██       ██
██████  █████   ████████ ██         ██ █████ ███████ ██     ██ ██   ███ ███████
██   ██ ██      ██    ██ ██         ██            ██  ██   ██  ██    ██      ██
██   ██ ███████ ██    ██  ██████    ██       ███████   █████    ██████  ███████\n`;

export const COMPONENT_LINK: string =
    "https://reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized";
