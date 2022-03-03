const mongoose = require("mongoose");

const TenantDetails = new mongoose.Schema({
  tenantFileNo: {
    type: String,
    required: true,
  },
  tenantDoorNo: {
    type: String,
    //  required: true,
  },
  tenantName: {
    type: String,
    required: true,
  },
  tenantPhone: {
    type: Number,
    required: false,
  },
  tenantFirmName: {
    type: String,
    required: true,
  },
  tenantAddr: {
    type: String,
    required: true,
  },
  tenantAdharNo: {
    type: String,
    required: true,
  },
  tenantPanNo: {
    type: String,
    required: true,
  },
  tenantDepositAmt: {
    type: Number,
    required: true,
  },
  tenantPaymentMode: {
    type: String,
    required: true,
  },
  tenantChequenoOrDdno: {
    type: String,
  },
  tenantstatus: {
    type: String,
    required: true,
    default: "Active",
  },
  tenantdeactivereason: {
    type: String,
    //required: true,
  },
});

module.exports = tenantDetails = mongoose.model("tenantDetails", TenantDetails);