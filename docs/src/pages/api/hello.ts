// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';


interface Gomamayo {
  generated: string
}

/**
 * @param {NextApiRequest} req request
 * @param {NextApiRequest<Data>} res response
 * @return {void}
 */
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Gomamayo>,
) {
  const url = 'https://api.thinaticsystem.com/v1/debobigego';
  const response: Gomamayo = await fetch(url).then((response) => response.json());
  res.status(200).json(response);
}
