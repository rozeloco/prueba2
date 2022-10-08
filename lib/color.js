const chalk = require("chalk")

const color = (text, color) => {
return !color ? chalk.blue(text) : chalk.keyword(color)(text)
}

module.exports = { color }