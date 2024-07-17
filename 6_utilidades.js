const { ethers } = require("ethers");
require("dotenv").config();

// URL del proveedor de Sepolia desde el archivo .env
const sepoliaUrl = process.env.SEPOLIA_URL;

// Crear un proveedor usando la URL de Sepolia
const provider = new ethers.JsonRpcProvider(sepoliaUrl);

const utilidadesEthers = async () => {
  // Convertir Ether a Wei
  const wei = ethers.parseEther("1");
  console.log("1 ETH en Wei:", wei);

  // Convertir Wei a Ether
  const ether = ethers.formatEther(wei);
  console.log("1 ETH en Ether:", ether);

  // Calcular el hash de un mensaje
  const message = "Hello, World!";
  const hash = ethers.keccak256(ethers.toUtf8Bytes(message));
  console.log("Hash del mensaje:", hash);
};

utilidadesEthers();
