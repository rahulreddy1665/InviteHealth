import {
  createStyles,
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  AspectRatio,
} from "@mantine/core";
import { machineriesData } from "../data/machineries";
import LazyShow from "./LazyShow";

const useStyles = createStyles((theme) => ({
  card: {
    transition: "transform 150ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

export function ArticlesCardsGrid() {
  const { classes } = useStyles();

  const cards = machineriesData.map((article) => (
    <LazyShow>
      <Card
        key={article.title}
        p="md"
        radius="md"
        component="a"
        href="#"
        className={classes.card}
      >
        <AspectRatio ratio={16 / 9}>
          <Image src={article.image} />
        </AspectRatio>
        <Text className={classes.title} mt={5}>
          {article.title}
        </Text>
      </Card>
    </LazyShow>
  ));

  return (
    <Container py="xl">
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}
