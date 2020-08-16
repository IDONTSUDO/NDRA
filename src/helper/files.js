const { readdir, stat, readFile, writeFile, appendFile } = require("fs").promises
const { join } = require('path');



const SystemCarriage = process.platform === 'win32' ? '\r\n' : '\n';

/**@description  получение всех файлов в директории 
 * @param { pathDir } String
 * @param { file } String
 * @param { regExp } String
 * @return { Boolean }
 */
exports.getFiles = async (pathDir) => {
  let files = []
  let resultFiles = []
  for (const file of await readdir(pathDir)) {
    // eslint-disable-next-line no-empty
    if ((await stat(join(pathDir, file))).isDirectory()) {

    } else {
      files = [...files, file]
    }
  }
  for (const file of files) {
    if (file.endsWith(".js")) {
      resultFiles.push(file)
    }
  }
  return resultFiles

}
/**@description получение директорий по пути при условии игнорирования некоторых дерикторий
 * @param { pathDir } String
 * @param { ignore } Array
 * @return { returnDirs } Array 
 */
exports.getDirs = async (pathDir, ignore) => {
  let dirs = []
  let returnDirs = []
  for (const file of await readdir(pathDir)) {
    if ((await stat(join(pathDir, file))).isDirectory()) {
      dirs = [...dirs, file]
    }
  }
  for (let dir of dirs) {
    // eslint-disable-next-line no-empty
    if (ignore.includes(dir)) {
    } else {
      returnDirs.push(dir)
    }
  }
  return returnDirs
}

/**@description  основная функция замены кода по файлам
 * @param { pathDir } String
 * @param { file } String
 * @param { regExp } String
 * @param { ReplaceStr } String
 * @param { impStr } String
 * @return { Boolean }
 */
exports.WriteFilesImportOfReplaceRegExpAddings = ReplaceFun
async function ReplaceFun(pathDir, file, regExp, ReplaceStr, impStr) {
  const fileResult = join(pathDir, file)
  const FileData = await readFile(fileResult, "utf8")
  const result = FileData.padStart(1, `${impStr}${SystemCarriage}`)
  // const Appened = dataReplace(result,regExp,impStr,ReplaceStr)
  console.log(dataReplace(result, regExp, ReplaceStr))
}

/**@description  поиск подходящих файлов  
 * @param { pathDir } String
 * @param { file } String
 * @param { regExp } String
 * @return { Boolean }
 */
exports.FilesSearch = async (pathDir, file, regExp) => {
  let regularExp = new RegExp(regExp);
  const fileSearchPath = join(pathDir, file);
  const result = await readFile(fileSearchPath, "utf8")
  return regularExp.test(result)
}

function debugLog() {

}

function dataReplace(NewData, regExp, ReplaceStr) {
  const regularExp = new RegExp(regExp)
  if (regularExp.test(NewData)) {
    const resultReplaceStr = NewData.replace(regularExp, ReplaceStr)
    return dataReplace(resultReplaceStr, regExp, ReplaceStr)
  } else {
    return NewData
  }
}