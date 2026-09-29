import apiClient from "./api-client";

export interface Entity {
  id: number;
}

export default class HttpService<T extends Entity> {
  constructor(private endpoint: string) {}

  getAll() {
    const controller = new AbortController();
    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }

  delete(id: number) {
    return apiClient.delete(`${this.endpoint}/${id}`);
  }

  create(entity: T) {
    return apiClient.post(this.endpoint, entity);
  }

  update(entity: T) {
    return apiClient.patch(`${this.endpoint}/${entity.id}`, entity);
  }
}
