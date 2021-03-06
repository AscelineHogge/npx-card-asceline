#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

const data = {
    name: chalk.white.bold("Asceline Hogge"),
    work: chalk.white("As a beginner coder at BeCode,"),
    work2: chalk.white("I owe my salvation to my wonderful group! "),
    npm: chalk.green("https://npmjs.com/") + chalk.red("ascelinehogge"),
    github: chalk.green("https://github.com/") + chalk.blue("AscelineHogge"),
    linkedin: chalk.green("https://linkedin.com/in/") + chalk.yellowBright("asceline-hogge"),
    npx: chalk.red("npx") + " " + chalk.white("asceline"),
    labelWork: chalk.white.bold(" "),
    labelWork2: chalk.white.bold(" "),
    labelNpm: chalk.white.bold("        npm:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelCard: chalk.white.bold("       Card:"),
};

const NEWLINE = "\n";
const EMPTYLINE = "";

console.log(
    chalk.white(
        boxen(
            [
                chalk.greenBright(
                    boxen(
                        data.name,
                        {
                            margin: {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 10,

                            },
                            padding: {
                                top: 1,
                                right: 8,
                                bottom: 1,
                                left: 8,

                            }
                        }
                    )
                ),
                EMPTYLINE,
                `${data.labelWork} ${data.work}`,
                `${data.labelWork2} ${data.work2}`,
                EMPTYLINE,
                `${data.labelNpm} ${data.npm}`,
                `${data.labelGitHub} ${data.github}`,
                `${data.labelLinkedIn} ${data.linkedin}`,
                EMPTYLINE,
                `${data.labelCard} ${data.npx}`,
            ].join(NEWLINE),
            {
                padding: 1,
                margin: 1,
                borderStyle: "round",
            },
        ),
    ),
);
