import { Container, SimpleGrid } from '@mantine/core';
import { topProductsData } from '../data/topProductsData';
import { ProductCard } from './Card';


export function TopProducts() {
  const items = topProductsData.map((item) => <ProductCard {...item} key={item.title} />);

  return (
    <Container mt={30} mb={30} size="lg">
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} spacing={50}>
        {items}
      </SimpleGrid>
    </Container>
  );
}