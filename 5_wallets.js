const { ethers } = require("ethers");
require("dotenv").config();

// URL del proveedor de Sepolia desde el archivo .env
const sepoliaUrl = process.env.SEPOLIA_URL;

// Crear un proveedor usando la URL de Sepolia
const provider = new ethers.JsonRpcProvider(sepoliaUrl);

const crearBilletera = async () => {
  const wallet = ethers.Wallet.createRandom();
  console.log("Address:", wallet.address); //para conocer la cuenta
  console.log("Private Key:", wallet.privateKey); //para conocer la clave privada

  const labilleteradeestaaddress = new ethers.Wallet(
    wallet.privateKey,
    provider
  );
  console.log("Connected Wallet:", labilleteradeestaaddress.address);
};

crearBilletera();

const crearBilleteraDesdeClavePrivada = async () => {
  const privateKey = process.env.PRIVATE_KEY;
  const wallet = new ethers.Wallet(privateKey, provider);

  console.log("Address:", wallet.address); //para conocer la cuenta
};

crearBilleteraDesdeClavePrivada();

const conectarBilleteraAUnProveedor = async () => {
  const privateKey = process.env.PRIVATE_KEY;
  const wallet = new ethers.Wallet(privateKey, provider);
  const connectedWallet = wallet.connect(provider);
  console.log("Connected Wallet:", connectedWallet);
  console.log("Address:", connectedWallet.address); //para conocer la cuenta
};

conectarBilleteraAUnProveedor();

const firmarUnMensaje = async () => {
  const privateKey = process.env.PRIVATE_KEY;
  const wallet = new ethers.Wallet(privateKey, provider);
  const connectedWallet = wallet.connect(provider);
  const message = "Hell, World!";
  const signature = await connectedWallet.signMessage(message);
  console.log("Signature:", signature);
};

firmarUnMensaje();
