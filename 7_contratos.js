const { ethers } = require("ethers");
require("dotenv").config();

// URL del proveedor de Sepolia desde el archivo .env
const sepoliaUrl = process.env.SEPOLIA_URL;
const provider = new ethers.JsonRpcProvider(sepoliaUrl);

const contractAddress = "0x14aF299cf1861bEea297Fd8613088a0355896e7C";

const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "DataChanged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_data",
        type: "uint256",
      },
    ],
    name: "setData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getData",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

// Conectar al contrato
const contract = new ethers.Contract(contractAddress, abi, provider);

// Llamar a la función de solo lectura
async function readData() {
  const result = await contract.getData();
  console.log("Data:", result.toString());
}

// Enviar una transacción a la función de escritura
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contractWithSigner = contract.connect(signer);

async function writeData() {
  const txResponse = await contractWithSigner.setData(88, {
    gasLimit: 100000,
    gasPrice: ethers.parseUnits("10", "gwei"),
  });
  console.log("Transaction Response:", txResponse);

  const txReceipt = await txResponse.wait();
  console.log("Transaction Receipt:", txReceipt);
}

// Escuchar eventos del contrato
contract.on("DataChanged", (newValue, event) => {
  console.log("New Value:", newValue.toString());
  console.log("Event:", event);
});

// Ejecutar las funciones
readData();
writeData();
