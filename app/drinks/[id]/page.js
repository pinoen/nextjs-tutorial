import Image from 'next/image';
import Link from 'next/link';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const getSingleDrink = async (id) => {
  const response = await fetch(`${url}${id}`)
  if (!response.ok) {
    throw new Error('Failed to fetched a drink...')
  }

  return response.json()
}
const SinglePageDrinks = async ({ params }) => {
  const data = await getSingleDrink(params.id)
  const { drinks } = data

  return (
    <div>
      <Link href={'/drinks'} className='btn btn-primary mt-8 mb-12'>
        back to drinks
      </Link>
      <h1 className='text-4xl mb-8'>{drinks[0].strDrink}</h1>
      <Image src={drinks[0].strDrinkThumb} width={300} height={300} alt='image drink' className='w-48 h-48 rounded' priority />
    </div>
  );
};
export default SinglePageDrinks;