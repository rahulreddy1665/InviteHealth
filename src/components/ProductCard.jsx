import {
  createStyles,
  Card,
  Image,
  ActionIcon,
  Group,
  Text,
  Avatar,
  Badge,
  rem,
  Button,
  getStylesRef,
} from "@mantine/core";
import { IconHeart, IconBookmark, IconShare } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      boxShadow: theme.shadows.md,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  footer: {
    padding: `${theme.spacing.xs} ${theme.spacing.lg}`,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
  image: {
    ref: getStylesRef('image'),
    cursor:'pointer',
    transition: 'transform 500ms ease',
  },
}));

export function ProductsCard() {
  const { classes, theme } = useStyles();

  return productData.map((item) => {
    <Card withBorder padding="lg" radius="md" className={classes.card}>
      <Card.Section mb="sm">
        <Image src={item.image} alt={item.title} fit='contain'  className={classes.image}  height={300}  />
      </Card.Section>
      <Text fw={700} className={classes.title} mt="xs">
        {item.title}
      </Text>


      <Card.Section className={classes.footer}>
      <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Learn more</Button>
      </Card.Section>
    </Card>;
  });
}
