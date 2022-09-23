import { Episode, useGetHeroByEpisodeQuery } from "./__generated__/types";

export const Hero = () => {
  const [result, reexecuteQuery] = useGetHeroByEpisodeQuery({
    variables: { episode: Episode.Empire },
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  const hero = data?.getHeroByEpisode;

  return (
    <ul>
      <li>Id: {hero?.id}</li>
      <li>Name: {hero?.name}</li>
      {hero &&
        hero?.appearsIn.map((episode) => (
          <ul>
            <li>Episode : {episode}</li>
          </ul>
        ))}

      {hero &&
        hero?.friends.map((friend) => (
          <ul>
            <li>Id: {friend?.id}</li>
            <li>Name: {friend?.name}</li>
          </ul>
        ))}
    </ul>
  );
};
