export const personInfoFetch = async () => {
  try {
    const res = await fetch("/src/data/new_data.json");
    if (res.ok) {
      const data = await res.json();
      /* init localStorage Update (personal Info new Data)*/
      !window.localStorage.getItem("personalInfo") &&
        window.localStorage.setItem("personalInfo", JSON.stringify(data));
    } else {
      console.log("cannot receive data");
    }
  } catch (err) {
    console.log(err);
  }
};

export const cardStatusInit = (data) => {
  let status = window.localStorage.getItem("cardStatus");
  if (!status) {
    status = [];
    data.forEach((value, index) => {
      status.push({ idx: index, status: "card" });
    });
    window.localStorage.setItem("cardStatus", JSON.stringify(status));
  }
};
