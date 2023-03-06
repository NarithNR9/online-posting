export interface IApiOption {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  data: any
  headers: any
}
