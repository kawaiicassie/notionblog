import { useQuery } from "@tanstack/react-query"
import { queryKey } from "src/constants/queryKey"
import { TPost } from "src/types"

const usePostsQuery = () => {
  const { data } = useQuery({
    queryKey: queryKey.posts(),
    initialData: [] as TPost[],
    enabled: false,
  })

  if (!data) throw new Error("Không tìm thấy dữ liệu bài viết!")

  return data
}

export default usePostsQuery
