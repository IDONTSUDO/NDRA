/* eslint-disable no-useless-escape */
const path = require('path');
const {getFiles,FilesSearch} = require('./helper/files')



const VALUES = {
    importPath:'',
    searchRegExp:'console\.log\(.+?\)',
    ignore:['.git','coverage']
}

const mainApp = async () => {
    const appDir = path.dirname(require.main.filename);
    const ingoreDir = VALUES.ignore
    const p = await getFiles(appDir,ingoreDir)
    FilesSearch(appDir,p[0],VALUES.searchRegExp)
}
mainApp()