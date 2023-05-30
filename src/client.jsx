import fetch from "unfetch";

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }
  // convert non-2xx HTTP responses into errors:
  const error = new Error(response.statusText);
  error.response = response;
  return Promise.reject(error);
};

export const getComunesOrderedByTwoDoses = () =>
  fetch("http://localhost:9191/api/comunes/getComunesOrderedByTwoDoses").then(
    checkStatus
  );

export const getComuneWithMoreOneDose = () =>
  fetch("http://localhost:9191/api/comunes/getComuneWithMoreOneDose").then(
    checkStatus
  );

export const getComuneWithMoreTwoDoses = () =>
  fetch("http://localhost:9191/api/comunes/getComuneWithMoreTwoDoses").then(
    checkStatus
  );

export const getComuneWithLessOneDose = () =>
  fetch("http://localhost:9191/api/comunes/getComuneWithLessOneDose").then(
    checkStatus
  );

export const getComunesOrderedByTwoDosesFromProvince = (selectedSigla) =>
  fetch(
    `http://localhost:9191/api/comunes/getComunesOrderedByTwoDosesFromProvince/${selectedSigla}`
  ).then(checkStatus);

export const getComuneWithMoreOneDoseFromProvince = (selectedSigla) =>
  fetch(
    `http://localhost:9191/api/comunes/getComuneWithMoreOneDoseFromProvince/${selectedSigla}`
  ).then(checkStatus);

export const getComuneWithMoreTwoDosesFromProvince = (selectedSigla) =>
  fetch(
    `http://localhost:9191/api/comunes/getComuneWithMoreTwoDosesFromProvince/${selectedSigla}`
  ).then(checkStatus);

//getComuneWithMoreTwoDoses
