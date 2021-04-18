import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  }
};

export default async (req, res) => {
  console.log('uploading');

  const form = new formidable.IncomingForm();
  console.log('form');
  console.log(form);

  form.uploadDir = './public/uploads';
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    console.log(files);
    res.status(200).json({path:files.file.path});
  });
}
