const snarkjs = require('snarkjs');
const fs = require('fs');


exports.generateProof = async (ehrData) => {
  try {
    const wasmPath = '../circom/circom/ehr_proof_js/ehr_proof.wasm';
    const zkeyPath = '../circom/circom/ehr_proof.zkey';
    console.log("Loading WASM...");
    const { proof, publicSignals } = await snarkjs.groth16.fullProve(
       ehrData,
       wasmPath,
       zkeyPath);
//console.log(publicSignals);
//console.log(proof);

    return { proof, publicSignals };
  } catch (error) {
    console.error('Error generating proof:', error);
    throw new Error('Proof generation failed');
  }
};
