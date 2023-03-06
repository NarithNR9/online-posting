export interface IApiOption {
  methods: 'GET'  | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  body: any,
  headers: any
}