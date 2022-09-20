import { executeGraphQuery } from '../../../utils/serverUtils'

export default async function userMailDetailsHandler({ query: { address } }, res) {
  const queryString = `{
        account (id: "${address}") {
          accountAddress
          keyCID
          credits
          mailsSent {
            id
            dataCID
            from {
              accountAddress
            }
            to {
              accountAddress
            }
            blockTime
            credits
            creditStatus
          }
          inbox {
            id
            dataCID
            from {
              accountAddress
            }
            to {
              accountAddress
            }
            blockTime
            credits
            creditStatus
            receiverLabel
          }
        }
      }`;
  const userDataRes = await executeGraphQuery(queryString);
  const userData = await userDataRes.json();

  // User with id exists
  if (userData) {
    res.status(200).json(userData)
  } else {
    res.status(404).json({ message: `Profile for address: ${address} not found.` })
  }
}
