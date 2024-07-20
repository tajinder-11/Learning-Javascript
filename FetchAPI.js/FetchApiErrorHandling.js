// fetch('http://httpstat.us/404')
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('Request Failed');
//     }
//     return response;
//   })
//   .then(() => {
//     console.log('Success');
//   })
//  .catch(error => {
//     console.log(error);
//  });

// Another Way of handling Error(check for specific condition)
fetch('http://httpstat.us/500')
  .then((response) => {
    if (response.status === 404) {
      throw new Error('Not Found');
    } else if (response.status === 500) {
      throw new Error('Server Error');
    } else if (response.status !== 200) {
      throw new Error('Request Failed');
    }
    return response;
  })
  .then(() => {
    console.log('success');
  })
  .catch(() => {
    console.log('Error');
  });
