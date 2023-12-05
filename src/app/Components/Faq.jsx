import React from "react";
import { Collapse, ConfigProvider } from "antd";

const text = (
  <p
    style={{
      padding: 24,
    }}
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nostrum
    incidunt harum nisi eaque corporis, magni, obcaecati nesciunt soluta,
    maiores placeat illum amet sapiente officia fugit id? Minima, repellendus
    itaque?
  </p>
);

const items = [
  {
    key: "1",
    label: "HVORDAN BOOKER JEG CAMPING PLADS?",
    children: text,
  },
  {
    key: "2",
    label: "ER DER TOILETTER PÅ FESTIVALLEN?",
    children: text,
  },
  {
    key: "3",
    label: "SKAL JEG BOOKE CAMPINGPLADS",
    children: text,
  },
  {
    key: "4",
    label: "HVOR KAN JEG SE PROGRAMMET",
    children: text,
  },
  {
    key: "5",
    label: "HVOR MANGE CAMPINGPLADSER ER DER",
    children: text,
  },
];

const Faq = () => (
  <div className="flex flex-col justify-center">
    <h2 className="text-fooPink-900 text-center text-5xl mb-10">FAQ</h2>
    <div>
      <ConfigProvider
        theme={{
          token: {
            fontSize: 24,
            colorText: "#f2f2f2",
            colorBorder: "#EC5564",
            colorTextDisabled: "#000000",
          },
        }}
      >
        <Collapse
          items={items}
          size="large"
          bordered={true}
          defaultActiveKey={["1"]}
        />
      </ConfigProvider>
    </div>
  </div>
);
export default Faq;
