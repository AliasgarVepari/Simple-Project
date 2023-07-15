import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  item: {
    id: number;
    title: string;
    image: string;
    description: string;
  };
}

const ItemCard = ({ item }: Props) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Card border={10} width="300px" borderRadius="25px" overflow="hidden">
      {/* <CardHeader justifyContent="flex-start">{item.title}</CardHeader> */}
      {!imageError ? (
        <Image
          src={item.image}
          alt={item.description}
          onError={handleImageError}
        />
      ) : (
        <Text>Image failed to load</Text>
      )}
      <CardBody>
        <Stack spacing={10}>
          <Heading style={{ textAlign: "left" }}>{item.title}</Heading>
          <Text>{item.description}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ItemCard;
