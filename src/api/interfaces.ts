export interface IResponse<T> {
  _meta: {
    success: boolean,
    code: number,
    message: string
  }
  result: T
}

export interface IResult {
  _links: {
    self: { href: string },
    edit: { href: string }
  }
}
