import { executeGraphQuery } from '../../../utils/serverUtils'
export default async function userPublicKeyHandler({ query: { address } }, res) {
  const queryString = `{
        account (id: "${address}") {
          accountAddress
          keyCID
        }
      }`;
  const userKeyRes = await executeGraphQuery(queryString);
  const userKeyCID = await userKeyRes.json()

  // User with id exists
  if (userKeyCID) {
    res.status(200).json(userKeyCID)
  } else {
    res.status(404).json({ message: `Profile for address: ${address} not found.` })
  }
}
