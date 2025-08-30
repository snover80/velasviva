import { List, ListItem } from "@chakra-ui/react";
import NavButton from "./NavButton";
import type Links from "../entities/links";

interface LinksLisProps {
  items: Links[];
}

function LinksList({ items }: Readonly<LinksLisProps>) {
  return (
    <List spacing={1}>
      {items.map((item, index) => (
        <ListItem key={index}>
          <NavButton path={item.link} color="#FFFFFF">
            {item.name}
          </NavButton>
        </ListItem>
      ))}
    </List>
  );
}

export default LinksList;
