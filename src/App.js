import "./App.css";
import React, { useState } from "react";
import { Card } from "primereact/card";
import { DataView } from "primereact/dataview";

import cleandata from "./images/clean_data.PNG";
import resample from "./images/resample.PNG";
import compare from "./images/compare.PNG";
import logistic_regression from "./images/logistic_regression.PNG";
import decision_tree from "./images/decision_tree.PNG";
import naive_bayes from "./images/naive_bayes.PNG";

function App() {
  const [data, setData] = useState([
    {
      title: "Clean data info",
      img: cleandata,
    },
    {
      title: "Resample",
      img: resample,
    },
    {
      title: "Logistic regression model",
      img: logistic_regression,
    },
    {
      title: "Decision tree model",
      img: decision_tree,
    },
    {
      title: "Naive Bayes model",
      img: naive_bayes,
    },
    {
      title: "Compare",
      details:
        "Decision tree model is the best because it has the best accuracy",
      img: compare,
      width: 8,
    },
  ]);
  const itemTemplate = (item) => {
    return (
      <div className="col-12">
        <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
          <img
            className={`w-${item?.width || 5} shadow-2border-round`}
            src={item?.img}
            alt={item?.title}
          />
          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-2">
            <h3>
              {item?.title}: {item?.details || ""}
            </h3>
          </div>
        </div>
      </div>
    );
  };
  return (
    <Card
      title=" Homework Assignment: Vehicle Multi-Class Classification Using Machine
    Learning Algorithms"
    >
      <h3>
        Students: <br />
        Hala Raeef Asaad C2 (hala_262333) <br /> Muhammad Wasim Alwisi C2
        (muhammad_wasim_238246)
      </h3>
      <DataView value={data} itemTemplate={itemTemplate} />
    </Card>
  );
}

export default App;
