import { FETCH_BUTTON_CLICKED, SELECT_USER } from "./types";
import axios from "axios";

export const fetchUsers = () => {
  return {
    type: FETCH_BUTTON_CLICKED,
    payload: [
      {
        id: 1,
        name: "Makaranda Pathirana",
        email: "makarandapathirana@gmail.com",
        phone: "0773944180",
        status: "active",
        created_at: "2024-02-20T06:16:26.000000Z",
        updated_at: "2024-02-20T06:16:50.000000Z",
      },
      {
        id: 3,
        name: "Samn Kumara",
        email: "samankumara@gmail.com",
        phone: "0777112548",
        status: "active",
        created_at: "2024-02-20T06:17:35.000000Z",
        updated_at: "2024-02-20T06:17:35.000000Z",
      },
      {
        id: 5,
        name: "Sahan Rajapaksha",
        email: "sahanrajapaksha@yahoo.com",
        phone: "94781236548",
        status: "active",
        created_at: "2024-02-20T06:18:58.000000Z",
        updated_at: "2024-02-20T06:18:58.000000Z",
      },
      {
        id: 6,
        name: "Kasun Rajitha",
        email: "kasunrajitha@hotmail.com",
        phone: "94726548547",
        status: "active",
        created_at: "2024-02-20T07:03:10.000000Z",
        updated_at: "2024-02-20T07:03:10.000000Z",
      },
      {
        id: 8,
        name: "hirusha kavinda",
        email: "hirusha@gmail.com",
        phone: "07789909878",
        status: "active",
        created_at: "2024-02-21T04:45:08.000000Z",
        updated_at: "2024-02-21T04:45:08.000000Z",
      },
    ],
  };
};
