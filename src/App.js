import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [crypto, setCrypto] = useState("");
  const [howMany, setHowMany] = useState("");
  const [currency, setCurrency] = useState("");
  const [result, setResult] = useState("");
  const [icon, setIcon] = useState("");
  const [exchangeRates, setExchangeRates] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(
          `http://api.coinlayer.com/live?access_key=${apiKey}&target=${
            currency || "USD"
          }&symbols=BTC,ETH,LTC`
        );

        setExchangeRates(response.data.rates);
      } catch (err) {
        setErrorMessage(
          "Error fetching data. Please check your internet connection and try again later."
        );
      }
    };

    fetchData();
  }, [crypto, currency]);

  const handleCryptoChange = (e) => {
    const selectedCrypto = e.target.value;

    if (selectedCrypto) {
      setCrypto(selectedCrypto);
    } else {
      setErrorMessage("Please select a valid crypto.");
    }
  };

  const handleHowManyChange = (e) => {
    setHowMany(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    const selectedCurrency = e.target.value;

    if (selectedCurrency) {
      setCurrency(selectedCurrency);

      switch (selectedCurrency) {
        case "EUR":
          setIcon("€  ");
          break;
        case "GBP":
          setIcon("£  ");
          break;
        case "USD":
          setIcon("$  ");
          break;
        default:
          console.log("Select currency");
      }
    } else {
      setErrorMessage("Please select a valid currency.");
    }
  };

  // Ran out of API requets, next step is to handle results correct output based on exchangeRates obj.
  const handleSubmit = (e) => {
    e.preDefault();

    if (crypto && howMany && currency) {
      const calculatedResult =
        Number(howMany) * Number(crypto) * Number(currency);

      setResult(String(calculatedResult));
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="crypto">Crypto</label>
          <select
            name="crypto"
            id="crypto"
            onChange={handleCryptoChange}
            value={crypto}
          >
            <option value="">Select a crypto</option>
            <option value="ETH">ETH</option>
            <option value="BTC">BTC</option>
            <option value="LTC">LTC</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="how-many">How many</label>
          <input
            type="number"
            name="how-many"
            id="how-many"
            onChange={handleHowManyChange}
            value={howMany}
          />
        </div>
        <div className="form-group">
          <label htmlFor="currency">Currency</label>
          <select
            name="currency"
            id="currency"
            onChange={handleCurrencyChange}
            value={currency}
          >
            <option value="">Select a currency</option>
            <option value="GBP">GBP</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="result">Result</label>
          <input
            type="text"
            name="result"
            id="result"
            value={icon + result}
            readOnly
          />
        </div>
        <div className="form-group">
          <button onSubmit={handleSubmit}>Convert</button>
        </div>
      </form>
    </div>
  );
}
