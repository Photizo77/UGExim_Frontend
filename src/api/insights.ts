import { apiClient } from './client'
import type { Article } from './types'

/** GET /api/insights/articles/ — public list of knowledge-hub articles. */
export async function fetchArticles(): Promise<Article[]> {
  const { data } = await apiClient.get<Article[]>('/insights/articles/')
  return data
}
