const fs = require('fs');
const path = require('path');

const dirPath = './docs/api/cv'; // replace with your directory path
const fileTag = 'tag.mdx'; // replace with your file name tag

function deleteFiles(filePath) {
    try {
        if (fs.statSync(filePath).isDirectory()) {
            // if filePath is a directory, recursively call deleteFiles on its contents
            fs.readdirSync(filePath).forEach((file) => {
                const fileFullPath = path.join(filePath, file);
                deleteFiles(fileFullPath);
            });
        } else if (filePath.endsWith(fileTag)) {
            // if filePath is a file that ends with fileTag, delete it
            fs.unlinkSync(filePath);
            console.log(`File ${filePath} deleted`);
        }
    } catch (err) {
        console.error(err);
    }
}

deleteFiles(dirPath);
