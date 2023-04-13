import {
    Badge, Card, createStyles, Image, getStylesRef, rem, Text
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    width:250,
    [theme.fn.smallerThan('md')]: {
       margin:'auto'
      },
    [`&:hover .${getStylesRef('image')}`]: {
        transform: 'scale(1.03)',
      },
  },
  image: {
    ref: getStylesRef('image'),
    cursor:'pointer',
    transition: 'transform 500ms ease',
  },
  rating: {
    position: "absolute",
    top: theme.spacing.xs,
    right: rem(12),
    pointerEvents: "none",
  },

  title: {
    display: "block",
    marginTop: theme.spacing.md,
    marginBottom: rem(5),
    textAlign:'center'
  },
}));

export function ProductCard({
  className,
  image,
  link,
  title,
  ...others
}) {
  const { classes, cx } = useStyles();
  const linkProps = { href: link, target: "_blank", rel: "No image" };

  return (
    <Card
      withBorder
      radius="md"
      shadow="xs"
      className={cx(classes.card, className)}
      {...others}
    >
      <Card.Section>
        <a {...linkProps}>
          <Image src={image} fit='contain'  className={classes.image}  height={300}  alt="Random image" />
        </a>
      </Card.Section>

      <Badge
        className={classes.rating}
        variant="gradient"
        gradient={{ from: 'indigo', to: 'cyan'}}
      >
        Popular
      </Badge>

      <Text className={classes.title} fw={500} component="a" {...linkProps}>
        {title}
      </Text>
    </Card>
  );
}
