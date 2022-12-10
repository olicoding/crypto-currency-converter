# Crypto Currency Converter

This simple project is a practice app working with React and fetching data from an API. It allows users to convert between different cryptocurrencies using live rates from a third-party API.

<p align="center">
<img src="https://user-images.githubusercontent.com/92989835/206878979-4e128ed2-47fc-49ed-991a-e5fe05e0bb7b.jpg" width="200" >
</p>

---

### **Installation**

To install and run this project, you will need to have Node.js and npm installed on your computer.

```
> clone repository
> npm i
> npm start
```

---

### **API**

The project uses the [CoinLayer API](https://coinlayer.com/) to fetch live conversion rates for different cryptocurrencies. The API in its free version has a limited amount of requests.

---

### **Tech Stack**

- React.js
- Axios
- CoinLayer API

---

### **Usage**

To use the converter, simply select the currencies you want to convert between, enter the amount you want to convert, and click the "Convert" button. The converted amount will be displayed below.

---

### **Limitations**

Currently, the project is limited by the number of free requests that can be made to the API. As a result, the conversion rates may not always be available or up-to-date. In the future, I plan to add caching and other improvements to remove this limitation.

---

### **Roadmap**

- Add more currencies and options for conversion
- Improve the UI/UX of the converter
- Add caching to reduce the number of API requests and improve performance
- Add testing and accessibility features

---

### **Contributing**

If you are interested in contributing to this project, please follow these guidelines:

- Fork the repository and create a new branch for your proposed changes
- Make sure your code follows the same coding style as the rest of the project
- Write tests for your code, if applicable
- Submit a pull request with a clear description of your changes and why they are necessary
