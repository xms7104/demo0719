const api = {
  hostname: "https://demo0719.onrender.com",
  async product() {
    const response = await fetch(`${this.hostname}/product`, {
      headers: new Headers({
        "Content-type": "application/json",
        "if-none-match": "",
      }),
      method: "GET",
    });
    return await response.json();
  },
};

export default api;