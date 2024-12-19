import {predictiveSearch} from '/app/lib/search';

export async function loader({request, context}: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const isPredictive = url.searchParams.has('predictive');

  if (!isPredictive) {
    return Response.json({});
  }

  const searchPromise = predictiveSearch({request, context});

  searchPromise.catch((error: Error) => {
    console.error(error);
    return {term: '', result: null, error: error.message};
  });

  return Response.json(await searchPromise);
}
