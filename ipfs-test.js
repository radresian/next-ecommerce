const IPFS = require('ipfs-core')


// call Core API methods
async function doIt(){
  const ipfs = await IPFS.create()
  const { cid } = await ipfs.add('Hello world')
  console.info(cid)
}

doIt();
