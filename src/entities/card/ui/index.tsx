import { FC, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import styles from './styles.module.scss'

import { ICard, IColor, IImage } from '../model'

import Button from '@/ui/button'

interface CardProps extends ICard {}

const Card: FC<CardProps> = ({ id, name, price, description, colors, images }) => {
    const [color, setColor] = useState<IColor>(colors[0])
    const [image, setImage] = useState<IImage>(images.find((image) => image.colorId === color.id) || images[0])

    return (
        <div className={styles.card}>
            <Image className={styles.image} src={`/images/${image.src}`} alt={image.alt} width="258" height="258" />
            <p className={styles.price}>${price}</p>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.description}>{description}</p>
            <p className={styles.hint}>Choose your color</p>
            <div className={styles.colors}>
                {colors.map((color) => (
                    <div
                        key={color.id}
                        className={`${styles.color} ${color.id === image.colorId ? styles.active : ''}`}
                        style={{ backgroundColor: `#${color.code}` }}
                        onClick={() => {
                            setColor(color)
                            setImage(images.find((image) => image.colorId === color.id) || images[0])
                        }}
                    ></div>
                ))}
            </div>
            <div className={styles.buttons}>
                <Button className={styles.accent}>Add to cart</Button>
                <Button className={styles.default}>Buy now</Button>
            </div>
            <Link className={styles.reviews} href={`/reviews/${id}`}>
                Read reviews
            </Link>
        </div>
    )
}

export default Card
