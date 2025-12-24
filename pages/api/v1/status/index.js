function status(require, response) {
  response.status(200).json({ chave: "São acima da média" });
}

export default status;
