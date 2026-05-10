import { Button } from "../ui/button";
import { Card, CardDescription, CardTitle } from "../ui/card"

const UserCard = ({ avatarUrl, name, bio, url }: { avatarUrl: string; name: string; bio: string; url: string; }) => {
  return (
    <Card className="flex gap-y-5 sm:flex-row gap-x-8 items-center p-5! shadow-sm">
      <img
        src={(avatarUrl || '') as string }
        alt={name || 'user'}
        className="object-cover w-30 h-30 rounded-sm!"
      />

      <div>
        <CardTitle className="font-bold text-lg mb-3">{name}</CardTitle>
        <CardDescription className="mb-3">{bio}</CardDescription>

        <Button asChild size='lg' className="sm:max-w-40 w-full">
          <a href={url} target="_blank" rel="noopener noreferrer">Follow</a>
        </Button>
      </div>
    </Card>
  )
}
export default UserCard