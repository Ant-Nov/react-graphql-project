import { GET_USER } from "@/queries";
import { useQuery } from "@apollo/client/react";
import UserCard from "./UserCard";
import UserStats from "./UserStats";
import ChartsContainer from "./ChartsContainer";
import LoadingSkeleton from "./LoadingSkeleton";

const UserContainer = ({ username }: { username: string; }) => {
  const { data, error, loading } = useQuery(GET_USER, {
    variables: { login: username },
  });

  if (loading) return <LoadingSkeleton />
  if (error) return <h2>An error occurred: {error.message}</h2>
  if (!data?.user) return <h2>User not found.</h2>

  const { name, avatarUrl, gists, repositories, followers, url, following, bio } = data.user;

  return (
    <div className="mt-8">
      <div className="md:max-w-[50%] mb-8">
        <UserCard
          avatarUrl={avatarUrl as string || ''}
          name={name || ''}
          bio={bio || ''}
          url={url as string || ''}
        />
      </div>

    <div className="mb-8">
      <UserStats
        repoCount={repositories.totalCount}
        followersCount={followers.totalCount}
        followingCount={following.totalCount}
        gistsCount={gists.totalCount}
      />
    </div>
      
      <ChartsContainer repositories={repositories} />
    </div>
  )
}
export default UserContainer