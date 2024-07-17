const { ethers } = require("ethers");
require("dotenv").config();

// Reemplaza con tu URL de Alchemy
const alchemyUrl = process.env.ALCHEMY_URL;

// Crear un proveedor usando la URL de Alchemy
const provider = new ethers.JsonRpcProvider(alchemyUrl);

// Obtener el número de bloque actual
async function getBlockNumber() {
  try {
    // const blockNumber = await provider.getBlockNumber();
    // console.log("Número de bloque actual:", blockNumber);
    // const informacionDelBloque = await provider.getBlock(6323998);
    // console.log("LA INFO DEL BLOQUE ES:", informacionDelBloque);
    const elbalance = await provider.getBalance(
      "0x0e752b88E5810CEc48e0f23124219c0eBf5F029d"
    );
    console.log("El balance es:", ethers.formatEther(elbalance), "ETH");
  } catch (e) {
    console.error("Error al obtener el número de bloque", e);
  }
}

getBlockNumber();
