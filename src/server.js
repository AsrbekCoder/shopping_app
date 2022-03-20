import axios from "axios";
import React from "react";
const url = "http://localhost:5252/api/";

class Api extends React.Component {
  getPrductSneakers(getAll) {
    return axios.get(url + getAll);
  }
}

export default Api;
