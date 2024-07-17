const { ethers } = require("ethers");

// Reemplaza con tu URL de Alchemy
const alchemyUrl =
  "https://eth-sepolia.g.alchemy.com/v2/vZGMVKuIYiXBeevToR5euT_6JbU-6bzO";

// Crear un proveedor usando la URL de Alchemy
const provider = new ethers.JsonRpcProvider(alchemyUrl);

// Indicar la cuenta de la que se quiere conocer el saldo
const address = "0x0e752b88E5810CEc48e0f23124219c0eBf5F029d";

// Obtener el saldo de la cuenta
async function getBalance() {
  try {
    const balance = await provider.getBalance(address);
    console.log("Saldo de la cuenta:", ethers.formatEther(balance), "ETH");
  } catch (e) {
    console.error("Error al obtener el saldo de la cuenta", e);
  }
}

getBalance();
