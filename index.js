const fs = require("fs")
const basePath = './../../Documents/Zoom/'

function getDirectories(path) {
    return fs.readdirSync(path).filter(file => fs.lstatSync(path + file).isDirectory())
}

function getFiles(path) {
    return fs.readdirSync(path).filter(file => fs.lstatSync(path + file).isFile())
}

const zoomSessionDirectories = getDirectories(basePath)

let n = 0
// Add zoom_0.mp4 to Timebolt render queue (but how?)
zoomSessionDirectories.forEach(function (dir) {
    const files = getFiles(basePath + dir + '/')
    if (files.includes("zoom_0.mp4") &&
        !files.includes("zoom_0_filtered.mp4")) {
        n++
        console.log(n, 'Adding ' + dir + '/zoom_0.mp4 to Timebolt queue')
        // add zoom_0.mp4 to Timebolt queue... somehow
    }
})

n = 0
// Delete original files from folders which have zoom_0_filtered.mp4
zoomSessionDirectories.forEach(function (dir) {
    const files = getFiles(basePath + dir + '/')
    if (files.includes("zoom_0.mp4") &&
        files.includes("zoom_0_filtered.mp4")) {
        n++
        try {
            // Delete original file
            //fs.unlinkSync( dir + '/zoom_0.mp4')
            console.log(n, 'Deleting ' + dir + '/zoom_0.mp4')
        } catch(err) {
            console.error(err)
        }
    }
})