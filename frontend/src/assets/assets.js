const dataPath = "./archive/watches/watches/metadata.csv";

const fetchWatchData = async () => {
  try {
    const response = await fetch(dataPath);

    const data = await response.text();

    const result = data.split("\n").map((row) => row.split(","));

    const processDataWithHeaders = (data) => {
      const headers = data[0].slice(1);
      const processedData = [];

      for (let i = 1; i < data.length; i++) {
        const rows = data[i].slice(1);
        const watchObj = {};

        for (let j = 0; j < headers.length; j++) {
          watchObj[headers[j]] = rows[j];
        }
        processedData.push(watchObj);
      }
      return processedData;
    };

    const watchData = processDataWithHeaders(result);
    console.log("watch data: ", watchData);
    return watchData;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export default fetchWatchData;
