//domain/.netlify/functions/1-hello
// const person = { name: 'John' };

exports.handler = async (event, context) => {
  // console.log(event);
  // console.log(context);
  return {
    statusCode: 200,
    // body: JSON.stringify(person),
    body: 'Our First Netlify Function Example',
  };
};
