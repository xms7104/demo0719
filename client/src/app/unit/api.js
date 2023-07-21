const api = {
  hostname: "https://heroku-node-js.vercel.app/api/",
  async product() {
    const response = await fetch(`${this.hostname}product`, {
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