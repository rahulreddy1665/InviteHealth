import {
  Box,
  Button,
  Card,
  Container,
  createStyles,
  getStylesRef,
  Image,
  rem,
  SimpleGrid,
  Text,
  Modal
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { productData } from "../data/productData";
import LazyShow from "./LazyShow";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    boxShadow: theme.shadows.md,
    display: "flex",
    flexDirection: "column",
    [`&:hover .${getStylesRef("image")}`]: {
      transform: "scale(1.03)",
    },
    transition: "transform 150ms ease, box-shadow 150ms ease",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: "center",

    fontSize: 15,
    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: 13,
      lineHeight: 1.15,
    },
  },
  Listtitle: {
    fontFamily: `${theme.fontFamily}`,
    textAlign: "center",
    fontSize: 15.5,
    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: 12,
      lineHeight: 1.15,
    },
  },
  listDescription: {
    fontFamily: `${theme.fontFamily}`,
    textAlign: "left",
    fontSize: 14.5,
    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: 12,
      lineHeight: 1,
    },
  },

  borderTOp: {
    marginTop: 10,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
  image: {
    ref: getStylesRef("image"),
    cursor: "pointer",
    transition: "transform 500ms ease",
  },
  cardContent: {
    flex: 1,
  },
}));

export function ProductsCard() {
  const { classes } = useStyles();
  const [description, setDescription] = useState([]);
  const [product,setProduct] = useState("")

  const [opened, { open, close }] = useDisclosure(false);

  const handleProduct = (item) => {
    setDescription(item.description);
    setProduct(item.productTitle)
    open(true);
  };

  const cards = productData.map((item) => (
    <Card
      withBorder
      padding="lg"
      key={item.title}
      radius="md"
      className={classes.card}
    >
      <Box className={classes.cardContent}>
        <Card.Section mb="sm">
          <Image
            src={item.image}
            alt={item.title}
            fit="contain"
            className={classes.image}
            height={260}
          />
        </Card.Section>
        <Text fw={700} className={classes.title} mt="xs">
          {item.title}
        </Text>
      </Box>

      {item.title !== "Protein Powder in choclate flavour" &&
        item.title !== "Diabetic Protein Drink" &&
        item.title !== "Protein Powder For Pregnancy & Lactation" && (
          // <Card.Section className={classes.footer}>
          <Button
            fullWidth
            variant="outline"
            mt={10}
            onClick={() => handleProduct(item)}
          >
            Know more
          </Button>
          // </Card.Section>
        )}
    </Card>
  ));

  return (
    <Container py="xl">
      <LazyShow>
        <SimpleGrid cols={3} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
          {cards}
        </SimpleGrid>
      </LazyShow>
      <Modal opened={opened} onClose={close} title={product}>
        {/* Modal content */}
        {description.map((item) => (
          <div key={item.id}>
            {item.listDescription && (
              <ul>
                <li className={classes.listDescription}>{item.listDescription}</li>
              </ul>
            )}
            {item.listTitle && 
             <h3 className={classes.Listtitle}>{item.listTitle.toString().toUpperCase()}</h3>
            }
          </div>
        ))}
      </Modal>
    </Container>
  );
}
