import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const dummy_products=[
    {id:1,
    price:6,
  title:'my first book',
description:'first book i ever wrote'},
{
  id:2,
  price:8,
  title:'my second book',
  description:'second book i ever wrote'
}
  ]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummy_products.map((product)=>(
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />))}
        
      </ul>
    </section>
  );
};

export default Products;
