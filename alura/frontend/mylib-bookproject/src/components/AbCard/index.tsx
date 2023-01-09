import React, { FC } from 'react';
import { Author, CardContainer, Description, Price, PriceDescription, Subject, Title } from './styles';

interface Props {
  subject: string
  description: string
  author: string
  price: number
}

export const AbCard: FC<Props> = ({
  subject,
  description,
  author,
  price
}: Props) => {
  return (
    <CardContainer>
      <Title>
        Sobre o livro:
      </Title>
      <Subject>
        {subject}
      </Subject>
      <Description>
        {description}
      </Description>
      <Author>
        Por: {author}
      </Author>
      <PriceDescription>
        A partir de:
      </PriceDescription>
      <Price>
        R$ {price.toFixed(2).replace('.', ',')}
      </Price>
    </CardContainer>
  )
}