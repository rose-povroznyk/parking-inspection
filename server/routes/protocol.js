const protocolRouter = require('express').Router({ mergeParams: true });

const { uploadImages } = require('../middlewares/imagesUpload');
const paginate = require('../middlewares/paginate');

const ProtocolController = require('../controllers/ProtocolController');

// getAllProtocols
// getAllProtocolsByOfficerID
// createProtocol
// updateProtocolByID
// deleteProtocolByID

protocolRouter
.route('/')
.get(paginate, ProtocolController.getAllProtocolsByOfficerID)
.post(uploadImages, ProtocolController.createProtocol);

protocolRouter
.route('/:id')
.put(uploadImages, ProtocolController.updateProtocolByID)
.delete(ProtocolController.deleteProtocolByID);

module.exports = protocolRouter;