import CryptoJS from "crypto-js";

let data = [
	{ name: "Ethereum", ChainId: 1 },
	{ name: "Binance Smart Chain", ChainId: 56 },
	{ name: "ETH Testnet", ChainId: 97 },
	{ name: "Polygon Matic", ChainId: 137 },
];

const AES_Encryp_Decrypt_Algorithm = (data) => {
	// Encryption
	const cipherText = CryptoJS.AES.encrypt(
		JSON.stringify(data),
		"same_secret_key",
	).toString();
	console.log("CIPHER TEXT:", cipherText);

	// Decrypt
	const bytes = CryptoJS.AES.decrypt(cipherText, "same_secret_key");

	const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

	console.log("DECRYPTED DATA:", decryptedData);
};

AES_Encryp_Decrypt_Algorithm(data);
