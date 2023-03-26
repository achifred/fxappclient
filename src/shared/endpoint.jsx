const  BASE_URL="http://localhost:8080/api/v1/"
export const END_POINTS = {
   
    LOGIN : BASE_URL+"account/authenticate",
    CREATE_ACCOUNT :  BASE_URL+"account/create",
    CREATE_TRANSACTION: BASE_URL+"transaction/create",
    GET_CURRENCIES : BASE_URL+"wallet/all",
    GET_AMOUNT_IN_WALLET : BASE_URL+"transaction/wallet/balance/",
    GET_TRANSACTIONS : BASE_URL+"transaction/all/",
    GET_PROVIDERS : BASE_URL+"wallet/symbol/",
    GET_PAYMENT_OPTION : BASE_URL+"wallet/payment/option/"
}