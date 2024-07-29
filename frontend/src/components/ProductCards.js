import React from 'react';
import ProductCard from './ProductCard';  // Assuming ProductCard is in a separate file

const ProductCards = ({ data }) => {

  if(data){
  return (
    <div className='w-full flex overflow-x-auto hideScrollBar space-around'>
      {data.map((product) => (
        <div className='flex-shrink-0 w-[300px]' key={product.id}>
          <ProductCard 
            id={product.id} 
            title={product.attributes.title} 
            industry={product.attributes.industry} 
            services={product.attributes.services} 
            competences={product.attributes.competences} 
            imageUrl={product.attributes.productImage.data.attributes.url}
          />
        </div>
      ))}
    </div>
  );
  } else {
    return null;
  }
};

export default ProductCards;