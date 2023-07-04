import { Link } from 'react-router-dom';
import { ContainerWrap } from '../ContainerWrap';
import './Category.scss';
import React from 'react';

const categoryWine = [
  {id: 1,name: "Wine", src: 'wine.jpg', url: 'wine'},
  {id: 2,name: "Champange", src: 'champage.jpg', url: 'champage'},
  {id: 3,name: "Sparkling wine", src: 'sprakling.jpg', url: 'sprakling'}
]

export const Category = () => {
  return (
    <ContainerWrap>
    <section className='category'>
      <h2 className='category__title'>
        Shop category
      </h2>
      <div className="category__wrap">
        {categoryWine.map(category => {
          return(
            <Link
              to={`/${category.url}`}
              style={{ textDecoration: 'none' }}
            >
              <div key={category.id} className='category-card'>
                <img
                  src={`img/category/${category.src}`}
                  alt={category.name}
                  className='category-card__img'
                />
                <h3 className='category-card__title'>{category.name}</h3>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
    </ContainerWrap>
  );
};
