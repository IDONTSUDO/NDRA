const WHITE = `\x1b[37m`
const GREEN = `\x1b[32m`
const YELLOW = `\\033[33m`
exports.log = (log) => {
    return console.log(`${getLog(log.deal)}`, log.body)
}
// RegExp,Files,All
function getLog(deal) {
    switch (deal) {
        case 'RegExp':
            return GREEN
        case 'Files':
            return WHITE;
        case 'All':
            return YELLOW
        default:
            console.log(`Sorry, we are out of ${deal}.`);
    }
}