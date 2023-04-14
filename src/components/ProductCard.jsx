import {
  Box, Card,
  Container,
  createStyles,
  getStylesRef,
  Image,
  rem,
  SimpleGrid,
  Text
} from "@mantine/core";
import { productData } from "../data/productData";
import LazyShow from "./LazyShow";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    boxShadow: theme.shadows.md,
    display: "flex",
    flexDirection: "column",
    [`&:hover .${getStylesRef('image')}`]: {
      transform: 'scale(1.03)',
    },
    transition: "transform 150ms ease, box-shadow 150ms ease",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  footer: {
    padding: `${theme.spacing.xs} ${theme.spacing.lg}`,
    marginTop: theme.spacing.md,

    margin: "auto",
    flexShrink: 0,
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

      {/* <div className={classes.borderTOp}></div>
      {item.title !== "Protein Powder in choclate flavour" ||
       item.title !== "Diabetic Protein Drink" ||
       item.title !== "Protein Powder For Pregnancy & Lactation" && (
          <Card.Section className={classes.footer}>
            <Button variant="outline">Know more</Button>
          </Card.Section>
        )} */}
    </Card>
  ));

  return (
    <Container py="xl">
      <LazyShow>
        <SimpleGrid cols={3} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
          {cards}
        </SimpleGrid>
      </LazyShow>
    </Container>
  );
}
