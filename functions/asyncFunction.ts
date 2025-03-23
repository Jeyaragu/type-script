interface AsyncUser {
  displayName: string;
  email: string;
  pagination: Pagination;
}
interface Pagination {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  totalCount: number;
  page: number;
  limit: number;
}

async function fetchData() : Promise<AsyncUser>{
  try {
    return {
      displayName: "Jeyaragu",
      email: "jeyaragu@gmail.com",
      pagination: {
        hasNextPage: true,
        hasPreviousPage: true,
        totalCount: 1,
        page: 2,
        limit: 10,
      },
    };
  } catch (error) {
    throw error;
  }
}
