export const addToGoogleSheet = async (formData: { formData: any }) => {
  const SHEETDB_API_URL = `https://sheetdb.io/api/v1/${process.env.REACT_APP_API_KEY}`;

  try {
    console.log("Form Data:", formData);
    const response = await fetch(SHEETDB_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    console.log("API Response:", result);

    return response;
  } catch (err) {
    console.error(err);
  }
};
