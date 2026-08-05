import Image from 'next/image';
import css from './Gallery.module.css';


const galleryItems = [
  {
    id: 1,
    imageUrl: '/images/lessons-image.png',
    altText: 'Gallery Image 1',
  },
  {
    id: 2,
    imageUrl: '/images/lessons-image.png',
    altText: 'Gallery Image 2',
  },
  {
    id: 3,
    imageUrl: '/images/lessons-image.png',
    altText: 'Gallery Image 3',
  },
  {
    id: 4,
    imageUrl: '/images/lessons-image.png',
    altText: 'Gallery Image 4',
  },
  {
    id: 5,
    imageUrl: '/images/lessons-image.png',
    altText: 'Gallery Image 3',
  },
  {
    id: 6,
    imageUrl: '/images/lessons-image.png',
    altText: 'Gallery Image 4',
  },
]


export default function Gallery() {
 return(
    <section className={css.gallerySection}>
      <div className="container">
        <h1 className={css.title}>Gallery</h1>
        <p className={css.text}>COMING SOON</p>
        <ul className={css.galleryList}>
          {galleryItems.map((item) => (
            <li key={item.id} className={css.calleryItem}>
              <Image src={item.imageUrl} alt={item.altText} width={350} height={300} className={css.galleryImage} />
            </li>
          ))}
        </ul>
      </div>
    </section>
 )
}
