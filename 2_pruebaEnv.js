const { ethers } = require("ethers");

require("dotenv").config();

// Reemplaza con tu URL de Alchemy

const alchemyUrl = process.env.ALCHEMY_URL;
const apiKey = process.env.API_KEY;
const port = process.env.PORT;

// Crear un proveedor usando la URL de Alchemy
const provider = new ethers.JsonRpcProvider(alchemyUrl);

const address = "0x0e752b88E5810CEc48e0f23124219c0eBf5F029d";

// Obtener el número de bloque actual
async function getBlockNumber() {
  try {
    const blockNumber = await provider.getBlockNumber();
    console.log("Número de bloque actual:", blockNumber);

    const balance = await provider.getBalance(address);
    console.log("Saldo de la cuenta:", ethers.formatEther(balance), "ETH");

    console.log(`Alchemy URL: ${alchemyUrl}`);
    console.log(`API Key: ${apiKey}`);
    console.log(`Port: ${port}`);
  } catch (e) {
    console.error("Error al obtener el número de bloque", e);
  }
}

getBlockNumber();
