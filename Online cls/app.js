import { dir } from 'console';
import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';


// let a = 10;
// fs.appendFileSync('hello.txt','\n Good to see you and testing stuffs \n hey there...')
// const data = fs.readFileSync('hello.txt','utf-8')

// console.log(data)

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

console.log(filename)
console.log(dirname)

const folderPath = path.join(dirname,"files")

if(!fs.existsSync (folderPath)) {
    fs.mkdirSync(folderPath)
   console.log("folder created")
}
  

function createFile (filename,content) {
    const filePath = path.join(folderPath,filename)
    fs.writeFileSync(filePath,content)
    console.log("file created",filename)
}

createFile('todo.txt','1. learn js')