export interface IApiOption {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  body: any
  headers: any
}
