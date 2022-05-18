export default interface Document {
  ref: any
  ts: number
  data: {
    slug: string
    hits: number
  }
}
