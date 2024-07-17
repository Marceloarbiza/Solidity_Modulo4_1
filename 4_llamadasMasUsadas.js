const { ethers } = require("ethers");
require("dotenv").config();

// URL del proveedor de Sepolia desde el archivo .env
const sepoliaUrl = process.env.SEPOLIA_URL;

// Crear un proveedor usando la URL de Sepolia
const provider = new ethers.JsonRpcProvider(sepoliaUrl);

// Cargar la billetera desde una clave privada
const privateKey = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey, provider);

const tryEtherjsFuncs = async () => {
  // Obtener el número de bloque actual
  const blockNumber = await provider.getBlockNumber();
  console.log("Número de bloque actual:", blockNumber);

  // get block
  const block = await provider.getBlock(blockNumber);
  console.log("Bloque:", block);

  // Obtener el saldo de la billetera
  console.log("MOSTRAR TODA LA BILLETERA", wallet);
  const balance = await provider.getBalance(wallet.address);
  console.log("SALDO SIN FORMATEAR", balance);
  console.log("Saldo de la billetera:", ethers.formatEther(balance), "ETH");

  // Obtener una transacción por su hash
  const transaction = await provider.getTransaction(
    "0x78b04e59b060377c48a8b5659c4e950bd08b2c951a4bc289d91a819d96dcf14f"
  );
  console.log("Transacción:", transaction);

  // Obtener el estado de una transacción
  const transactionState = await provider.getTransactionReceipt(
    "0x78b04e59b060377c48a8b5659c4e950bd08b2c951a4bc289d91a819d96dcf14f"
  );
  console.log("Estado de la transacción:", transactionState);
};

tryEtherjsFuncs();
