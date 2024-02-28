import React from "react";
// import { Space, Table, Tag } from "antd";
import { Table } from "antd";
import type { TableProps } from "antd";

interface DataType {
  key: string;
  id: string;
  location: string;
  time: string;
  // tags: string[];
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
  },
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
  },
  // {
  //   title: "Tags",
  //   key: "tags",
  //   dataIndex: "tags",
  //   render: (_, { tags }) => (
  //     <>
  //       {tags.map((tag) => {
  //         let color = tag.length > 5 ? "geekblue" : "green";
  //         if (tag === "loser") {
  //           color = "volcano";
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </>
  //   ),
  // },
  // {
  //   title: "Action",
  //   key: "action",
  //   render: (_, record) => (
  //     <Space size="middle">
  //       <a>Invite {record.name}</a>
  //       <a>Delete</a>
  //     </Space>
  //   ),
  // },
];

const data: DataType[] = [
  {
    key: "1",
    id: "A1",
    location: "Jawalakhel-Kumaripati-Lagankhel",
    time: "8am - 6pm",
    // tags: ["nice", "developer"],
  },
  {
    key: "2",
    id: "A2",
    location: "Jawalakhel-Kumaripati-Lagankhel",
    time: "8am - 6pm",
    // tags: ["loser"],
  },
  {
    key: "3",
    id: "A3",
    location: "Jawalakhel-Kumaripati-Lagankhel",
    time: "8am - 6pm",
    // tags: ["cool", "teacher"],
  },
];

const BusTable: React.FC = () => <Table columns={columns} dataSource={data} />;

export default BusTable;
