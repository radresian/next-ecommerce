import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  }
};

export default async (req, res) => {
  console.log('uploading');

  const form = new formidable.IncomingForm();
  form.uploadDir = './public/uploads';
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    res.status(200).json({path:files.file.path});
  });
}
