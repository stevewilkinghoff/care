const fs = require('fs');
const AWS = require('aws-sdk');
const AWS_CONFIG = require('../../config/aws');
const App4 = require('../../fileselect');
//const FileUp = require('.')

// Enter copied or downloaded access ID and secret key here
const ID = AWS_CONFIG.ID;
const SECRET = AWS_CONFIG.SECRET;

// The name of the bucket that you have created
const BUCKET_NAME = 'carecottagesnorth';

const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

//const filename = '/Users/steve/Downloads/VastSeptember152020.pdf'
const filename = App4;
const name = 'VastSeptember152020.pdf'
const uploadFile = (fileName) => {
    // Read content from the file
    const fileContent = fs.readFile(fileName);

    // Setting up S3 upload parameters
    const params = {
        Bucket: BUCKET_NAME,
        Key: 'testbucket/'+name, // File name you want to save as in S3 // should be myfolder/filename.pdf
        Body: fileContent
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
        console.log(fs.fileName);
    });
};

export default uploadFile;
