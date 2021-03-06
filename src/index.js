/* eslint-disable no-useless-escape */
const path = require('path');
const {getFiles,FilesSearch,WriteFilesImportOfReplaceRegExpAddings} = require('./helper/files')


const VALUES = {
    importPath:'',
    searchRegExp:'console.log(.+?)+',
    ignore:['.git','coverage'],
    replaceStr:'test'
}
const mainApp = async () => {
    const appDir = path.dirname(require.main.filename);
    console.log(appDir)
    const ingoreDir = VALUES.ignore
    const p = await getFiles(appDir,ingoreDir)
    
    FilesSearch(appDir,p[0],VALUES.searchRegExp)
    WriteFilesImportOfReplaceRegExpAddings(appDir, p[0],VALUES.searchRegExp,VALUES.replaceStr, VALUES.importPath)

}
mainApp()
