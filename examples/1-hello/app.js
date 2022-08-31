const results = document.querySelector('.result');

const fetchData = async () => {
  try {
    const { data } = await axios.get('/api/1-hello');
    // console.log(data);
    results.textContent = data;
  } catch (error) {
    // console.log(error.response.data);
    results = error.response.data;
  }
};
fetchData();
