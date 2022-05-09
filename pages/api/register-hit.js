const faunadb = require('faunadb')

module.exports = async (req, res) => {
  const q = faunadb.query
  console.log(process.env.FAUNA_SECRET_KEY)
  const client = new faunadb.Client({
    secret: process.env.FAUNA_SECRET_KEY,
    domain: 'db.eu.fauna.com'
  })
  const { slug } = req.query
  console.log(slug)
  if (!slug) {
    return res.status(400).json({
      message: 'Article slug not provided'
    })
  }
  // Check and see if the doc exists.
  const doesDocExist = await client.query(
    q.Exists(q.Match(q.Index('hits_by_slug'), slug))
  )
  if (!doesDocExist) {
    await client.query(
      q.Create(q.Collection('hits'), {
        data: { slug: slug, hits: 0 }
      })
    )
  }
  // Fetch the document for-real
  const document = await client.query(
    q.Get(q.Match(q.Index('hits_by_slug'), slug))
  )
  await client.query(
    q.Update(document.ref, {
      data: {
        hits: document.data.hits + 1
      }
    })
  )
  return res.status(200).json({
    hits: document.data.hits
  })
}
