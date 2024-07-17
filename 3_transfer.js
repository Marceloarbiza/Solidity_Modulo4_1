const { ethers } = require("ethers");
require("dotenv").config();

// URL del proveedor de Sepolia desde el archivo .env
const sepoliaUrl = process.env.SEPOLIA_URL;

// Crear un proveedor usando la URL de Sepolia
const provider = new ethers.JsonRpcProvider(sepoliaUrl);

// Cargar la billetera desde una clave privada
const privateKey = process.env.PRIVATE_KEY;
const billeteraaaa = new ethers.Wallet(privateKey, provider);
console.log("Wallet:", billeteraaaa.address);
console.log("Provider:", billeteraaaa.provider);

async function sendTransaction() {
  const tx = {
    // to: "TARGET_ADDRESS", // Dirección de destino que debes especificar
    to: "0xA15B1f7f292eFe301f6698191C1ee3f1c1f981fd",
    value: ethers.parseEther("0.01"), // Cantidad a enviar en ETH
    gasLimit: 21000,
    // gasPrice: opcional, puedes dejar que el proveedor determine el precio adecuado
  };

  try {
    const txResponse = await billeteraaaa.sendTransaction(tx);
    console.log("Transacción enviada:", txResponse.hash);
    // console.log("TRANSA COMPLETE", txResponse);

    // Esperar a que la transacción sea validada
    const receipt = await txResponse.wait();
    console.log("Transacción validada:", receipt);
  } catch (e) {
    console.error("Error al enviar la transacción", e);
  }
}

sendTransaction();
