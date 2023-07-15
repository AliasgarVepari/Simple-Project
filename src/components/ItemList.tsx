import { List } from "@chakra-ui/react";
import ItemCard from "./ItemCard";

interface Props {
  items: {
    id: number;
    title: string;
    image: string;
    description: string;
  }[];
}
const ItemList = ({ items }: Props) => {
  return (
    <List>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </List>
  );
};

export default ItemList;
