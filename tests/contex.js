const { NitrilePreviewParser } = require('../lib/nitrile-preview-parser');
const { NitrilePreviewContex } = require('../lib/nitrile-preview-contex');
const utils = require('../lib/nitrile-preview-utils');

var work = async ()=>{
  const parser = new NitrilePreviewParser();
  const translator = new NitrilePreviewContex(parser);
  await parser.read_file_async(fname);
  let data = translator.to_document();
  console.log(data);
};


console.log(process.argv);
const fname = process.argv[2];
console.log(fname);

if (fname) {
  work().then(x => console.log(x));
  setTimeout(function () { }, 1000);
}else{
  console.log("Empty file name");
}

