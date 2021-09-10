import axios from "axios";
// const token_api = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJjaGFsbGVuZ2VAYWxrZW15Lm9yZyIsImlhdCI6MTUxNjIzOTAyMn0.ilhFPrG0y7olRHifbjvcMOlH7q2YwlegT0f4aSbryBE';
const baseUrl = `http://challenge-react.alkemy.org/`

const login = async credentials => {
    const {data} = await axios.post(baseUrl, credentials)
    return data;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {login};