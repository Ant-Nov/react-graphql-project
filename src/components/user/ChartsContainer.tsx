import type { GetUserQuery } from "@/types/__generated__/graphql"
import UserChart, { type ChartProps } from "./UserChart"

const ChartsContainer = ({ repositories }: { repositories: NonNullable<GetUserQuery["user"]>["repositories"] }) => {
  const languagesData = getLanguagesChartData(repositories);
  const popularData = getRepoChartData(repositories, 'stargazerCount', '#de462f', 'Top 5 Popular Repos');
  const forkedData = getRepoChartData(repositories, 'forkCount', '#e3d924', 'Top 5 Forked Repos');

  return (
    <div className="grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 grid">
      <UserChart {...languagesData} />
      <UserChart {...popularData} />
      <UserChart {...forkedData} />
    </div>
  )
}
export default ChartsContainer

const getLanguagesChartData = (data: NonNullable<GetUserQuery["user"]>["repositories"]): ChartProps => {
  if (!data.nodes) return { chartData: [], chartConfig: {}, title: '' };

  const languageCounts = data.nodes
    .flatMap(item => item?.languages?.edges)
    .reduce<Record<string, number>>((acc, edge) => {
      const name = edge?.node?.name;
      if (name) acc[name] = (acc[name] || 0) + 1;

      return acc;
    }, {});

  const chartData = Object.entries(languageCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  return {
    chartData,
    chartConfig: { name: { color: '#2563eb' } },
    title: 'Top 5 Used Languages',
  };
}

const getRepoChartData = (
  data: NonNullable<GetUserQuery["user"]>["repositories"],
  key: 'stargazerCount' | 'forkCount',
  color: string,
  title: string,
): ChartProps => {
  if (!data.nodes) return { chartData: [], chartConfig: {}, title: '' };

  const chartData = [...data.nodes]
    .sort((a, b) => (b?.[key] ?? 0) - (a?.[key] ?? 0))
    .slice(0, 5)
    .map(repo => ({ name: repo?.name || '', count: repo?.[key] || 0 }));

  return {
    chartData,
    chartConfig: { name: { color } },
    title,
  };
}