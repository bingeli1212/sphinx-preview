const { NitrilePreviewParser } = require('../lib/nitrile-preview-parser');
const { NitrilePreviewReport } = require('../lib/nitrile-preview-report');
const utils = require('../lib/nitrile-preview-utils');

var work = async (fname)=>{
  const parser = new NitrilePreviewParser();
  await parser.read_file_async(fname);
  await parser.read_import_async(fname);
  const translator = new NitrilePreviewReport(parser);
  var tex = translator.to_report_document();
  console.log(tex);
};

var fname = process.argv[2];

if(fname){
  work(fname).then(data => console.log(data));
  setTimeout(function(){},1000);
} else {
  console.log("empty file name")
}

