import { ReactNode, useState } from "react";
// import styled from "styled-components";
import { FcOk } from "react-icons/fc";
import Like from "@components/Like/Like";

// Remove style-components while using Bootstrap
// const Title = styled.h1`
//   font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue",
//     "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji",
//     "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
// `;
// const List = styled.ul`
//   list-style: none;
//   padding: 0;
// `;

// interface ListItemProps {
//   $active: boolean;
// }

// const ListItem = styled.li<ListItemProps>`
//   background: ${(props) => (props.$active ? "dodgerblue" : "none")};
//   padding: 5px 0;
//   cursor: pointer;
//   font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
//     "Lucida Sans", Arial, sans-serif;
// `;

export interface ListItem {
  id: number;
  name: string;
  likeState: boolean;
}

interface Props {
  title?: ReactNode;
  items: ListItem[];
  onSelectItem: (item: ListItem) => void;
}

function ListGroup({ title, items = [], onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{title}</h1>
      {items.length === 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item.id}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            <Like
              initialState={item.likeState}
              onChange={(isLiked) =>
                console.log(`${item.name} ${isLiked ? "liked" : "unliked"}`)
              }
            />{" "}
            {item.name} {selectedIndex === index && <FcOk />}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
