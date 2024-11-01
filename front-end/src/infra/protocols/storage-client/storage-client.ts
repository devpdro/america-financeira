export interface StorageClient {
  get: <T = any>(key: string) => T
  set: (key: string, value: string, options?: object) => void
  remove: (key: string) => void
}
