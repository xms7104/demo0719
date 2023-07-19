const api = {
  hostname: "http://localhost:3001",
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