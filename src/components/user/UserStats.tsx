import { Card, CardDescription, CardTitle } from "../ui/card";

interface StatsProps {
  repoCount: number;
  gistsCount: number;
  followersCount: number;
  followingCount: number;
}

const UserStats = ({ repoCount, gistsCount, followersCount, followingCount }: StatsProps) => {
  const stats = [
    {
      id: 1,
      title: 'Total Repositories',
      value: repoCount,
    },
    {
      id: 2,
      title: 'Followers',
      value: followersCount,
    },
    {
      id: 3,
      title: 'Following',
      value: followingCount,
    },
    {
      id: 4,
      title: 'Gists',
      value: gistsCount,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
      {
        stats.map(stat => (
          <Card key={stat.id} className="flex flex-row items-center justify-between p-5!">
            <CardTitle>{stat.title}</CardTitle>
            <CardDescription>{stat.value}</CardDescription>
          </Card>
        ))
      }
    </div>
  )
}
export default UserStats