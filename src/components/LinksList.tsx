import { List, ListItem } from "@chakra-ui/react";
import NavButton from "./NavButton";

interface LinksLisProps {
  items: string[];
}

function LinksList({ items }: LinksLisProps) {
  return (
    <List spacing={1}>
      {items.map((item, index) => (
        <ListItem key={index}>
          <NavButton color="#FFFFFF">{item}</NavButton>
        </ListItem>
      ))}
    </List>
  );
}

export default LinksList;
