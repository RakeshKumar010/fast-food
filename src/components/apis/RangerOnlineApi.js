import axios from "axios";
const data = require("../settings.json");

const port = window.location.port;

//For customer with one system
//const tenantUrl = window.location.origin.replace(port, 18888) + "/";

//For different domain
const tenantUrl = "https://onlinefoodordering.ca/RangerAPI/testorder/";

//for local
//const tenantUrl = "https://localhost:7189/";

//For onlinefoodorderiing domain
//  const tenantUrl = `${window.location.origin.replace(
//    `${window.location.host.split(".")[0]}.`,
//    ""
//  )}/RangerAPI/${window.location.host.split(".")[0]}/`;

const errorResponse = {
  status: 0,
  title: "",
};

export const getCustomerByPhoneNo = async (phoneNo) => {
  try {
    const url = `${tenantUrl}api/Customer/ByPhone?phoneNo=${phoneNo}`;
    const result = getData(url);

    return result;
  } catch (error) {
    return {
      status: 500,
      title:
        "Sorry an unexpected error occured, please contact the restaurant.",
    };
  }
};

export const getCustomerById = async (customerId) => {
  try {
    //https://localhost:7189/api/Customer/ById
    const url = `${tenantUrl}api/Customer/ById?customerId =${customerId}`;
    const result = getData(url);

    return result;
  } catch (error) {
    return {
      status: 500,
      title:
        "Sorry an unexpected error occured, please contact the restaurant.",
    };
  } 
};

export const registerClient = async (customerData) => {
  try {
    const url = `${tenantUrl}api/Customer`;
    const result = postData(url, customerData);

    return result;
  } catch (error) {
    return {
      status: 500,
      title:
        "Sorry an unexpected error occured, please contact the restaurant.",
    };
  }
};

export const monerisPayment = async (cardInfo) => {
  try {
    const url = `${tenantUrl}api/Moneris`;
    const result = postData(url, cardInfo);

    return result;
  } catch (error) {
    return {
      status: 500,
      title:
        "Sorry an unexpected error occured, please contact the restaurant.",
    };
  }
};

export const cloverPayment = async (cardInfo) => {
  try {
    const url = `${tenantUrl}api/Clover`;
    const result = postData(url, cardInfo);

    return result;
  } catch (error) {
    return {
      status: 500,
      title:
        "Sorry an unexpected error occured, please contact the restaurant.",
    };
  }
};

export const updateClient = async (orderType, customerData) => {
  try {
    const url = `${tenantUrl}api/Customer?orderType=${orderType}`;
    const result = putData(url, customerData);

    return result;
  } catch (error) {
    return {
      status: 500,
      title:
        "Sorry an unexpected error occured, please contact the restaurant.",
    };
  }
};

export const getInitialData = async () => {
  try {
    const url = `${tenantUrl}api/InitialData`;
    const result = getData(url);

    return result;
  } catch (error) {
    return {
      status: 500,
      title:
        "Sorry an unexpected error occured, please contact the restaurant.",
    };
  }
};

export const getSplDiscs = async () => {
  try {
    const url = `${tenantUrl}api/ResttimeSChargeSplDisc/GetSpldiscs`;
    const result = getData(url);

    return result;
  } catch (error) {
    return {
      status: 500,
      title:
        "Sorry an unexpected error occured, please contact the restaurant.",
    };
  }
};

export const getProducts = async (categoryId) => {
  try {
    const url = `${tenantUrl}api/Product/ByCategoryId?categoryId=${categoryId}`;
    const result = getData(url);

    return result;
  } catch (error) {
    return {
      status: 500,
      title:
        "Sorry an unexpected error occured, please contact the restaurant.",
    };
  }
};

export const getProductById = async (productId) => {
  try {
    const url = `${tenantUrl}api/Product/ById?productId=${productId}`;
    const result = getData(url);

    return result;
  } catch (error) {
    return {
      status: 500,
      title:
        "Sorry an unexpected error occured, please contact the restaurant.",
    };
  }
};

export const getChoiceItems = async (productId) => {
  try {
    const url = `${tenantUrl}api/Product/ChoiceItems?productId=${productId}`;
    const result = getData(url);

    return result;
  } catch (error) {
    return {
      status: 500,
      title:
        "Sorry an unexpected error occured, please contact the restaurant.",
    };
  }
};

export const getPizzaSpecialDeals = async (productId) => {
  try {
    const url = `${tenantUrl}api/Product/SpecialDeals?productId=${productId}`;
    const result = getData(url);

    return result;
  } catch (error) {
    return {
      status: 500,
      title:
        "Sorry an unexpected error occured, please contact the restaurant.",
    };
  }
};

export const getVariationConfig = async (productId) => {
  try {
    //https://localhost:7189/api/ProductVariationConfig?productId=107
    const url = `${tenantUrl}api/ProductVariationConfig?productId=${productId}`;
    const result = getData(url);

    return result;
  } catch (error) {
    return {
      status: 500,
      title:
        "Sorry an unexpected error occured, please contact the restaurant.",
    };
  }
};

export const getVariations = async (productId, parentId) => {
  try {
    const url = `${tenantUrl}api/Variation/ByProductId?productId=${productId}&parentId=${parentId}`;
    const result = getData(url);

    return result;
  } catch (error) {
    return {
      status: 500,
      title:
        "Sorry an unexpected error occured, please contact the restaurant.",
    };
  }
};

export const getPizzaSizes = (productId) => {
  try {
    const url = `${tenantUrl}api/PizzaSize/ByProductId?productId=${productId}`;
    const result = getData(url);

    return result;
  } catch (error) {
    return {
      status: 500,
      title:
        "Sorry an unexpected error occured, please contact the restaurant.",
    };
  }
};

export const getPizzaCrusts = async (sizeId, crustId, productId) => {
  try {
    const url = `${tenantUrl}api/Modifier/Crusts?sizeId=${sizeId}&crustId=${crustId}&productId=${productId}`;
    const result = getData(url);

    return result;
  } catch (error) {
    return {
      status: 500,
      title:
        "Sorry an unexpected error occured, please contact the restaurant.",
    };
  }
};

export const getPizzaModifierCategories = (productId, sizeId) => {
  try {
    const url = `${tenantUrl}api/Modifier/ModifierCategories?productId=${productId}&sizeId=${sizeId}`;
    const result = getData(url);

    return result;
  } catch (error) {
    return {
      status: 500,
      title:
        "Sorry an unexpected error occured, please contact the restaurant.",
    };
  }
};

export const getDefaultPizzaModifiers = (productId) => {
  try {
    const url = `${tenantUrl}api/Modifier/DefaultPizzaModifiers?productId=${productId}`;
    const result = getData(url);

    return result;
  } catch (error) {
    return {
      status: 500,
      title:
        "Sorry an unexpected error occured, please contact the restaurant.",
    };
  }
};

export const getPizzaToppingsPrices = (productId) => {
  try {
    const url = `${tenantUrl}api/PizzaToppingPrice?productId=${productId}`;
    const result = getData(url);

    return result;
  } catch (error) {
    return {
      status: 500,
      title:
        "Sorry an unexpected error occured, please contact the restaurant.",
    };
  }
};

export const getRangePrices = (productId) => {
  try {
    const url = `${tenantUrl}api/RangePricing?productId=${productId}`;
    const result = getData(url);

    return result;
  } catch (error) {
    return {
      status: 500,
      title:
        "Sorry an unexpected error occured, please contact the restaurant.",
    };
  }
};

export const getBulkPrices = (productId) => {
  try {
    const url = `${tenantUrl}api/BulkPricing?productId=${productId}`;
    const result = getData(url);

    return result;
  } catch (error) {
    return {
      status: 500,
      title:
        "Sorry an unexpected error occured, please contact the restaurant.",
    };
  }
};

export const getPromoCode = (promoCode) => {
  try {
    const url = `${tenantUrl}api/PromoCode?promoCode=${promoCode}`;
    const result = getData(url);

    return result;
  } catch (error) {
    return {
      status: 500,
      title:
        "Sorry an unexpected error occured, please contact the restaurant.",
    };
  }
};

export const registerOrder = async (order) => {
  try {
    const url = `${tenantUrl}api/OrderSubmition`;
    const result = postData(url, order);

    return result;
  } catch (error) {
    return {
      status: 500,
      title:
        "Sorry an unexpected error occured, please contact the restaurant.",
    };
  }
};

export const capturePayment = async (authorizationId) => {
  try {
    const url = `${tenantUrl}api/PayPal?authorizationId=${authorizationId}`;
    const result = getData(url);

    return result;
  } catch (error) {
    return {
      status: 500,
      title:
        "Sorry an unexpected error occured, please contact the restaurant.",
    };
  }
};

export const createPaymentIntentStripe = async (amount) => {
  try {
    const url = `${tenantUrl}api/StripePayment`;
    const result = postData(url, amount);

    return result;
  } catch (error) {
    return {
      status: 500,
      title:
        "Sorry an unexpected error occured, please contact the restaurant.",
    };
  }
};

export const createPayment = async (params) => {
  try {
    const url = `${tenantUrl}api/StripePayment/Pay`;
    const result = postData(url, params);

    return result;
  } catch (error) {
    return {
      status: 500,
      title:
        "Sorry an unexpected error occured, please contact the restaurant.",
    };
  }
};

const getData = async (url) => {
  try {
    const result = await axios({
      // Endpoint to send files
      url: url,
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "access-control-allow-origin": "*",
      },
    })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        let response = { ...errorResponse };
        if (err.code === "ERR_NETWORK") {
          response.status = 400;
          response.title = "Could not reach the server.";
        } else {
          response.status = err.response.status;
          response.title = err.response.data;
        }

        return response;
      });

    return result;
  } catch (error) {
    return {
      status: 500,
      title:
        "Sorry an unexpected error occured, please contact the restaurant.",
    };
  }
};

const postData = async (url, body) => {
  try {
    const result = await axios({
      // Endpoint to send files
      url: url,
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "access-control-allow-origin": "*",
      },
      data: body,
    })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        let response = { ...errorResponse };
        if (err.code === "ERR_NETWORK") {
          response.status = 400;
          response.title = "Could not reach the server.";
        } else {
          response.status = err.response.status;
          response.title = err.response.data;
        }

        return response;
      });

    return result;
  } catch (error) {
    return {
      status: 500,
      title:
        "Sorry an unexpected error occured, please contact the restaurant.",
    };
  }
};

const putData = async (url, body) => {
  try {
    const result = await axios({
      // Endpoint to send files
      url: url,
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "access-control-allow-origin": "*",
      },
      data: body,
    })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        let response = { ...errorResponse };
        if (err.code === "ERR_NETWORK") {
          response.status = 400;
          response.title = "Could not reach the server.";
        } else {
          response.status = err.response.status;
          response.title = err.response.data;
        }

        return response;
      });

    return result;
  } catch (error) {
    return {
      status: 500,
      title:
        "Sorry an unexpected error occured, please contact the restaurant.",
    };
  }
};

export const getRestaurantTime = async (ordertype) => {
  try {
    const url = `${tenantUrl}api/RestTime?ordertype=${ordertype}`;
    const result = getData(url);

    return result;
  } catch (error) {
    return {
      status: 500,
      title:
        "Sorry an unexpected error occured, please contact the restaurant.",
    };
  }
};

export const getDeliveryCharge = async (address) => {
  try {
    const url = `${tenantUrl}api/DeliveryCharge?address=${address}`;
    const result = getData(url);

    return result;
  } catch (error) {
    return {
      status: 500,
      title:
        "Sorry an unexpected error occured, please contact the restaurant.",
    };
  }
};
